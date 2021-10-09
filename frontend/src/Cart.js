import React, { useState,useEffect } from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from './redux/Food/food-actions';
// import Header from './project/food/header';
import "./cart.css"
// import Footer from './project/food/Footer'
import { useSelector } from 'react-redux';
import {useHistory} from "react-router-dom";

const Cart = ({ removeFromCart }) => {
    
    
  const history = useHistory();

    const [total, setTotal] = useState(0);
    const [len, setLen] = useState(0);

    // const dispatch = useDispatch();
    const cart = useSelector(state=>state.food);
    const { cartItems } = cart;

    useEffect(()=>{
        let price = 0;
        let count = 0;
        cartItems.forEach((item) => {
           count+= item.qty;
           price=price+item.qty*parseInt(item.price);
        })
        setTotal(price);
        setLen(count);
    },[cartItems,total,len,setLen,setTotal])
    return <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
        {
            len > 0 ?
                <div className="cart">
                    <section className="heading">
                        <h1>Items in your Cart({len}) </h1>
                    </section>
                    <div className="col-lg-12 p-3 bg-white rounded shadow-sm mb-4">
                    <div className="table-responsive">
                        <table class="table">
                         <thead>
                        <tr>
                        <th scope="col" class="border-0 bg-light">
                            <div class="p-2 px-3 text-uppercase">Item</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Price</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Qty</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Subtotal</div>
                        </th>
                        <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Remove</div>
                        </th>
                        </tr>
                    </thead>
                     {
                            cartItems.map((cItem) => {
                        return <>
                        <tbody>
                                <tr>
                                  <th scope="row" className="border-0">
                                   <div className="p-2">
                                    <img src={cItem.img} alt=""  class="img-fluid rounded shadow-sm"/>
                                    <div class="ml-3 d-inline-block align-middle">
                                       <h5 class="mb-0">{cItem.title}</h5>
                                   </div>
                                  </div>
                                  </th>
                                    <td class="border-0 align-middle">
                                        <h4>Rs.{cItem.price}</h4></td>
                                            <td class="border-0 align-middle" >
                                              <h4>{cItem.qty}</h4>
                                             </td>
                                            <td class="border-0 align-middle">
                                                <h4>Rs.{cItem.price * cItem.qty}</h4>
                                    </td>
                                    <td class="border-0 align-middle" >
                                        <a href="#"  className="iconn"><i className="fa fa-trash" onClick={() => removeFromCart(cItem.id)}></i></a>
                                    </td>
                                       
                          </tr>
                          </tbody>
                                </>
                            })
                        }
                        </table>
                        {/* /* </div> */}
                        </div> 
                        </div>
                    <div className="totalprice">
                        <div className="inner-total">
                        <h4>Total Amount: Rs.{total}</h4>
                        <button className="bttnn" onClick={()=>alert("THANKYOU")}>Proceed to Pay</button>
                        </div>
                        </div>
                </div>
                : <>
                    <div className="empty-cart">
        
                        <img className="empty-cart-img" src="https://chillydraji.files.wordpress.com/2015/08/empty_cart.jpeg?w=300&h=221" alt="" />
                        <h2>Oops!!! Your Cart is Empty</h2>
                        <button className="bttnn" onClick={() =>history.push('/menu')}> ADD ITEM</button>
                    </div>
                </>
        }
               
            

        {/* <Footer /> */}
        
    </>
}

const mapDispatchToProps=dispatch=>{
    return{
        removeFromCart:(id)=>dispatch(removeFromCart(id)),
    }
}
// const mapStateToProps=state=>{
//     return{
//         cartItems: state.food.cartItems,
        
//     };
// }
export default connect(null,mapDispatchToProps)(Cart);