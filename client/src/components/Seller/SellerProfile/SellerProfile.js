import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import CreateIcon from "@material-ui/icons/Create";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PersonIcon from "@material-ui/icons/Person";
import ScheduleIcon from "@material-ui/icons/Schedule";
import SendIcon from "@material-ui/icons/Send";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ShareIcon from "@material-ui/icons/Share";
import "./style.css";
import Navbar from "../../../reuseablecomp/Navbar/Navbar";
import Footer from "../../../reuseablecomp/footer/Footer";
import Chip from "@material-ui/core/Chip";
const SellerProfile = () => {
  const [value, setValue] = useState(2.5);
  return (
    <div className="cards">
      <Navbar />
      <div className="row">
        <div className="col-lg-4 col-md-5 col-xl-4 col-sm-12 profile-card">
          <div style={{ backgroundColor: "white" }}>
            <div className="p-4">
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
                  <div className="icon-text">
                    <LocationOnIcon style={{ fontSize: "14px" }} />
                    <span> From</span>
                  </div>
                  <p>Pakistan</p>
                </div>
                <div className="pro-details-flex">
                  <div className="icon-text">
                    <PersonIcon style={{ fontSize: "14px" }} />
                    <span> Member Since</span>
                  </div>
                  <p>Jun 2021</p>
                </div>
                <div className="pro-details-flex">
                  <div className="icon-text">
                    <ScheduleIcon style={{ fontSize: "14px" }} />
                    <span> Avg.Response Time</span>
                  </div>
                  <p>3 hours</p>
                </div>
                <div className="pro-details-flex">
                  <div className="icon-text">
                    <SendIcon style={{ fontSize: "14px" }} />
                    <span> Last Delivery</span>
                  </div>
                  <p>1 day</p>
                </div>
              </div>
              <hr />
              <div className="availability">
                <div className="icon-text">
                  <CalendarTodayIcon style={{ fontSize: "14px" }} />
                  <span>Availability</span>
                </div>
                <div className="avail-box">
                  <p>Set Availability</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4" style={{ backgroundColor: "white" }}>
            <div className="p-4">
              <div className="pro-desc">
                <p className="desc">Description</p>
                <p className="edit-desc">Edit description</p>
              </div>
              <p>
                Working as a web developer since 2017. I develop full-stack web
                applications using MERN. I have done a lot of Full-Stack Web
                Development projects. Quality of work is my first priority and
                100 % client satisfaction is my guarantee.I have expertise in
                the following domains: HTML5,CSS,BootStrap,Materialize
                CSS,Material UI,React JS,Redux,Node JS ,Express,
                MongoDB,Python,C++.So feel free to contact me
              </p>
              <hr />
              <div className="languages">
                <p className="lang-title">Langauges</p>
                <span>English</span>
                <span> - Conversational</span>
              </div>
              <div className="skills">
                <p className="skill-title">Skills</p>
                <div className="tags">
                  {/* <span class="tag">Materializecss</span>
                  <span class="tag">Css</span>
                  <span class="tag">Html</span>
                  <span class="tag">Javascript</span> */}
                  <Chip className="m-1" label="Css" />
                  <Chip className="m-1" label="Html" />
                  <Chip className="m-1" label="Javascript" />
                  <Chip className="m-1" label="React" />
                  <Chip className="m-1" label="Python" />
                  <Chip className="m-1" label="Postman" />
                  <Chip className="m-1" label="PHP" />
                  <Chip className="m-1" label="JAVA" />
                  <Chip className="m-1" label="Django" />
                </div>
              </div>
              <hr />
              <div className="education">
                <div className="pro-desc">
                  <p className="desc">Education</p>
                  <p className="edit-desc">Add new</p>
                </div>
                <span>BSCs</span>
                <span> - Computer Science</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-5 col-xl-7 col-sm-12 gigs-cards">
          <div className="gigs-text">ACTIVE GIGS</div>
          <div className="">
            <div className="row">
              <div className=" col-lg-4 col-xl-4">
                <div className="gig-card">
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "150px" }}
                  >
                    <img
                      src="https://img.etimg.com/thumb/msid-69381991,width-650,imgsize-594328,,resizemode-4,quality-100/hacker-1.jpg"
                      alt="gig-profile"
                      className="img-fluid"
                    />
                    <div className="share-gig">
                      <ShareIcon />
                    </div>
                  </div>
                  <p className="title">
                    I will buid Mern Stack website and fix the bugs
                  </p>
                  <div className="gig-price">
                    <MoreHorizIcon />
                    <p className="price-text">
                      <span style={{ fontSize: "12px" }}>Starting At</span>{" "}
                      <span class>$35</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-xl-4">
                <div className="gig-card">
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "150px" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                      alt="gig-profile"
                    />
                    <div className="share-gig">
                      <ShareIcon />
                    </div>
                  </div>
                  <p className="title">
                    I will buid Mern Stack website and fix the bugs
                  </p>
                  <div className="gig-price">
                    <MoreHorizIcon />
                    <p className="price-text">
                      <span style={{ fontSize: "12px" }}>Starting At</span>{" "}
                      <span class>$35</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" col-lg-4 col-xl-4">
                <div className="gig-card">
                  <div
                    className="position-relative overflow-hidden"
                    style={{ height: "150px" }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                      alt="gig-profile"
                    />
                    <div className="share-gig">
                      <ShareIcon />
                    </div>
                  </div>
                  <p className="title">
                    I will buid Mern Stack website and fix the bugs
                  </p>
                  <div className="gig-price">
                    <MoreHorizIcon />
                    <p className="price-text">
                      <span style={{ fontSize: "12px" }}>Starting At</span>{" "}
                      <span class>$35</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerProfile;
