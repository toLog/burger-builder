import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {

  // const ctrlLabels = Object.keys(props.ingredients);
  // ctrlLabels.forEach((element, i) => {
  //   ctrlLabels[i] = element.charAt(0).toUpperCase().concat(element.slice(1)); //should i create copy?
  // });

  let ing = props.ingredient;

  return (
    <div className={classes.BuildControl}>
      <button className={classes.Less} onClick={() => props.dec(ing)}>-</button>
      <div className={classes.Label}>{ing.charAt(0).toUpperCase().concat(ing.slice(1))}</div>
      <button className={classes.More} onClick={() => props.inc(ing)}>+</button>
    </div>
  )
}

export default buildControl;