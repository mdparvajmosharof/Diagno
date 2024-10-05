import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Recommendation = () => {

  const axiosPublic = useAxiosPublic()

  const { data: rec = [] } = useQuery({
    queryKey: ["rec"],
    queryFn: async () => {
      const res = await axiosPublic.get("/recommendation")
      return res.data
    }
  })

  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          rec.map(r => <SwiperSlide key={r.id}>
            <div className='card text-center py-20 space-y-4 mx-10'>
              <div className='font-extrabold text-purple-500'>{r.type}</div>
              <div>
                <div className='text-emerald-400 mb-2'>{r.title}</div>
                <div>{r.description}</div>
              </div>

            </div>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}

export default Recommendation
