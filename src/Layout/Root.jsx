import {Outlet} from "react-router-dom"
import Navbar from "../Component/Navbar";

const Root = () => {
    return (
        <div className=" max-w-6xl mx-auto mt-10">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;