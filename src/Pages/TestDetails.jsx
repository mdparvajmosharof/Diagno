import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCalendarDay, FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useUser } from '../Hooks/useUser';
import { useAxiosSecure } from '../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Subpage/Loading';
import Payment from '../Dashboard/Payment/Payment';

const TestDetails = () => {
  const { id } = useParams();
  const [promocode, setPromocode] = useState('');
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure();
  const [user] = useUser()

  const { data: test = {}, refetch, isPending } = useQuery({
    queryKey: ['test'],
    queryFn: async () => {
      const res = await axiosPublic.get(`/test/${id}`);
      return res.data;
    }
  })

  const { data: theUser } = useQuery({
    queryKey: ["theUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user.email}`)
      return res.data;
    }
  })

  const [newPrice, setNewPrice] = useState();

  const handleApply = () => {
    if (promocode === 'HEALTH20' || promocode === "health20") {
      const np = test.price * 0.8;
      setNewPrice(np);
    }
    else {
      setNewPrice(test.price)
    }
  }


  const handleAdd = () => {

    if (theUser?.isActive === "blocked") {
      Swal.fire({
        icon: 'error',
        title: 'BLOCKED',
        text: 'You are blocked by admin',
      });
      return;
    }

    if (test.slots <= 0) {
      Swal.fire({
        icon: 'error',
        title: 'No slots available',
        text: 'Please try again later.',
      });
      return;
    }

    document.getElementById('payemnt_modal').showModal();

  }

  if (isPending) {
    return <Loading></Loading>
  }

  return (
    <div key={test._id} className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg card shadow-2xl my-10 border border-indigo-400 dark:border-indigo-700">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 pt-6 items-center">
        <div>
          <img src={test.image} alt="" className="object-cover w-full mb-4 rounded-lg bg-gray-500 dark:bg-gray-500" />
        </div>
        <div>
          <div>
            <p>{test.test_name}</p>
            <div className='flex justify-between'>
              <h2 className="mb-1 h-14 font-extrabold">{test.title}</h2>
              <p className='text-emerald-600'>$ {test.price}</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{test.short_description}</p>
          </div>
          <div className='flex justify-around mt-6'>
            <div className='flex items-center gap-2'>
              <span>Slots</span>:
              <FaPlusCircle />
              <span className='text-blue-800 dark:text-indigo-500'>{test.slots}</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaCalendarDay />:
              <span className='text-blue-800 dark:text-indigo-500'>{test.date}</span>
            </div>
          </div>


          <div className='w-full flex justify-center mt-5'>
            <button onClick={handleAdd} className='btn btn-primary mt-4 w-1/2'>Book Now</button>
          </div>


          <dialog id="payemnt_modal" className="modal">
            <div className="modal-box m-24 ">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              </form>
              <h3 className="font-bold text-xl text-center">PayMent!</h3>

              <div className='text-xs mt-5 text-green-500'>
                use 'HEALTH20' for 20% DISCOUNT
              </div>
              <div className='flex w-full mt-5'>
                <div className='w-full'>
                  <input
                    type="text"
                    placeholder="Promocode"
                    onChange={(e) => setPromocode(e.target.value)}
                    className="input input-bordered rounded-r-none w-full"
                  />
                </div>

                <button onClick={handleApply} className='btn btn-outline rounded-l-none'>Apply</button>
              </div>

              {promocode === 'HEALTH20' || promocode === "health20"
                ? < div className='mt-5 flex justify-between' >
                  <div>Final Price : </div>
                  <div className='text-emerald-600 font-bold'>$ {newPrice}</div>
                </div>
                : newPrice && <div className='text-red-500 mt-1'>Write the promocode correctly!!!</div>
              }

              <div className='mt-5'>
                <Payment price={newPrice ? newPrice : test.price} test={test} refetch={refetch} ></Payment>
              </div>

              <p className="py-4 text-center ">Press ESC key or click on ✕ button to close</p>
            </div>
          </dialog>
        </div>
      </div>
    </div >
  );
};

export default TestDetails;
