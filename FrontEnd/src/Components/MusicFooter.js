import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaForward, FaBackward } from 'react-icons/fa';
// import './MusicFooter.css';

const MusicFooter = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    // Update current time of the audio element
    const updateTime = () => setCurrentTime(audioRef.current.currentTime);
    audioRef.current.addEventListener('timeupdate', updateTime);
    return () => audioRef.current.removeEventListener('timeupdate', updateTime);
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleForward = () => {
    // Add logic to move to the next track in your implementation
  };

  const handleBackward = () => {
    // Add logic to move to the previous track in your implementation
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="">
        <h1>gelo</h1>
      {/* <audio ref={audioRef} src="your_song_url.mp3" />
      <div className="player-controls">
        <button onClick={handleBackward}>
          <FaBackward />
        </button>
        <button onClick={handlePlayPause}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={handleForward}>
          <FaForward />
        </button>
      </div>
      <div className="track-progress">
        <div
          className="progress-bar"
          style={{ width: `${(currentTime / audioRef.current.duration) * 100}%` }}
        />
      </div>
      <div className="current-time">{formatTime(currentTime)}</div> */}
    </div>
  );
};

export default MusicFooter;
