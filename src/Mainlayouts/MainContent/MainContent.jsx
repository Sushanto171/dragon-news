import { useLoaderData } from "react-router-dom";
import NewsCard from "../../components/newsCard";
;


const MainContent = () => {
    const {data : news} = useLoaderData();


    return (
        <>
        <h3 className="font-semibold text-lg mb-3">Dragon News Home</h3>
        {
            !news && <h1>No data found</h1>

        }
            {
                news.map(singleNews =><NewsCard key={singleNews._id} singleNews={singleNews} />)
            }
        </>
    );
};

export default MainContent;