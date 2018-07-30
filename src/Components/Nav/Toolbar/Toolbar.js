import React from 'react';
import NavItems from '../NavItems/NavItems';

import Logo from '../../Logo/Logo';

import classes from './Toolbar.css';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <div className={classes.DrawerToggle} onClick={props.openSidedrawer}> {/* can make own component. will need to split css if so*/}
      <div></div>
      <div></div>
      <div></div>
    </div>
    <Logo />
    <nav className={classes.DesktopOnly}>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;