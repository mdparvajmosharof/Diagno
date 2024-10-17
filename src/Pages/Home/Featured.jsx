import React, { useEffect, useMemo, useState } from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import TestCard from '../../Subpage/TestCard';
import Loading from '../../Subpage/Loading';

const Featured = () => {

    const axiosPublic = useAxiosPublic();
    const [featuredTests, setFeaturedTests] = useState();

    useEffect(() => {
        axiosPublic.get("/featured")
            .then(res => {
                // console.log(res.data)
                setFeaturedTests(res.data)
            })
    }, [axiosPublic]);

    if (!featuredTests) {
        return  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5 mx-12 md:mx-0'>
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
    }

    return (
        <div className='flex justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    featuredTests.map((tests,index) => <TestCard key={tests._id} test={tests.testDetails} index={index}></TestCard>)
                }
            </div>
        </div>
    )
}

export default Featured
