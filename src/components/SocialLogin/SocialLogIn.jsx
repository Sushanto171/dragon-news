import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const SocialLogIn = () => {
    const {logInWithGoogle, logInWithGithub, loading} = useContext(AuthContext);

    const googleLoginHandler = ()=>{
        logInWithGoogle()
        .then(res => {
     
            seeew(res.user.displayName)})
        .catch(error => console.log(error.message))
    }

    const githubLoginHandler = ()=>{
        logInWithGithub()
        .then(res =>seeew(res.user.displayName))
        .catch(error => console.log(error.message))
    }

    const seeew = (user) =>{
        Swal.fire({
            title:`${user} Log in success!`,
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'okay'
          })
    }

    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div>
            <h3 className="font-semibold text-lg">Log in with</h3>
            <div className="flex flex-col gap-2 my-3">
            <button onClick={googleLoginHandler} className="btn btn-outline"> <FaGoogle /> Log in with Google</button>
            <button onClick={githubLoginHandler} className="btn btn-outline"><FaGithub /> Log in with Github</button>
            </div>
        </div>
    );
};

export default SocialLogIn;