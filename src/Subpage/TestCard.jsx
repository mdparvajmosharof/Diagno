// import React from 'react'
// import { FaCalendarDay, FaPlus, FaPlusCircle } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// const TestCard = ({ test }) => {
//     const {  image, date, slots, title, short_description, _id } = test;
//     const shortArr = short_description.split(" ");
//     const shortSlc = shortArr >= 10 ? shortArr.slice(0, 10).join(" ") : short_description;
//     return (
//         <div className="card card-compact w-96 bg-base-100 shadow-xl">
//             <figure><img src={image} alt="image" /></figure>
//             <div className="card-body">
//                 <h2 className="card-title">{title}</h2>
//                 <p> {shortSlc}</p>
//                 <div className='flex justify-between'>
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
//                 <div className="card-actions justify-end">
//                     <Link to={`/testDetails/${_id}`}><button className='btn'>Details</button></Link>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TestCard

import React from 'react';
import { FaCalendarDay, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TestCard = ({ test }) => {
  const { image, date, slots, title, short_description, _id, price } = test;
  const shortArr = short_description.split(" ");
  const shortSlc = shortArr.length >= 10 ? shortArr.slice(0, 10).join(" ") : short_description;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="image" /></figure>
      <div className="card-body">
        <div className='flex justify-between'>
        <h2 className="card-title">{title}</h2>
        <h2>$ {price}</h2>
        </div>
        <p>{shortSlc}</p>
        <div className='flex justify-between'>
          <div className='flex items-center gap-2'>
            <span>Slots</span>:
            <FaPlusCircle />
            <span>{slots}</span>
          </div>
          <div className='flex items-center gap-2'>
            <FaCalendarDay />:
            <span>{date}</span>
          </div>
        </div>
        <div className="">
          <Link to={`/testDetails/${_id}`}><button className='btn btn-primary w-full mt-3'>Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default TestCard;

