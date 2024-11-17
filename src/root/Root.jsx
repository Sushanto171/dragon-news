import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayouts from "../Mainlayouts/MainLayouts";
import MainContent from "../Mainlayouts/MainContent/MainContent";
import NewsDetails from "../Pages/NewsDetails";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Profile from "../Pages/Profile/Profile";
import Common from "../components/Common/Common";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        children: [
            {
                path: "/",
                element: <Navigate to ="category/01"><MainContent /></Navigate>
            },
            {
                path: "/category/:id",
                loader:({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
                element: <MainContent/>
            },
            {
                path: "/newsdetails/:newsid",
                loader:({params})=> fetch(` https://openapi.programming-hero.com/api/news/${params.newsid}`),
                element: <PrivateRoute > <NewsDetails /></PrivateRoute>
            }
        ]
    },
    {
        path: "/login",
        element: <LogIn />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path : "/common/:page/:btn?",
        element: <Common />
    },
    {
        path: "/profile",
        element: <PrivateRoute > <Profile /></PrivateRoute>
    },
    {
        path: "*",
        element: <h1>Error</h1>
    },

]);
export default router;