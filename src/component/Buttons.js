import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Buttons = (props) => {
    return(
        <div className='pathButtons'>
            <div className='pathButton'><Link to='/'>Slide Puzzle Game</Link></div>
            <div className='pathButton'><Link to='/ranking'>Ranking</Link></div>
        </div>
    ) 
}

export default Buttons;