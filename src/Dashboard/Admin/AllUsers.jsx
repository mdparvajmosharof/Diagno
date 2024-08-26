import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useAxiosSecure } from '../../Hooks/useAxiosSecure'
import { MdDeleteForever } from 'react-icons/md';
import { FaCheck } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const AllUsers = () => {
    
    const axiosSecure = useAxiosSecure();

    const {data: users=[], refetch} = useQuery({
        queryKey: ["users"],
        queryFn: async() =>{
            const res = await axiosSecure.get("users");
            return res.data;
        }
    })

    const handleActive = () =>{

    }

    const handleBlocked = () => {
        
    }

  return (
    <div className="overflow-x-auto">
    <table className="table">
        {/* head */}
        <thead>
            <tr>
                <th>#</th>
                <th>Test Name</th>
                <th>Appointment Date</th>
                <th>Cancel</th>
            </tr>
        </thead>
        <tbody>

            {
                users.map((user, idx) => <>
                    <tr className="hover">
                        <th>{idx + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td >
                            {
                                user.isActive === "Active" ?
                                <button onClick={() => handleBlocked(user._id)}><ImCross /></button>:
                                <button onClick={()=> handleActive(user._id)}><FaCheck></FaCheck></button>
                            }
                            
                            </td>
                    </tr>
                </>)
            }

        </tbody>
    </table>
</div>
  )
}

export default AllUsers
