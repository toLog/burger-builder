import React, {Component} from 'react';
import Burger from '../Components/Burger/Burger';
import Aux from '../HOC/Aux';

import '../Components/Burger/BurgerIngredients/BurgerIngredient.css'

class BurgerBuilder extends Component {

  constructor() {
    super();

    this.state = {
      ingredients: {
        salad: 1,
        cheese: 2,
        bacon:1,
        meat: 2
      }
    }
  }
  
  render() {
    return (
      <Aux>
        <div>Build your burger</div>
        <Burger ingredients={this.state.ingredients}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;