import { useParams } from "react-router-dom";

const CategoryItems = () => {
    const name = useParams();
    console.log(name);
    return (
        <div>
            this is caregory section
        </div>
    );
};

export default CategoryItems;