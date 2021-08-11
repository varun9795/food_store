import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from './redux/Food/food-actions';
import Header from './project/food/header';

const Cart=({cart,removeFromCart})=>{
    const [total,setTotal]=useState(0);
    useEffect(()=>{
       let price=0;
       cart.forEach((item)=>{
           price=price+item.qty*parseInt(item.price);
       })
       setTotal(price);
    },[cart,total,setTotal])
    return<>
        <Header/>
        <h1>Cart-Items</h1>
        <h4>Total Amount: {total} rs.</h4>
        {
            cart.map((cItem)=>{
                return <>
                    <div className="cart-item">
                        <img className="cart-img" src={cItem.img} alt="varun"/>
                        <div className="title-price">
                           <h4>{cItem.title}</h4>
                           <h4>rs {cItem.price}</h4>
                           <h6>qty: {cItem.qty}</h6>
                           <button className="btn" onClick={()=>removeFromCart(cItem.id)}>Remove item</button>
                        </div>
                    </div>
                </>
            })
            
        }
    </>
}
const mapDispatchToProps=dispatch=>{
    return{
        removeFromCart:(id)=>dispatch(removeFromCart(id)),
    }
}
const mapStateToProps=state=>{
    return{
        cart:state.food.cart,
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);