import React, { useState ,useEffect} from 'react';
import without_bg from '../../Va/without-bg.svg'
import "./header.css";
import { Link,useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import { useAlert } from "react-alert";
import { logout } from "../../redux/User/userAction";
import { useDispatch,useSelector} from "react-redux";




const Header=({cartItems,click}) => {

    const history = useHistory();
    const alert = useAlert();
    const dispatch = useDispatch();

    const {isAuthenticated}=useSelector((state)=>state.user)

    console.log(isAuthenticated,"is true")

    const time= new Date().toLocaleTimeString();
    const [ctime,setCtime]=useState(time);
    const handler=()=>{
        const time= new Date().toLocaleTimeString();
        setCtime(time);
    }
    setInterval(handler, 1000);

    const [len, setLen] = useState(0);

    function logoutUser() {
        alert.success("Logout Successfully");
        dispatch(logout());
        localStorage.clear();
        window.location.href = '/';
    }

    const loginUser=() =>{
        window.location.href = '/login';
        alert.success("Welcome to Login/Register page");
    }

    // function logoutUser(){
    //     // e.preventDefault();
    //     alert.success("Logout Successfully");
    //     history.push('/')
    //     dispatch(logout());
    // }

    const solve=()=>{
        if(!isAuthenticated){
          alert.success("login to access")
        }
    }
    
    useEffect(()=>{
        let count = 0;
        cartItems.forEach((item) => {
           count+= item.qty;
        })
        setLen(count);
    },[cartItems,len,setLen,dispatch])

    return <>
        <section className="navbar-food">

        <ul className="links">
                
        <span className="ctime">           
                    <h4 >{ctime}</h4>
        </span>
            
        <div className="logo_va">
            {/* <img src={without_bg} style={{marginTop:5,marginBottom:5}}/> */}
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="100.000000pt" height="70.000000pt"  viewBox="0 0 200.000000 150.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,162.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M564 1235 c-54 -140 -102 -255 -105 -255 -4 0 -31 62 -60 138 l-54
137 -58 3 -58 3 14 -33 c7 -18 47 -117 88 -220 41 -103 76 -188 79 -188 3 0
61 142 129 316 69 173 127 317 130 319 4 2 35 -51 69 -118 190 -367 242 -469
242 -478 0 -5 -5 -9 -11 -9 -13 0 -183 -84 -258 -127 -74 -43 -221 -142 -295
-200 -38 -29 -70 -52 -72 -50 -5 5 90 246 97 247 4 0 15 -24 27 -52 l20 -53
11 28 c6 15 61 150 122 300 61 150 115 282 120 295 8 21 6 22 -46 22 -53 0
-56 -2 -70 -32 -43 -96 -325 -821 -321 -826 3 -3 25 13 48 34 73 67 204 163
316 231 123 74 276 151 310 155 25 3 32 -9 184 -304 27 -54 54 -98 59 -98 15
0 10 15 -30 91 -22 41 -90 173 -153 294 -302 588 -354 685 -364 685 -6 0 -55
-115 -110 -255z"/>
<path d="M130 360 c0 -16 5 -30 10 -30 6 0 10 7 10 15 0 8 5 15 10 15 6 0 10
-20 10 -45 0 -25 -4 -45 -10 -45 -5 0 -10 -4 -10 -10 0 -5 18 -10 40 -10 22 0
40 5 40 10 0 6 -4 10 -10 10 -5 0 -10 20 -10 45 0 25 5 45 10 45 6 0 10 -7 10
-15 0 -8 5 -15 10 -15 6 0 10 14 10 30 l0 30 -60 0 -60 0 0 -30z"/>
<path d="M285 361 c4 -17 0 -44 -9 -66 -20 -48 -21 -45 14 -45 27 0 30 2 24
25 -5 19 -2 25 11 25 13 0 16 -6 11 -25 -6 -23 -4 -25 29 -25 19 0 35 1 35 3
0 1 -9 21 -20 42 -13 26 -18 50 -14 68 5 26 5 27 -41 27 -46 0 -47 0 -40 -29z"/>
<path d="M422 378 c-21 -21 -13 -48 18 -66 32 -18 36 -27 20 -37 -6 -3 -13 1
-16 9 -10 26 -34 19 -34 -10 0 -23 3 -25 43 -22 39 3 42 5 45 35 3 27 -2 34
-27 48 -39 20 -40 28 -1 20 26 -6 30 -4 30 14 0 17 -6 21 -33 21 -18 0 -38 -5
-45 -12z"/>
<path d="M520 360 c0 -33 25 -43 33 -12 3 9 5 -4 6 -30 0 -27 -3 -48 -9 -48
-5 0 -10 -4 -10 -10 0 -5 18 -10 40 -10 38 0 52 12 30 25 -5 3 -10 24 -10 46
0 21 5 39 10 39 6 0 10 -7 10 -15 0 -8 7 -15 15 -15 8 0 15 7 15 16 0 22 20
13 44 -19 17 -23 18 -31 8 -47 -17 -28 -16 -30 23 -30 39 0 40 2 23 29 -9 15
-7 24 11 50 12 17 27 31 32 31 5 0 9 7 9 15 0 11 -11 15 -36 15 -31 0 -36 -3
-31 -20 3 -11 1 -23 -4 -26 -5 -3 -9 6 -9 20 l0 26 -100 0 -100 0 0 -30z"/>
<path d="M860 375 c0 -8 5 -15 10 -15 6 0 10 -18 10 -39 0 -22 -4 -43 -10 -46
-23 -14 -7 -25 39 -25 55 0 87 21 75 49 -4 9 -6 27 -5 40 2 38 -17 51 -70 51
-37 0 -49 -4 -49 -15z m78 -26 c-2 -6 -8 -10 -13 -10 -5 0 -11 4 -13 10 -2 6
4 11 13 11 9 0 15 -5 13 -11z m5 -46 c9 -9 -13 -34 -24 -27 -14 8 -11 34 4 34
8 0 17 -3 20 -7z"/>
<path d="M1000 375 c0 -8 5 -15 10 -15 6 0 10 -20 10 -45 0 -25 -4 -45 -10
-45 -5 0 -10 -4 -10 -10 0 -5 18 -10 40 -10 38 0 52 12 30 25 -5 3 -10 24 -10
46 0 21 5 39 10 39 6 0 10 7 10 15 0 11 -11 15 -40 15 -29 0 -40 -4 -40 -15z"/>
<path d="M1100 360 c0 -16 5 -30 10 -30 6 0 10 7 10 15 0 8 5 15 10 15 6 0 10
-20 10 -45 0 -25 -4 -45 -10 -45 -5 0 -10 -4 -10 -10 0 -5 18 -10 40 -10 22 0
40 5 40 10 0 6 -4 10 -10 10 -5 0 -10 20 -10 45 0 25 5 45 10 45 6 0 10 -7 10
-15 0 -8 5 -15 10 -15 6 0 10 14 10 30 l0 30 -60 0 -60 0 0 -30z"/>
<path d="M1245 320 l0 -70 58 0 c50 0 57 2 57 20 0 21 -26 28 -32 8 -6 -16
-38 -2 -38 17 0 8 9 15 20 15 11 0 20 4 20 9 0 5 -9 11 -20 14 -11 3 -20 10
-20 16 0 6 9 11 20 11 11 0 20 -4 20 -10 0 -5 7 -10 15 -10 9 0 15 9 15 25 0
24 -3 25 -58 25 l-57 0 0 -70z"/>
<path d="M1392 378 c-21 -21 -13 -48 18 -66 32 -18 36 -27 20 -37 -6 -3 -13 1
-16 9 -10 26 -34 19 -34 -10 0 -23 3 -25 43 -22 39 3 42 5 45 35 3 27 -2 34
-27 48 -39 20 -40 28 -1 20 26 -6 30 -4 30 14 0 17 -6 21 -33 21 -18 0 -38 -5
-45 -12z"/>
</g>
</svg>
        </div>
        
        <div className="upper-right">
                
        <div className="li-head">
           
            {/* <li><Link to="/cart">Recipes</Link></li>  */}
           
            <li><Link to="/">Home</Link></li>
            <li><Link onClick={solve} to="/menu">Menu</Link></li>
            <li><Link onClick={solve} to="/cart" className="cart_design">
                <i className="fas fa-shopping-cart"></i>
                Cart
                <span className="cart_badge">{len}</span>
            </Link></li>
            <li>
            {/* <Link onClick={()=>logoutUser()}>Logout</Link> */}
           { isAuthenticated?<a href="#" onClick={()=>logoutUser()}><i class="fas fa-user-check"></i></a>:<a href="#" onClick={()=>loginUser()}><i class="fas fa-user-times"></i></a>}
            </li>
        </div>
                
       <div className="hamburger_menu" onClick={click}>
                    <div></div>
                    <div></div>

                    <div></div>
        
        </div>

        </div>
        
       
        </ul>
        </section>
        </>
}
const mapStateToProps=state=>{
    return{
        cartItems:state.food.cartItems,
    };
}

export default connect (mapStateToProps)(Header);