import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Pagination, Scrollbar, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        modules={[Pagination, Scrollbar, Navigation]}
        className="mySwiper border h-[550px] rounded-xl my-10"
      >
        <SwiperSlide className="">
          <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/YT7mR1V/christopher-gower-m-HRf-Lhg-ABo-unsplash.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body flex justify-center items-center">
              <div className="flex justify-center flex-col items-center gap-16">
                <h2 className="card-title text-5xl font-extrabold text-white ">
                Your Voice Matters
                </h2>
                <p className="text-white font-bold text-2xl">Diagno empowers you to ask, share, and connect. Your queries drive our community forward.</p>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
        <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/MN5gcHK/kari-shea-1-SAnr-Ixw5-OY-unsplash.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body flex justify-center items-center">
              <div className="flex justify-center flex-col items-center gap-16">
                <h2 className="card-title text-5xl font-extrabold text-white ">
                Innovative Solutions
                </h2>
                <p className="font-bold text-2xl text-white">Explore creative answers and unique solutions to the questions that matter most to you.</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
        <div className="card w-full bg-base-100 shadow-xl image-full">
            <figure>
              <img
                src="https://i.ibb.co/Dtjd0s5/unsplash-Nu-FUbft-Uu-s-unsplash.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body flex justify-center items-center">
              <div className="flex justify-center flex-col items-center gap-16">
                <h2 className="card-title text-5xl font-extrabold text-white ">
                Always Learning
                </h2>
                <p className="text-white text-2xl font-bold">
                Diagno is a place for continuous learning and growth, driven by the curiosity and expertise of our community.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Banner;
