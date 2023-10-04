import { useLoaderData } from "react-router-dom";
import BreakingNews from "../../Shared/Header/BreakingNews";
import Header from "../../Shared/Header/Header";
import LeftSideNav from "../../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../../Shared/NavBar/NavBar";
import RightSideNav from "../../Shared/NavBar/RightSideNav";
import NewsCard from "./NewsCard";



const Home = () => {
    const data = useLoaderData()
   
    return (
        <div>
            <Header />
            <BreakingNews />
            <NavBar />

            <div className="grid grid-cols-4 gap-4">
                <div><LeftSideNav /></div>

                <div className="col-span-2 overflow-y-auto scrollbar-none  ">
                    <div className="h-screen  ">
                        {
                            data.map(news => <NewsCard key={news._id} Anews={news}></NewsCard>)
                        }
                    </div>
                </div>

                <div><RightSideNav /></div>
            </div>
        </div>

    );
};

export default Home;