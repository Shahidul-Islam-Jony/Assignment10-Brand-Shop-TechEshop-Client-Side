import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useState } from "react";


const MyCart = () => {
    const loadedData = useLoaderData();
    // console.log(loadedData);
    const [items, setItems] = useState(loadedData);
    // console.log(items);

    const handleDelete = id => {
        fetch(`https://assignment10-server-side-hgfxsjokh-shahidul-islams-projects.vercel.app/carts/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    console.log('Hello');
                    const filteredData = items.filter(item => item._id !== id);
                    setItems(filteredData);
                }
            })
    }

    return (
        <div className="py-16">
            {
                items.length !== 0 ? items.map(item => <div key={item._id}>
                    <div className="w-11/12 mx-auto mb-4">
                        <div className="flex flex-col bg-slate-200 py-2 lg:px-2 rounded-lg gap-10 lg:flex-row lg:gap-28">
                            <img className="h-52 w-96 rounded-md" src={item.photo} alt={name} />
                            <div className="">
                                <h2 className="text-5xl font-bold">Brand: {item.brand}</h2>
                                <h3 className="text-3xl font-semibold">Name: {item.name}</h3>
                                <div className="flex items-center">
                                    <div>
                                        <p className="text-2xl font-semibold mr-2">Rating : </p>
                                    </div>
                                    <div className="w-fit">
                                        <Rating
                                            style={{ maxWidth: 150 }}
                                            value={item.rating}
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold">Price: {item.price}</h3>
                                <button onClick={() => handleDelete(item._id)} className="btn btn-success px-14 capitalize text-white font-medium text-xl">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>)
                    :
                    <div className="mt-36 flex justify-center text-3xl font-bold">
                        <h3>You have not added any products yet</h3>
                    </div>
            }
        </div>
    );
};

export default MyCart;