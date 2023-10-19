import { Link, useLoaderData, useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Footer from "../../components/Footer/Footer";

// mackbook air(m2)

const Products = () => {
    const brand = useParams();
    console.log(brand);

    const data = useLoaderData();

    return (
        <div className="w-11/12 mx-auto">
            <Slider data={data}></Slider>
            <div className="grid grid-cols-2 gap-4 mt-16">
                {
                    data && data.map(singleData => <div key={singleData._id}>

                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src={singleData.photo} className="h-96 w-full" alt={singleData.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-4xl font-bold">Name: {singleData.name}</h2>
                                <h2 className="card-title text-3xl font-bold">Brand: {singleData.brand}</h2>
                                <h2 className="card-title text-3xl font-bold">Type: {singleData.type}</h2>
                                <p className="text-2xl font-semibold">Price : {singleData.price}</p>

                                <div className="flex items-center">
                                    <div>
                                        <p className="text-xl font-medium mr-2">Rating : </p>
                                    </div>
                                    <div className="w-fit">
                                        <Rating
                                            style={{ maxWidth: 150 }}
                                            value={singleData.rating}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-4 justify-between">
                                    <Link className="btn btn-primary w-1/2">Details</Link>
                                    <Link className="btn btn-primary w-1/2">Update</Link>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Products;