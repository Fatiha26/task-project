import User from './User';
import PhotosVideos from './PhotosVideos';
import Blog from './Blog';

const Container = () => {
  return (
    <div className="bg-gray-50 md:mx-20 mx-3 px-2 md:px-16">
      <User />
      <div className="grid md:grid-cols-[70%_30%] gap-12">
        <div className="order-1 md:order-2">
          <PhotosVideos />
        </div>
        <div className="order-2 md:order-1">
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default Container;
