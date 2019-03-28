import React from 'react';
import { Link, NavLink } from "react-router-dom";

const Buttons = () => {

    return (
        <div className='buttons'>
            <div><Link to="/">All</Link></div>
            <div><Link to="/active" >Active</Link></div>
            <div><Link to='/complete'>Complete</Link></div>
        </div>
    )

} 

export default Buttons;