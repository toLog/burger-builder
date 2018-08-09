import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../HOC/Aux';

import classes from './PopDown.css';

const popDown = (props) => {
  return (

    //can add componentShouldUpdate to optimise
    <Aux>
      <Backdrop show={props.show} hide={props.hide}/>
      <div 
        className={classes.PopDown} 
        style={{
          transform: props.show ? 'translateY(-50%)' : 'translateY(-150vh)',
          transparancy: props.show ? '1' : '0'
          }}>
        {props.children}
      </div>
    </Aux>
  )
}

export default popDown;