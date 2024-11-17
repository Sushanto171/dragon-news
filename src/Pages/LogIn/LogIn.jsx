/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import Navbar from "../../components/Specific/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/Providers/AuthProvider";
import Swal from "sweetalert2";

const LogIn = () => {
    const [errorMessage, setErrorMessage ]= useState("")
    const navigate = useNavigate();
    const path = useLocation();
    const {signIn} = useContext(AuthContext);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        console.log({email, password});

        setErrorMessage("");

        signIn(email, password)
        .then(res =>{
            console.log(res.user);
            seew()
            navigate(path.state?.from || "/")
        })
        .catch(error =>setErrorMessage(error.message))
    }

    const seew = ()=>{
        Swal.fire({
          title: 'Log in success!',
          text: 'Do you want to continue',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    return (
        <div className="bg-base-200">
            <Navbar />
            
            <div className="flex flex-col justify-center items-center min-h-screen">
                <div className="card bg-base-100 w-full max-w-sm shrink-0">
                <h2 className="font-bold text-xl text-center mt-8">Log in your account</h2>
                <div className="divider w-10/12 mx-auto"></div>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input rounded-none bg-base-200 focus:outline-none focus:border-0" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input rounded-none bg-base-200 focus:outline-none focus:border-0" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
                        <div className="form-control mt-6">
                        <button className="btn bg-black/70 text-white rounded-none">Login</button>
                        </div>
                    </form>
                    <p className="text-sm text-center mb-8">Don't heave an account? <Link to="/register" className="text-red-500" >Register</Link></p>
                 </div>
            </div>
        </div>
    );
};

export default LogIn;