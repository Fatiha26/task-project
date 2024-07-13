import { postData } from '../constants/data';

const Blog = () => {
  return (
    <div className='mt-12'>
      {postData.map((items, index) => (
        <div key={index} className='p-4 w-auto h-[280px] bg-gray-200 rounded-xl shadow mb-8'>
          <h3 className='text-2xl font-semibold'>{items.heading}</h3>
          <div className='text-sm text-center text-gray-600 mt-4 overflow-y-scroll' style={{ maxHeight: '140px' }}>
            {items.text}
          </div>
          <div className='flex items-center justify-between border-t-2 border-gray-300  mt-4 py-2'>
            <div className='flex items-center flex-wrap'>
              <a href="#" className='text-sky-500 bg-white text-sm px-3 py-1 rounded-3xl mr-2'>{items.link1}</a>
              <a href="#" className='text-sky-500 bg-white text-sm px-3 py-1 rounded-3xl mr-2'>{items.link2}</a>
              <a href="#" className='text-sky-500 bg-white text-sm px-3 py-1 rounded-3xl mr-2'>{items.link3}</a>
              <a href="#" className='text-sky-500 bg-white text-2xl px-2 py-0 rounded-full'>+</a>
            </div>
            <div>
              <a href="#" className='text-md font-medium text-sky-700'>Read More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
