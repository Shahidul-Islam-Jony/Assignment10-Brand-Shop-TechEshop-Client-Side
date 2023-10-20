import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const LatestProducts = () => {
    const [products, setProducts] = useState([]);
    const {darkMode} = useContext(AuthContext);

    useEffect(() => {
        fetch("/latestProducts.json")
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setProducts(data);
            })
    }, [])

    // console.log(products);

    return (
        <div className="w-11/12 mx-auto my-16">
            <div>
                <h2 className={`text-5xl text-center font-bold ${darkMode?"text-white":"text-black"}`}>Latest products of top brands</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {
                    products?.map(product => <div key={product.name}>
                        <div className="card bg-gray-200 shadow-xl h-[450px] md:h-[500px]">
                            <figure className="px-10 pt-10">
                                <img src={product.image} alt={product.name} className="rounded-xl h-52" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Name: {product.name}</h2>
                                <h2 className="card-title">Brand: {product.brand}</h2>
                                <p className="text-xl font-medium">Price: {product.price}</p>
                                <div className="card-actions">
                                    <Link to={`/latestProductDetails/${product.name}`} className="btn btn-primary">See details</Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LatestProducts;