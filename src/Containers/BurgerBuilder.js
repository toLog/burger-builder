import React, {Component} from 'react';
import Burger from '../Components/Burger/Burger';
import Aux from '../HOC/Aux';

import '../Components/Burger/BurgerIngredients/BurgerIngredient.css'

class BurgerBuilder extends Component {
  
  render() {
    return (
      <Aux>
        <div>Build your burger</div>
        <Burger />
      </Aux>
    )
  }
}

export default BurgerBuilder;