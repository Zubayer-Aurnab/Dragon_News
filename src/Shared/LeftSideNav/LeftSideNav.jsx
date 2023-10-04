import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div className="p-4 mb-5">
                <h1 className="text-2xl font-semibold mb-6">All Caterogy</h1>
                <div className="space-y-7 ">
                    {
                        categories.map((category) => <Link
                            key={category.id}
                            className="font-semibold block p-3 rounded-lg text-[#9F9F9F] hover:bg-base-200 hover:text-black  ml-2 "
                            to={`/categories/${category.id}`}
                        > {category.name} </Link>)
                    }
                </div>
            </div>
        </div >
    );
};

export default LeftSideNav;