import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div>
            <h3 className="text-3xl text-center mt-24 font-bold">Oops!!!</h3>
            {
                error.status === 404 && <div className="flex flex-col mt-5 items-center">
                    <p className="text-3xl font-bold mb-4">Page {error.message || error.statusText}</p>
                    <Link to="/" className="btn capitalize bg-[#FF3811] text-white font-bold px-10">Go back to Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;