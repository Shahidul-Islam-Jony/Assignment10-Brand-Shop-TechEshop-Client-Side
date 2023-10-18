import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Hourglass } from 'react-loader-spinner'

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    // console.log(location);
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <div className="flex h-[400px] justify-center items-center">
            <Hourglass
                visible={true}
                height="80"
                width="80"
                ariaLabel="hourglass-loading"
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#306cce', '#72a1ed']}
            />
        </div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoutes;