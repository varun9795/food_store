import { combineReducers } from "redux";
import foodReducer from './Food/food-reducer';
import ProductReducer from './Food/productReducer'
import userReducer from './User/userReducer'

const rootReducer=combineReducers({
    food: foodReducer,
    getProducts:ProductReducer,
    user:userReducer,
});

export default rootReducer;