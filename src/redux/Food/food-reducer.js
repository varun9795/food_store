import * as actionTypes from './food-types';

const foodReducer = (state = { cartItems: [] },action)=>{
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const item = action.payload;
            //const existItem=state.cartItems.find(prod=>prod.id===action.payload.id);
            const inCart = state.cartItems.find((prod) => prod.id === item.id ? true : false);
            
            if (inCart) {
                return {
                    ...state,
                    cartItems:state.cartItems.map((prod) =>
                        prod.id === item.id ? {...prod, qty: prod.qty + 1 } : prod) 
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { ...item, qty: 1 }]
                    
                }
            }
            
        case actionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(item=>item.id!==action.payload.id),
            };
        default: 
            return state;       
    }

}

export default foodReducer;