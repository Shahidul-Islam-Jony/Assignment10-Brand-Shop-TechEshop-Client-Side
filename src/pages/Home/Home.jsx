import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
    return (
        <div className="w-11/12 relative mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default Home;