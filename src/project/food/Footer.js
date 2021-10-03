import React, { useState, useEffect } from 'react'
import  './footer.css'

const Footer = () => {
    return <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
        <section className="footer">
            <div className="left">
                <div className="topic">About Us</div>
                <p>Hello peeps, Welcome you to  A&V Food Corners if u are planning to have  yummy and delicious treat to your tummy... then definitely  You are landing at right place.</p>
            </div>
            <div className="mid">
                <div className="topic">Contact Us</div>
                <p>9625051074</p>
            </div>
            <div className="right">
                <div className="topic">Subscribe Us</div>
                <input type="text" placeholder="Enter you Email" />
                <button type="submit">Submit</button>
                <div className="media">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
           <a href="#"><i className="fab fa-instagram"></i></a>
           <a href="#"><i className="fab fa-twitter"></i></a>
           <a href="#"><i className="fab fa-youtube"></i></a>
           <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </section>
       </>
    
}
export default Footer