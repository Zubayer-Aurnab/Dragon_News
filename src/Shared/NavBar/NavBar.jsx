import { Link } from "react-router-dom";
import userImg from '../../../src/assets/user.png';
import useAuth from "../../Hook/useAuth";


const NavBar = () => {
    const { user, signOutUser } = useAuth()

    const handelSignOutButton = () => {
        signOutUser()
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })

    }
    const links = <>

        <li><Link to={'/'}> Home</Link></li>
        <li><Link to={'/about'}> About</Link></li>
        <li><Link to={'/career'}> Career</Link></li>
        <li><Link to={'/login'}> LogIn</Link></li>

    </>


    return (
        <div className="navbar bg-base-100 mt-8 mb-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-3">
                    <div className="w-10 rounded-full">
                        <img src={userImg} />
                    </div>
                </label>
                {
                    user ?
                        <button onClick={handelSignOutButton} className="bg-[#403F3F] text-white p-2 px-5 font-semibold" >Sign Out</button>
                        :
                        <Link to={"/login"}>
                            <button className="bg-[#403F3F] text-white p-2 px-5 font-semibold" >Login</button>
                        </Link>
                }


            </div>
        </div>
    );
};

export default NavBar;