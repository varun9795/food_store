import './SideDrawer.css';
import { Link } from 'react-router-dom';

const SideDrawer=({show,click})=>{
    const sideDrawerClass=["sideDrawer"];
    if(show){
        sideDrawerClass.push("show");
    }
    return(
     <div className={sideDrawerClass.join(" ")}>
     <ul className="SideDrawer_links" onClick={click} style={{paddingLeft:0}}>
         <li>
             <Link to='/'>
             Home
             </Link>
         </li>
         <li>
             <Link to='/menu'>
             Menu
             </Link>
         </li>
         <li>
         <Link to='/cart'>
             <i className="fas fa-shpping-cart"></i>
             
                 Cart
             
         </Link>
         </li>
     </ul>
     </div>
    )
}

export default SideDrawer