// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { FaCalendarDay, FaPlusCircle } from 'react-icons/fa';
// import { useParams } from 'react-router-dom'

// const TestDetails = () => {
//     const {id} = useParams();
//     const [test, setTest] = useState({});

//     const { test_name, image, date, slots, title, short_description, _id } = test;

//     useEffect(()=>{
//         axios.get(`http://localhost:5000/test/${id}`)
//         .then(res=>{

//             setTest(res.data);
//         })
//     },[])
    
//     console.log(test)

//   return (
//     <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg card bg-base-100 shadow-2xl my-10">
//         <div className="">
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 pt-6 items-center">
//             <div className="">
//               <img
//                 src={image}
//                 alt=""
//                 className="object-cover w-full mb-4 rounded-lg bg-gray-500 dark:bg-gray-500"
//               />
//             </div>
//             <div className="">
//               <div>
//                 <p>{test_name}</p>
//                 <h2 className="mb-1 h-14 font-extrabold">{title}</h2>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   {short_description}
//                 </p>
//               </div>
//               <div className='flex justify-between mt-6'>
//                     <div className='flex items-center gap-2'>
//                         <span>Slots </span>:
//                         <FaPlusCircle></FaPlusCircle>
//                         <span>{slots} </span>
//                     </div>
//                     <div className='flex items-center gap-2'>
//                         <FaCalendarDay></FaCalendarDay> :
//                         <span>{date} </span> 
//                     </div>
//                 </div>
//                 <button></button>
//             </div>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default TestDetails

//2


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { FaCalendarDay, FaPlusCircle } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
// import StripeCheckout from 'react-stripe-checkout';
// import Swal from 'sweetalert2';

// const TestDetails = () => {
//   const { id } = useParams();
//   const [test, setTest] = useState({});
//   const [promocode, setPromocode] = useState('');

//   useEffect(() => {
//     axios.get(`http://localhost:5000/test/${id}`)
//       .then(res => {
//         setTest(res.data);
//       });
//   }, [id]);

//   const handleToken = (token) => {
//     axios.post(`http://localhost:5000/book/${id}`, {
//       token,
//       promocode
//     })
//       .then(res => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Booking successful!',
//           showConfirmButton: false,
//           timer: 1500
//         });
//       })
//       .catch(error => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Booking failed!',
//           text: error.response.data.message,
//           showConfirmButton: false,
//           timer: 1500
//         });
//       });
//   };

//   return (
//     <div className="flex flex-col p-6 space-y-6 overflow-hidden rounded-lg card bg-base-100 shadow-2xl my-10">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 pt-6 items-center">
//         <div>
//           <img src={test.image} alt="" className="object-cover w-full mb-4 rounded-lg bg-gray-500 dark:bg-gray-500" />
//         </div>
//         <div>
//           <div>
//             <p>{test.test_name}</p>
//             <h2 className="mb-1 h-14 font-extrabold">{test.title}</h2>
//             <p className="text-sm text-gray-600 dark:text-gray-400">{test.short_description}</p>
//           </div>
//           <div className='flex justify-between mt-6'>
//             <div className='flex items-center gap-2'>
//               <span>Slots</span>:
//               <FaPlusCircle />
//               <span>{test.slots}</span>
//             </div>
//             <div className='flex items-center gap-2'>
//               <FaCalendarDay />:
//               <span>{test.date}</span>
//             </div>
//           </div>
//           <input 
//             type="text" 
//             placeholder="Promocode" 
//             value={promocode} 
//             onChange={(e) => setPromocode(e.target.value)} 
//             className="input input-bordered w-full mt-4" 
//           />
//           <StripeCheckout
//             stripeKey="YOUR_STRIPE_PUBLIC_KEY"
//             token={handleToken}
//             amount={test.price * 100}
//             name={test.title}
//             billingAddress
//             shippingAddress
//           >
//             <button className="btn btn-primary mt-4" disabled={test.slots <= 0}>Book Now</button>
//           </StripeCheckout>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestDetails;


// src/pages/TestDetails.jsx
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaCalendarDay, FaPlusCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useUser } from '../Hooks/useUser';
const TestDetails = () => {
  const { id } = useParams();
  const [test, setTest] = useState({});
  const [promocode, setPromocode] = useState('');
  const axiosPublic = useAxiosPublic()
  const user = useUser()
  console.log(user)
 
  useEffect(() => {
    axiosPublic.get(`/test/${id}`)
      .then(res => setTest(res.data));
  }, [id]);

  const handleAdd = () => {
        console.log(user);
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
