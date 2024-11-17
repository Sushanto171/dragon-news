
import { AiFillStar } from "react-icons/ai"; // Star icon for rating
import { BsEye } from "react-icons/bs"; // Eye icon for views
import { Link, useLocation,  } from "react-router-dom";
const NewsCard = (props = {}) => {
    const {singleNews : data} = props || {}
    const path = useLocation();
    return (

        <div className="card border mb-5 rounded-none">
      {/* Author Section */}
      <div className="flex items-center px-4 bg-base-200 py-2 ">
        <img
          src={data.author.img}
          alt="Author"
          className="w-12 h-12 rounded-full border-2 border-gray-200"
        />
        <div className="ml-3">
          <h2 className="text-sm font-bold">{data.author.name}</h2>
          <p className="text-xs text-gray-500">{data.author.published_date}</p>
        </div>
      </div>
        <h2 className="card-title p-5">{data.title}</h2>

      {/* Thumbnail */}
      <figure className="px-5">
        <img src={data.thumbnail_url} alt="News Thumbnail" className="w-full max-h-96 object-cover" />
      </figure>

      {/* Content */}
      <div className="card-body">
        <p className="text-sm text-gray-700">{data.details.slice(0, 150)}...{" "}<Link
        state={{from:path.pathname}} to={`/newsdetails/${data._id}`} 
        className="text-amber-600 font-semibold underline">Read More</Link></p>
 
        <div className="card-actions justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center text-yellow-500">
            <AiFillStar className="mr-1" size={20} />
            <span className="text-sm font-semibold">
              {data.rating.number} ({data.rating.badge})
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center text-gray-500">
            <BsEye className="mr-1" size={18} />
            <span className="text-sm">{data.total_view}</span>
          </div>
        </div>
      </div>
    </div>

  );
};
      
export default NewsCard;