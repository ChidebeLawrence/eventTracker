import { createSlice } from '@reduxjs/toolkit';
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

const initialState = {
    music: [
        {
            id: 1,
            name: "So High",
            artist: "Doja Cat",
            img: background1,
            alt: "song pic",
            src: song1,
        },
        {
            id: 2,
            name: "Over Graffiti",
            artist: "Ed Sheeran",
            img: background2,
            alt: "song pic",
            src: song2,
        },
        {
            id: 3,
            name: "Baby Riddim",
            artist: "Fave",
            img: background3,
            alt: "song pic",
            src: song3,
        },
        {
            id: 4,
            name: "Time",
            artist: "Hans Zimmer",
            img: background4,
            alt: "song pic",
            src: song4,
        },
        {
            id: 5,
            name: "All In",
            artist: "Nasty C Ft TI",
            img: background5,
            alt: "song pic",
            src: song5,
        },
        {
            id: 6,
            name: "Bad Habit",
            artist: "Ed Sheeran",
            img: background3,
            alt: "song pic",
            src: song6,
        },
    ],

    currentMusic: null,
}

const updatedInitialState = {
    ...initialState,
    currentMusic: initialState.music[0],
}

export const storeSlice = createSlice({
    name: "music",
    initialState: updatedInitialState,
    reducers: {
        playNextSong(state) {
            const currentIndex = state.music.findIndex(song => song.id === state.currentMusic.id);
            const nextIndex = (currentIndex + 1) % state.music.length;
            state.currentMusic = state.music[nextIndex];
        },
        playPrevSong(state) {
            const currentIndex = state.music.findIndex(song => song.id === state.currentMusic.id);
            let previousIndex = currentIndex - 1;
            if (previousIndex < 0) {
                previousIndex = state.music.length - 1;
            }
            state.currentMusic = state.music[previousIndex];
        },
        playSongList(state, action) {
            const { id } = action.payload;
            state.currentMusic = state.music.find(song => song.id === id);
        },
    },
})

export const { playNextSong, playPrevSong, playSongList } = storeSlice.actions;
export default storeSlice.reducer;
