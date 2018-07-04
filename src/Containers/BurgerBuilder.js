import React, {Component} from 'react';
import Burger from '../Components/Burger/Burger';
import BuildControls from '../Components/Burger/BuildControls/BuildControls'
import Aux from '../HOC/Aux';
import Summary from '../Components/Burger/Summary/Summary';
import OrderSummary from '../Components/Burger/Summary/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 2,
  cheese: 1.5,
  meat: 3
};

const BASE_PRICE = 4.00;

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
      price: BASE_PRICE
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
        <Summary>
          <OrderSummary ingredients={this.state.ingredients} prices={INGREDIENT_PRICES} totalPrice={this.state.price}/>
        </Summary>
        <div>Build your burger</div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredients={this.state.ingredients} price={this.state.price} inc={this.incrementIngredient} dec={this.decrementIngredients}/>
      </Aux>
    )
  }
}

export default BurgerBuilder;