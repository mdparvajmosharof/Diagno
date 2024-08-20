import React from 'react'

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000' || "https://diagno-server.vercel.app"
})

export const useAxiosSecure = () => {
  return axiosSecure;
}
