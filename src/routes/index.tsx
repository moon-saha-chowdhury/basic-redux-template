import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
    {
    path:"/",
    element:<App/>
    },
   
    {
    path:"/login",
    element:<Login/>
    },
     {
    path:"/home",
    element:<Home/>
    },
     {
    path:"*",
    element:<NotFound/>
    },
])

export default routes;