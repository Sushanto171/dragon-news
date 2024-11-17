import { useEffect, useState } from "react";
import Category from "../../components/Specific/Category";

const LefNav=()=> {
    const [categories , setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])

 return (
        <div>
       <h3 className="font-semibold text-lg mb-3"> All category</h3>

            {
                categories.map(category=> <Category key={category.category_id} category={category}/>)
            }
            
        </div>
    );
};

export default LefNav;