import { useLoaderData, useParams } from "react-router-dom";

const CategoryItems = () => {
    const {name} = useParams();
    // console.log(name);
    const items = useLoaderData();
    // console.log(items);
    const data = items.filter(item=>item.type === name);
    // console.log(data);
    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 py-16">
            {
                data.length !== 0 ? data.map(singleData => <div key={data.name}>
                    <div className="card gap-4 bg-base-300 w-80 rounded-lg shadow-xl">
                        <figure><img src={singleData.image} alt={singleData.name} className="h-60 w-full p-3 rounded-lg" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name : {singleData.name}</h2>
                            <h2 className="card-title">Brand : {singleData.brand}</h2>
                            <h2 className="card-title">Type : {singleData.type}</h2>
                            <p>{singleData.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>) : ""
            }
        </div>
    );
};

export default CategoryItems;