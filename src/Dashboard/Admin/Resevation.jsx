import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useParams } from 'react-router-dom'

const Resevation = () => {

    const [searchData,setSearchData] = useState()
    const axiosPublic = useAxiosPublic()
    const {id} = useParams();

    const {data:reseravtions=[], refetch, isPending} = useQuery({
        queryKey: ['reseravtions'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/booked/${id}`)
            return res.data
        }
    })

    const handleSearch = () =>{
        console.log(searchData)
    }

    console.log(reseravtions)

  return (
    <div>
       Resevation{reseravtions.length}
       <div className="flex justify-center mt-6">
        <input 
          type="text" 
          value={searchData} 
          onChange={(e) => setSearchData(e.target.value)} 
          className="input input-bordered rounded-r-none"
        />
        <button onClick={handleSearch} className="btn btn-primary rounded-l-none">Search</button>
      </div>
    </div>
  )
}

export default Resevation
