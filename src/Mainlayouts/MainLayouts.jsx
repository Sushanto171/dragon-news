import { Outlet, useParams } from "react-router-dom";
import Header from "../components/Specific/Header";
import Navbar from "../components/Specific/Navbar";
import LefNav from "../routs/LeftNav/Leftnav";
import RightNav from "../routs/RightNav/RightNav";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/Providers/AuthProvider";


const MainLayouts = () => {
    const {newsid} = useParams();
    const [showNews, setShowNews] = useState(null);
    const {loading} = useContext(AuthContext);

    useEffect(()=>{
        setShowNews(newsid)
    },[newsid]);

    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div className="font-poppins">
         <Header />
         <Navbar />
         <div className="grid md:grid-cols-12 gap-3 w-11/12 mx-auto">
           {
            ! showNews && <aside className="col-span-3">
                          <LefNav/>
                          </aside>
           }
            <div className={ showNews ? 'col-span-9' : "col-span-6"}>
                <Outlet />
            </div>           
            <aside className="col-span-3">
                <RightNav />
            </aside>
        </div>   
        </div>
    );
};

export default MainLayouts;