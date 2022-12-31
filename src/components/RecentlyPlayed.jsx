import React from 'react';

const RecentlyPlayed = (recent) => {
    return (
        <>
            <div className='recent-content'>
                <img src={recent.img} alt="pic" />
                <p className='title'>{recent.title}</p>
                <p className='name'>{recent.name}</p>                
            </div>
        </>
    );
}

export default RecentlyPlayed;
