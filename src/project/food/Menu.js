import React,{useState,useEffect} from 'react';
import Category from './Category';
import './Menu.css';
import {useSelector,useDispatch,connect} from 'react-redux';
import { addToCart } from '../../redux/Food/food-actions';
import {getProducts as listProducts} from '../../redux/Food/productActions'
import Header from './header';

const Menu=({addToCart})=>{
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])
     
    const { products, loading, error } = getProducts;


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
        <section>
            <div className="page_heading">
                <h1>Our Menu</h1>
                <div className="underline"></div>
            </div>
            <div>
                <Category allCategories={allCategories} filterItems={filterItems}/>
            </div>
            <div className="food-grid">
                {loading ?
                        <h2>Loading...</h2> : error ?
                            <h2>{error}</h2> :
                 items.map((item)=>{
                   const {_id,img,title,price,info}=item;
                   return<>
                       <article key={_id} className="menu-item">
                           
                       <img className="menu-img" src={img} alt="varun"/>
                       <div className="item-info">
                     <header>    
                       <h4>{title}</h4>
                       <h4 className="price">Rs. {price}</h4>
                     </header>    
                       <p>{info}</p>
                       <button className="btn" onClick={()=>addToCart(_id)}>Add Item</button>
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


export default connect(null,mapDispatchToProps)(Menu);