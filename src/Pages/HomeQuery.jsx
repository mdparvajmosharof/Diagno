import axios from "axios";
import { useEffect, useState } from "react";
import Query from "./Query";


const HomeQuery = () => {
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        axios.get('https://touro-server.vercel.app/queries')
            .then(res => {
                console.log(res.data);
                setQueries(res.data);
                setLoading(false);
            })
    }, [])

    const queriesSlc = queries.slice(-6);
    const recentQueries = queriesSlc.reverse();


    return (
        <div className="dark">

           { loading ? (<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black dark:border-violet-600 mx-auto mt-40"></div>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  my-10">
                {
                    recentQueries.map((query) => (<Query query={query}></Query>))
                }
            </div>)}

        </div>
    )
}

export default HomeQuery
