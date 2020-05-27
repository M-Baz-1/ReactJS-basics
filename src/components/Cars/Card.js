import React from 'react';
import Pics from './Pics.js';
import Prices from './Prices.js';
import Desc from './Desc.js';

const Card = (props) => {
    return(
      <div className="carContainer">
        <Pics icon = {props.icon} />
        <Prices rrp = {props.rrp} currentprice = {props.currentprice} saveprice = {props.saveprice}/>
        <Desc desc = {props.desc} />  
      </div> 
    )
  }

export default Card;