import React, { Component } from 'react';
import { BrowserRouter, HashRouter,Route } from "react-router-dom";
import Buttons from './component/Buttons';
import Game from './component/Game/Game';
import Ranking from './component/Ranking';

class App extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <HashRouter>
                <Buttons />
                <Route exact path='/'  component={Game} />
                <Route path='/ranking'  component={Ranking} />
            </HashRouter>
        )
    }
  }


export default App;
