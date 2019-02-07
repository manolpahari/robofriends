import React from 'react';

const Card = (props) => {
    return (
        <div className="tc bg-light-green dib pa3 ma2 br2 bw2 grow shadow-5">    
            <img src={`https://robohash.org/${props.id}?200x200`} alt='robots'/>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}
export default Card;