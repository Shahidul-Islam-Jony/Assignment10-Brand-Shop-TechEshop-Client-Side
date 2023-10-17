import banner from "../../assets/images/banner.png"

const Banner = () => {
    return (
        <div className="">
            <div className="absolute z-20 top-0 hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to TechEshop</h1>
                        <p className="mb-5">You can choose your product and buy from our TechEshop</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;