import React from 'react';

const Todo = (props) => {

    const {item} = props;

    return(
        <div className='list'>
            <div className='circle' id={item.id} onClick={props.toggleItemDone}></div>
            <i className={item.done ? "fas fa-check check" : "fas fa-check check hidden"} ></i>
            <div className={item.done ? "todo done" : "todo"} >{item.text}</div>
            <i className="fas fa-times remove"  onClick={props.removeItem}></i>
        </div>
    )

}    
    
export default Todo;