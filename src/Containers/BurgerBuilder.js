import React, {Component} from 'react';
import Burger from '../Components/Burger/Burger';
import BuildControls from '../Components/Burger/BuildControls/BuildControls'
import Aux from '../HOC/Aux';

class BurgerBuilder extends Component {

  constructor() {
    super();

    this.state = {
      ingredients: {
        salad: 0,
        bacon:0,
        cheese: 0,
        meat: 0
      }
    }
  }

  incrementIngredient = () => {
    const ing = 'salad';
    
    const ings = {...this.state.ingredients};
    ings[ing]++;
    console.log(ings);

    this.setState({ingredients: ings});
  }
  
  render() {
    return (
      <Aux>
        <div>Build your burger</div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredients={this.state.ingredients} inc={this.incrementIngredient}/>
        <button onClick={this.incrementIngredient}>inc</button>
      </Aux>
    )
  }
}

export default BurgerBuilder;