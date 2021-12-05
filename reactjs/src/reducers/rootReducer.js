import { FETCH_PRODUCTS,FETCH_PRODUCTS_CATEGORY, SEARCH_PRODUCTS, ADJUST_QTY, ADD_TO_CART, REMOVE_FROM_CART, LOAD_CURRENT_ITEM } from '../actions/types';

const initialStates = {
    text : "",
    products :[],
    loading: false,
    currentItem:[],
    cart:[],
    banner:[]
}

export default function (state = initialStates,action){
    switch(action.type){
        case SEARCH_PRODUCTS:
            return {
                ...state,
                text: action.payload,
                loading:false
            }
        case FETCH_PRODUCTS_CATEGORY:
            return{
              ...state,
              products: action.payload,
              loading:false
            }
        case FETCH_PRODUCTS:
                return {
                    ...state,
                    products: action.payload,
                    loading: false
                };
        case ADD_TO_CART:
            const item = state.products.find(
                (product) => product._id === action.payload.id
              );
              // Check if Item is in cart already
              const inCart = state.cart.find((item) =>
                item._id === action.payload.id ? true : false
              );
            return{
                ...state,
                cart: inCart
                  ? state.cart.map((item) =>
                      item._id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                    )
                  : [...state.cart, { ...item, qty: 1 }],
            }
        case REMOVE_FROM_CART:
        return{
            ...state,
        cart: state.cart.filter((item) => item._id !== action.payload.id),
        }
        case ADJUST_QTY:
            return{
                ...state,
                cart: state.cart.map((item) =>
                  item._id === action.payload.id
                    ? { ...item, qty: + action.payload.qty }
                    : item
                ),
            }
        case LOAD_CURRENT_ITEM:
            return{
                ...state,
        currentItem: action.payload,
            }
        default:
            return state
    }
}