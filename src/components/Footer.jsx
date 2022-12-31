import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import { ImHome3 } from "react-icons/im"
import { MdExplore, MdFavoriteBorder } from "react-icons/md"
import MusicPlayer from './MusicPlayer';
import Explore from "./Explore"
import Favorite from './Favorite';

const Footer = () => {
    return (
        <>
            <Routes>
                <Route path='/home' element={<MusicPlayer />} />
                <Route index element={<MusicPlayer />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/favorite' element={<Favorite />} />
            </Routes>

            <ul className='footer'>
                <li>
                    <NavLink to="/"><ImHome3 />Home</NavLink>
                </li>
                <li>
                    <NavLink to="/explore"><MdExplore />Explore</NavLink>
                </li>
                <li>
                    <NavLink to="/favorite"><MdFavoriteBorder />Favorite</NavLink>
                </li>
            </ul>
        </>
    );
}

export default Footer;
