import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
import classes from './Burger.css';

const Burger = (props) => {

// My way ------------------------------------------
  let ingKeys = Object.keys(props.ingredients);

  let ing = [];

  ingKeys.forEach(element => {
    for(let i=0; i<props.ingredients[element]; i++) {
      ing.push(element);
    }
  });

  const ingJSX = ing.map((elem, i) => (<BurgerIngredient key={elem + i} ingredient={elem}/>));

  //His way ----------------------------------------

  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey =>{
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} ingredient={ingKey} />
      });
    })

  return (
  <div className={classes.Burger}>
    <BurgerIngredient ingredient="topBun"/>
      {transformedIngredients}
    <BurgerIngredient ingredient="bottomBun"/>
  </div>
  )
}

export default Burger;