import axios from "axios"

const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000' || "https://diagno-server.vercel.app"
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic
