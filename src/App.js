import React, { Component } from 'react';
import stone from './stone.png';
import paper from './paper.png';
import scissor from './scissor.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const weapons=[stone,paper,scissor];

class App extends Component{
  
  state={
    playerOne:stone,
    playerTwo:stone,
    winner:"Can we play the game?"
  }


  setimg1=()=>{
    this.setState({playerOne:stone})
  }

  setimg2=()=>{
    this.setState({playerOne:paper})
  }

  setimg3=()=>{
    this.setState({playerOne:scissor})
  }


  startGame=async ()=>{
    var res=(await weapons[Math.floor(Math.random()*weapons.length)])
      this.setState({
        playerTwo:res
    })
    this.selectWinner()
  }

  
  selectWinner(){
    const playerOne=this.state.playerOne;
    const playerTwo=this.state.playerTwo;
    if(playerOne==playerTwo){
      this.setState({winner:"Oops it a tie!!"}) 
    }
    else if((playerOne===stone&&playerTwo===scissor)||(playerOne===scissor&&playerTwo===paper)||(playerOne===paper)&&(playerTwo===stone))
    {
      this.setState({winner:"PlayerOne is the winner!!"})
    }
    else
    {
      this.setState({winner:"PlayerTwo is the winner!!"})
    }
  }

  render()
  {
    
    return (
      <div className="bg">
        <div align="center" className="label text-white"><h1>STONE PAPER SCISSOR</h1></div>
        <div className="container">
          <div className="row row-align">
              <img src={this.state.playerOne} className="col-12 col-sm-6 img"></img>
              <img src={this.state.playerTwo} className="col-12 col-sm-6 img"></img>  
           </div>
          <div className="row">
            <button className="item-btn btn btn-dark"  onClick={this.setimg1}>Stone</button>
            <button className="item-btn btn btn-dark" onClick={this.setimg2}>Paper</button>
            <button className="item-btn btn btn-dark" onClick={this.setimg3}>Scissor</button>
          </div>
          <div className="row">
            <div className="winner text-white">{this.state.winner}</div>
          </div>
          <div className="row">
            <button type="button" className="start-btn btn btn-dark" onClick={this.startGame} >Start Game</button>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
