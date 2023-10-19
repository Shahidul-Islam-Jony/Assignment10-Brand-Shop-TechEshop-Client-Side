import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import swal from 'sweetalert';

// TechEshop
const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const links = <div className="flex flex-col lg:flex-row gap-4 md:gap-8 md:text-xl font-semibold text-white">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addProduct">Add Product</NavLink>
        <NavLink to="/myCart">My Cart</NavLink>
    </div>

    const handleLogout = () => {
        logout();
        swal("Done!", "Logout successful!", "success");
    }

    return (
        <div className="w-11/12 mx-auto bg-blue-400 rounded-lg">
            <div className="navbar relative z-40 bg-transparent py-0 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-700 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 md:w-24 md:h-20 rounded-full" src="/TechEshop2.png" />
                        <h2 className="text-xl md:text-3xl font-bold text-white gradient">TechEshop</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div>
                        {
                            user ? <div className="flex flex-col md:flex-row items-center md:gap-3">
                                <div className="flex gap-2 py-2">
                                    <p className="text-xl font-bold gradient">{user.displayName}</p>
                                    <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="" />
                                </div>
                                <button onClick={handleLogout} className="btn btn-outline text-white font-bold md:px-6 capitalize">Logout</button>
                            </div> :
                                <Link to="/login" className="btn btn-outline text-white font-bold md:px-8 capitalize">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;