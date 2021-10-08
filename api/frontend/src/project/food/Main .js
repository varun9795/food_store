import React, { useEffect} from 'react';
import Caraousel from '../../Caraousel';
import "./Main.css";
// import Footer from './Footer';
import {useSelector,useDispatch,connect} from 'react-redux';
import { addToCart } from '../../redux/Food/food-actions';
import {getProducts as listProducts} from '../../redux/Food/productActions'





const Main = ({ addToCart }) => {
    
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
     
    const { products, loading, error } = getProducts;
    
    useEffect(() => {
        dispatch(listProducts())
    },[dispatch])

    return <>
      <div className="frame">
        <Caraousel/>
            <section className="whole">
                 <h2>COMBOS AND OFFERS</h2>
                <div className="card-main">
                    {loading ?
                        <h2>Loading...</h2> : error ?
                            <h2>{error}</h2> :
                          products.map((item) =>{
                          const {_id,id, img,title,price,info} = (item);
                            if (id<= 10){
                            return <>
                                <div className="cardinner">
                                 <img src={img} alt={id} />
                                 <header>
                                 <h2>{title}</h2>
                                 <h2 className="price">Rs.{price}</h2>
                                 </header>
                                 <h5>{info}</h5>
                                    <button className="btn" onClick={() => { addToCart(_id) }}> ADD TO CART</button>
                    
                        </div>
                        </>
                       }
                })}
            </div>

        </section>
            {/* <Footer /> */}
            </div>
        </>
}

const mapDispatchToProps=dispatch=>{
    return{
        addToCart:(id)=>dispatch(addToCart(id)),
    }
}
// const mapStateToProps = state =>
// {
//     return {
//         items: state.food.product,
//     }
//     }

export default connect(null,mapDispatchToProps)(Main);