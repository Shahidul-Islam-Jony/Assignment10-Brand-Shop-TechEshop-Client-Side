
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
import UpdateProducts from "../pages/UpdateProducts/UpdateProducts";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import LatestProductDetails from "../components/LatestProductDetails/LatestProductDetails";
import CategoryItems from "../components/CategoryItems/CategoryItems";


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
                element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes>,
                loader:()=>fetch('https://assignment10-server-side-hgfxsjokh-shahidul-islams-projects.vercel.app/carts')
            },
            {
                path: "/products/:brand",
                element: <Products></Products>,
                loader: ({ params }) => fetch(`https://assignment10-server-side-hgfxsjokh-shahidul-islams-projects.vercel.app/products/${params.brand}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoutes><UpdateProducts></UpdateProducts></PrivateRoutes>,
                loader:({params})=>fetch(`https://assignment10-server-side-hgfxsjokh-shahidul-islams-projects.vercel.app/update/${params.id}`)
            },
            {
                path: "/details/:id",
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>,
                loader:({params})=>fetch(`https://assignment10-server-side-hgfxsjokh-shahidul-islams-projects.vercel.app/update/${params.id}`)
            },
            {
                path:"/latestProductDetails/:name",
                element:<LatestProductDetails></LatestProductDetails>,
                loader:()=>fetch('/latestProducts.json')
            },
            {
                path:"/category/:name",
                element:<CategoryItems></CategoryItems>,
                loader:()=>fetch("/allCategory.json")
            }

        ]
    },
])

export default router;