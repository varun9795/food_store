import React, { useState ,useEffect} from 'react';
import "./header.css";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';



const Header=({cartItems}) => {
    const time= new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
    const handler=()=>{
        const time= new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(handler, 1000);

    const [len, setLen] = useState(0);
    
    useEffect(()=>{
        let count = 0;
        cartItems.forEach((item) => {
           count+= item.qty;
        })
        setLen(count);
    },[cartItems,len,setLen])

    return <>
        <section className="navbar-food">

        <ul className="links">
                
        <span className="ctime">           
                    <h4 >{ctime}</h4>
        </span>
            
        
        
        <div className="upper-right">
                
        <div className="li-head">
           
            {/* <li><Link to="/cart">Recipes</Link></li>  */}
           
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/cart" className="cart_design">
                <i className="fas fa-shopping-cart"></i>
                Cart
                <span className="cart_badge">{len}</span>
            </Link></li>
        </div>
                
       <div className="hamburger_menu">
                    <div></div>
                    <div></div>

                    <div></div>
        
        </div>

        </div>
        
       
        </ul>
        </section>
        </>
}
const mapStateToProps=state=>{
    return{
        cartItems:state.food.cartItems,
    };
}

export default connect (mapStateToProps)(Header);