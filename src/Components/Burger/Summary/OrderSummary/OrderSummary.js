import React from 'react';
import Aux from '../../../../HOC/Aux';

const orderSummary = (props) => {

  const ingKeys = Object.keys(props.ingredients);
  
  const priceTotals = {...props.ingredients};//maybe should do in burger state
  
  for (let ing in priceTotals) {
    (priceTotals[ing] *= props.prices[ing]).toFixed(2); 
  }
  
  const summary = ingKeys.map(ing => <li key={ing}>{props.ingredients[ing]} x <span style={{textTransform: 'capitalize'}}>{ing}</span>: ${priceTotals[ing]}</li>);

  //console.log(sum);
  
  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <ul>
        {summary}
      </ul>
      <p><strong>${props.totalPrice.toFixed(2)}</strong></p>
      <p>CHECKOUT</p>
    </Aux>
  )
}

export default orderSummary;