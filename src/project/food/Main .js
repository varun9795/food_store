import React, { useState } from 'react'
import "./Main.css";
import { items } from "./items";
import Header from './header';
import Footer from './Footer';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/Food/food-actions';


const Main = ({ addToCart }) => {
    return <>
      <div className="frame">
        <Header/>
        <section className="whole">
            <div className="card">
                {items.map((item) =>{
                    const { id, image, name, subType} = (item);
                    return <>
                        <div className="cardinner">
                        <img src={image} alt={id} />
                        <h2>{name}</h2>
                        <h4>{subType}</h4>
                        <button className="btn" onClick={()=>{addToCart(id)}}>ADD TO CART</button>
                            </div>

                        </>
                    
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

export default connect(null,mapDispatchToProps)(Main);