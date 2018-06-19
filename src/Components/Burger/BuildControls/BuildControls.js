import React from 'react';
import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.css';

const buildControls = (props) => {

  const ctrlLabels = Object.keys(props.ingredients);
  ctrlLabels.forEach((element, i) => {
    ctrlLabels[i] = element.charAt(0).toUpperCase().concat(element.slice(1)); //should i create copy?
  });
  

  return (
    <div className={classes.BulidControls}>
      {ctrlLabels.map(label => <BuildControl key={label} label={label} />)};
    </div>
 
  )
}

export default buildControls;