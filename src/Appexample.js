import React, {Component} from 'react';
import Person from './components/Example/person.js'
import './App.css';

class App extends Component {

  state = {
    persons : [
      {name: "Baz", age: 20, pet: "Rosie"},
      {name: "Dan", age: 27, pet: "Billy"},
      {name: "Leona", age: 21, pet: "Lizzy"},
    ]
  }

  render(){

    const eachPerson = this.state.persons.map(person, index)=> {
      return <Person name = {person.name} age = {person.age} pet ={person.pet} key = {index}
    }
    )

    return (
      <div className = "App">
        <h1>Frequantly Asked</h1>
        {eachPerson}



        {/* <Person name="Baz" age="20" pet="Rosie"/>
        <Person name="Dan" age="27" pet="Billy"/>
        <Person name="Leona" age="21" pet="Lizzy"/> */}
      </div>
    )
  }
}

export default App;
