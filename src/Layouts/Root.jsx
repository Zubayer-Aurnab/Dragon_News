import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="w-4/5 mx-auto font-poppins">
            <Outlet />
        </div>
    );
};

export default Root;