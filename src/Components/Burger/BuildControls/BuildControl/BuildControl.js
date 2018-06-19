import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <button className={classes.Less}>-</button>
      <div className={classes.Label}>{props.label}</div>
      <button className={classes.More}>+</button>
    </div>
  )
}

export default buildControl;