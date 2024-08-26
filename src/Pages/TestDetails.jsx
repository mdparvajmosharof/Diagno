import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCalendarDay, FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useUser } from '../Hooks/useUser';
import { useAxiosSecure } from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const TestDetails = () => {
  const { id } = useParams();
  const [promocode, setPromocode] = useState('');
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure();
  const user = useUser()

  const {data: test={}, refetch} = useQuery({
    queryKey: ['test'],
    queryFn: async () =>{
      const res = await axiosPublic.get(`/test/${id}`);
      return res.data;
    }
  })

  

  const handleAdd = () => {
          if(user){
            const bookedtest = {
              email : user?.email,
              testId : test._id,
              image : test.image,
              title : test.title,
              price : promocode?  test.price * 0.8 : test.price,
              date : test.date,
              report: "pending",
            }

            axiosSecure.post("/booked", bookedtest)
            .then(res=>{
              if(res.data.insertedId){
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500
                });
              }

              axiosPublic.patch(`/test/${id}`,  { slots: test.slots - 1 })
              .then((res)=>{
                console.log(res.data)
                refetch()
              })

            })
          }
          
    }

  return (
    <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg card bg-base-100 shadow-2xl my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 pt-6 items-center">
        <div>
          <img src={test.image} alt="" className="object-cover w-full mb-4 rounded-lg bg-gray-500 dark:bg-gray-500" />
        </div>
        <div>
          <div>
            <p>{test.test_name}</p>
            <h2 className="mb-1 h-14 font-extrabold">{test.title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">{test.short_description}</p>
          </div>
          <div className='flex justify-between mt-6'>
            <div className='flex items-center gap-2'>
              <span>Slots</span>:
              <FaPlusCircle />
              <span>{test.slots}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaCalendarDay />:
              <span>{test.date}</span>
            </div>
          </div>
          <input 
            type="text" 
            placeholder="Promocode" 
            value={promocode} 
            onChange={(e) => setPromocode(e.target.value)} 
            className="input input-bordered w-full mt-4" 
          />
          <button onClick={handleAdd} className='btn btn-primary mt-4'>Add</button>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;
