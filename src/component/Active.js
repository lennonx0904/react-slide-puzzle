import React from 'react';
import Todo from './todo';

class Active extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            items:[],text: '', done: false, 
            id: 0,showItem: 'all'
        };  
    }


  render() {

    let items = this.props.items.filter(item => {return item.done === false});
    return (
            <div>
                {items.map(item => {
                    return(
                        <Todo 
                    key = {item.id}
                    item = {item}
                    toggleItemDone = {this.props.toggleItemDone}
                    removeItem = {this.props.removeItem}/>
                    )

                })}
            
                
            </div>
    );
  }
}

export default Active;