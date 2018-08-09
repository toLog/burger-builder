import React, {Component} from 'react';
import Axios from '../axios-orders';
import Aux from './Aux';
import PopDown from '../Components/General/PopDown/PopDown';


const withErrorHandler = (WrappedComponent, axios) => {

  return class extends Component {
    
    state = {
      error: null
    }
  
    componentWillMount() {
      this.reqInterceptor = Axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });

      this.resInterceptor = Axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    componentDidUnmount() {
      Axios.interceptor.request.eject(this.reqInterceptor);
      Axios.interceptor.response.eject(this.resInterceptor);
    }

    errorAcknowledgedHandler = () => {
      this.setState({error: null});
    }

    render() {
      return(
        <Aux>
          <PopDown show={this.state.error != null} hide={this.errorAcknowledgedHandler}>
            {this.state.error ? this.state.error.message : null}
          </PopDown>
          <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withErrorHandler;