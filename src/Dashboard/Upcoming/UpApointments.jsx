import React from 'react'
import { useBooked } from '../../Hooks/useBooked'
import { MdDeleteForever } from 'react-icons/md';
import { key } from 'localforage';
import { useAxiosSecure } from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpApointments = () => {

    const [booked, refetch] = useBooked();
    const axiosSecure = useAxiosSecure();

    // console.log(booked)

    const handleCancel = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/booked/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()

                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                        }
                    })
            }
        });

    }

    if(booked.length == 0){
        return (
            <div className='flex justify-center mt-10'>
                <div> You didn't book any Test. </div>
               
            </div>
        )
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Test Name</th>
                            <th>Appointment Date</th>
                            <th>Report</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            booked.map((item, idx) => <>
                                <tr key={item._id} className="hover">
                                    <th>{idx + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.date}</td>
                                    <td className='text-blue-800 dark:text-indigo-500'>{item.report}</td>
                                    <td className='btn btn-primary btn-outline' onClick={() => handleCancel(item._id)}><MdDeleteForever /></td>
                                </tr>
                            </>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UpApointments
