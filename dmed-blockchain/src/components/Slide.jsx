import React from 'react';

const Slide = ({h1,h3,img}) => {
    return (
        <div className='slide' style={{background:`linear-gradient(#00000084,#00000076),url(${img})`}}>
         <h1>{h1}</h1>
        </div>
    );
};

export default Slide;