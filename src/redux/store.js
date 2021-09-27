import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';


const middleware = [thunk];
const cartFromLocalStorage=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[]

const INITIAL_STATE={
    food:{
        cartItems:cartFromLocalStorage
    }
}

const store=createStore(rootReducer,INITIAL_STATE,composeWithDevTools(applyMiddleware(...middleware)));

export default store;

// varun
// ankit