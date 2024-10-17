import React, { useEffect } from 'react';
import { FaCalendarDay, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useUser } from '../Hooks/useUser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loading from './Loading';
import svg1 from '/svg/svg1.png';
import svg2 from '/svg/svg2.png';
import svg3 from '/svg/svg3.png';
import svg4 from '/svg/svg4.png';
import svg6 from '/svg/svg6.png';
import svg5 from '/svg/svg5.png';

const TestCard = ({ test, index }) => {
  const { image, date, slots, title, short_description, _id, price } = test;
  const shortArr = short_description.split(" ");
  const shortSlc = shortArr.length >= 10 ? shortArr.slice(0, 10).join(" ") + '...' : short_description;
  const { user, loading } = useUser();

  // Array of AOS animations
  const animations = ['fade-down-right','fade-down',"fade-down-left", "flip-right", 'zoom-in', 'flip-left',"fade-up-right", 'fade-up',"fade-up-left"];
  const animation = animations[index % animations.length];

  const svgs = [svg1, svg2, svg3, svg4, svg5, svg6];
  const ranSvgs = () => svgs[Math.floor(Math.random() * svgs.length)];

  if (loading) {
    return <div className="flex w-full flex-col gap-4">
    <div className="skeleton h-32 w-full"></div>
    <div className="skeleton h-4 w-28"></div>
    <div className="skeleton h-4 w-full"></div>
    <div className="skeleton h-4 w-full"></div>
  </div>
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos={animation} data-aos-duration="1500" className="card card-compact max-w-sm rounded-lg shadow-lg hover:shadow-2xl dark:shadow-blue-950 transition-shadow duration-300 border border-indigo-200 dark:border-indigo-700">
      <figure className="overflow-hidden rounded-t-lg">
        <img className='w-full h-72 bg-blue-700 bg-opacity-20 object-cover hover:scale-105 transition-transform duration-300' src={ranSvgs()} alt={title} />
      </figure>
      <div className="card-body p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <div className="bg-indigo-700 text-blue-100 text-sm font-medium py-1 px-3 rounded-lg">
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
            <button className='w-full py-2 px-4 btn btn-primary btn-outline  font-semibold rounded-lg transition-colors duration-700'>
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestCard;
