
import React, { useEffect, useState } from 'react';
import Loading from '../Subpage/Loading';
import TestCard from '../Subpage/TestCard';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home/alltests.css'

import { Pagination } from 'swiper/modules';
import { div } from 'framer-motion/client';

const AllTests = () => {
  const axiosPublic = useAxiosPublic();
  const [searchDate, setSearchDate] = useState('');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [name, setName] = useState('');
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    axiosPublic.get("tests")
      .then(res => {
        setTests(res.data);
        setLoading(false);
      });
  }, [axiosPublic]);

  const handleSearch = () => {
    axiosPublic.get(`/testsDate?date=${searchDate}&minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}&name=${name}`)
      .then(res => {
        setTests(res.data);
      });
  };

  // console.log(priceRange, priceRange[0], priceRange[1])

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  }

  const groupedTests = [];
  for (let i = 0; i <= tests.length; i += 9) {
    groupedTests.push(tests.slice(i, i + 9));
  }

  // console.log(groupedTests)




  if (loading) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-12 md:mx-0'>
        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-64 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-64 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-64 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-64 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-64 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="skeleton h-64 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1  mt-6 gap-3  items-center mx-10 md:mx-0">

        <div>
          <label className='label-text' ><span className='font-bold ml-1'>Date :</span>
            <input
              id='date'
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
              className="input input-bordered w-full mt-1"
            />
          </label>
        </div>

        <div>
          <label className='label-text' ><span className='font-bold ml-1'>Min Price :</span>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
              className="input input-bordered w-full mt-1"
            />
          </label>
        </div>

        <div>
          <label className='label-text' ><span className='font-bold ml-1'>Max Price :</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], e.target.value])}
              className="input input-bordered w-full mt-1"
            />
          </label>
        </div>

        <div>
          <label className='label-text' ><span className='font-bold ml-1'>Name :</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full mt-1"
            />
          </label>
        </div>

        <div>
          <button onClick={handleSearch} className="btn btn-primary md:mt-7 w-full btn-outline">Search</button>
        </div>
      </div>

      <div className=''>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          {groupedTests.map((group, index) => (
            <SwiperSlide className='pb-3' key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-12 md:mx-0">
                {group.map((test, index) => <TestCard key={test._id} test={test} index={index}></TestCard>)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div >
  );
};

export default AllTests;
