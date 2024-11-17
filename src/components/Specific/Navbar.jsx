import { Link, NavLink, useLocation } from "react-router-dom";
import userImg from "../../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2';

const Navbar = () => {
    const {user, userSignOut } = useContext(AuthContext);
  const {pathname} = useLocation();
    const signOutHandler = ()=>{
        userSignOut()
        .then(()=>{
          seew()
          console.log("user sign out success")})
        .catch(error => console.log(error.message))
    }

    const seew = ()=>{
      Swal.fire({
        title: 'Sign out success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    }
    return (
        <nav className="flex my-3 justify-between w-11/12  mx-auto">
           <div className="">
            {user&& user?.email}
           </div>
           <div className="flex gap-3"> 
            <NavLink className={ ({isActive})=> isActive?"underline": ""} to="/">Home</NavLink>
            <NavLink className={ ({isActive})=> isActive?"underline": ""}  to="/common/about">About</NavLink>
            <NavLink className={ ({isActive})=> isActive?"underline": ""}  to="/common/career/apply">Career</NavLink>
            {
            user && <NavLink className={ ({isActive})=> isActive?"underline": ""}  to="/profile">Profile</NavLink>
            }
            </div>
        <div className="flex items-center gap-3">
          {
            user ? <>
              <Link to="/profile"><img className="w-10 rounded-full" src={ user &&  user?.photoURL || userImg } alt="" /></Link>
              <button onClick={signOutHandler} className="bg-black text-white px-6 py-2"><Link to="/login" >Sign Out</Link></button>
            </>:
            <>
            <button className="bg-black text-white px-6 py-2"><Link to="/login" >Log in</Link></button>
            {pathname === "/login" && <button className="bg-black text-white px-6 py-2"><Link to="/register" >Register</Link></button>}
            </>
          }
        </div>
        </nav>
    );
};

export default Navbar;