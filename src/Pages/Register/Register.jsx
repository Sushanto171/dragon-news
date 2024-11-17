
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Specific/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../components/Providers/AuthProvider";

const Register = () => {
    const { createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const path = useLocation();
    const handleSubmit = (e)=> {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get("name"); 
        const photo = formData.get("photo");
        const email = formData.get("email");
        const password = formData.get("password");
        console.log({name, photo, email, password})

        createUser(email, password)
        .then(res => {
            navigate(path.state?.from || "/");
            console.log(res.user)})
            .catch(error => console.log(error.message))
    }
    return (
        <div className="bg-base-200">
        <Navbar />
        
        <div className="flex flex-col justify-center items-center min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0">
            <h2 className="font-bold text-xl text-center mt-8">Register your account</h2>
            <div className="divider w-10/12 mx-auto"></div>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Type your name" className="input rounded-none bg-base-200 focus:outline-none focus:border-0" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input name="photo" type="text" placeholder="Photo url" className="input rounded-none bg-base-200 focus:outline-none focus:border-0" required />
                    </div>
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
                    <div className="form-control mt-2">
                    <label className="label cursor-pointer justify-start gap-5">
                        <input type="checkbox"  className="checkbox h-4 w-4 rounded-sm" />
                        <span className="label-text">Accept terms & conditions</span>
                    </label>
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-black/70 text-white rounded-none">Register Now</button>
                    </div>
                </form>
                <p className="text-sm text-center mb-8">Already heave an account? <Link to="/login" className="text-red-500" >Login</Link></p>
             </div>
        </div>
    </div>
);
};

export default Register;