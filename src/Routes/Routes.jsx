
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Root from "../Layout/Root";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import PrivateRoutes from "./privateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyCart from "../pages/MyCart/MyCart";
import Products from "../pages/Products/Products";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/brand.json')
            },
            {
                path: "/addProduct",
                element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            },
            {
                path: "/myCart",
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>
            },
            {
                path:"/products/:brand",
                element:<PrivateRoutes><Products></Products></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:5000/products/${params.brand}`)
            }

        ]
    },
])

export default router;