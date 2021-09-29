import { SEARCH_PRODUCTS,FETCH_PRODUCTS} from './types';
import axios from 'axios';

export const searchProduct = text =>dispatch=>{
    dispatch({
        type:SEARCH_PRODUCTS,
        payload:text
    });
};
export const fetchProducts = text => dispatch => {
    // axios.get(`http://www.omdbapi.com/?apikey=e5197d64&q=${text}`)
    axios.get(`http://localhost:4000/app/search/${text}`)
    
    .then(response =>
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response.data
    })).catch(err => console.log(err));
  };