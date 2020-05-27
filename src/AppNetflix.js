import React, {Component} from 'react';
import './App.css';

const Box = (props) => {
  return(
    
    <div id="each">
       <p>{props.content} ?</p>
       <p>+</p>
    </div>
  )
}




class App extends Component {
  render(){
    return (

    <div className = "container">

      <div className ="inner">


         <h1 className= "faq">Frequantly Asked Questons</h1> 
        
          
            <div className = "questions">

              <Box content=" What is Netflix"/>
              <Box content=" How much does Netflix cost"/>
              <Box content=" Where can i watch"/>
              <Box content=" How do I cancel"/>
              <Box content=" What can I watch on Netflix"/>
              <Box content=" How does the free trial work"/>

              <p id="free">TRY 30 DAYS FOR FREE ></p>
            </div>




      </div>
    </div>

    )
    
  }
}

export default App;
