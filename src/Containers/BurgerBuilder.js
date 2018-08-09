import React, {Component} from 'react';
import Axios from '../axios-orders';
import Burger from '../Components/Burger/Burger';
import BuildControls from '../Components/Burger/BuildControls/BuildControls'
import Aux from '../HOC/Aux';
import PopDown from '../Components/General/PopDown/PopDown';
import OrderSummary from '../Components/Burger/OrderSummary/OrderSummary';
import Spinner from '../Components/General/Spinner/Spinner';
import withErrorHandler from '../HOC/withErrorHandler';

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
        bacon: 0,
        cheese: 0,
        meat: 0
      },
      price: BASE_PRICE,
      showSummary: false,
      sendingOrder: false
    }
  }

  componentDidMount() {
    Axios.get('/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data});
      })
      .catch(error => {//do something
      });
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

  showSummaryHandler = () => {
    this.setState({showSummary: true});
  }

  hideSummaryHandler = () => {
    this.setState({showSummary: false});
  }

  checkoutHandler = () => {
   
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      customer: {
        name: 'Jog Manson',
        id: '000000000',
        address: {
          unitNo: null,
          streetNo: 999,
          streetName: 'Jogging st',
          city: 'Runsville',
          zip: 9999
        },
        email: 'jogman@test.com.cz',
        delivery: true
      }
    }

    Axios.post('/orders.json', order)
      .then(response => {
        this.setState({sendingOrder: false});
        console.log(response);
        this.setState({showSummary: false});
      })
      .catch(error => {
        this.setState({sendingOrder: false});
        console.error(error);
      });

    this.setState({sendingOrder: true});
  }

  
  render() {

    let summary = (
      <OrderSummary 
        ingredients={this.state.ingredients} 
        prices={INGREDIENT_PRICES} 
        totalPrice={this.state.price} 
        show={this.state.showSummary}
        hide={this.hideSummaryHandler}
        checkout={this.checkoutHandler}/>
    )
    
        if(this.state.sendingOrder) {
          summary = <Spinner />
        }

    return (
      <Aux>
        <PopDown show={this.state.showSummary} hide={this.hideSummaryHandler}>
          {summary}
        </PopDown>
        <div>Build your burger</div>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
          ingredients={this.state.ingredients} 
          price={this.state.price} 
          inc={this.incrementIngredient} 
          dec={this.decrementIngredients}
          showSummary={this.showSummaryHandler}/>
      </Aux>
    )
  }
}

export default withErrorHandler(BurgerBuilder, Axios);
//export default BurgerBuilder