import React, { useState, useEffect } from 'react'
import  './footer.css'

const Footer = () => {
    return <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
        <div className="container-fluid">
         <footer
                class="text-center text-md-start color-#000"
                style={{backgroundColor:"rgb(156, 163, 163)"}}
         >
        
             <section class="">
        <div className="row">
        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            
            <h4 class="text-dark text-center text-md-start text-uppercase  font-weight-bold">
              About Us
             </h4><hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "65px", backgroundColor: "black", height: "2px" }}
                />
            <p>
              Hello peeps, Welcome you to  A&V Food Corners if u are planning to have  yummy and delicious treat to your tummy... then definitely  You are landing at right place.
            </p>
          </div>

          <hr class="w-100 clearfix d-md-none" />
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h4 class="text-dark text-center  text-md-start text-uppercase  font-weight-bold">Contact us</h4>
            <hr
                class="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "65px", backgroundColor: "black", height: "2px" }}
            />
            <p><i class="fas fa-home mr-3"></i> New Delhi,110078 India</p>
            <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i class="fas fa-phone mr-3"></i> +91 234 567 88</p>
            <p><i class="fas fa-print mr-3"></i> +91 234 567 89</p>
          </div>
          <hr class="w-100 clearfix d-md-none" />
         <div class="col-md-4 col-lg-3   col-xl-3 mx-auto mt-3">
            <h4 class="text-dark text-center  text-md-start text-uppercase font-weight-bold">
              Subscribe Us
             </h4>
                <hr
                   class="mb-4 mt-0 d-inline-block mx-auto md-start"
                    style={{ width: "65px", backgroundColor: "black", height: "2px" }}
                            />
                <div class="form-outline form-white mb-1 ">
                   <input type="text" class="mb-1" placeholder="Enter you Email" />
                   <button type="submit" class="btn btn-outline-white btn-block" onClick={()=>alert("Thankyou for Subscribing us.Stay Tuned")}>Submit</button>
                </div>
               <div className="footer-media">
                <a
               class="btn btn-outline-white btn-floating m-1"
               class="text-white"
               role="button"
               ><i class="fab fa-facebook-f"></i></a>
                <a
                class="btn btn-outline-white btn-floating m-1"
                class="text-white"
                role="button"
                ><i class="fab fa-twitter"></i
                >
                </a>
                <a
                class="btn btn-outline-white btn-floating m-1"
                class="text-white"
                role="button"
                ><i class="fab fa-google"></i
                ></a>
                <a
                class="btn btn-outline-white btn-floating m-1"
                class="text-white"
                role="button"
                ><i class="fab fa-instagram"></i
                ></a>
               </div>
            </div>
            </div>
            </section>
        <div
                    class="text-center p-3"
                    style={{ backgroundColor:"rgba(0, 0, 0, 0.2)"}}
         >
            © 2021 Copyright:tastyBites.com
       </div>
            </footer>
            </div>
       </>
    
}
export default Footer