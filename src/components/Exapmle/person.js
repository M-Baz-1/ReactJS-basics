import React from 'react'; 
import Pet from './pet';

const Person = (props) => {
    return (
      <div>
        <p>My name is {props.name}</p>
        <Pet petName = {props.pet} />
      </div>
    )
}

export default Person;