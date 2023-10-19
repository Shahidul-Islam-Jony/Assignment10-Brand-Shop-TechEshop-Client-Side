import { useLoaderData } from "react-router-dom";
import swal from 'sweetalert';

const UpdateProducts = () => {
    
    const singleData = useLoaderData();
    // console.log(singleData);

    const {_id,photo,name,brand,type,price,rating} = singleData;

    const handleUpdateProducts = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const item = { photo, name, brand, type, price, rating };
        // console.log(item);

        fetch(`http://localhost:5000/update/${_id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(item),
        })
        .then(res=>res.json())
        .then(data=>{
            swal("Done!", "Update successful!", "success");
            console.log(data);
        })
    }

    return (
        <div>
            <div className="w-11/12 mx-auto bg-[#F3F3F3] mt-10 py-10 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Update Products</h2>
                <form onSubmit={handleUpdateProducts}>
                    <div className="w-4/5 mx-auto">
                        <div className="flex flex-col md:flex-row gap-7">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Image</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Image URL" name="photo" className="input w-full input-bordered" defaultValue={photo} />
                                </label>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Name</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Product Name" name="name" className="input w-full input-bordered" defaultValue={name}/>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-7">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Brand Name</span>
                                </label>
                                <label className="">
                                    <select className='input w-full font-semibold' name='brand' defaultValue={brand}>
                                        <option value="Apple">Apple</option>
                                        <option value="Samsung">Samsung</option>
                                        <option value="Sony">Sony</option>
                                        <option value="Google">Google</option>
                                        <option value="Intel">Intel</option>
                                        <option value="Microsoft">Microsoft</option>
                                    </select>
                                </label>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Type</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Types of products" name="type" className="input w-full input-bordered" defaultValue={type}/>
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-7">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Price</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Price" name="price" className="input w-full input-bordered" defaultValue={price} />
                                </label>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Rating</span>
                                </label>
                                <label className="">
                                    <select className='input w-full font-medium' name='rating' defaultValue={rating}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Submit" className="btn bg-[#FF3811] text-xl w-full mt-8 text-white capitalize" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProducts;