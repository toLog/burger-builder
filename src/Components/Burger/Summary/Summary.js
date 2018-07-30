import React from 'react';
import Backdrop from './Backdrop/Backdrop';
import Aux from '../../../HOC/Aux';

import classes from './Summary.css';

const Summary = (props) => {
  return (
    <Aux>
      <Backdrop show={props.show} hide={props.hide}/>
      <div 
        className={classes.Summary} 
        style={{
          transform: props.show ? 'translateY(-50%)' : 'translateY(-150vh)',
          transparancy: props.show ? '1' : '0'
          }}>
        {props.children}
      </div>
    </Aux>
  )
}

export default Summary;