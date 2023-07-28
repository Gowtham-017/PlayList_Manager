import React from 'react';
import './MusicOverlay.css';

const MusicOverlay = ({ songDetails, isPlaying, onPlayPauseClick }) => {
  return (
    <div className="music-overlay">
      <div className="song-details">
        <h3>{songDetails.title}</h3>
        <p>{songDetails.artist}</p>
      </div>
      <div className="playback-controls">
        <button
          className={`playback-btn ${isPlaying ? 'pause' : 'play'}`}
          onClick={onPlayPauseClick}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        {/* Add other playback control buttons here */}
      </div>
    </div>
  );
};

export default MusicOverlay;
