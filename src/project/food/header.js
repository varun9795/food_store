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
        <section className="navbar">
        <ul className="links">
        <li><Link to="/cart">Cart ({len})</Link></li>
        <li><Link to="/cart">Recipes</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/">Home</Link></li>
        
        <span className="ctime">           
                    <h4 >{ctime}</h4>
                </span>
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