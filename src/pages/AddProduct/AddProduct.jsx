import swal from 'sweetalert';

const AddProduct = () => {

    const handleAdd = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const item = { photo, name, brand, type, price, rating, description };
        console.log(item);

        fetch('https://assignment10-server-side-hgfxsjokh-shahidul-islams-projects.vercel.app/products', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                swal("Done!", "Product added successful!", "success");
                form.reset();
            })

    }

    return (
        <div className='pb-5'>
            <div className="w-11/12 mx-auto bg-[#F3F3F3] my-10 py-10 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-6">Add Your Products</h2>
                <form onSubmit={handleAdd}>
                    <div className="w-4/5 mx-auto">
                        <div className="flex flex-col md:flex-row gap-7">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Image</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Image URL" name="photo" className="input w-full input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Name</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Product Name" name="name" className="input w-full input-bordered" />
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-7">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Brand Name</span>
                                </label>
                                <label className="">
                                    <select className='input w-full font-semibold' name='brand'>
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
                                    <input type="text" placeholder="Types of products" name="type" className="input w-full input-bordered" />
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-7">
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Price</span>
                                </label>
                                <label className="">
                                    <input type="text" placeholder="Price" name="price" className="input w-full input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-full md:w-1/2">
                                <label className="label">
                                    <span className="label-text text-xl font-medium">Rating</span>
                                </label>
                                <label className="">
                                    <select className='input w-full font-medium' name='rating'>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
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

                        <input type="submit" value="Add" className="btn bg-[#FF3811] w-full mt-8 text-white text-xl capitalize" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;