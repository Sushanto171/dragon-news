import { useParams } from "react-router-dom";
import Navbar from "../Specific/Navbar";

const Common = () => {
    const {page, btn} = useParams();
    return (
        <div>
            <Navbar />
          {page === "about" &&   <h1>This is about page</h1>}
          {page === "career" && <h1>This is career page.</h1>}
          {btn && <button className="btn btn-outline">Apply</button>}
        </div>
    );
};

export default Common;