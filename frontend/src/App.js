import React from 'react';
import { useState } from 'react';
import Menu from './project/food/Menu'
import Cart from './Cart';
import Header from './project/food/header'
import Footer from './project/food/Footer';
import Main from './project/food/Main ';
import LoginSignUp from './loginSignUp';
import {Route,Switch,useLocation} from "react-router-dom";

import BackDrop from './BackDrop';
import SideDrawer from './SideDrawer';


const App=()=>{
    const [sideToggle,setSideToggle]=useState(false)
    const location=useLocation();
    return <>
    {
        location.pathname!=='/' && <Header click={()=>setSideToggle(true)}/>
    }
    {/* <Header click={()=>setSideToggle(true)}/> */}
    <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
    <BackDrop show={sideToggle} click={()=>setSideToggle(false)}/>
    <Switch>
        <Route path='/'  exact>
        <LoginSignUp/></Route>
        <Route path='/Home' exact>
        <Main/></Route>
        <Route path='/menu' exact> 
        <Menu/></Route>
        <Route path='/cart' exact>
        <Cart/></Route>
    </Switch>  
    <Footer/>  
    </>
}

export default App;

