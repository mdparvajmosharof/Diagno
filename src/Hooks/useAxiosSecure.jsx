import axios from 'axios';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const axiosSecure = axios.create({
  baseURL: "https://diagno-server.vercel.app"
  // baseURL: 'http://localhost:5000'
})

export const useAxiosSecure = () => {

  const navigate = useNavigate();
  const { authInfo } = useContext(AuthContext);
  const { logOut } = authInfo;

  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    console.log(token)
    config.headers.authorization = `Bearer ${token}`;

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  axiosSecure.interceptors.response.use(function (response) {
    return response;
  },async function (error) {
    const status = error.response.status;
    if(status === 401 || status === 403){
      await logOut()
      navigate('/login')
    }
    return Promise.reject(error);
  });

  return axiosSecure;
}
