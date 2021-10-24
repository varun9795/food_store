import './SideDrawer.css';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector} from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "./redux/User/userAction";

const SideDrawer=({show,click})=>{
    const alert = useAlert();
    const dispatch = useDispatch();
    const {isAuthenticated}=useSelector((state)=>state.user)

    function logoutUser() {
        alert.success("Logout Successfully");
        dispatch(logout());
        window.location.href = '/';
    }

    const loginUser=() =>{
        window.location.href = '/login';
    }

    const solve=()=>{
        if(!isAuthenticated){
          alert.success("Login to access")
        }
    }
    
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
             <Link onClick={solve} to='/menu'>
             Menu
             </Link>
         </li>
         <li>
         <Link onClick={solve} to='/cart'>
             <i className="fas fa-shpping-cart"></i>
             
                 Cart
             
         </Link>
         </li>
         <li>
         { isAuthenticated?<a href="#" onClick={()=>logoutUser()}><i class="fas fa-user-check"></i></a>:<a href="#" onClick={()=>loginUser()} ><i class="fas fa-user-times"></i></a>}
         </li>
     </ul>
     </div>
    )
}

export default SideDrawer