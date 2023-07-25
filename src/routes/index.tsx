import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";

const routes = createBrowserRouter([
    {
    path:"/",
    element:<App/>
    },
    {
    path:"/home",
    element:<Home/>
    },
    {
    path:"/login",
    element:<Login/>
    },
])

export default routes;