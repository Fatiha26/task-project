import { postData } from '../constants/data';

const Blog = () => {
  return (
    <div className='mt-12'>
      {postData.map((items, index) => (
        <div key={index} className='p-4 w-auto h-[280px] bg-gray-100 rounded-xl shadow mb-8'>
          <h3 className='md:text-2xl text-lg font-semibold'>{items.heading}</h3>
          <div className='md:text-sm text-xs text-center text-gray-600 md:mt-4 overflow-y-scroll' style={{ maxHeight: '140px', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {items.text}
          </div>
          <div className='flex items-center justify-between border-t-2 border-gray-300 mt-4'>
            <div className='flex items-center mt-3'>
              <a href="#" className='text-sky-500 bg-white md:text-sm text-xs md:px-3 md:py-1 rounded-3xl md:mr-2 mr-1'>{items.link1}</a>
              <a href="#" className='text-sky-500 bg-white md:text-sm text-xs md:px-3 md:py-1 rounded-3xl md:mr-2 mr-1'>{items.link2}</a>
              <a href="#" className='text-sky-500 bg-white md:text-sm text-xs md:px-3 md:py-1 rounded-3xl md:mr-2 mr-1'>{items.link3}</a>
              <a href="#" className='text-sky-500 bg-white md:text-2xl text-sm  md:px-2 px-1 py-0 rounded-full'>+</a>
            </div>
            <div className='mt-3'>
              <a href="#" className='md:text-[16px] text-[10px] md:font-medium font-normal text-sky-700'>Read More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
