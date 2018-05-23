import React, { Component } from 'react';
import classes from './App.css';
import BurgerBuilder from './BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <p>Header, Toolbar and Sidebar stuff</p>
        <BurgerBuilder />
      </div>
    );
  }
}

export default App;
