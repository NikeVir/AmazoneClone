import {combineReducers} from 'redux';
import rootReducer from './rootReducer'
export default combineReducers({
    products : rootReducer
})