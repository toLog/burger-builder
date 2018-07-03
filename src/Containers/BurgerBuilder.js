import React, {Component} from 'react';
import Burger from '../Components/Burger/Burger';
import BuildControls from '../Components/Burger/BuildControls/BuildControls'
import Aux from '../HOC/Aux';

const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 2,
  cheese: 1.5,
  meat: 3
};

class BurgerBuilder extends Component {

  constructor() {
    super();

    this.state = {
      ingredients: {
        salad: 0,
        bacon:0,
        cheese: 0,
        meat: 0
      },
      price: 4
    }
  }

  incrementIngredient = (ing) => {
    const ings = {...this.state.ingredients};
    const oldPriceTotal = this.state.price;

    ings[ing]++;

    this.setState({ingredients: ings, price: oldPriceTotal + INGREDIENT_PRICES[ing]});
  }

  decrementIngredients = (ing) => {
    const ings = {...this.state.ingredients};
    const oldPriceTotal = this.state.price;

    if (ings[ing] < 1) return;

    ings[ing]--;

    this.setState({ingredients: ings, price: oldPriceTotal - INGREDIENT_PRICES[ing]});
  }
  
  render() {
    return (
      <Aux>
        <div>Build your burger</div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredients={this.state.ingredients} price={this.state.price} inc={this.incrementIngredient} dec={this.decrementIngredients}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;