import * as actionTypes from './food-types';
import axios from 'axios';

export const addToCart = (itemID) => async (dispatch,getState ) => {
    const { data } = await axios.get(`/api/products/${itemID}`);
    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: data._id,
            title: data.title,
            img: data.img,
            price: data.price,

            
        }
    })
    localStorage.setItem('cart',JSON.stringify(getState().food.cartItems))
}

export const removeFromCart = (itemID) =>(dispatch,getState)=> {
    
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
            payload: {
                id: itemID
            }

    })
    localStorage.setItem('cart',JSON.stringify(getState().food.cartItems))
};