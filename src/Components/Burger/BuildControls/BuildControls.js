import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const buildControls = (props) => {

   const ctrlLabels = Object.keys(props.ingredients);
 
   return (
    <div className={classes.BuildControls}>
      <p>TOTAL PRICE: <strong>${props.price.toFixed(2)}</strong></p>
      {ctrlLabels.map(label => <BuildControl key={label} ingredient={label} inc={props.inc} dec={props.dec}/>)}
      { <button className={classes.OrderButton}>ORDER NOW!</button> /*should disable? */}
    </div>
  )
}

export default buildControls;