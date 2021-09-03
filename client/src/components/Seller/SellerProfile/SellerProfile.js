import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import CreateIcon from "@material-ui/icons/Create";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import ScheduleIcon from "@material-ui/icons/Schedule";
import SendIcon from "@material-ui/icons/Send";
import "./style.css";
const SellerProfile = () => {
  const [value, setValue] = useState(2.5);
  return (
    <div className="cards">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-xl-3 col-sm-5 profile-card">
          <div className="p-2">
            <div className="text-center avatar">
              <img
                src="https://img.etimg.com/thumb/msid-69381991,width-650,imgsize-594328,,resizemode-4,quality-100/hacker-1.jpg"
                alt="profile"
                width="140px"
                height="140px"
              />
              <div className="online-status">
                <p>online </p>
              </div>
            </div>
            <div className="text-center pro-text">
              <h6>mughal_jawad</h6>
              <div className="pro-status">
                <p>Try once more</p>
                <CreateIcon
                  style={{
                    fontSize: "15px",
                    marginLeft: "5px",
                    color: "#b5b1a7",
                  }}
                />
              </div>
            </div>
            <div className="pro-rating">
              <div>
                <Rating name="read-only" value={value} readOnly />
              </div>

              <p>5.0(2 reviews)</p>
            </div>
            <div className="preview_publicmode">
              <p>Preview Public Mode</p>
            </div>
            <hr />
            <div className="pro-details">
              <div className="pro-details-flex">
                <div>
                  <LocationOnIcon />
                  <span> From</span>
                </div>
                <p>Pakistan</p>
              </div>
              <div className="pro-details-flex">
                <div>
                  <PersonIcon />
                  <span> Member Since</span>
                </div>
                <p>Jun 2021</p>
              </div>
              <div className="pro-details-flex">
                <div>
                  <ScheduleIcon />
                  <span> Avg.Response Time</span>
                </div>
                <p>3 hours</p>
              </div>
              <div className="pro-details-flex">
                <div>
                  <SendIcon />
                  <span> Last Delivery</span>
                </div>
                <p>1 day</p>
              </div>
            </div>
            <hr />
          </div>
        </div>
        <div className="col-lg-7 col-md-6 col-xl-7 col-sm-5 gigs-card">
          <div className="gigs">ACTIVE GIGS</div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
