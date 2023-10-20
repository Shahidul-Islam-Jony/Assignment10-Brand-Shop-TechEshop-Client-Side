import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Root = () => {
    const { darkMode } = useContext(AuthContext)
    return (
        <div className={`relative ${darkMode ? "dark" : ""}`}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;