import rectangle1 from  '../assets/image/rectangle1.png';
import rectangle2 from  '../assets/image/rectangle2.png';
import rectangle3 from  '../assets/image/rectangle3.png';
import rectangle4 from  '../assets/image/rectangle4.png';
import video1 from  '../assets/image/video1.png';
import video2 from  '../assets/image/video2.png';
import video3 from  '../assets/image/video3.png';
import video4 from  '../assets/image/vide4.png';

const PhotosVideos = () => {
  return (
   <>
    <div className='md:mt-8 pr-4 flex md:flex-col flex-row gap-4'>
    <div>
    <h3 className='md:text-2xl text-xl font-semibold'>Photos</h3>
    <div className='grid grid-cols-2 md:w-auto w-full mt-3'>
      <img src={rectangle2} alt="1st image" />
      <img src={rectangle1} alt="2nd image" />
      <img src={rectangle4} alt="3rd image" />
      <img src={rectangle3} alt="4th image" />
    </div>
    <a href="#" className='text-md font-medium text-sky-700 md:ml-52 ml-24'>More +</a>
    </div>
    <div className='mt-8'>
    <h3 className='md:text-2xl text-xl font-semibold'>Videos</h3>
    <div className='grid grid-cols-1 md:w-auto w-full mt-3 gap-4'>
      <img src={video1} alt="1st video" />
      <div className='grid grid-cols-3'>
      <img src={video2} alt="2nd video" />
      <img src={video3} alt="3rd video" />
      <img src={video4} alt="4th video" />
      </div>
    </div>
    <a href="#" className='text-md font-medium text-sky-700 md:ml-52 ml-24'>More +</a>
    </div>
    </div>
   </>

  )
}
export default PhotosVideos