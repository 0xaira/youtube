import { IoMenu } from "react-icons/io5";
import logo from "../img/logo.png";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import '../index.css';
import { toggleMenu } from '../utils/appSlice';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
  
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const timer = setTimeout(() => {
          if (searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery]);
          } else {
            getSearchSugsestions();
          }
        }, 200);
    
        return () => {
          clearTimeout(timer);
        };
      }, [searchQuery]);
    
      const getSearchSugsestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        //console.log(json[1]);
        setSuggestions(json[1]);
    
        // update cache
        dispatch(
          cacheResults({
            [searchQuery]: json[1],
          })
        );
      };

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    const searchSuggestions = async () => {
        const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const data = await response.json();
        if (data && data[1]) {
            setSuggestions(data[1]);
        }
    }

    const handleMouseEnter = () => {
        setShowSuggestions(true);
    }

    const handleMouseLeave = () => {
        setShowSuggestions(false);
    }

    return (
        <>
        <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
            <div className='flex items-center justify-between h-16 bg-white shadow-md px-6 '>
                {/* Left section */}
                <div className='flex items-center gap-6'>
                    <IoMenu className='h-16 w-8  cursor-pointer' onClick={() => toggleMenuHandler()} />
                    <img src={logo} className='h-16' alt="logo" />
                </div>

                {/* Middle section */}
                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <div className="group flex items-center">
                        <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#404040] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0 ">
                            <div className="w-10 justify-center items-center hidden group-focus-within:md:flex">
                                <IoIosSearch className="text-black" />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                placeholder="Search"
                                onChange={(e) => setSearchQuery(e.target.value)}
                                // onKeyUp={searchQueryHandler}
                                className="w-44 px-5 bg-transparent outline-none text-black  md:pl-0 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                            />
                        </div>
                        <button
                            //   onClick={searchQueryHandler2}
                            className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#404040] rounded-r-3xl  dark:bg-white/[0.15]"
                        >
                            <IoIosSearch className=" text-xl" />
                        </button>
                    </div>

                    {/* Temp Data List */}
                    {showSuggestions && (
                        <div className='bg-white rounded-lg ml-12 fixed w-[512px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <ul className='space-y-2 p-4'>
                                {suggestions.map((suggestion, index) => (
                                    <li key={index} className=''>{suggestion}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>


                {/* Right section */}
                <div className='flex items-center gap-4'>
                    <FaUserCircle size={32} className="text-gray-800" />
                </div>
            </div>
            </div>

        </>
    )
}

export default Header;
