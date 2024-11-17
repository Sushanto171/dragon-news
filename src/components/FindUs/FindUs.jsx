import {  FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FindUs = () => {
    return (
        <div>
            <h3 className="font-semibold text-lg">Find Us On</h3>

            <ul className="flex flex-col my-5">
                <li className="border py-2 pl-10"><Link className="flex gap-2 items-center"><FaFacebookF color="blue"  size={20} className="border p-0.5 rounded-full bg-base-300"/> Facebook</Link></li>
                <li className="border py-2 pl-10"><Link  className="flex gap-2 items-center" > <FaTwitter color="skyblue"  size={20}  className="border p-0.5 rounded-full bg-base-300" /> Twitter</Link></li>
                <li className="border py-2 pl-10"><Link  className="flex gap-2 items-center" > <FaInstagram color="red"  size={20}  className="border p-0.5 rounded-full bg-base-300" /> Instagram</Link></li>    
            </ul>
        </div>
    );
};

export default FindUs;