import React from 'react';

const Puzzle = (props) => {
    return(
        <div className="puzzleContainer" onClick={props.playGame}>
            <div className="puzzle"></div>
            <div className="puzzle"></div>
            <div className="puzzle"></div>
            <div className="puzzle"></div>
            <div className="puzzle"></div>
            <div className="puzzle"></div>
            <div className="puzzle"></div>
            <div className="puzzle"></div>
            <div className="puzzle"></div>                
        </div>
    )
}

export default Puzzle;