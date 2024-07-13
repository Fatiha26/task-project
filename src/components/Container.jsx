import User from './User';
import PhotosVideos from './PhotosVideos';
import Blog from './Blog';

const Container = () => {
  return (
    <div className="bg-gray-50 md:mx-20 mx-3 px-2 md:px-16">
      <div className="grid md:grid-cols-[70%_30%] gap-12">
        <div>
          <User className="order-1" />
          <Blog className="order-3 md:order-2"/>
        </div>
        <div>
          <PhotosVideos className="order-2 md:order-3"/>
        </div>
      </div>
    </div>
  );
};

export default Container;
