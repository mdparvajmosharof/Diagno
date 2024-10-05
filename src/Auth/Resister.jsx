import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
// import { updateProfile } from "firebase/auth";
// import auth from "../Firebase/firebase.config";
import useAxiosPublic from '../Hooks/useAxiosPublic';

const Resister = () => {

  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    fetch('district.json')
    .then(res => res.json())
    .then(data => setDistricts(data));

    fetch('upazilas.json')
    .then(res => res.json())
    .then(data => setUpazilas(data));
  },[])

  useEffect(()=>{
    if(selectedDistrict){
      const filtered = upazilas.filter(upazila => upazila.district_id == parseInt(selectedDistrict))
      setFilteredUpazilas(filtered);
    }
  },[selectedDistrict, upazilas])

  useEffect(() => {
    document.title = "Diagno | Register";
  }, []);

  const [passwordShow, setPasswordShow] = useState(false);
  // const dataSet = useContext(AuthContext)
  // const [resisterSuccess, setResisterSuccess] = useState("");
  // const [resisterError, setResisterError] = useState("");
  const navigate = useNavigate();

  const { authInfo } = useContext(AuthContext);
  const { createUser, updateUserProfile, user } = authInfo;

  const handleResister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo_url = e.target.photo_url.value;
    const password = e.target.password.value;
    const blood = e.target.blood.value;
    const upazila = e.target.upazila.value;
    const confirm_password = e.target.confirm_password.value;
    const isActive = "Active";

    const district = districts.find(dis => dis.id == parseInt(selectedDistrict));
    const districtName = district ? district.name : '';


    // dataSet({
    //   photo_url: photo_url,
    //   name: name,
    // });
    // console.log("photo_url", photo_url, name);

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Length must be at least 6 characters",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Must have an Uppercase letter in the password",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Must have a Lowercase letter in the password",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    if(password != confirm_password){
      Swal.fire({
        icon: "error",
        title: "Password and Confirm Password is not same.",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // console.log(name, email, photo_url, password, blood, districtName, upazila);
    createUser(email, password)
      .then((res) => {
        // console.log(res)
        updateUserProfile(name, photo_url)
        .then(() => {
          const userInfo = {name, email, photo_url, blood, districtName, upazila, isActive}
          axiosPublic.post("/users", userInfo)
          .then(res=>{
            if(res.data.insertedId){
              Swal.fire({
                icon: "success",
                title: "Register Successful!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            navigate("/");
          })
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Resister Error. Please Cheak your internet connection .",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <div className="w-full card shadow-xl mx-auto  p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Resister Please</h1>
        <form
          onSubmit={handleResister}
          noValidate=""
          action=""
          
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
                  placeholder="name"
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
                  placeholder="photo_url"
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
                  placeholder="email"
                  className="w-full px-4 py-3 rounded-md input input-success"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block dark:text-gray-600">
                  Password
                </label>
                <div className=" relative">
                  <input
                    className=" pl-5 w-full py-2 rounded-md  input input-success"
                    type={passwordShow ? "text" : "password"}
                    name="password"
                    id=""
                    required
                  />
                  <span
                    className=" absolute right-8 top-3 "
                    onClick={() => setPasswordShow(!passwordShow)}
                  >
                    {passwordShow ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
              </div>
            </div>



            <div className="space-y-6 ">
              <div className="space-y-1 text-sm">
                <label htmlFor="blood" className="block dark:text-gray-600">
                  Blood group
                </label>
                <select name="blood" className="select select-success w-full ">
                  <option value="" disabled selected>Enter Your Blood Group</option>
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
                <select name="district" className="select select-success w-full " onChange={e=>setSelectedDistrict(e.target.value)}>
                  <option value="" disabled selected>Enter Your Districts</option>
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
                  <option value="" disabled selected>Enter Your Upazila</option>
                  {
                    filteredUpazilas.map(upazila => (
                      <option key={upazila.id} value={upazila.name}>{upazila.name} </option>
                    ))
                  }
                  
                </select>
              </div>
              
              <div className="space-y-1 text-sm">
                <label htmlFor="confirm_password" className="block dark:text-gray-600">
                 Confirm Password
                </label>
                <div className=" relative">
                  <input
                    className=" pl-5 w-full py-2 rounded-md input input-accent"
                    type={passwordShow ? "text" : "password"}
                    name="confirm_password"
                    id="3"
                    required
                  />
                  <span
                    className=" absolute right-8 top-3 "
                    onClick={() => setPasswordShow(!passwordShow)}
                  >
                    {passwordShow ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button className="block btn btn-accent w-full p-3 text-center rounded-sm mt-6">
            Resister
          </button>
        </form>

        <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Already have an account?
          <Link
            to="/login"
            rel="noopener noreferrer"
            href="#"
            className="text-green-700 font-bold text-xl dark:text-blue-800"
          >
            Log In
          </Link>
        </p>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Resister;
