import User from './User';
import PhotosVideos from './PhotosVideos';
const ProfileInfo = () => {
  return (
    <>
    <div className='grid grid-cols-3 px-12'>
      <User />  
      <PhotosVideos />
    </div>
      
    </>
  )
}

export default ProfileInfo
