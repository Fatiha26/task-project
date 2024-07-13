import profilePic from '../assets/image/profile-pic2.png';
import { GoDotFill } from "react-icons/go";

const User = () => {
  return (
    <div className='flex justify-around'>
      <div className='-mt-24 -ml-16'>
          <img src={profilePic} alt="profile image" />
      </div>
      <div className='mt-8 -ml-12'>
         <div className='flex items-center'>
         <h2 className='text-2xl font-semibold'>John Doe</h2>
         <span className='text-lg font-semibold mx-2'><GoDotFill/></span>
         <span className='text-md font-light text-blue-400'>@johndoe</span>
         </div>
         <p className='font-regular text-sm mt-2'>Astrophotographer 🌌 <br/>
         Gamer 👾</p>
      </div>
      <div className='mt-10'>
         <a href="#" className='bg-sky-700 text-white px-5 py-2 rounded-3xl'>Follow</a>
      </div>
  </div>
  )
}

export default User
