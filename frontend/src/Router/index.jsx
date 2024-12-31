import React, {Suspense} from "react";
import Loader from "../Components/Singleton/Loader";

// const Login = React.lazy(() => import("../Pages/Auth/Login"));
// const Register = React.lazy(() => import("../Pages/Auth/Register"));
// const NotFound = React.lazy(() => import ("../Pages/NotFound"));
// const Home = React.lazy(() => import("../Pages/Public/Home"));
// const Profile = React.lazy(() => import("../Pages/Public/Profile"));

import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Public/Home";
import Profile from "../Pages/Public/Profile";
import Invitaion from "../Pages/Public/Invitaion";

export const publicRoute = [
    {
        path: "/",
        component: <Suspense fallback={<Loader />}><Home /></Suspense>,
        // component: <Home />,
    },
    {
        path: "/register",
        component: <Suspense fallback={<Loader />}><Register /></Suspense>,
        // component: <Register />,
    },
    {
        path: "/login",
        component: <Suspense fallback={<Loader />}><Login /></Suspense>,
        // component: <Login />,
    },
    {
        path: "/profile",
        component: <Suspense fallback={<Loader />}><Profile /></Suspense>,
        // component: <Profile />,
    },
    {
        path: "invitaion",
        component: <Suspense fallback={<Loader />}><Invitaion /></Suspense>,
        // component: <NotFound />,
    },
    {
        path: "*",
        component: <Suspense fallback={<Loader />}><NotFound /></Suspense>,
        // component: <NotFound />,
    }
];