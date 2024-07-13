import profilePic from '../assets/image/profile-pic2.png';
import { GoDotFill } from "react-icons/go";

const User = () => {
  return (
    <div className='flex justify-around'>
      <div className='md:-mt-24 -mt-20 w-32 md:w-auto md:-ml-16'>
          <img src={profilePic} alt="profile image" />
      </div>
      <div className='md:mt-8 mt-4 md:-ml-12'>
         <div className='flex items-center'>
         <h2 className='md:text-2xl text-md font-semibold'>John Doe</h2>
         <span className='md:text-lg text-sm font-semibold md:mx-2'><GoDotFill/></span>
         <span className='md:text-md text-sm font-light text-blue-400'>@johndoe</span>
         </div>
         <p className='font-regular text-sm mt-2'>Astrophotographer 🌌 <br/>
         Gamer 👾</p>
      </div>
      <div className='mt-20 md:mt-10'>
         <a href="#" className='bg-sky-700 text-white md:px-5 px-3 md:py-2 py-1 rounded-3xl'>Follow</a>
      </div>
  </div>
  )
}

export default User
