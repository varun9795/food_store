import React from "react";
import { useSelector } from "react-redux";
import {Redirect, Route } from "react-router-dom";


function ProtectedRoute({ component: Component, ...restOfProps }) {

    // const history = useHistory();
//   const isAuthenticated = localStorage.getItem("isAuthenticated");
    
    const { isAuthenticated } = useSelector(state => state.user);
    console.log("this", isAuthenticated);

    
  return (
      <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated?<Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;