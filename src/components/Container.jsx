import User from './User';
import PhotosVideos from './PhotosVideos';
import Blog from './Blog';
const ProfileInfo = () => {
  return (
    <>
   <div className="bg-gray-100 mx-32 px-16">
   <div className='grid grid-cols-[70%_30%] gap-12'>
     <div>
     <User />  
     <Blog />
     </div>
     <div>
     <PhotosVideos />
     </div>
    </div>
   </div>
      
    </>
  )
}

export default ProfileInfo
