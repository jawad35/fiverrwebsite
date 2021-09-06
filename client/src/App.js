import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import Home from "./components/Home/Home";
import SellerProfile from "./components/Seller/SellerProfile/SellerProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BuyerRequest from "./components/BuyerRequest/BuyerRequest";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/sellerprofile" component={SellerProfile} exact />
        <Route path="/requests" component={BuyerRequest} exact />
        <Route path="/home" component={Home} exact />
      </Switch>
    </Router>
  );
}

export default App;
