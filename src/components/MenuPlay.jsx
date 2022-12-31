import React, { useState, useRef } from 'react'
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi"
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from "react-icons/ai"
import { IoChevronBackSharp } from "react-icons/io5"
import { MdFavorite, MdShare, MdQueueMusic } from "react-icons/md"
import { IoShuffleOutline } from "react-icons/io5"
import { useSelector, useDispatch } from 'react-redux'
import { playNextSong, playPrevSong, playSongList } from './Store'

const MenuPlay = () => {
  const [slideUp, setSlideUp] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [musicList, setMusicList] = useState(false);
  const currentMusic = useSelector(state => state.song.currentMusic);
  const music = useSelector(state => state.song.music);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const dispatch = useDispatch();
  const currentAudio = useRef()

  const handleSlide = () => {
    setSlideUp(slideUp ? false : true);


    currentAudio.current.play();
  }

  const handleFavorite = () => {
    setFavorite(!favorite)

  }

  const handleShuffle = () => {
    setShuffle(!shuffle)
  }

  const handleSongList = () => {
    setMusicList(!musicList);
  }

  const [rangeValue, setRangeValue] = useState(0);
  const [musicCurrentTime, setMusicCurrentTime] = useState("00:00");
  const [musicLenght, setMusicLenght] = useState("00:00");

  const handlePlay = () => {
    if (currentMusic && currentMusic.src) {
      currentAudio.current.play();
    }
  }

  const handlePause = () => {
    if (currentMusic && currentMusic.src) {
      currentAudio.current.pause();
    }
  }

  const handleIsMusicPlaying = () => {
    if (currentAudio.current.paused) {
      handlePlay();
      setMusicPlaying(true);
    } else {
      handlePause();
      setMusicPlaying(false);
    }
  }

  const handleNextSong = () => {
    dispatch(playNextSong());
    currentAudio.current.src = currentMusic.src;
    currentAudio.current.addEventListener('canplaythrough', () => {
      currentAudio.current.play();
    });
    setMusicPlaying(true);
  }

  const handlePrevSong = () => {
    dispatch(playPrevSong());
    currentAudio.current.src = currentMusic.src;
    currentAudio.current.addEventListener('canplaythrough', () => {
      currentAudio.current.play();
    });
    setMusicPlaying(true);
  }

  const handleRangeValue = (e) => {
    setRangeValue(e.target.value)
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }

  const handleAudioUpdate = () => {
    const rangeValue = parseInt((currentAudio.current.currentTime / currentAudio.current.duration * 100));
    setRangeValue(rangeValue);

    //Total Audio lenght
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicLenght0 = `${minutes < 10 ? `0 ${minutes}` : minutes} : ${seconds < 10 ? `0 ${seconds}` : seconds}`
    setMusicLenght(musicLenght0)

    //Total Audio current time
    let min = Math.floor(currentAudio.current.currentTime / 60);
    let sec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${minutes < 10 ? `0 ${min}` : min} : ${sec < 10 ? `0 ${sec}` : sec}`
    setMusicCurrentTime(musicCurrentT)
  }

  const handleSongClick = (id) => {
    if (id !== currentMusic.id) {
      dispatch(playSongList({ id }));
      setMusicPlaying(true);
      currentAudio.current.src = music[id].src;
      currentAudio.current.addEventListener('canplaythrough', () => {
        currentAudio.current.play();
      });
    } else {
      currentAudio.current.currentTime = 0;
      currentAudio.current.play();
    }
  }

  return (
    <>

      <div className={`menu-play ${slideUp ? "slideup" : ""}`}>
      <audio hidden src={currentMusic && currentMusic.src} ref={currentAudio} onTimeUpdate={handleAudioUpdate} onEnded={handleNextSong} />

        {slideUp && (
          <>
            <div className="slideup">
              <div className='box-nav-control'>
                <IoChevronBackSharp onClick={handleSlide} className='music-box-icon' />
              </div>
              <img src={currentMusic.img} alt={currentMusic.alt} className="current-img" />
              <div className='info'>
                <div className='music-details'>
                  <p className='name'>{currentMusic.name}</p>
                  <p className='artist'>{currentMusic.artist}</p>
                </div>
                <div className='detail-icon'>
                  <MdFavorite onClick={handleFavorite} className={`icon ${favorite ? "active" : ""}`} />
                  <MdShare className='icon' />
                </div>
              </div>
              <div className='input'>
                <input type="range" name="range"
                  min="0" max="100" value={String(rangeValue)}
                  onChange={handleRangeValue}
                />
                <div className='time'>
                  <p>{musicCurrentTime}</p>
                  <p>{musicLenght}</p>
                </div>
              </div>
              
              <div className="control">
                <MdQueueMusic onClick={handleSongList} className='control-icon' />
                <BiSkipPrevious className='control-icon' onClick={handlePrevSong} />
                <p onClick={handleIsMusicPlaying}>{musicPlaying ? (
                  <AiOutlinePauseCircle className='control-icon play' onClick={handlePlay} />
                ) : (
                  <AiOutlinePlayCircle className='control-icon play' onClick={handlePause} />
                )}</p>

                <BiSkipNext className='control-icon' onClick={handleNextSong} />
                <IoShuffleOutline onClick={handleShuffle} className={`control-icon ${shuffle ? "active" : ""}`} />
              </div>
            </div>

            {musicList && (<div className='song-list'>
              <div className='border' onClick={handleSongList}></div>
              {music.map((song) => (
                <ul className="song" key={song.id} onClick={() => handleSongClick(song.id)}>
                  <li>
                    <div className='song-details'>
                      <img src={song.img} alt="song-img" />
                    </div>
                  </li>
                  <li>
                    <div className='song-details'>
                      <p>{song.name}</p>
                      <p className='artist'>{song.artist}</p>
                    </div>
                  </li>
                </ul>
              ))}
            </div>)}
          </>
        )}

        {
          !slideUp && (
            <>
              <img src={currentMusic.img} alt={currentMusic.alt} className="menu-img" />
              <div className='music-details' onClick={handleSlide}>
                <p className='music-name'>{currentMusic.name}</p>
                <div className="music-artist">{currentMusic.artist}</div>
              </div>
              <div className="music-control">
                <BiSkipPrevious className='music-icon' onClick={handlePrevSong} />
                <p onClick={handleIsMusicPlaying}>{musicPlaying ? (
                  <AiOutlinePauseCircle onClick={handlePlay} className='control-icon play music-icon' />
                ) : (
                  <AiOutlinePlayCircle onClick={handlePause} className='control-icon play music-icon' />
                )}</p>
                <BiSkipNext className='music-icon' onClick={handleNextSong} />
              </div>
            </>
          )}
      </div>

    </>
  )
}

export default MenuPlay;
