import Navbar from './components/Navbar';
//import VideoWindow from './components/VideoWindow';
//import VideoWindow1 from './components/VideoWindow1';
//import VideoPlayer from './components/VideoPlayer'; // Імпорт компонента VideoPlayer
//import ResponsiveVideoPlayers from './components/ResponsiveVideoPlayers'; // Імпорт компонента ResponsiveVideoPlayers
import ResponsiveVideoPlayers1 from './components/ResponsiveVideoPlayers1'; // Зміна ім'я імпорту

function App() {
  return (
    <div className="App">
      <Navbar />
      {/*<VideoWindow />*/}
      {/*<VideoWindow1 />*/}
      {/*<VideoPlayer url="https://www.example.com/video.mp4" /> {/* Додавання компонента VideoPlayer */}
      {/*<ResponsiveVideoPlayers /> /* Додавання компонента ResponsiveVideoPlayers */}
      <ResponsiveVideoPlayers1 /> {/* Додавання компонента ResponsiveVideoPlayers1 */}
    </div>
  );
}

export default App;


