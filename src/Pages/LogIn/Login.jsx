import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import useAuth from "../../Hook/useAuth";


const Login = () => {
    const { logInUSer } = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    console.log('in log in page', location);

    const handelLogIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
        const email = form.get('email')
        const password = form.get('password')

        logInUSer(email, password)
            .then(res => {
                console.log(res);
                navigate( location?.state? location.state : '/')

            })
            .catch(err => {
                console.log(err);
            })

    }


    return (
        <>
            <NavBar />

            <div className="bg-[#F3F3F3] sm:w-full lg:w-1/2 mx-auto mt-14">

                <form onSubmit={handelLogIn} className="card-body">
                    <h1 className="text-3xl font-bold text-center mb-10">Login your account </h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-xl font-semibold text-white">Login</button>
                    </div>
                    <div className="mt-5 text-center">
                        <p>Dont’t Have An Account ? <Link
                            to="/register"
                            className="text-rose-500 font-bold border-b-2 border-rose-500"
                        >Register</Link></p>
                    </div>
                </form>

            </div>




        </>
    );
};

export default Login;