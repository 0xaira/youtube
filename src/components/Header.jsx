import MenuIcon from '@mui/icons-material/Menu';
import logo from "../img/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import '../index.css';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
   const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <>
            <div className='flex items-center justify-between h-16 bg-white shadow-md px-6'>
                {/* Left section */}
                <div className='flex items-center gap-4'>
                    <MenuIcon className='h-8 w-8 text-gray-800 cursor-pointer' onClick = {() => toggleMenuHandler()} />
                    <img src={logo} className='h-12' alt="logo" />
                </div>

                {/* Middle section */}
                <div className='flex items-center justify-center flex-1 px-10 w-1/2'>
                    <input type="text" className='w-80 border border-gray-400  py-2 px-4 rounded-l-full ' placeholder='Search' />
                    <button className=' rounded-r-full  bg-gray-200 p-2 '>
                        <IoIosSearch className='h-6 w-7 text-gray-600' />
                    </button>
                </div>

                {/* Right section */}
                <div className='flex items-center gap-4'>
                    <FaUserCircle size={24} className="text-gray-800" />
                </div>
            </div>
        </>
    )
}

export default Header;
