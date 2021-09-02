import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./style.css";
const SellerProfile = () => {
  const [value, setValue] = useState(2);
  return (
    <div className="cards">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-xl-3 profile-card">
          <div className="text-center avatar">
            <img
              src="https://img.etimg.com/thumb/msid-69381991,width-650,imgsize-594328,,resizemode-4,quality-100/hacker-1.jpg"
              alt="profile"
              width="140px"
              height="140px"
            />
            <div className="online-status">online</div>
          </div>
          <div className="text-center pro-text">
            <h6>mughal_jawad</h6>
            <p>try once more</p>
          </div>
          <div className="pro-rating">
            <div>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={value} readOnly />
              </Box>
            </div>
            p
          </div>
        </div>
        <div className="col-lg-9 col-md-9 col-xl-9 gigs-card">
          <div className="gigs">ACTIVE GIGS</div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
