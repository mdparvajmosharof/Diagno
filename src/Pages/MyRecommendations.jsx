import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const MyRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { authInfo } = useContext(AuthContext);
  const {user} = authInfo;

  useEffect(() => {
    fetch(`https://touro-server.vercel.app/myrecommendations/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecommendations(data);

      });
  }, [user?.email]);



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
        fetch(`https://touro-server.vercel.app/recommendation/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your recommendation has been deleted.", "success");
              setRecommendations(recommendations.filter((rec) => rec._id !== id));
            }
          });
      }
    });
  };

  return (
    <div>
        <Navbar></Navbar>
        <div className="w-full flex justify-center my-10 ">
        <h1 className=" font-extrabold mx-auto text-3xl">My Recommendations</h1>
      </div>
      <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Product Name</th>
            <th>Reason</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recommendations.map((recommendation) => (
            <tr key={recommendation._id} className="hover">
              <td>{recommendation.recommendationTitle}</td>
              <td>{recommendation.recommendedProductName}</td>
              <td>{recommendation.recommendationReason}</td>
              <td>
                <img
                  src={recommendation.recommendedProductImage}
                  alt={recommendation.recommenderNamerecommendedProductName}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>
                <button onClick={() => handleDelete(recommendation._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

        <Footer></Footer>

    </div>
  );
};

export default MyRecommendations;
