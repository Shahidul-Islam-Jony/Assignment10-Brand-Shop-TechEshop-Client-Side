import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaShoppingCart } from 'react-icons/fa';

const LatestProductDetails = () => {
    const { name } = useParams();
    console.log(name);
    const products = useLoaderData();
    // console.log(products);
    const product = products.find(product => product.name === name);
    console.log(product);
    const { brand, image, price, rating, description } = product;
    return (
        <div>
            <div className="w-11/12 mx-auto my-16">
                <div className=" items-center gap-16 lg:gap-24">
                    <img className="w-full h-[300px] md:h-[500px] lg:h-[900px] rounded-md" src={image} alt={name} />
                    <div className="flex flex-col gap-4">
                        <h2 className="text-5xl font-bold">Brand: {brand}</h2>
                        <h3 className="text-3xl font-semibold">Name: {name}</h3>
                        <div className="flex items-center">
                            <div>
                                <p className="text-2xl font-semibold mr-2">Rating : </p>
                            </div>
                            <div className="w-fit">
                                <Rating
                                    style={{ maxWidth: 150 }}
                                    value={rating}
                                    readOnly
                                />
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold">Price: {price}</h3>
                    </div>
                </div>
                <div className="mt-5">
                    <p className="text-xl text-justify">{description}</p>
                </div>
                <button onClick={''} className="btn btn-success capitalize mt-10 text-white font-bold text-xl gap-5"><FaShoppingCart></FaShoppingCart> Add to cart</button>
            </div>
        </div>
    );
};

export default LatestProductDetails;