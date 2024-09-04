import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import Loading from '../../Subpage/Loading'
import { MdDelete, MdRestore, MdUpdate, MdUpgrade } from 'react-icons/md'
import { IoMdEye } from 'react-icons/io'
import { useAxiosSecure } from '../../Hooks/useAxiosSecure'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'


const AllTest = () => {

  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()

  const { data: tests = [], isPending, refetch } = useQuery({
    queryKey: ['tests'],
    queryFn: async () => {
      const res = await axiosPublic.get("tests");
      return res.data;
    }
  })

  const handleDelete = (userId) =>{
    axiosSecure.delete(`test/${userId}`)
    .then(res=>{
      refetch()
      if(res.data.deletedCount){
        Swal.fire({
          icon: "success",
          title: "Deleted Successfully!",
          showConfirmButton: false,
          timer: 1500,
      });
      }
    })
  }

  if (isPending) {
    return <Loading></Loading>
  }

  // console.log(tests)

  return (
    <div>
      <div className="overflow-x-auto ml-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-xl'>
              <th>#</th>
              <th>Test Name</th>
              <th>Slots</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Update</th>
              <th>Reservation</th>
            </tr>
          </thead>
          <tbody>
            {
              tests.map((test, idx) =>
                <>
                  <tr className="hover text-lg">
                    <th>{idx + 1}</th>
                    <td>{test.title}</td>
                    <td>{test.slots}</td>
                    <td>$ {test.price}</td>
                    <td>
                      <div className='btn btn-primary btn-outline' onClick={()=>handleDelete(test._id)}><MdDelete></MdDelete></div>
                    </td>
                    <td>
                      <Link to={`/dashboard/updatetest/${test._id}`}><div className='btn btn-primary btn-outline'>Update</div></Link>
                    </td>
                    <td >
                      <div className='btn btn-primary btn-outline'>
                        <IoMdEye></IoMdEye>
                      </div>
                    </td>
                  </tr>
                </>
              )
            }


          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllTest

