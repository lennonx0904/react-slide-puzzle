import React from 'react';

const Counter = (props) => {    
    return(
        <div className="counterContainer">
            <label>Step Count:</label>
            <div className="counter">{props.count}</div>
        </div>
    )
}

export default Counter;