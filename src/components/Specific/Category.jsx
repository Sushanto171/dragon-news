import { NavLink } from "react-router-dom";

const Category = (props = []) => {
    const {category} = props || [];
    return (
        <div className="my-2">
         
                <NavLink
                className={({isActive})=> `${isActive && "bg-base-300 py-2"}`} to={`category/${category.category_id}`}>
                       <button className="hover:bg-base-200 w-full py-2">
                    {category.category_name}
                       </button>
                </NavLink>
        </div>
    );
};

export default Category;