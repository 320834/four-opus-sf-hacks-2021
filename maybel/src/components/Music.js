import React, { useRef, useState, useEffect } from "react";
// fontawesomeicon acts as a component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import "./styles/music.css";

import chillHop from "../data";

const Music = () => {
  // STATES
  const [songs, setSongs] = useState(chillHop()); // Grab songs from data.js
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  // EVENT HANDLERS
  // update active song when currentSong changes
  useEffect(() => {
    // make a new array of updated songs, changing the active attribute
    // [].map returns an array of returned objects
    const newSongs = songs.map((s) => {
      console.log("lol");
      if (s.id === currentSong.id) {
        return { ...s, active: true };
      } else {
        return { ...s, active: false };
      }
    });
  });

  // Ref
  const audioRef = useRef(null);

  // EVENT HANDLERS

  // handles clickign play / pause button
  const playSongHandler = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const skipHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forward") {
      // % modular allows songs to loop
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } else {
      // if we reach the first song and user skips back, play the last song on list
      if ((currentIndex - 1) % songs.length === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      // else, just go back on song on the list
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
  };

  // autoplay music if user switches song while song is playing
  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  // Functions

  return (
    <div className="player">
      <div className="play-control">
        <FontAwesomeIcon
          className="skip-back"
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipHandler("back")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
          onClick={() => skipHandler("forward")}
        />
      </div>
      <audio
        onLoadedData={autoPlayHandler}
        onEnded={() => skipHandler("forward")}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Music;
