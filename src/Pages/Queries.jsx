import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import axios from "axios";
import Query from "./Query";
import Footer from "../Component/Footer";

const Queries = () => {

    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [grid,setGrid] = useState(true);

    const handle3Grid = () => {
        setGrid(true);
    }

    const handle2Grid = ()=>{
        setGrid(false);
    }

    useEffect(() => {
        axios.get('https://touro-server.vercel.app/queries')
            .then(res => {
                console.log(res.data);
                setQueries(res.data);
                setLoading(false);
            })
    }, [])




    return (
        <div className="dark">
            <Navbar></Navbar>

            <div>
                <details className="dropdown">
                    <summary className="m-1 btn">Change Layout</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={handle3Grid}><a >3 Grid</a></li>
                        <li onClick={handle2Grid}><a >2 Grid</a></li>
                    </ul>
                </details>
            </div>

            {loading ? (<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black dark:border-violet-600 mx-auto mt-40"></div>) : (<div className={`grid grid-cols-1 md:grid-cols-2 ${grid ? "lg:grid-cols-3": "lg:grid-cols-2"} gap-5  my-10`}>
                {
                    queries.map((query) => (<Query query={query}></Query>))
                }
            </div>)}


            <Footer></Footer>

        </div>
    )
}

export default Queries;
