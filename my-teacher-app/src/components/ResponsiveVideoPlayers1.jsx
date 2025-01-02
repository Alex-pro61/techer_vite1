
import './ResponsiveVideoPlayers1.css';

const ResponsiveVideoPlayers = () => {
  return (
    <div className="video-container">
      {/* Відео "Вчитель" */}
      <div className="video-wrapper">
        <video src="https://www.example.com/video-teacher.mp4" controls />
      </div>
      {/* Відео "Учень" */}
      <div className="video-wrapper">
        <video src="https://www.example.com/video-student.mp4" controls />
      </div>
    </div>
  );
};

export default ResponsiveVideoPlayers;






