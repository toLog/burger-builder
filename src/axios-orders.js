import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://react-burger-builder-18852.firebaseio.com/'
});

export default instance;