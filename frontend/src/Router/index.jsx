import React, {Suspense} from "react";
import Loader from "../Components/Singleton/Loader";

const Login = React.lazy(() => import("../Pages/Auth/Login"));
const Register = React.lazy(() => import("../Pages/Auth/Register"));
const NotFound = React.lazy(() => import ("../Pages/NotFound"));
const Home = React.lazy(() => import("../Pages/Public/Home"));

export const publicRoute = [
    {
        path: "/",
        component: <Suspense fallback={<Loader />}><Home /></Suspense>,
    },
    {
        path: "/register",
        component: <Suspense fallback={<Loader />}><Register /></Suspense>,
    },
    {
        path: "/login",
        component: <Suspense fallback={<Loader />}><Login /></Suspense>,
    },
    {
        path: "*",
        component: <Suspense fallback={<Loader />}><NotFound /></Suspense>,
    }
];