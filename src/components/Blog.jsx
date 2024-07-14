import { postData } from '../constants/data';

const Blog = () => {
  return (
    <div className='lg:mt-12'>
      {postData.map((items, index) => (
        <div key={index} className='p-4 w-auto h-[280px] bg-gray-100 rounded-xl shadow mb-8'>
          <h3 className='lg:text-2xl text-lg font-semibold'>{items.heading}</h3>
          <div className='lg:text-sm text-xs text-center text-gray-600 lg:mt-4 overflow-y-scroll' style={{ maxHeight: '140px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {items.text}
          </div>
          <div className='flex items-center justify-between border-t-2 border-gray-300 mt-4'>
            <div className='flex items-center mt-3'>
              <a href="#" className='text-sky-500 bg-white lg:text-sm text-xs lg:px-3 lg:py-1 rounded-3xl lg:mr-2 mr-1'>{items.link1}</a>
              <a href="#" className='text-sky-500 bg-white lg:text-sm text-xs lg:px-3 lg:py-1 rounded-3xl lg:mr-2 mr-1'>{items.link2}</a>
              <a href="#" className='text-sky-500 bg-white lg:text-sm text-xs lg:px-3 lg:py-1 rounded-3xl lg:mr-2 mr-1'>{items.link3}</a>
              <a href="#" className='text-sky-500 bg-white lg:text-2xl text-sm  lg:px-2 px-1 py-0 rounded-full'>+</a>
            </div>
            <div className='mt-3'>
              <a href="#" className='lg:text-[16px] text-[10px] lg:font-medium font-normal text-sky-700'>Read More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
