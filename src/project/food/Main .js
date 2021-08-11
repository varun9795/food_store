import React, { useState } from 'react'
import "./Main.css";
import { items } from "./items";
import Header from './header';
const Main = () => {
    return <>
        <Header/>
        <section className="whole">
            <div className="middle">
                <h2>LOADING.....</h2>
            </div>
            <div className="card">
                {items.map((item) =>{
                    const { id, image, name, subType, Details } = (item);
                    return <>
                        <div className="cardinner">
                        <img src={image} alt={id} />
                        <h2>{name}</h2>
                        <h4>{subType}</h4>
                        <button className="btn">DETAILS</button>
                            </div>

                        </>
                    
                })}
            </div>

        </section>
        </>
}

export default Main