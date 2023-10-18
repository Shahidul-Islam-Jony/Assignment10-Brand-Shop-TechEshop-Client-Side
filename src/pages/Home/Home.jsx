import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";


const Home = () => {
    const brands = useLoaderData();
    // console.log(brands);
    return (
        <div className="mx-auto">
            <Banner></Banner>
            <div className="mt-96 lg:mt-[550px]">
                <h1 className="text-6xl text-center font-bold my-16 gradient">Top Brands</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-6">
                    {
                        brands?.map(brand => <div key={brand.name}>
                            <div className="card bg-base-100 shadow-xl h-72">
                                <Link to={`/products/${brand.name}`}>
                                    <figure><img src={brand.image} className="h-48 w-full" alt={brand.name} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-blue-700 font-bold text-2xl">{brand.name}</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;