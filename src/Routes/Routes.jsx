
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Root from "../Layout/Root";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoutes from "./privateRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('brand.json')
            },
            {
                path: "/addProduct",
                element:<PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path:"/login",
                element:<Login></Login>
            },{
                path:"/register",
                element:<Registration></Registration>
            }

        ]
    },
])

export default router;