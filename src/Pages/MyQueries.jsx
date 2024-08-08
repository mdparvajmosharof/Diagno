import { Link } from "react-router-dom"
import Navbar from "../Component/Navbar"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../Component/Footer";


const MyQueries = () => {
    const [myQueries, setMyQueries] = useState([]);
    const [deleted, setDelete] = useState(false);

    const { authInfo } = useContext(AuthContext);
  const { user } = authInfo;

  console.log(myQueries)

  useEffect(()=>{
    axios.get( `https://touro-server.vercel.app/queries/${user?.email}`)
    .then(res => {
        console.log(res.data);
        setMyQueries(res.data)
    })
  }, [user, deleted])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        fetch(
          `https://touro-server.vercel.app/delete/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // setMySpots(data);
            if (data.deletedCount > 0) {
              setDelete(!deleted);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });


    // fetch(
    //     `https://touro-server.vercel.app/delete/${id}`,
    //     {
    //       method: "DELETE",
    //     }
    //   )
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       // setMySpots(data);
    //     //   if (data.deletedCount > 0) {
    //     //     setDelete(!deleted);
    //     //     Swal.fire({
    //     //       title: "Deleted!",
    //     //       text: "Your file has been deleted.",
    //     //       icon: "success",
    //     //     });
    //     //   }
    //     });
  };

    return (
        <div>
            <Navbar></Navbar>
            <div className="p-6 py-12 bg-emerald-600 text-gray-50 my-10 rounded-xl ">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">ADD
                            <br className="sm:hidden" /> QUERY
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Share your product inquiries to receive insights and recommendations.</span>
                        </div>
                        <Link to="/addQuery"><button className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600">Add Query</button></Link>
                    </div>
                </div>
            </div>

          
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 ">
            {
              myQueries.map(myQuery => (
                  <>
                  <div className="card shadow-2xl p-5">
                  <p>{myQuery.Product_Brand}</p>
              <h2 className="mb-1 h-14  font-extrabold">{myQuery.Query_Title}</h2>
              <div className="my-4">
                  <Link to={`/queryDetails/${myQuery._id}`}><button className="btn w-full">Query Details</button></Link>
              </div>
                  <div className="flex gap-5 ">
                  <div className="w-full">
                  <Link className="w-full btn" to={`/update/${myQuery._id}`}>
                  <button>Update</button>
                </Link>
                  </div>
                <div className="w-full ">
                <Link className="w-full btn" onClick={() => handleDelete(myQuery._id)}>
                  <button>Delete </button>
                </Link>
                </div>
                  </div>
                  </div>
                  </>
                ))
            }
        </div>

            <Footer></Footer>
            
        </div>
    )
}

export default MyQueries
