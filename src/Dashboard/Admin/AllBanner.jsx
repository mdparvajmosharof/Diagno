import React from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic'
import { useAxiosSecure } from '../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query'

const AllBanner = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { data: banners = [], isPending, refetch } = useQuery({
        queryKey: ['banners'],
        queryFn: async () => {
            const res = await axiosPublic.get("banner");
            return res.data;
        }
    })

    const handleActive = (id)=>{
        axiosSecure.patch(`banner/active/${id}`)
        .then(res=>{
            // console.log(res.data)
            if(res.data.modifiedCount){
                refetch();
                Swal.fire({
                    icon: "success",
                    title: "Report Delevered",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto ml-3">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-xl'>
                            <th>#</th>
                            <th>image</th>
                            <th>Banner title</th>
                            <th>Coupon Code</th>
                            <th>isActive</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            banners.map((banner, idx) =>
                                <>
                                    <tr key={banner._id} className="hover text-lg">
                                        <th>{idx + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={banner.image}
                                                            alt="img" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>

                                        <td>
                                            <div>{banner.title}</div>
                                        </td>
                                        <td>{banner.coupon_code}</td>
                                        <td>
                                            { banner.isActive ? <button className='btn btn-primary btn-outline'>True</button>
                                            : <button onClick={()=>{handleActive(banner._id)}} className='btn btn-primary btn-outline'>False</button>
                                        }
                                        </td>
                                    </tr>
                                </>
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllBanner
