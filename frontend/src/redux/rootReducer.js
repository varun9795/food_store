import { combineReducers } from "redux";
import foodReducer from './Food/food-reducer';
import ProductReducer from './Food/productReducer'

const rootReducer=combineReducers({
    food: foodReducer,
    getProducts:ProductReducer,
});

export default rootReducer;