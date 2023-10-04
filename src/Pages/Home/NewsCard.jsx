import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai"

const NewsCard = (Anews) => {
   
    const {
        total_view,
        title,
        details,
        image_url,
        _id,
        author,
        rating,

    } = Anews.Anews

    return (
        <div className="card  bg-base-100 shadow-xl mb-11">
            <div className="card-body">
                <div className="flex items-center gap-3 mb-3">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={author.img} />
                        </div>
                    </div>
                    <div>
                        <h1>{author.published_date}</h1>
                        <p>{author.name}</p>
                    </div>
                </div>
                <hr />
                <h2 className="card-title mt-3">{title}</h2>
            </div>
            <figure className="px-4"><img src={image_url} alt="Shoes" /></figure>
            <div className="card-body">
                {
                    details.length > 100 ?
                        <div>
                            <p>{details.slice(0, 90)}</p>
                            <Link
                                to={`/news/${_id}`}
                                className="text-orange-500 font-bold mt-4">Read More ...</Link>
                        </div>
                        :
                        <div>
                            <p>{details}</p>
                            <Link
                                to={`/news/${_id}`}
                                className="text-orange-500 font-bold mt-4"
                            >Read More ...</Link>
                        </div>
                }
                <hr />
            </div>
            <div className=" card-body">
                <div className="flex justify-between">
                    <div >
                        <div className="flex items-center">
                            <svg
                                className="w-6 h-4 text-yellow-300 mr-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 22 20"
                            >
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <p className="ml-2 text-sm font-bold text-gray-900">{rating.number}</p>


                        </div>

                    </div>
                    <div className="flex items-center gap-2">
                        <AiFillEye className="text-xl" /> <p>{total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;