import React from 'react';
import './Recipe.css';

const Recipe = ({imgsrc, label, type }) => {

    return (

        <div className='recipe'>
            <div className="image-cont">
                <img src={`${imgsrc}`} />
            </div>
            <h4 title={label}>{label}</h4>
            <h6>{type}</h6>
        </div>
    )
}

export default Recipe