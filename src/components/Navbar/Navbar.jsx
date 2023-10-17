import { Link, NavLink } from "react-router-dom";

// TechEshop
const Navbar = () => {

    const links = <div className="flex flex-col md:flex-row gap-4 md:gap-8 md:text-xl">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addProduct">Add Product</NavLink>
        <NavLink to="/myCart">My Cart</NavLink>
    </div>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 md:w-20 md:h-20 rounded-full" src="TechEshop.jpg"/>
                        <h2 className="text-xl md:text-3xl font-bold">TechStore</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className="btn btn-primary md:px-8 capitalize">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;