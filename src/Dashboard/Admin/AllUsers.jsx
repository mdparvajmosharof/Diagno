import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useAxiosSecure } from '../../Hooks/useAxiosSecure'
import { MdDeleteForever } from 'react-icons/md';
import { FaCheck, FaDownload } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import Swal from 'sweetalert2';
import { FaDownLong } from 'react-icons/fa6';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("users");
            return res.data;
        }
    })

    const handleActive = (userId) => {
        axiosSecure.patch(`/users/active/${userId}`)
            .then(res => {
                console.log(res.data)
                refetch()
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "User Actived",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }

            })
    }

    const handleBlocked = (userId) => {
        axiosSecure.patch(`/users/blocked/${userId}`)
            .then(res => {
                console.log(res.data)
                refetch()
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "User Blocked",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
    }

    const handleDownload = () =>{
            
    }

    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User email</th>
                        <th>isActive</th>
                        <th><FaDownLong></FaDownLong></th>
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
                                            <button onClick={() => handleBlocked(user._id)}><ImCross /></button> :
                                            <button onClick={() => handleActive(user._id)}><FaCheck></FaCheck></button>
                                    }

                                </td>
                                <td onClick={handleDownload}><FaDownload></FaDownload></td>
                            </tr>
                        </>)
                    }

                </tbody>
            </table>
        </div>
    )
}

export default AllUsers
