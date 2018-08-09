import React from 'react';
import NavItems from '../NavItems/NavItems';
import Backdrop from '../../General/Backdrop/Backdrop';
import Aux from '../../../HOC/Aux';

import Logo from '../../Logo/Logo';

import classes from './SideDrawer.css';

const sideDrawer = (props) => {

  let sidedrawClasses = [classes.SideDrawer];

  if(props.open) {
    sidedrawClasses.push(classes.Open);
  }
  else {
    sidedrawClasses.push(classes.Closed);
  }
  return (
    <Aux>
      <Backdrop show={props.open} hide={props.close}/>
      <div className={sidedrawClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Aux>
  )
};

export default sideDrawer;