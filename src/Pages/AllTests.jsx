
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Subpage/Loading';
import TestCard from '../Subpage/TestCard';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './Home/alltests.css'

import { Pagination } from 'swiper/modules';

const AllTests = () => {
  const axiosPublic = useAxiosPublic();
  const [searchDate, setSearchDate] = useState('');
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
    axiosPublic.get(`/testsDate?date=${searchDate}`)
      .then(res => {
        setTests(res.data);
      });
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }
  }

  const groupedTests = [];
  for (let i = 0; i <= tests.length ; i += 9) {
    groupedTests.push(tests.slice(i, i + 9));
  }

  console.log(groupedTests)

  groupedTests.map(group=>{
    console.log(group)
  })


  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="flex justify-center mt-6">
        <input
          type="date"
          value={searchDate}
          onChange={(e) => setSearchDate(e.target.value)}
          className="input input-bordered"
        />
        <button onClick={handleSearch} className="btn btn-primary ml-2">Search</button>
      </div>
      <div className='flex justify-center'>
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          {groupedTests.map((group, index) => (
            <SwiperSlide className='pb-3' key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {group.map(test => <TestCard key={test._id} test={test}></TestCard>)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div >
  );
};

export default AllTests;
