import React, {Component} from 'react';
import './App.css';



class App extends Component {

  //states
  state ={
    numbers: [1,2,3,4],
    currentNumber: "",
    showingNumber: true,
  }
  //Method here
  recordNumber = (event) => {
    console.log(event.target.value)
    this.setState({
      currentNumber: event.target.value
    })
  }
  addNumber = (number) => {
    this.setState ({
      numbers:[...this.state.numbers, this.state.currentNumber],
      currentNumber:""
    })
  }
  showNumbers = () => {
    let show = this.state.showingNumbers;
    this.setState ({
      showingNumbers: !show
    })
  }
    //Render 
    render(){
      //Variables
      let eachNumber = this.state.numbers.map((number, index) => {
        return <li key = {index}>{number}</li>
        })
    //Return
      return (
      <div className = "app">
        <h1>React state part two</h1>
        <ul>{this.state.showingNumbers ? eachNumber : null}</ul>
        <input type="number" onChange = {this.recordNumber} value = {this.state.currentNumber}/>
        <button onClick = {this.addNumber}>Add Number</button>
        <button onClick = {this.showNumbers}>Show/Hide</button>
      </div>
      )
    }
  }

export default App;
