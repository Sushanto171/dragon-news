import { useContext } from "react";
import FindUs from "../../components/FindUs/FindUs";
import SocialLogIn from "../../components/SocialLogin/SocialLogIn";
import { AuthContext } from "../../components/Providers/AuthProvider";

const RightNav = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            {
                ! user &&  <SocialLogIn />
            }
            <FindUs />
        </div>
    );
};

export default RightNav;