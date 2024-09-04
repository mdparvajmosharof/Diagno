import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useAxiosSecure } from '../../Hooks/useAxiosSecure'
import { MdDeleteForever } from 'react-icons/md';
import { FaCheck, FaDownload, FaEye } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';
import Swal from 'sweetalert2';
import { FaDownLong } from 'react-icons/fa6';
import { jsPDF } from "jspdf";
import { useBooked } from '../../Hooks/useBooked';

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

    



    const handleDownload = async (user) => {

        try {
            const res = await axiosSecure.get(`/booked?email=${user.email}`);
            const booked = res.data

            const doc = new jsPDF();

            doc.setFont("helvetica", "bold");
            doc.text("User Information", 105, 10, null, null, "center");
            doc.text(`Name: ${user.name}`, 10, 20);
            doc.text(`User Email: ${user.email}`, 10, 30);
            doc.text(`Blood: ${user.blood}`, 10, 40);
            doc.text(`District : ${user.districtName}`, 10, 50);
            doc.text(`Upazila : ${user.upazila}`, 10, 60);
            {
                booked.forEach((item, idx) => {

                    doc.text(`Test Name : ${item.title} ,, Repport : ${item.report}`, 10, 80 + idx * 10);
                })
            }
            doc.save("userinfo.pdf");
        }catch(err){
            console.error("Error generating PDF:", error);
        }

    }

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                refetch()
                if (res.data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: `${user.name} is an admin now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }

            })
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
                        <th><FaEye></FaEye></th>
                        <th>Role</th>
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
                                <td onClick={() => handleDownload(user)}><FaDownload></FaDownload></td>
                                <td>
                                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                                    <button className="btn" onClick={() => document.getElementById(`modal_${user._id}`).showModal()}><FaEye></FaEye></button>
                                    <dialog id={`modal_${user._id}`} className="modal">
                                        <div className="modal-box flex items-center flex-col">
                                            <h3 className="font-bold text-lg">User Information</h3>
                                            <p className="py-4">Name : {user.name}</p>
                                            <p className="py-4">Email : {user.email}</p>
                                            <p className="py-4">District : {user.districtName}</p>
                                            <p className="py-4">Upazila : {user.upazila}</p>
                                            <p className="py-4">Blood : {user.blood}</p>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button className='btn'>close</button>
                                        </form>
                                    </dialog>
                                </td>
                                <td>
                                    {
                                        user?.role === 'admin' ? <button>Admin</button> : <button onClick={()=>handleMakeAdmin(user)}>User</button>
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
