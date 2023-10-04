import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import NavBar from "../../Shared/NavBar/NavBar";
import RightSideNav from "../../Shared/NavBar/RightSideNav";
import { useEffect, useState } from "react";
// import { AiOutlineArrowLeft } from 'react-icons/fa';


const NewsDetails = () => {
    const { id } = useParams()
    const loaderData = useLoaderData()
    const [item, setItem] = useState({})
    console.log(item);

    useEffect(() => {
        const data = loaderData.find(cart => cart._id == id)
        setItem(data)
    }, [])
    // const {
    //     total_view,
    //     title,
    //     details,
    //     image_url,
    //     _id,
    //     author,
    //     rating,

    // } = item

    return (
        <div>
            <Header />
            <NavBar />
            <div className="grid grid-cols-4 gap-12">


                <div className="col-span-3">
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src={item.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p>{item.details}</p>

                        </div>
                        <div className="card-body md:w-1/2  lg:w-1/3">
                            <button className="p-2 px-4 text-white font-medium bg-pink-600">

                                {/* <AiOutlineArrowLeft /> */}
                                All news in this category</button>
                        </div>
                    </div>

                </div>


                <div>
                    <RightSideNav />
                </div>

            </div>
        </div>
    );
};

export default NewsDetails;