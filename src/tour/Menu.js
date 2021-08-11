import React,{useState} from 'react';
// import Menudata from './Menudata';
import Category from './Category';
import './Menu.css';
import {addToCart} from '../redux/Food/food-actions';
import {connect} from 'react-redux';
import Header from '../project/food/header';

const Menu=({products,addToCart})=>{
    console.log(products);
    const [items,setItems]=useState(products);
    const allCategories=['All',...new Set(products.map((item)=>{return item.category}))];
    const filterItems=(category)=>{
        if(category==='All'){
            setItems(products);
            return;
        }
        const newItems=products.filter((item)=>item.category===category);
        setItems(newItems);
    }
    return<>
        <Header/>
        <section>
            <div>
                <h1>Our Menu</h1>
                <div className="underline"></div>
            </div>
            <div>
                <Category allCategories={allCategories} filterItems={filterItems}/>
            </div>
            <div className="food">
               {items.map((item)=>{
                   const {id,img,title,price,info}=item;
                   return<>
                   <article key={id} className="menu-item">
                       <img src={img} alt="varun"/>
                   <div className="item-info">
                     <header>    
                       <h4>{title}</h4>
                       <h4 className="price">rs {price}</h4>
                     </header>    
                       <p>{info}</p>
                       <button className="btn" onClick={()=>addToCart(id)}>Add Item</button>
                       </div>  
                   </article></>
               })}
            </div>
        </section>
    </>
    // return <h1>hello world</h1>
};

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(id)=>dispatch(addToCart(id)),
    }
}

const mapStateToProps=state=>{
    return{
        products:state.food.product,
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Menu);