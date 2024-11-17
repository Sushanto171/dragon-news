import moment from "moment";
import  logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Header = () => {
  const time =  moment().format('dddd, MMMM Do, YYYY');

    return (
        <div className="flex flex-col justify-center items-center py-4">
            <img className="w-[470px]" src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            {time}
            <div className="w-11/12 flex items-center bg-base-200 p-2 mt-4">
            <p className="bg-[#D72050] text-white py-1 px-4">Latest</p>
        <Marquee speed={40} pauseOnHover>
            <li><Link>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corporis.</Link></li>
            <li><Link>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corporis.</Link></li>
            <li><Link>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, corporis.</Link></li>
        </Marquee>
            </div>
        </div>
    );
};

export default Header;