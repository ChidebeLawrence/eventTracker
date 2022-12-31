import React, { useRef, useState, useEffect } from 'react'
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai"
import background1 from '../background/background1.jfif'
import background2 from "../background/background2.jpg"
import background3 from "../background/background3.jpg"
import background4 from "../background/background4.png"
import background5 from "../background/background5.jfif"
import song1 from "../song/Doja Cat - So High.mp3"
import song2 from "../song/Ed Sheeran - Overpass Graffiti.mp3"
import song3 from "../song/Fave - Baby Riddim.mp3"
import song4 from "../song/Hans Zimmer - Time (Aalson Remix).mp3"
import song5 from "../song/Nasty-C-All-In-ft-TI.mp3"
import song6 from "../song/Ed Sheeran - Bad Habits.mp3"

const MusicPlayer = () => {
  const [musicProgress, setMusicProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicLenght, setMusicLenght] = useState("00 : 00");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: "So High",
    songArtist: "Doja Cat",
    songImg: background1,
    songSrc: song1,
  });

  const currentAudio = useRef();

  const handleMusicProgress = (e) => {
    setMusicProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  };

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      setIsAudioPlaying(true);
      currentAudio.current.play();
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  }

  const convertTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  };
  

  const handleMusicEnd = () => {
    let newIndex = musicIndex + 1;
    if (newIndex >= musicList.length) {
      newIndex = 0;
    }
    setMusicIndex(newIndex);
    updateCurrentMusicDetails(newIndex);
  };
  
  const updateMusicProgress = () => {
    setMusicProgress((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setMusicLenght(convertTime(currentAudio.current.duration));
    setMusicCurrentTime(convertTime(currentAudio.current.currentTime));
  };
  
  useEffect(() => {
    currentAudio.current.addEventListener("ended", handleMusicEnd);
    const interval = setInterval(updateMusicProgress, 100);
    return () => {
      currentAudio.current.removeEventListener("ended", handleMusicEnd);
      clearInterval(interval);
    };
  }, [handleMusicEnd, updateMusicProgress]);

  const handleTimeUpdate = () => {
    setMusicProgress((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setMusicLenght(convertTime(currentAudio.current.duration));
    setMusicCurrentTime(convertTime(currentAudio.current.currentTime));
  };
  
  useEffect(() => {
    currentAudio.current.addEventListener("ended", handleMusicEnd);
    currentAudio.current.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      currentAudio.current.removeEventListener("ended", handleMusicEnd);
      currentAudio.current.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [handleMusicEnd, handleTimeUpdate]);
  
  

  const musicList = [
    {
      songName: "So High",
      songArtist: "Doja Cat",
      songImg: background1,
      songSrc: song1,
    },
    {
      songName: "Over Graffiti",
      songArtist: "Ed Sheeran",
      songImg: background2,
      songSrc: song2,
    },
    {
      songName: "Baby Riddim",
      songArtist: "Fave",
      songImg: background3,
      songSrc: song3,
    },
    {
      songName: "Time",
      songArtist: "Hans Zimmer",
      songImg: background4,
      songSrc: song4,
    },
    {
      songName: "All In",
      songArtist: "Nasty C Ft TI",
      songImg: background5,
      songSrc: song5,
    },
    {
      songName: "Bad Habit",
      songArtist: "Ed Sheeran",
      songImg: background3,
      songSrc: song6,
    },
  ]

  const updateCurrentMusicDetails = (number) => {
    const musicObject = musicList[number];
    setCurrentMusicDetails({
      songName: musicObject.songName,
      songArtist: musicObject.songArtist,
      songImg: musicObject.songImg,
      songSrc: musicObject.songSrc,
    });
    setIsAudioPlaying(true);
    currentAudio.current.pause();
    currentAudio.current = new Audio(musicObject.songSrc);
    currentAudio.current.play();
  }

  const handleNextSong = () => {
    let newIndex = musicIndex + 1;
    if (newIndex >= musicList.length) {
      newIndex = 0;
    }
    setMusicIndex(newIndex);
    updateCurrentMusicDetails(newIndex);
  };

  const handlePrevSong = () => {
    let newIndex = musicIndex - 1;
    if (newIndex < 0) {
      newIndex = musicList.length - 1;
    }
    setMusicIndex(newIndex);
    updateCurrentMusicDetails(newIndex);
  };

  const handleAudioUpdate = () => {
    const minutes = Math.floor(currentAudio.current.duration / 60);
    const seconds = Math.floor(currentAudio.current.duration % 60);
    const musicCurrent0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    setMusicLenght(musicCurrent0);

    const currentMin = Math.floor(currentAudio.current.currentTime / 60);
    const currentSec = Math.floor(currentAudio.current.currentTime % 60);
    const musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100)
    setMusicProgress(isNaN(progress) ? 0 : progress)
  }

  return (
    <div className='music'>
      <img src={background1} alt="background-img" className='background-img' />
      <audio src={currentMusicDetails.songSrc} ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate} />
      <div className='blank-div'></div>
      <div className="music-content">
        <p className='name'>Music</p>
        <p className='music-title'>{currentMusicDetails.songName}</p>
        <div className="artist">{currentMusicDetails.songArtist}</div>
        <img src={currentMusicDetails.songImg} alt="music-img" className="music-img" />
        <div className='music-time'>
          <p className='current-time'>{musicCurrentTime}</p>
          <p className='total-time'>{musicLenght}</p>
        </div>
        <input type="range" name="progressBar" value={musicProgress} onChange={handleMusicProgress} />
        <div className='music-control'>
          <BiSkipPrevious className='previous' onClick={handlePrevSong} />
          <p onClick={handleAudioPlay}>{isAudioPlaying ? <AiOutlinePauseCircle className="play-btn" /> : <AiOutlinePlayCircle className="play-btn" />}</p>
          <BiSkipNext className='forward' onClick={handleNextSong} />
        </div>
      </div>
      <div className="change-background-img">Change Background</div>
    </div >
  )
}

export default MusicPlayer;
