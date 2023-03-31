import React from 'react';
import './Title.css'

const Title = (props) => {
    console.log(props);
    return (
        <div className='Titles'>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Title;