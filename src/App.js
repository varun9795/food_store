import React from 'react';
import Menu from './project/food/Menu'
import Cart from './Cart';
// import Header from './project/food/header'
import Main from './project/food/Main ';
import {Route,Switch} from "react-router-dom";

const App=()=>{
    return <>
    <Switch>
       <Route path='/' exact>
        <Main/> </Route>
        <Route path='/menu' exact> 
        <Menu/></Route>
        <Route path='/cart' exact>
        <Cart/></Route>
    </Switch>    
    </>
}

export default App;

