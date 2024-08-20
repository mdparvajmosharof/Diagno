import { useContext, useEffect, useState } from 'react'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import Loading from '../../Subpage/Loading';

const MyProfile = () => {

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const { authInfo } = useContext(AuthContext);
  const { user: authUser } = authInfo;
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('district.json')
      .then(res => res.json())
      .then(data => setDistricts(data));

    fetch('upazilas.json')
      .then(res => res.json())
      .then(data => setUpazilas(data));
  }, [])

  useEffect(() => {
    if (selectedDistrict) {
      const filtered = upazilas.filter(upazila => upazila.district_id == parseInt(selectedDistrict))
      setFilteredUpazilas(filtered);
    }
  }, [selectedDistrict, upazilas])

  console.log(authUser?.email)


  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    if (authUser?.email) {
      axiosPublic.get(`/users/${authUser?.email}`)
        .then((res) => {
          setUser(res.data)
          setLoading(false)
        })
    }
  }, [authUser?.email, axiosPublic])

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo_url = e.target.photo_url.value;
    const blood = e.target.blood.value;
    const upazila = e.target.upazila.value;

    const district = districts.find(dis => dis.id == parseInt(selectedDistrict));
    const districtName = district ? district.name : '';

    const userInfo = { name, photo_url, blood, districtName, upazila }
    axiosPublic.patch(`/update/profile/${authUser?.email}`, userInfo)
      .then(res => {
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Register Successful!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
  
  }

  console.log(user)

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <div className='w-full'>
      <div className="w-full shadow-xl mx-auto  p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">MY Profile</h1>
        <form
          noValidate=""
          action=""
          onSubmit={handleUpdateProfile}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="space-y-6 ">
              <div className="space-y-1 text-sm ">
                <label htmlFor="name" className="block dark:text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder={user?.name}
                  className="w-full input input-accent px-4 py-3 rounded-md "
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="photo_url" className="block dark:text-gray-600">
                  Photo Url
                </label>
                <input
                  required
                  type="text"
                  name="photo_url"
                  id="photo_url"
                  placeholder={user?.photo_url}
                  className="w-full px-4 py-3 rounded-md input input-success"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block dark:text-gray-600">
                  Email
                </label>
                <input
                  required
                  type="text"
                  name="email"
                  id="email"
                  placeholder={user?.email}
                  disabled
                  className="w-full px-4 py-3 rounded-md input input-success"
                />
              </div>

            </div>



            <div className="space-y-6 ">
              <div className="space-y-1 text-sm">
                <label htmlFor="blood" className="block dark:text-gray-600">
                  Blood group
                </label>
                <select name="blood" className="select select-success w-full " >
                  <option value="" disabled selected>{user?.blood ? user.blood : "Enter Your Blood Group"}</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>

                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="district" className="block dark:text-gray-600">
                  District
                </label>
                <select name="district" className="select select-success w-full " onChange={e => setSelectedDistrict(e.target.value)}>
                  <option disabled selected>{user?.districtName ? user.districtName : "Enter Your Districts"} </option>
                  {
                    districts.map(district => (
                      <option key={district.id} value={district.id}>{district.name} </option>
                    ))
                  }

                </select>
              </div>

              <div className="space-y-1 text-sm">
                <label htmlFor="upazila" className="block dark:text-gray-600">
                  Upazila
                </label>
                <select name="upazila" className="select select-success w-full " disabled={!selectedDistrict}>
                  <option disabled selected>{user?.upazila ? user.upazila : "Enter Your Upazila"}</option>
                  {
                    filteredUpazilas.map(upazila => (
                      <option key={upazila.id} value={upazila.name}>{upazila.name} </option>
                    ))
                  }

                </select>
              </div>


            </div>
          </div>
          <input type="submit" value="Update Profile" className='block btn btn-accent w-full p-3 text-center rounded-sm mt-6' />

        </form>


      </div>
    </div>
  )
}

export default MyProfile
