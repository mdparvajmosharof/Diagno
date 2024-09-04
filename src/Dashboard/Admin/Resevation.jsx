import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useParams } from 'react-router-dom'
import { MdDelete } from 'react-icons/md'
import Loading from '../../Subpage/Loading'
import Swal from 'sweetalert2'
import { useAxiosSecure } from '../../Hooks/useAxiosSecure'

const Reservation = () => {
    const [searchData, setSearchData] = useState('')
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();

    const { data: reservations = [], refetch, isPending } = useQuery({
        queryKey: ['reservations'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/booked/${id}`)
            return res.data
        }
    })

    const handleSearch = (e) => {
        e.preventDefault();
        const searchData = e.target.searchData.value.trim();
        setSearchData(searchData)
        refetch() // This will refetch the data
    }

    const filteredReservations = searchData
        ? reservations.filter(r => r.email.toLowerCase().includes(searchData.toLowerCase()))
        : reservations;

    const handleDelete = (rId) => {
        axiosSecure.delete(`booked/${rId}`)
            .then(res => {
                if (res.data.deletedCount) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: "Deleted Successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    }

    const handleReport = (r) =>{
        axiosSecure.patch(`booked/${r._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: "success",
                    title: "Report Delevered",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
    }


    if (isPending) {
        return <Loading></Loading>
    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <div className="flex justify-center mt-6 mb-10">
                    <input
                        type="text"
                        name='searchData'
                        placeholder="Search by email"
                        className="input input-bordered rounded-r-none"
                    />
                    <button className="btn btn-primary rounded-l-none">Search</button>
                </div>
            </form>
            <div className="overflow-x-auto ml-3">
                <table className="table">
                    <thead>
                        <tr className='text-xl'>
                            <th>#</th>
                            <th>Test Name</th>
                            <th>Email</th>
                            <th>Report</th>
                            <th>Cancel</th>
                            <th>Report</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredReservations.map((r, idx) =>
                            <tr key={r._id} className="hover text-lg">
                                <th>{idx + 1}</th>
                                <td>{r.title}</td>
                                <td>{r.email}</td>
                                <td>{r.report}</td>
                                <td>
                                    <div className='btn btn-primary btn-outline' onClick={() => handleDelete(r._id)}><MdDelete></MdDelete></div>
                                </td>
                                <td>
                                    <button onClick={()=>handleReport(r)} className='btn btn-primary btn-outline'>Report Submit</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Reservation
