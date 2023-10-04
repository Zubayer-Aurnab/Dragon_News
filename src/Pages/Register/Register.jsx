import { Link } from "react-router-dom";
import NavBar from "../../Shared/NavBar/NavBar";
import useAuth from "../../Hook/useAuth";


const Register = () => {

    const { createUser } = useAuth()
    const handelLogIn = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
        const email = form.get('email')
        const password = form.get('password')
        const name = form.get('name')
        const photo = form.get('photo')


        createUser(email, password)
            .then(res => {

            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <NavBar />
            <h1></h1>
            <div className="bg-[#F3F3F3] w-1/2 mx-auto mt-14">

                <form onSubmit={handelLogIn} className="card-body">
                    <h1 className="text-3xl font-bold text-center mb-10">Register your account</h1>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input input-bordered"
                            required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name="photo"
                            placeholder="URL"
                            className="input input-bordered"
                            required />
                    </div>

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

                    <div className="mt-4 ">
                        <input
                            type="checkbox"
                            name=""
                            id=""
                            className="text-2xl mr-3"
                        />
                        Accept terms and conditions
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn bg-[#403F3F] hover:bg-[#403F3F] text-xl font-semibold text-white">Register</button>
                    </div>
                    <div className="mt-5 text-center">
                        <p>Already Have An Account ? <Link
                            to="/login"
                            className="text-rose-500 font-bold border-b-2 border-rose-500"
                        >Log In</Link></p>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default Register;