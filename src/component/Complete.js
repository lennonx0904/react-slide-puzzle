import React from 'react';
import Todo from './todo';

class Complete extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            items:[],text: '', done: false, 
            id: 0,showItem: 'complete'
        };  
    }

  render() {

    let items = this.props.items.filter(item => {return item.done === true});
    return (
        <div>
                {console.log('props',this.props)}
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

export default Complete;