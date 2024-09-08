import React, { useEffect, useState } from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import TestCard from '../../Subpage/TestCard';
import Loading from '../../Subpage/Loading';

const Featured = () => {

    const axiosPublic = useAxiosPublic();
    const [featuredTests, setFeaturedTests] = useState();

    useEffect(() => {
        axiosPublic.get("/featured")
            .then(res => {
                console.log(res.data)
                setFeaturedTests(res.data)
            })
    }, [axiosPublic]);

    if (!featuredTests) {
        return <Loading></Loading>
    }

    return (
        <div className='flex justify-center'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    featuredTests.map(tests => <TestCard key={tests._id} test={tests.testDetails}></TestCard>)
                }
            </div>
        </div>
    )
}

export default Featured
