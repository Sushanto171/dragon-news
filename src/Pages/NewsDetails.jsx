import { AiFillStar } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { Link, useLoaderData, useLocation,  } from "react-router-dom";

const NewsDetails = () => {
    const {data} = useLoaderData();
    const news = data[0];
    const path = useLocation();
    console.log(path)
    return (
        <div>
        <div className="card bg-base-100 shadow-xl">
        {/* Author Section */}
        <div className="flex items-center px-4 py-2">
          <img
            src={news.author.img}
            alt="Author"
            className="w-12 h-12 rounded-full border-2 border-gray-200"
          />
          <div className="ml-3">
            <h2 className="text-sm font-bold">{news.author.name}</h2>
            <p className="text-xs text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
  
        {/* Thumbnail */}
        <figure>
          <img src={news.thumbnail_url} alt="News Thumbnail" className="w-full" />
        </figure>
  
        {/* Content */}
        <div className="card-body">
          <h2 className="card-title">{news.title}</h2>
          <p className="text-sm text-gray-700">{news.details}</p>
          <div className="card-actions justify-between items-center mt-4">
            {/* Rating */}
            <div className="flex items-center text-yellow-500">
              <AiFillStar className="mr-1" size={20} />
              <span className="text-sm font-semibold">
                {news.rating.number} ({news.rating.badge})
              </span>
            </div>
  
            {/* Views */}
            <div className="flex items-center text-gray-500">
              <BsEye className="mr-1" size={18} />
              <span className="text-sm">{news.total_view} views</span>
            </div>
          </div>
        </div>
   
      </div>
      <div className="my-5">
           <Link to={path.state?.from || "/"} className="btn">All  this category news</Link>
        </div>
      </div>
    );
  };

export default NewsDetails;