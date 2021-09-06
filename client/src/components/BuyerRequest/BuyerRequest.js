import React from "react";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import Navbar from "../../reuseablecomp/Navbar/Navbar";
import Footer from "../../reuseablecomp/footer/Footer";

const BuyerRequest = () => {
  return (
    <div className="">
      <Navbar />
      <div className="container-fluid">
        <div className="request">
          <h4>Buyer Requests</h4>
          <TextField id="standard-basic" label="Standard" />
        </div>
      </div>
      <div className="container-fluid">
        <div className="request-title">
          <p>ACTIVE</p>
          <span className="badge-text">2</span>
          <p>SENT OFFERS</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerRequest;
