import { useState, useEffect } from 'react';
import logo from '../../../src/assets/logo.png';
import moment from 'moment';

const Header = () => {
    const [currentTime, setCurrentTime] = useState(moment().format("dddd, MMMM D, YYYY, h:mm:ss a"));
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment().format("dddd, MMMM D, YYYY, h:mm:ss a"));
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='text-center space-y-3 mt-10'>
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-lg font-normal'>Journalism Without Fear or Favour</p>
            <p className=''>{currentTime}</p>
        </div>
    );
};

export default Header;
