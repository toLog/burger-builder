import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const buildControls = (props) => {

   const ctrlLabels = Object.keys(props.ingredients);
  // ctrlLabels.forEach((element, i) => {
  //   ctrlLabels[i] = element.charAt(0).toUpperCase().concat(element.slice(1)); //should i create copy?
  // });
console.log();

const divStyle = {
  width: '100%',
  backgroundColor: '#CF8F2E',
  display: 'flex',
  flexFlow: 'column',
  alignItems: 'center',
  boxShadow: '0 2px 1px #ccc',
  margin: 'auto',
  padding: '10px 0'
};
  return (
    <div className={classes.BuildControls}>
      <p>TOTAL PRICE: <strong>${props.price.toFixed(2)}</strong></p>
      {ctrlLabels.map(label => <BuildControl key={label} ingredient={label} inc={props.inc} dec={props.dec}/>)}
    </div>
  )
}

export default buildControls;