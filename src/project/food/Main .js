import React, { useState } from 'react'
import "./Main.css";
import Header from './header';
import Footer from './Footer';
import {connect} from 'react-redux';
import { addToCart } from '../../redux/Food/food-actions';
import {items} from '../../redux/Food/food-reducer'


const Main = ({ items,addToCart }) => {
    return <>
      <div className="frame">
        <Header/>
            <section className="whole">
                 <h2>COMBOS AND OFFERS</h2>
                <div className="card">
                {items.map((item) =>{
                    const { id, img,title,category,price,info} = (item);
                    if (id<= 10){
                         return <>
                            <div className="cardinner">
                                 <img src={img} alt={id} />
                                 <header>
                                 <h2>{title}</h2>
                                 <h2 className="price">Rs.{price}</h2>
                                 </header>
                                 <h5>{info}</h5>
                                
                                <button className="btn" onClick={() => { addToCart(id) }}>ADD TO CART</button>
                        </div>
                        </>
                       }
                })}
            </div>

        </section>
            <Footer />
            </div>
        </>
}

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(id)=>dispatch(addToCart(id)),
    }
}
const mapStateToProps = state =>
{
    return {
        items: state.food.product,
    }
    }
export default connect(mapStateToProps,mapDispatchToProps)(Main);