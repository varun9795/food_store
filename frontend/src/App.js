import React from 'react';
import { useState } from 'react';
import Menu from './project/food/Menu'
import Cart from './Cart';
import Header from './project/food/header'
import Footer from './project/food/Footer';
import Main from './project/food/Main ';
import LoginSignUp from './loginSignUp';
import { Route, Switch, useLocation } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";

import BackDrop from './BackDrop';
import SideDrawer from './SideDrawer';


const App=()=>{
    const [sideToggle,setSideToggle]=useState(false)
    const location=useLocation();
    return <>
    {/* {
        location.pathname!=='/' && <Header click={()=>setSideToggle(true)}/>
    } */}
        {/* <Header click={()=>setSideToggle(true)}/> */}
        <Header/>
    <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
    <BackDrop show={sideToggle} click={()=>setSideToggle(false)}/>
    <Switch>
        <Route  exact path='/login'component={LoginSignUp}/>
        <Route exact path='/' component={Main}/>
        <ProtectedRoute exact path='/menu' component={Menu}/>
        <ProtectedRoute exact path='/cart' component={Cart}/>
    </Switch>  
    <Footer/>  
    </>
}

export default App;

