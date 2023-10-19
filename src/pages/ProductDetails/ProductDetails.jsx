import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaShoppingCart } from 'react-icons/fa';

const ProductDetails = () => {
    const data = useLoaderData();
    console.log(data);
    const { brand, description, name, photo, price, rating, } = data;
    return (
        <div className="w-11/12 mx-auto my-16">
            <div className="flex  items-center gap-24">
                <img className="h-80 rounded-md" src={photo} alt={name} />
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
                    <button className="btn btn-success capitalize text-white font-bold text-xl gap-5"><FaShoppingCart></FaShoppingCart> Add to cart</button>
                </div>
            </div>
            <div className="mt-5">
                <p className="text-xl text-justify">{description}</p>
                
            </div>
        </div>
    );
};

export default ProductDetails;