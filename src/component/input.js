import React from 'react';

class Input extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
            
            <input className='input' type='text' 
            placeholder = 'todo...' 
            value = {this.props.text}
            onChange = {this.props.changeTextState}
            onKeyPress = {this.props.addTodoHandler}/>        
        )
    }

    
    

}


export default Input;