import * as actionTypes from "./food-ProductTypes";

 const getProductReducer = (state = { products: [] }, action) => {
    
    switch (action.type) {
        case actionTypes.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
                isAuthenticated:false,
            }
        
        case actionTypes.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                isAuthenticated:true,
            }
        
        case actionTypes.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload,
                isAuthenticated:false,
            };
        
        default:
            return state;
    }
};

export default getProductReducer;
