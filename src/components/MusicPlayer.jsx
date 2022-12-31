import React from 'react'
import { HiMenu } from "react-icons/hi"
import { BsSearch } from "react-icons/bs";
import pic1 from "../background/background1.jfif"
import pic2 from "../background/background2.jpg"
import pic3 from "../background/background3.jpg"
import pic4 from "../background/background4.png"
import pic5 from "../background/background5.jfif"
import Playlist from './Playlist';
import RecentlyPlayed from './RecentlyPlayed';
import MenuPlay from './MenuPlay';

const MusicPlayer = () => {
  return (
    <>
      <div className='music'>
        <div className="header">
          <HiMenu className='header-icon' />
          <div className='right-header'>
            <BsSearch className='header-icon' />
            <img src={pic1} alt="pic" />
          </div>
        </div>

        <div className="sub-header">
          <h4>Hi Lawrence,</h4>
          <p>It's time for great music!</p>
        </div>

        <div className="playlist">
          <div className="playlist-header">
            <p>Your playlist</p>
          </div>
          <div className="playlist-container">
            <Playlist name="Relaxing" img={pic1} />
            <Playlist name="My Fav" img={pic4} />
            <Playlist name="R & B" img={pic3} />
            <Playlist name="Trap" img={pic2} />
          </div>
        </div>

        <div className='recent'>
          <div className="recent-header">
            <p>Recently Played</p>
          </div>
          <div className='recent-container'>
            <RecentlyPlayed img={pic4} title="Bad Habit" name="Ed Sheeran" />
            <RecentlyPlayed img={pic3} title="So High" name="Doja Cat" />
            <RecentlyPlayed img={pic5} title="Baby Riddim" name="Fave" />
            <RecentlyPlayed img={pic1} title="All In" name="Nasty C" />
          </div>
        </div>

        <div className='radio'>
          <div className="radio-header">
            <p>Recently Played</p>
          </div>
          <div className='radio-container'>
            <RecentlyPlayed img={pic2} title="Daily Lift" name="Get in the zone with this current jams!" />
            <RecentlyPlayed img={pic4} title="Get Popoed!" name="Pop hits in the making!." />
            <RecentlyPlayed img={pic1} title="A Perfect Day" name="Timeless melodies from your favorite artists" />
            <RecentlyPlayed img={pic5} title="Just Hits" name="Current favorite and exciting new music" />
          </div>
        </div>
        <MenuPlay />
      </div>
    </>
  )
}

export default MusicPlayer;
