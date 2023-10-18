
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Root from "../Layout/Root";


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
                element: <AddProduct></AddProduct>
            },

        ]
    },
])

export default router;