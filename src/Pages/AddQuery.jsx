import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Component/Navbar";
import Swal from "sweetalert2";
import Footer from "../Component/Footer";


const AddQuery = () => {

    const { authInfo } = useContext(AuthContext);
    const { user } = authInfo;
    const { photoURL, email, displayName } = user;
    const userName = displayName;

    const Date_Posted = new Date(Date.now()).toLocaleString();


    const handleAddQuery = (e) => {
        e.preventDefault();
        const Product_Name = e.target.PName.value;
        const Product_Brand = e.target.PBrand.value;
        const Product_Image_Url = e.target.PImage.value;
        const Query_Title = e.target.QTittle.value;
        const Boycotting_Reason = e.target.BReason.value;
        const Recommendation_Count = 0;
        const QueriesData = {
            Product_Name,
            Product_Brand, Product_Image_Url, Query_Title, Boycotting_Reason, photoURL, email, userName, Date_Posted, Recommendation_Count
        }

        console.log(QueriesData);

        fetch(
            "https://touro-server.vercel.app/queries",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(QueriesData),
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Tourists spots Added",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            });
    };




    return (
        <div>
            <Navbar></Navbar>

            <div className="flex items-center w-full my-10 gap-6">
                <div className="w-1/2 space-y-6 ">
                    {" "}
                    <div className="flex justify-center items-center"><h1 className=" font-extrabold mx-auto text-3xl">Add Query</h1></div>
                    <p>The "Add Query" functionality allows users to submit a new query to the system, providing details about a specific product, topic, or inquiry they are interested in. This feature enables users to engage with the system by contributing their queries, which can then be processed and analyzed to provide relevant information, recommendations, or insights.</p>
                </div>

                <div className="w-1/2">
                    <form onSubmit={handleAddQuery} action="">
                        <div className=" space-y-6">

                            <label className="input input-bordered flex items-center  gap-2">
                                <span className="font-bold">Product Name : </span>
                                <input
                                    type="text"
                                    className="grow"
                                    name="PName"
                                    placeholder="Product Name"
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Product Brand
                                <input
                                    type="text"
                                    name="PBrand"
                                    className="grow"
                                    placeholder="Product Brand"
                                />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                Product Image Url
                                <input
                                    type="text"
                                    className="grow"
                                    name="PImage"
                                    placeholder="Product Image Url"
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                Query Tittle
                                <input
                                    type="text"
                                    name="QTittle"
                                    className="grow"
                                    placeholder="Query Tittle"
                                />
                            </label>

                            <label className="input input-bordered flex items-center gap-2">
                                <span className="font-bold">Boycotting Reason Details : </span>

                                <input
                                    type="text"
                                    className="grow"
                                    name="BReason"
                                    placeholder="Boycotting Reason Details"
                                />
                            </label>

                            <div>
                                <input
                                    className="btn btn-accent w-full"
                                    type="submit"
                                    value="Add Query"
                                />
                            </div>
                        </div>
                    </form></div>
            </div>

            <Footer></Footer>

        </div>
    )
}

export default AddQuery
