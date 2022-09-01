import React from 'react';

const VideoPlayer = ({ id }) => {
  return (
    <div>
      <video
        src={`/api/videos?videoId=${id}`}
        width='800px'
        height='auto'
        controls
        autoPlay
        id='video-player'
      />
    </div>
  );
};

export default VideoPlayer;
