import Register from "../Pages/Auth/Register";
import Home from "../Pages/Public/Home";

export const publicRoute = [
    {
        path: "/",
        component: <Home />,
    },
    {
        path: "/register",
        component: <Register />,
    },
];