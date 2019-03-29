import React from 'react';
import Header from './Header';
import Main from './Main/Main';

const correctArr = [1,2,3,4,5,6,7,8,9];
const puzzles = document.getElementsByClassName('puzzle');

class Game extends React.Component {
    constructor(props){
        super(props);
 
        this.state = {
            name: '',
            shuffleArr: [1,2,3,4,5,6,7,8],
            count: 0
        }
    }

    shuffle = (shuffleArr) => {
        let i, j, temp;
        if (shuffleArr.includes(9)){
            const index = shuffleArr.findIndex(e => e == 9);
            shuffleArr.splice(index, 1)
        }
        for (i = shuffleArr.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = shuffleArr[i];
            shuffleArr[i] = shuffleArr[j];
            shuffleArr[j] = temp;
        }
        shuffleArr.push(9) 
        return shuffleArr;
    } 
    
    setPuzzle = () => {
        for (let i = 0; i < 9; i++) {
            puzzles[i].setAttribute('id', this.state.shuffleArr[i]);
            puzzles[i].textContent = this.state.shuffleArr[i];
            puzzles[i].style.backgroundColor = '#ffffff';
        }   
        document.getElementById('9').textContent = '';
        document.getElementById('9').style.backgroundColor = '#878787'; 
    }
    startGame = () => {
        const name = document.querySelector('.name').value;
        if ( name !== ''){
            this.setState({name: name})
            this.shuffle(this.state.shuffleArr);
            this.setPuzzle();
        }
        this.setState({count: 0});
    }

    playGame = (e) => {
        let targetId = e.target.id;
        let indexOfTarget = this.state.shuffleArr.findIndex((element) => element == targetId);
        let indexOfBlank = this.state.shuffleArr.findIndex((element) => element == 9);     
        this.switchPuzzle = () => {
            this.state.shuffleArr.splice(indexOfTarget, 1, 9);
            this.state.shuffleArr.splice(indexOfBlank, 1, Number(targetId));
            this.setPuzzle();    
        }
        // 判斷式分隔線
        if (indexOfBlank % 3 == 0){
            if (indexOfTarget == indexOfBlank + 1 || indexOfTarget == indexOfBlank + 3|| indexOfTarget == indexOfBlank - 3) {
                this.switchPuzzle();
                this.setState({count: this.state.count += 1})
            } else {
                return;
            }
        } 
        if (indexOfBlank % 3 == 1) {
           if (indexOfTarget == indexOfBlank + 1 || indexOfTarget == indexOfBlank -1 || indexOfTarget == indexOfBlank + 3|| indexOfTarget == indexOfBlank - 3) {
                this.switchPuzzle();
                this.setState({count: this.state.count += 1})
            } else {
                return;
            }
        }   
        if (indexOfBlank % 3 == 2){
            if (indexOfTarget == indexOfBlank -1 || indexOfTarget == indexOfBlank + 3|| indexOfTarget == indexOfBlank - 3) {
                this.switchPuzzle();
                this.setState({count: this.state.count += 1})
            } else {
                return;
            }
        } 
    }
    

    complete = () => {
        alert('恭喜你完成了！');
        localStorage.setItem('record',  
        JSON.stringify({
                ranking: 1,
                name: this.state.name,
                steps: this.state.count
            })
        );
    }
            
 
    
        render(){
            return (
                <div>
                    {console.log('this.state',this.state.shuffleArr)}
                    {console.log(this.state.shuffleArr.toString() === correctArr.toString())} 
                    {this.state.shuffleArr.toString() === correctArr.toString() ? setTimeout(this.complete(), 5000)  : null}
                    <Header 
                    startGame={this.startGame.bind(this)}/>
                    <Main
                    count={this.state.count} 
                    playGame={this.playGame.bind(this)}/>
                </div>
            )
     
        }
    
  }


export default Game;
