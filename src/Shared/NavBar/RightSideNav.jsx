import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import qZone1 from '../../../src/assets/qZone1.png';
import qZone2 from '../../../src/assets/qZone2.png';
import qZone3 from '../../../src/assets/qZone3.png';
const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 mb-5">
                <h1 className="text-2xl font-semibold mb-4">Login With</h1>
                <button className='flex items-center text-base btn-outline btn  w-full mb-4'>
                    <FcGoogle className='text-lg' />
                    Google
                </button>
                <button className='flex items-center text-base btn-outline btn  w-full'>
                    <AiFillGithub className='text-lg' />
                    GitHub
                </button>

            </div>


            <div className="p-4 mb-5">
                <h1 className="text-2xl font-semibold mb-4">Find Us On</h1>
                <a className='flex items-center p-2 py-4  border border-black rounded-t-lg ' href="">
                    <BsFacebook className='text-2xl mr-2' />
                    Facebook</a>

                <a className='flex items-center p-2 py-4  border-x border-black ' href="">
                    <BsTwitter className='text-2xl mr-2 text-sky-400' />
                    Twitter
                </a>

                <a className='flex items-center p-2 py-4  border border-black rounded-b-lg ' href="">
                    <BsInstagram className='text-2xl mr-2' />
                    Instagram</a>

            </div>

            <div className="p-4 mb-5">
                <h1 className="text-2xl font-semibold mb-4">Q-Zone</h1>
                <div className='mx-auto flex flex-wrap justify-center '>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>


            </div>
        </div>
    );
};

export default RightSideNav;