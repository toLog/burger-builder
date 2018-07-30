import React from 'react';
import Aux from '../../../../HOC/Aux';
import Button from '../../../General/Button/Button';

const orderSummary = (props) => {

  const ingKeys = Object.keys(props.ingredients);
  
  const priceTotals = {...props.ingredients};//maybe should do in burger state
  
  for (let ing in priceTotals) {
    (priceTotals[ing] *= props.prices[ing]).toFixed(2); 
  }
  //LONGLONGLONG
  const summary = ingKeys.map(ing => <li key={ing}>{props.ingredients[ing]} x <span style={{textTransform: 'capitalize'}}>{ing}</span>: ${priceTotals[ing].toFixed(2)}</li>);

  //console.log(sum);
  
  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <ul>
        {summary}
      </ul>
      <p><strong>${props.totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout?</p>
      <Button btnClass="Danger" clicked={props.hide}>Cancel</Button>
      <Button btnClass="Success">Checkout</Button>
    </Aux>
  )
}

export default orderSummary;