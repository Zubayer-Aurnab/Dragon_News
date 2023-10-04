import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="p-4 bg-[#F3F3F3] flex mt-5">
            <button className="bg-[#D72050] p-2 text-xl px-3 font-medium  mr-4 text-white">Latest </button>
            <Marquee pauseOnHover={true} speed={100} >
                <Link className="mr-5"> I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-5"> I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-5"> I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;