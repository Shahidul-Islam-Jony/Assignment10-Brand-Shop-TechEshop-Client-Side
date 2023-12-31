import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import LatestProducts from "../../components/LatestProducts/LatestProducts";
import FeaturedCategory from "../../components/FeaturedCategory/FeaturedCategory";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Home = () => {
    const brands = useLoaderData();
    const {darkMode} = useContext(AuthContext);
    // console.log(brands);
    return (
        <div className="mx-auto">
            <Banner></Banner>
            <div className="mt-96 lg:mt-[550px]">
                <h1 className="text-6xl text-center font-bold mt-16 mb-9 gradient">Top Brands</h1>
                <div className={`grid grid-cols-1 md:grid-cols-2 p-4 rounded-lg lg:grid-cols-3 w-11/12 mx-auto gap-6 ${darkMode?"dark":"bg-base-300"}`}>
                    {
                        brands?.map(brand => <div key={brand.brand}>
                            <div className="card bg-base-100 shadow-xl h-72">
                                <Link to={`/products/${brand.brand}`}>
                                    <figure><img src={brand.image} className="h-48 w-full rounded-lg" alt={brand.brand} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-blue-700 font-bold text-2xl">{brand.brand}</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <LatestProducts></LatestProducts>
            <FeaturedCategory></FeaturedCategory>
            <Footer></Footer>
        </div>
    );
};

export default Home;