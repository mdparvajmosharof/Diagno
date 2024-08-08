import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const RecommendationsForMe = () => {
  const [recommendations, setRecommendations] = useState([]);
  const { authInfo } = useContext(AuthContext);
  const {user} = authInfo;
  const {email} = user;

  useEffect(() => {
    fetch(`https://touro-server.vercel.app/recommendationsforme/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setRecommendations(data);
      });
  }, [email]);

  console.log(recommendations)

  return (
    <div>
        <Navbar></Navbar>
        <div className="flex justify-center items-center my-10"><h1 className=" font-extrabold mx-auto text-3xl">Recommendations For My Queries</h1></div>
      <h2></h2>
      <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th>Recommendation <br></br>Title</th>
            <th>Recommended<br></br> Product Name</th>
            <th>Recommended <br></br>Product Image</th>
            <th>Query  Title</th>
            <th>Recommender Email</th>
            <th>Recommender Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody className="hover">
          {recommendations.map((recommendation) => (
            <tr key={recommendation._id}>
              <td>{recommendation.recommendationTitle}</td>
              <td>{recommendation.recommendedProductName}</td>
              <td>
                <img
                  src={recommendation.recommendedProductImage}
                  alt={recommendation.recommenderName}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>{recommendation.queryTitle}</td>
              <td>{recommendation.recommenderEmail}</td>
              <td>{recommendation.recommenderName}</td>
              <td>{recommendation.datePosted}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

          <Footer></Footer>

    </div>
  );
};

export default RecommendationsForMe;
