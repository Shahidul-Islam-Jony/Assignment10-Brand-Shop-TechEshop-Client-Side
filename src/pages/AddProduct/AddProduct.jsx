
const AddProduct = () => {

    const handleAdd = e =>{
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const item = {photo,name,brand,type,price,rating,description};
        console.log(item);

    }

    return (
        <div className="w-11/12 mx-auto bg-[#F3F3F3] mt-10 py-10 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-6">Add Your Products</h2>
            <form onSubmit={handleAdd}>
                <div className="w-4/5 mx-auto">
                    <div className="flex gap-7">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Image</span>
                            </label>
                            <label className="">
                                <input type="text" placeholder="Image URL" name="photo" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Name</span>
                            </label>
                            <label className="">
                                <input type="text" placeholder="Product Name" name="name" className="input w-full input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-7">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Brand Name</span>
                            </label>
                            <label className="">
                                <input type="text" placeholder="Brand Name" name="brand" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Type</span>
                            </label>
                            <label className="">
                                <input type="text" placeholder="Types of products" name="type" className="input w-full input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-7">
                        <div className="form-control w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Price</span>
                            </label>
                            <label className="">
                                <input type="text" placeholder="Price" name="price" className="input w-full input-bordered" />
                            </label>
                        </div>
                        <div className="form-control  w-1/2">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Rating</span>
                            </label>
                            <label className="">
                                <input type="number" name="rating" min="0" max="5" className="input w-full input-bordered" />
                            </label>
                        </div>
                    </div>

                    <div className="flex gap-7">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-xl font-medium">Short description</span>
                            </label>
                            <label className="">
                                <input type="text" placeholder="Short description of products" name="description" className="input w-full input-bordered" />
                            </label>
                        </div>
                    </div>

                    <input type="submit" value="Add" className="btn bg-[#FF3811] w-full mt-8 text-white capitalize" />
                </div>
            </form>
        </div>
    );
};

export default AddProduct;