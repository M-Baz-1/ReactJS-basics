import React from 'react';

const Prices = (props) => {
    return(
        <div className="price">
            <p>{props.rrp}</p>
            <p>{props.currentprice}</p>
            <p>{props.saveprice}</p>
        </div>
    )
}

export default Prices;