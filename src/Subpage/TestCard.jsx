import React from 'react';
import { FaCalendarDay, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUser } from '../Hooks/useUser';
import Loading from './Loading';

const TestCard = ({ test }) => {
  const { image, date, slots, title, short_description, _id, price } = test;
  const shortArr = short_description.split(" ");
  const shortSlc = shortArr.length >= 10 ? shortArr.slice(0, 10).join(" ") : short_description;

  const [user,loading ] = useUser();

  if(loading){
    return <Loading></Loading>
  }

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
        {user && <div className="">
          <Link to={`/testDetails/${_id}`}><button className='btn btn-primary w-full mt-3'>Details</button></Link>
        </div>}
      </div>
    </div>
  );
};

export default TestCard;

