import { useQuery } from "@tanstack/react-query";
import { useUser } from "./useUser"
import { useAxiosSecure } from "./useAxiosSecure";


const useAdmin = () => {
    const [user] = useUser();
    const axiosSecure = useAxiosSecure()
    const {data:isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey : [user?.email, 'isAdmin'],
        enabled : !!user?.email && !!localStorage.getItem('access-token'),
        queryFn : async() =>{
            const res = await axiosSecure.get(`/users/admin/${user.email}`)
            return res.data?.admin;
        }
    
    })
   return [isAdmin, isAdminLoading]
}

export default useAdmin
