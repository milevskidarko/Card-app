import React from "react";

const Card = ({ cardName, cardImage, buttonLink, tag, location }) => (

    <div className="card">
        <img src={`/images/${cardImage}.jpg`} alt="/" />
        <div className="container">
            <div className='titleInner'>
                <h4><b>{cardName}</b></h4>
                <i className="far fa-heart"></i>
            </div>
            <span><i className="fas fa-location-arrow"></i>{location}</span>
            <div className='tags'>
                {tag.map((el, subindex) =>
                    <a href={'http://google.com'} className='a' key={subindex}>{el.tag}</a>)
                }
            </div>
            <div>
                <button>{buttonLink} <i className="fas fa-chevron-right"></i></button>
            </div>
        </div>
    </div>
);

export default Card;