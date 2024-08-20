import React from 'react'
import { useAxiosSecure } from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { useUser } from './useUser'

export const useBooked = () => {

    const axiosSecure = useAxiosSecure()
    const user = useUser();
    const {data: booked=[], refetch} = useQuery({

        queryKey : ['booked', user?.email],
        queryFn : async()=>{
            const res = await axiosSecure.get(`/booked?email=${user.email}`)
            return res.data
        }
    })

  return [booked, refetch]
}
