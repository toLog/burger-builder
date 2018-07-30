import React, { Component } from 'react';
import classes from './App.css';
import BurgerBuilder from './BurgerBuilder';
import Toolbar from '../Components/Nav/Toolbar/Toolbar';
import SideDrawer from '../Components/Nav/SideDrawer/SideDrawer';

class App extends Component {

  constructor() {
    super();
    this.state = {sidedrawOpen: false};
  }

  closeSidedrawHandler = () => {
    this.setState({sidedrawOpen: false})
  }

  openSidedrawHandler = () => {
    this.setState({sidedrawOpen: true})
  }
  
  render() {
    return (
      <div>
        <Toolbar openSidedrawer={this.openSidedrawHandler}/>
        <SideDrawer open={this.state.sidedrawOpen} close={this.closeSidedrawHandler}/>
        <BurgerBuilder />
      </div>
    );
  }
}

export default App;
