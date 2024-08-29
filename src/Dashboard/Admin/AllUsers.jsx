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
    const [email, setEmail] = useState('');
    const [booked, setBooked] = useState([]);

    console.log(email)

    useEffect(()=>{
        axiosSecure.get(`/booked?email=${email}`)
        .then(res=>{
            setBooked(res.data);
        })
    },[email])

    console.log(booked)

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

    const doc = new jsPDF();



    const handleDownload = (user) => {

        setEmail(user.email)
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
                                    <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button>
                                    <dialog id="my_modal_2" className="modal">
                                        <div className="modal-box">
                                            <h3 className="font-bold text-lg">User Information</h3>
                                            <p className="py-4">{user.name}</p>
                                            <p className="py-4">{user.email}</p>
                                            <p className="py-4">{user.districtName}</p>
                                            <p className="py-4">{user.upazila}</p>
                                            <p className="py-4">{user.blood}</p>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>
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
