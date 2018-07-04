import React from 'react';

import classes from './Summary.css';

const Summary = (props) => {
  return (
    <div className={classes.Summary}>
      {props.children}
    </div>
  )
}

export default Summary;