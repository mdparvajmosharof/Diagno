import React from 'react';
import { FaCalendarDay, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUser } from '../Hooks/useUser';
import Loading from './Loading';

const TestCard = ({ test}) => {
  const { image, date, slots, title, short_description, _id, price } = test;
  const shortArr = short_description.split(" ");
  const shortSlc = shortArr.length >= 10 ? shortArr.slice(0, 10).join(" ") + '...' : short_description;
  const {user, loading} = useUser();

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className="card card-compact max-w-sm rounded-lg shadow-xl hover:shadow-2xl shadow-blue-300 dark:shadow-blue-800 transition-shadow duration-300 border border-indigo-400 dark:border-indigo-700">
      <figure className="overflow-hidden rounded-t-lg">
        <img className='w-full h-48 object-cover hover:scale-105 transition-transform duration-300' src={image} alt={title} />
      </figure>
      <div className="card-body p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
          <div className="bg-indigo-500 text-white text-sm font-medium py-1 px-3 rounded-lg">
            ${price}
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400 mt-3">{shortSlc}</p>

        <div className="flex justify-around font-bold items-center mt-4 text-blue-800 dark:text-indigo-500">
          <div className="flex items-center gap-2">
            <FaPlusCircle />
            <span>Slots: {slots}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarDay />
            <span>{date}</span>
          </div>
        </div>

          <div className="mt-5">
            <Link to={`/testDetails/${_id}`}>
              <button className='w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300'>
                View Details
              </button>
            </Link>
          </div>

      </div>
    </div>
  );
};

export default TestCard;
