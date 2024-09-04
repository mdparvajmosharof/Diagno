import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root"
import Error from "../Pages/Error";
import PrivateRoutes from "./PrivateRoutes";
import Queries from "../Pages/Queries";
import MyQueries from "../Pages/MyQueries";
import QueryDetails from "../Pages/QueryDetails";
import MyRecommendations from "../Pages/MyRecommendations";
import RecommendationsForMe from "../Pages/RecommendationsForMe";
import AllTests from "../Pages/AllTests";
import TestDetails from "../Pages/TestDetails";
import Home from "../Pages/Home/Home";
import Login from "../Auth/Login";
import Resister from "../Auth/Resister";
import Dashboard from "../Layout/Dashboard";
import MyProfile from "../Dashboard/MyProfile/MyProfile";
import UpApointments from "../Dashboard/Upcoming/UpApointments";
import AllUsers from "../Dashboard/Admin/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddTest from "../Dashboard/Admin/AddTest";
import AllTest from "../Dashboard/Admin/AllTest";
import UpdateTest from "../Dashboard/Admin/UpdateTest";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: () => fetch('/estates.json')
            },{
                path: "/queries",
                element: <Queries></Queries>
            },{
                path: "/allTests",
                element: <AllTests></AllTests>
            },
            {
                path: "/myQueries",
                element: <PrivateRoutes><MyQueries></MyQueries></PrivateRoutes>
            },
            {
                path:"/queryDetails/:id",
                element: <QueryDetails></QueryDetails>
            },
            {
                path:"/testDetails/:id",
                element:<TestDetails></TestDetails>
            },
            {
                path: "/myRecommendations",
                element: <PrivateRoutes><MyRecommendations></MyRecommendations></PrivateRoutes>
            },
            {
                path: "/recommendationMe",
                element: <PrivateRoutes><RecommendationsForMe></RecommendationsForMe></PrivateRoutes>
            },
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/resister",
                element:<Resister></Resister>
            }
        ]
    },
    {
        path: "dashboard",
        element:<Dashboard></Dashboard>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
            },
            {
                path: "/dashboard/upcommingappointment",
                element: <PrivateRoutes><UpApointments></UpApointments></PrivateRoutes>
            },
            {
                path: "/dashboard/allusers",
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: "/dashboard/addtest",
                element: <AdminRoutes><AddTest></AddTest></AdminRoutes>
            },
            {
                path: "/dashboard/alltest",
                element: <AdminRoutes><AllTest></AllTest></AdminRoutes>
            },
            {
                path: "/dashboard/updatetest/:id",
                element:<AdminRoutes><UpdateTest></UpdateTest></AdminRoutes>
            }
        ]
    }
])

export default router;