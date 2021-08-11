import React, { useState } from 'react'
import './Header.css'

const Header=()=>{
    const time= new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
    const handler=()=>{
        const time= new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(handler,1000);
    return <>
    <ul>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Blog">Blog</a></li>
        <li><a href="#Packages">Packages</a></li>
        <li><a href="#Home">Home</a></li>
        <span className="ctime">
        <h4 style={{textAlign:"left"}}>{ctime}</h4></span>
        <span className="ctime">
        <h4 style={{textAlign:"center",fontSize:"30px",fontFamily:"initial"}}> Anjali & Varun Travels</h4>
        </span>
    </ul>
    <img src="https://www.tourmyindia.com/packages-tour-india/pilgrimage-tour-packages/images/banner.jpg" alt="tr"/>
    </>
}

export default Header;