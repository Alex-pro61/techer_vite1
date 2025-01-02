import { Box, Grid2 } from '@mui/material';

const VideoWindow = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ backgroundColor: 'lightgray', width: '100%', height: '100%' }}>
            {/* Відео вчителя */}
            <video width="100%" height="100%" controls>
              <source src="teacher-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Grid2>
        <Grid2 xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box sx={{ backgroundColor: 'lightgray', width: '100%', height: '100%' }}>
            {/* Відео учня */}
            <video width="100%" height="100%" controls>
              <source src="student-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default VideoWindow;


