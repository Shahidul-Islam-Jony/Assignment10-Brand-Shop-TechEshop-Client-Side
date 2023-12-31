import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Footer = () => {
    const {darkMode} = useContext(AuthContext);
    return (
        <div className="mt-16">
            <footer className={`footer p-10 text-neutral-content rounded-md ${darkMode?"bg-[#40304d]":"bg-neutral"}`}>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Top Brand</a>
                    <a className="link link-hover">Best Design</a>
                    <a className="link link-hover">Top Products</a>
                    <a className="link link-hover">Technology and Electronics</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Follow us</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;