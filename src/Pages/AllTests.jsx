
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Subpage/Loading';
import TestCard from '../Subpage/TestCard';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const AllTests = () => {
  const axiosPublic = useAxiosPublic();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchDate, setSearchDate] = useState('');


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
      {
        loading ? (<Loading></Loading>) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            {tests.map(test => <TestCard key={test._id} test={test}></TestCard>)}
          </div>
        )
      }
    </div>
  );
};

export default AllTests;
