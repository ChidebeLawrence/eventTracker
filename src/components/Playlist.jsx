import React from 'react';

const Playlist = (playlist) => {
    return (
        <>
            <div className='playlist-content'>
                <img src={playlist.img} alt="pic" />
                <p>{playlist.name}</p>
            </div>
        </>
    );
}

export default Playlist;
