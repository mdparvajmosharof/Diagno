import { createBrowserRouter } from "react-router-dom"
import Root from "../Layout/Root"
import Error from "../Pages/Error";
import PrivateRoutes from "./PrivateRoutes";
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
import Resevation from "../Dashboard/Admin/Resevation";
import AddBanner from "../Dashboard/Admin/AddBanner";
import AllBanner from "../Dashboard/Admin/AllBanner";
import TestResult from "../Dashboard/TestResult";
import StatisticsPage from "../Dashboard/Admin/StatisticsPage";
import HealthAwareness from "../Pages/HealthAwareness";
import InquiryForm from "../Pages/InquiryForm";
import Testimonials from "../Pages/Testimonials";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path: "/allTests",
                element: <AllTests></AllTests>
            },
           
            {
                path:"/testDetails/:id",
                element:<PrivateRoutes><TestDetails></TestDetails></PrivateRoutes>
            },
            {
                path: "/healthaware",
                element: <HealthAwareness></HealthAwareness>
            },
            {
                path: "/inquiryForm",
                element: <InquiryForm></InquiryForm>
            },
            {
                path: "/services",
                element: <Testimonials></Testimonials>
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
        element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/dashboard/myprofile",
                element: <MyProfile></MyProfile>
            },
            {
                path: "/dashboard/upcommingappointment",
                element: <UpApointments></UpApointments>
            },
            {
                path: "/dashboard/testresults",
                element: <TestResult></TestResult>
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
            },
            {
                path: "/dashboard/reservation/:id",
                element:<AdminRoutes><Resevation></Resevation></AdminRoutes>
            },
            {
                path: "/dashboard/addbanner",
                element:<AdminRoutes><AddBanner></AddBanner></AdminRoutes>
            },
            {
                path: "/dashboard/allbanner",
                element:<AdminRoutes><AllBanner></AllBanner></AdminRoutes>
            },
            {
                path: "/dashboard/chart",
                element:<AdminRoutes><StatisticsPage></StatisticsPage></AdminRoutes>
            },
        ]
    }
])

export default router;