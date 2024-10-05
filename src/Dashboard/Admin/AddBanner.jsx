import { useForm } from 'react-hook-form'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useAxiosSecure } from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const imgbb_key = import.meta.env.VITE_IMGBB_API;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

const AddBanner = () => {
    const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imgFile = { image: data.imgFile[0] }
    const res = await axiosPublic.post(img_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      }
    })
    if (res.data.data.display_url) {
      const bannerData = {
        title: data.title,
        coupon_code: data.coupon_code,
        image: res.data.data.display_url,
        discount_rate: parseInt(data.discount_rate),
        isActive: JSON.parse(data.isActive),
        text: data.text
      }
      // console.log(bannerData)
      const bannerRes = await axiosSecure.post('/banner', bannerData);
      // console.log(bannerRes.data)
      if (bannerRes.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.testName} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }

  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-5 md:ml-10'>

        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Test Name* : </span>
          </div>
          <input {...register("title", { required: true })} type="text" placeholder="Banner Title" className="input input-bordered w-full " />

        </label>

        <div className='flex gap-5 w-full'>

          <div className='w-1/2'>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Image* : </span>
              </div>
              <input
                {...register("imgFile", { required: true })}
                type="file"
                className="file-input file-input-bordered file-input-primary w-full " />
            </label>
          </div>

          <div className='w-1/2'>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Coupon Code* : </span>
              </div>
              <input {...register("coupon_code", { required: true })} type="text" placeholder="Coupon code" className="input input-bordered w-full " />

            </label>
          </div>

        </div>

        <div className='flex gap-5 w-full'>

          <div className='w-1/2'>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Discount Rate* : </span>
              </div>
              <input {...register('discount_rate')} className='input input-bordered w-full' type="text" placeholder='Discount Rate' />
            </label>
          </div>

          <div className='w-1/2'>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">isActive* : </span>
              </div>
              <select {...register("isActive", { required: true })} defaultValue={"default"} className="select select-bordered w-full">
                <option disabled value={"default"}>Pick one</option>
                <option>true</option>
                <option>false</option>
              </select>
            </label>
          </div>

        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Text* : </span>
          </div>
          <textarea {...register("text", { required: true })} className="textarea textarea-bordered h-24" placeholder="Test"></textarea>

        </label>

        <input className='btn btn-primary w-full' type="submit" value="Add Banner" />
      </form>
    </div>
  )
}

export default AddBanner
