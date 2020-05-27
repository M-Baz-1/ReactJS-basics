import React, {Component} from 'react';
import './App.css';
import pic1 from './img/1.jpeg'
import pic2 from './img/2.jpeg'
import pic3 from './img/3.jpeg'
import pic4 from './img/4.jpeg'
import Card from './Card.js';


class App extends Component {

state ={
  card: [
    {icon: pic1, rrp: "RRP £100,000", currentprice: "NOW £70,000", saveprice: "AVE £30,000", desc: "This is a fully loaded RS6 in nardo grey. It comes with 600-BHP and 730-NM of Torque. It has a 8-speed automatic gearbox witha top speed of 190 mph. This car is not fuel friendly",},
    {icon: pic2, rrp: "RRP £2.2 million", currentprice: "NOW £2 million", saveprice: "SAVE £200,000", desc: "This is the very rare ferari laferai, it is considered as a hyper-car and has an very expensive price tag. It has 850-BHP and an incredible 900-NM of Tourque.",},
    {icon: pic3, rrp: "RRP £450,000", currentprice: "NOW £300,000", saveprice: "SAVE £150,000", desc: "This is the luxurious Rolls Rolls Dawn. If you like luxurgy this car is for you. It comes with a V-12 engine with 400-BHP and 450-NM of Tourqe.",},
    {icon: pic4, rrp: "RRP £80,000", currentprice: "NOW £50,000", saveprice: "SAVE £30,000", desc: "This is the infamous supra fully loaded. It has 1000-BHP and 900-NM of Tourque. If you want supercar speeds for a fraction of the price this is your car.",},
  ]
}
  render(){
    const eachCard = this.state.card.map((card, index) => {
      return <Card icon = {card.icon} rrp = {card.rrp} currentprice = {card.currentprice} saveprice = {card.saveprice} desc = {card.desc} key = {index}/>
    })
    return (
    <div className = "app">
      {eachCard}
    </div>
    )    
  }
}

export default App;
