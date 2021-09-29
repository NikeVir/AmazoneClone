import { FETCH_PRODUCTS, SEARCH_PRODUCTS } from '../actions/types';

const initialStates = {
    text : "",
    products :[],
    loading: false,
    product:[]
}
export default function (state = initialStates,action){
    switch(action.type){
        case SEARCH_PRODUCTS:
            return {
                ...state,
                text: action.payload,
                loading:false
            }
        case FETCH_PRODUCTS:
                return {
                    ...state,
                    products: action.payload,
                    loading: false
                };
            default:
                return state
    }
}