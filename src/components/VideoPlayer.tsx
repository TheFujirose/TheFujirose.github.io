import { useState } from 'react';
import YouTube, { type YouTubeEvent, type YouTubeProps } from 'react-youtube';
import type { ReactNode } from 'react';

/**
 * @property videoId the YouTube id of the video to play
 * @property mediaOnFail a replacement component when the video fails/errors
 */
export interface VideoPlayerProps {
  videoId: string;
  mediaOnFail?: ReactNode;
}

export const VideoPlayer = ({ videoId, mediaOnFail }: VideoPlayerProps) => {
  const [failed, setFailed] = useState(false);

  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0, // 1 = autoplay on load
    },
  };

  const onReady = (event: YouTubeEvent) => {
    // Access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  // event.data is the YouTube error code (2, 5, 100, 101, 150)
  const onError = () => {
    setFailed(true);
  };

  if (failed) {
    return <>{mediaOnFail}</>;
  }

  return <YouTube
    videoId={videoId}
    opts={opts}
    onReady={onReady}
    onError={onError}
    />
};
