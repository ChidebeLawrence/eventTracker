import React from 'react';

const Radio = (radio) => {
    return (
        <>
            <div className='radio-content'>
                <img src={radio.img} alt="pic" />
                <p className='title'>{radio.title}</p>
                <p className='name'>{radio.name}</p>
            </div>
        </>
    );
}

export default Radio;
