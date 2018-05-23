import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import classes from './Burger.css';

const Burger = (props) => {
  return (
  <div className={classes.Burger}>
    <BurgerIngredient ingredient="salad"/>
  </div>
  )
}

export default Burger;