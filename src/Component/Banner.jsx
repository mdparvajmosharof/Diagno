import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Pagination, Scrollbar, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Loading from "../Subpage/Loading";
import { RiCoupon3Fill } from "react-icons/ri";
import { CiDiscount1 } from "react-icons/ci";

const Banner = () => {
  const [banner, setBanner] = useState();
  const [loading, setLoading] = useState(true);

  const axiosPublic = useAxiosPublic();
  useEffect(()=>{
    axiosPublic.get("banner")
    .then((res)=>{
      setBanner(res.data)
      setLoading(false)
    })
  },[])

  // console.log(banner)

  const activeBanners = banner?.filter(banner => banner.isActive);
  // console.log(activeBanners)

  if(loading){
    return <Loading></Loading>
  }

  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Scrollbar, Navigation]}
        className="mySwiper border border-cyan-500 rounded-2xl my-10"
      >
        {
          activeBanners.map(banner=>
            <SwiperSlide key={banner._id} className="">
          <div className="card bg-base-100 shadow-xl h-[500px] image-full">
            <figure>
              <img
                src={banner.image}
                alt="Shoes"
                className="w-full"
              />
            </figure>
            <div className="card-body flex justify-center items-center  md:mx-20 ">
              <div className="flex justify-center flex-col items-center gap-16">
                <h2 className="card-title text-center text-5xl font-bold md:font-extrabold text-white ">
                {banner.title}
                </h2>
                <p className="text-white font-semibold text-2xl text-center">{banner.text}</p>
                
              </div>
              <div className="md:flex items-center text-2xl w-full md:justify-around mt-10">
                <div className="flex justify-center items-center gap-2">
                 <span>Coupon :</span> <RiCoupon3Fill />
                  {banner.coupon_code}
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span>Discount :</span>
                  <CiDiscount1 />
                  {banner.discount_rate}
                </div>
              </div>
              <Link to={"/alltests"}><button className="btn mt-5 px-10 btn-primary">All Tests</button></Link>
            </div>
          </div>
        </SwiperSlide>
          )
        }
        
       
      </Swiper>
    </>
  );
};

export default Banner;
