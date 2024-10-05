
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
    return <Loading></Loading>
  }

  return (
    <div>
      <div className="flex justify-center mt-6 gap-2">

        <label className='input input-bordered flex items-center gap-2' >Date :
          <input
            id='date'
            type="date"
            value={searchDate}
            onChange={(e) => setSearchDate(e.target.value)}
            className="grow"
          />
        </label>

        <label className='input input-bordered flex items-center gap-2' >Min Price :
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([e.target.value, priceRange[1]])}
            className="grow"
            />
        </label>

        <label className='input input-bordered flex items-center gap-2' >Max Price :
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0],e.target.value])}
            className="grow"
          />
        </label>

        <label className='input input-bordered flex items-center gap-2' >Name :
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="grow"
          />
        </label>

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
