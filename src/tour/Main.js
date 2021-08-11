import React from "react";


import {city} from "./City.js"

const City = () => {

    return <>
        <section class="top">
        <h3 style={{textAlign:"center"}}>TOP PROMOTIONS</h3>
        <h4 style={{textAlign:"center"}}>BEST TRAVEL PACKAGES AVAILABLE</h4>
            </section>
        <section className="city">
            {city.map((city) => {
                const { id, img,Title,Details } = city;
                 return (
            <div key={id}>
                <img src={img} alt="" />        
                <h4 >{Title}</h4>
                <h6>{Details}</h6>
                <button className="btn">DETAILS</button>
            </div>
          );
            }
            )}

        </section><br/><br/>
        </>
    
}

export default City