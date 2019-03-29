import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props)
        const {shuffle, setPuzzle, shuffleArr} = props;
    }   
    // startGame = () => {
    //     this.props.shuffle(shuffleArr);
    //     this.props.setPuzzle();
    //     this.setState(count, 0);
    // }

    render(){
        return (
            <header>
                <input className="name" type='text' placeholder="name"/>
                <div className="start" onClick={this.props.startGame}>start</div>
            </header>
        )
    }
}

export default Header;