import React, { Component } from 'react';
import { BrowserRouter, HashRouter,Route } from "react-router-dom";
import Title from './component/title';
import Input from './component/input';
import All from './component/All';
import Active from './component/Active';
import Complete from './component/Complete';
import Buttons from './component/Buttons';


class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            items:[],text: '', done: false, 
            id: 0,showItem: 'all'
        };  
    }

    changeTextState(e) {
        this.setState({text: e.currentTarget.value});
    }

    addTodoHandler(e) {
        if (e.key === 'Enter') {
            if (e.currentTarget.value !== '') {
                let newItem = {
                    text: e.currentTarget.value,
                    id: this.state.id,
                    done: false
                };
                this.state.items.push(newItem);          
            }
            this.setState({text: '', index: this.state.id += 1, items: this.state.items});
        }
    }

    removeItem(index) {
        let items = this.state.items;
        items.splice(index, 1);
        this.setState({items: items});   
    }

    toggleItemDone(e){
        let items = this.state.items;  
          
        const newItem = items.map((item) => {
            if (item.id === Number(e.currentTarget.id)) {
                item.done = !item.done
            }
            return item;
        })
        this.setState({items: newItem})
    }

    
    updateItemShow(state){
        this.setState({
            showItem: state
        });
      };


  render() {

    let items = [];
    if (this.state.showItem === "all") {
        items = this.state.items;
      } else if (this.state.showItem === "active") {
        items = this.state.items.filter(item => {return item.done === false});
      } else if (this.state.showItem === "complete") {
        items = this.state.items.filter(item => {return item.done === true});
      }

    return (
        <HashRouter>
            <div>
            <Title />
                <Input 
                    text = {this.state.text}
                    changeTextState = {this.changeTextState.bind(this)}
                    addTodoHandler = {this.addTodoHandler.bind(this)}
                    />
                
                <Route path="/" exact component={()=>{return <All items={this.state.items}
                toggleItemDone = {this.toggleItemDone.bind(this)} removeItem = {this.removeItem.bind(this)}/>}} />
                <Route path="/active" component={()=> {return <Active items={this.state.items}
                toggleItemDone = {this.toggleItemDone.bind(this)} removeItem = {this.removeItem.bind(this)}/>}} />
                <Route path="/complete" component={()=>{return <Complete items={this.state.items}
                toggleItemDone = {this.toggleItemDone.bind(this)} removeItem = {this.removeItem.bind(this)}/>}} />
                <Buttons />
            </div>   
        </HashRouter>
        
    );
  }
}

export default App;
