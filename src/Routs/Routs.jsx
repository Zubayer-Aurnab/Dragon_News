import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LogIn/Login";
import Register from "../Pages/Register/Register";
import NewsDetails from "../Pages/Home/NewsDetails";
import PrivateRouts from "./PrivateRouts";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch('/news.json')
            },
            {
                path: '/news/:id',
                element: <PrivateRouts><NewsDetails /></PrivateRouts>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
]);
export default router;