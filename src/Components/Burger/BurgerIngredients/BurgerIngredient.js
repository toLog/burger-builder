import React from 'react';

import classes from './BurgerIngredient.css';

const BurgerIngredient = (props) => {

  let className = '';

  switch (props.ingredient) {

    case 'topBun':
      className = 'BunTop';
      return (
        <div className={classes.BunTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      )

    case 'bottomBun':
      className = 'BunBottom';
      break;

    case 'cheese':
      className = 'Cheese';
      break;

    case 'bacon':
      className = 'Bacon';
      break;

    case 'salad':
      className = 'Salad';
      break;

    case 'meat':
      className = 'Meat';
      break;

    default: 
      return null;
  }

  console.log(classes);

  return (
    <div className={classes[className]}></div>
  )
}

export default BurgerIngredient;