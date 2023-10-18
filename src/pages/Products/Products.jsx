import { useParams } from "react-router-dom";
import Slider from "../../components/Slider/Slider";

// mackbook air(m2)

const Products = () => {
    const name = useParams();
    console.log(name);
    return (
        <div>
            <Slider></Slider>
        </div>
    );
};

export default Products;