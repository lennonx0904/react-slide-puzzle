import React from 'react';
import Counter from './Counter';
import Puzzle from './Puzzle';


class Main extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <main>
                <Counter count={this.props.count}/>
                <Puzzle playGame={this.props.playGame}/>
            </main>
        )
    }


}

export default Main;