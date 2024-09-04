import React from 'react'
import { useForm } from 'react-hook-form'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useAxiosSecure } from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const imgbb_key = import.meta.env.VITE_IMGBB_API;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

const AddTest = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data)
    const imgFile = { image: data.imgFile[0] }
    const res = await axiosPublic.post(img_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      }
    })
    if (res.data.data.display_url) {
      const testsData = {
        title: data.testName,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
        slots: parseInt(data.slots),
        date: data.date,
        short_description: data.short_description
      }
      const testRes = await axiosSecure.post('/tests', testsData);
      console.log(testRes.data)
      if (testRes.data.insertedId) {
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
          <input {...register("testName", { required: true })} type="text" placeholder="Test Name" className="input input-bordered w-full " />

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
                <span className="label-text">Price* : </span>
              </div>
              <input {...register("price", { required: true })} type="text" placeholder="Price" className="input input-bordered w-full " />

            </label>
          </div>

        </div>

        <div className='flex gap-5 w-full'>

          <div className='w-1/2'>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Date* : </span>
              </div>
              <input {...register('date')} className='input input-bordered w-full' type="date" id='date' />
            </label>
          </div>

          <div className='w-1/2'>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Slots* : </span>
              </div>
              <select {...register("slots", { required: true })} defaultValue={"default"} className="select select-bordered w-full">
                <option disabled value={"default"}>Pick one</option>
                <option>8</option>
                <option>10</option>
                <option>12</option>
                <option>15</option>
              </select>
            </label>
          </div>

        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text">Short Description* : </span>
          </div>
          <textarea {...register("short_description", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

        </label>

        <input className='btn btn-primary w-full' type="submit" value="Add Test" />
      </form>
    </div>
  )
}

export default AddTest
