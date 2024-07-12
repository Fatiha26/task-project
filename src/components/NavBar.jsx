import { useState } from "react";
import logo from '../assets/image/Logo.svg';
import profilePic from '../assets/image/profile-pic.png';
import { FaSearch, FaPen, FaRegBell } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoIosMenu } from "react-icons/io";
import { HiMiniXMark } from "react-icons/hi2";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <nav>
        <div className="w-full bg-black flex justify-around items-center p-4">
          <div>
            <img src={logo} alt="logo image" />
          </div>
          <div className="text-white flex items-center">
            {/* Icons for the large devices */}
            <div className="lg:flex md:flex items-center hidden">
              <FaSearch className="bg-slate-800 w-9 h-9 px-2 py-1 rounded-full mr-2" />
              <FaPen className="bg-slate-800 w-9 h-9 px-2 py-1 rounded-full mr-2" />
              <IoMailOutline className="bg-slate-800 w-9 h-9 px-2 py-1 rounded-full mr-2" />
              <FaRegBell className="bg-slate-800 w-9 h-9 px-2 py-1 rounded-full mr-2" />
              <HiDotsHorizontal className="bg-slate-800 w-9 h-9 px-2 py-1 rounded-full mr-4" />
            </div>
            <img src={profilePic} alt="user profile picture" className="mr-4" />
            
           
            {/* Menu button for small devices */}
            <button className="lg:hidden" onClick={handleClick}>
              {click ? (
                <HiMiniXMark className="bg-slate-800 text-white w-9 h-9 px-2 py-1 rounded-full mr-2" />
              ) : (
                <IoIosMenu className="bg-slate-800 text-white w-9 h-9 px-2 py-1 rounded-full mr-2" />
              )}
            </button>
          </div>
        </div>
        {/* Dropdown menu for small devices */}
        {click && (
          <div className="lg:hidden block w-full bg-slate-900 transition">
            <div className="text-white flex flex-col items-center py-4 space-y-4">
              <FaSearch className="bg-slate-800 w-9 h-9 px-2 py-1 rounded-full" />
              <FaPen className="bg-slate-800 w-9 h-9 px-2 py-1 rounded-full" />
              <IoMailOutline className="bg-slate-800 w-9 h-9 px-2 py-1 rounded-full" />
              <FaRegBell className="bg-slate-800 w-9 h-9 px-2 py-1 rounded-full" />
              <HiDotsHorizontal className="bg-slate-800 w-9 h-9 px-2 py-1 rounded-full" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
