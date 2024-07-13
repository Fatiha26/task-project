import rectangle1 from  '../assets/image/rectangle1.png';
import rectangle2 from  '../assets/image/rectangle2.png';
import rectangle3 from  '../assets/image/rectangle3.png';
import rectangle4 from  '../assets/image/rectangle4.png';
import rectangle5 from  '../assets/image/rectangle5.png';

const PhotosVideos = () => {
  return (
   <>
    <div>
    <div>
    <h3 className='text-2xl font-semibold'>Photos</h3>
    <div className='grid grid-cols-2'>
      <img src={rectangle2} alt="1st image" />
      <img src={rectangle1} alt="2nd image" />
      <img src={rectangle4} alt="3rd image" />
      <img src={rectangle3} alt="4th image" />
    </div>
    <a href="#" className='text-md font-medium text-sky-700 ml-[17rem]'>More +</a>
    </div>
    <div>
    <h3 className='text-2xl font-semibold'>Videos</h3>
    <div className='grid grid-cols-1'>
      <img src={rectangle5} alt="1st image" />
    </div>
    </div>
    </div>
   </>

  )
}

export default PhotosVideos
