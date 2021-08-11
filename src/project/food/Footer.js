import React, { useState, useEffect } from 'react'
import  './footer.css'

const Footer = () => {
    return <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
        <section className="footer">
            <div className="left">
                <div className="topic">About Us</div>
                <p>HEllo everyone, Welcome you to  VArun and Anjali travels if u are planning a vacation u are landing at right place.</p>
            </div>
            <div className="middle">
                <div className="topic">Contact Us</div>
                <p>999999999</p>
            </div>
            <div className="right">
                <div className="topic">Subscribe Us</div>
                <input type="text" placeholder="Enter you Email" />
                <button type="submit">Submit</button>
                <div className="media">
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
           <a href="#"><i class="fab fa-instagram"></i></a>
           <a href="#"><i class="fab fa-twitter"></i></a>
           <a href="#"><i class="fab fa-youtube"></i></a>
           <a href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </section>
       </>
    
}
export default Footer