
import VideoPlayer from './VideoPlayer';
import './ResponsiveVideoPlayers.css';

const ResponsiveVideoPlayers = () => {
  return (
    <div className="responsive-video-players">
      <div className="video-container">
        <VideoPlayer url="https://www.example.com/video1.mp4" />
      </div>
      <div className="video-container">
        <VideoPlayer url="https://www.example.com/video2.mp4" />
      </div>
    </div>
  );
};

export default ResponsiveVideoPlayers;



