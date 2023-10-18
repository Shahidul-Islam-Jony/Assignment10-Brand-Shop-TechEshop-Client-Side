import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

const Registration = () => {
    const handleRegister = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name,email,photo,password);
    }
    return (
        <div>
            <div className="w-11/12 lg:w-[500px] border-2 border-blue-500 mx-auto my-14 rounded-lg py-10">
                <h3 className="text-5xl mb-6 text-center font-bold">Register Now</h3>
                <form onSubmit={handleRegister}>
                    <div className="form-control  w-4/5 mx-auto">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Name</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Enter your name" name="name" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-4/5 mx-auto">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Email</span>
                        </label>
                        <label className="">
                            <input type="email" placeholder="Enter your email" name="email" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-4/5 mx-auto">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Photo URL</span>
                        </label>
                        <label className="">
                            <input type="text" placeholder="Enter your photo url" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control  w-4/5 mx-auto">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Password</span>
                        </label>
                        <label className="">
                            <input type="password" placeholder="Type your password" name="password" required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="w-4/5 mx-auto mt-6">
                        <input type="submit" value="Register" className="btn bg-[#FF3811] w-full capitalize text-white" />
                    </div>
                </form>
                <div className="w-4/5 mx-auto">
                    <p className="text-lg font-medium text-center my-3">Or, Register with</p>
                    <button className="btn w-full capitalize btn-outline"><span className='text-2xl'><FcGoogle></FcGoogle></span>Google</button>
                </div>
                <div className='mt-7 w-4/5 mx-auto'>
                    <p className='text-xl font-medium'>Already have an account ? Please <Link to="/login" className='ml-4 font-bold text-blue-600 underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Registration;