import { SEARCH_PRODUCTS,USER_AUTHENTICATION,FETCH_PRODUCTS,FETCH_PRODUCTS_CATEGORY,ADJUST_QTY,ADD_TO_CART,REMOVE_FROM_CART,LOAD_CURRENT_ITEM} from './types';
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


  export const fetchProductsCategory = text => dispatch => {
    axios.get(`http://localhost:4000/app/searchcategory/${text}`)   
    .then(response =>
    dispatch({
      type: FETCH_PRODUCTS_CATEGORY,
      payload: response.data
    })).catch(err => console.log(err));
  };


  export const addToCart = (itemID) =>{
    return{
      type: ADD_TO_CART,
      payload:{
        id:itemID
      }
    }
  };

  export const removeFromCart = (itemID) =>{
    return{
      type:REMOVE_FROM_CART,
      payload:{
        id:itemID
      }
    }
  };

  export const adjustItemQty =(itemID,value) =>{
    return{
      type:ADJUST_QTY,
      payload:{
        id:itemID,
        qty: value
      }
    }
  };

  export const loadcurrentItem = (item) =>{
    return{
      type:LOAD_CURRENT_ITEM,
      payload:item
    }
  };