import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./mpgcarousel.css";
const MPGCarousel = () => {
  const [responsive, setstate] = useState({
    0: {
      items: 1,
    },
    300: {
      items: 1,
    },
    350: {
      items: 1,
    },
    450: {
      items: 2,
    },
    600: { items: 2 },
    700: {
      items: 3,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <h4>Most Popular Gig's in Web Programming</h4>
        <h4>see All ></h4>
      </div>
      <OwlCarousel
        className="owl-theme"
        responsive={responsive}
        items={5}
        margin={10}
      >
        <div class="item">
          <div style={{ padding: "13px" }}>
            <div>
              <Carousel showThumbs={false} showIndicators={false}>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
              </Carousel>
            </div>
            <div style={{ border: "1px solid #c5c5c5" }}>
              <div className="avatar-box" style={{ padding: "10px" }}>
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="Avatar"
                    className="avatar-pic"
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p>jawad_ali</p>
                  <p>Level 1 seller</p>
                </div>
              </div>
              <p style={{ padding: "0px 10px" }}>
                I will create responsive website and navigation
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <span
                  style={{ color: "orange" }}
                  className="fa fa-star checked"
                ></span>
                <p style={{ color: "orange" }}>4.9</p>
                <p>(10)</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "#c5c5c5" }}
                    className="fa fa-bars"
                  ></span>
                  <span
                    style={{ color: "#c5c5c5", marginLeft: "5px" }}
                    className="fa fa-heart"
                  ></span>
                </div>
                <div>
                  STARTING AT $<span>30</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div style={{ padding: "13px" }}>
            <div>
              <Carousel showThumbs={false} showIndicators={false}>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
              </Carousel>
            </div>
            <div style={{ border: "1px solid #c5c5c5" }}>
              <div className="avatar-box" style={{ padding: "10px" }}>
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="Avatar"
                    className="avatar-pic"
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p>jawad_ali</p>
                  <p>Level 1 seller</p>
                </div>
              </div>
              <p style={{ padding: "0px 10px" }}>
                I will create responsive website and navigation
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <span
                  style={{ color: "orange" }}
                  className="fa fa-star checked"
                ></span>
                <p style={{ color: "orange" }}>4.9</p>
                <p>(10)</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "#c5c5c5" }}
                    className="fa fa-bars"
                  ></span>
                  <span
                    style={{ color: "#c5c5c5", marginLeft: "5px" }}
                    className="fa fa-heart"
                  ></span>
                </div>
                <div>
                  STARTING AT $<span>30</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div style={{ padding: "13px" }}>
            <div>
              <Carousel showThumbs={false} showIndicators={false}>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
              </Carousel>
            </div>
            <div style={{ border: "1px solid #c5c5c5" }}>
              <div className="avatar-box" style={{ padding: "10px" }}>
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="Avatar"
                    className="avatar-pic"
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p>jawad_ali</p>
                  <p>Level 1 seller</p>
                </div>
              </div>
              <p style={{ padding: "0px 10px" }}>
                I will create responsive website and navigation
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <span
                  style={{ color: "orange" }}
                  className="fa fa-star checked"
                ></span>
                <p style={{ color: "orange" }}>4.9</p>
                <p>(10)</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "#c5c5c5" }}
                    className="fa fa-bars"
                  ></span>
                  <span
                    style={{ color: "#c5c5c5", marginLeft: "5px" }}
                    className="fa fa-heart"
                  ></span>
                </div>
                <div>
                  STARTING AT $<span>30</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div style={{ padding: "13px" }}>
            <div>
              <Carousel showThumbs={false} showIndicators={false}>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
              </Carousel>
            </div>
            <div style={{ border: "1px solid #c5c5c5" }}>
              <div className="avatar-box" style={{ padding: "10px" }}>
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="Avatar"
                    className="avatar-pic"
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p>jawad_ali</p>
                  <p>Level 1 seller</p>
                </div>
              </div>
              <p style={{ padding: "0px 10px" }}>
                I will create responsive website and navigation
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <span
                  style={{ color: "orange" }}
                  className="fa fa-star checked"
                ></span>
                <p style={{ color: "orange" }}>4.9</p>
                <p>(10)</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "#c5c5c5" }}
                    className="fa fa-bars"
                  ></span>
                  <span
                    style={{ color: "#c5c5c5", marginLeft: "5px" }}
                    className="fa fa-heart"
                  ></span>
                </div>
                <div>
                  STARTING AT $<span>30</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div style={{ padding: "13px" }}>
            <div>
              <Carousel showThumbs={false} showIndicators={false}>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
              </Carousel>
            </div>
            <div style={{ border: "1px solid #c5c5c5" }}>
              <div className="avatar-box" style={{ padding: "10px" }}>
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="Avatar"
                    className="avatar-pic"
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p>jawad_ali</p>
                  <p>Level 1 seller</p>
                </div>
              </div>
              <p style={{ padding: "0px 10px" }}>
                I will create responsive website and navigation
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <span
                  style={{ color: "orange" }}
                  className="fa fa-star checked"
                ></span>
                <p style={{ color: "orange" }}>4.9</p>
                <p>(10)</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "#c5c5c5" }}
                    className="fa fa-bars"
                  ></span>
                  <span
                    style={{ color: "#c5c5c5", marginLeft: "5px" }}
                    className="fa fa-heart"
                  ></span>
                </div>
                <div>
                  STARTING AT $<span>30</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div style={{ padding: "13px" }}>
            <div>
              <Carousel showThumbs={false} showIndicators={false}>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
              </Carousel>
            </div>
            <div style={{ border: "1px solid #c5c5c5" }}>
              <div className="avatar-box" style={{ padding: "10px" }}>
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="Avatar"
                    className="avatar-pic"
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p>jawad_ali</p>
                  <p>Level 1 seller</p>
                </div>
              </div>
              <p style={{ padding: "0px 10px" }}>
                I will create responsive website and navigation
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <span
                  style={{ color: "orange" }}
                  className="fa fa-star checked"
                ></span>
                <p style={{ color: "orange" }}>4.9</p>
                <p>(10)</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "#c5c5c5" }}
                    className="fa fa-bars"
                  ></span>
                  <span
                    style={{ color: "#c5c5c5", marginLeft: "5px" }}
                    className="fa fa-heart"
                  ></span>
                </div>
                <div>
                  STARTING AT $<span>30</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div style={{ padding: "13px" }}>
            <div>
              <Carousel showThumbs={false} showIndicators={false}>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
              </Carousel>
            </div>
            <div style={{ border: "1px solid #c5c5c5" }}>
              <div className="avatar-box" style={{ padding: "10px" }}>
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="Avatar"
                    className="avatar-pic"
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p>jawad_ali</p>
                  <p>Level 1 seller</p>
                </div>
              </div>
              <p style={{ padding: "0px 10px" }}>
                I will create responsive website and navigation
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <span
                  style={{ color: "orange" }}
                  className="fa fa-star checked"
                ></span>
                <p style={{ color: "orange" }}>4.9</p>
                <p>(10)</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "#c5c5c5" }}
                    className="fa fa-bars"
                  ></span>
                  <span
                    style={{ color: "#c5c5c5", marginLeft: "5px" }}
                    className="fa fa-heart"
                  ></span>
                </div>
                <div>
                  STARTING AT $<span>30</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div style={{ padding: "13px" }}>
            <div>
              <Carousel showThumbs={false} showIndicators={false}>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
              </Carousel>
            </div>
            <div style={{ border: "1px solid #c5c5c5" }}>
              <div className="avatar-box" style={{ padding: "10px" }}>
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="Avatar"
                    className="avatar-pic"
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p>jawad_ali</p>
                  <p>Level 1 seller</p>
                </div>
              </div>
              <p style={{ padding: "0px 10px" }}>
                I will create responsive website and navigation
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <span
                  style={{ color: "orange" }}
                  className="fa fa-star checked"
                ></span>
                <p style={{ color: "orange" }}>4.9</p>
                <p>(10)</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "#c5c5c5" }}
                    className="fa fa-bars"
                  ></span>
                  <span
                    style={{ color: "#c5c5c5", marginLeft: "5px" }}
                    className="fa fa-heart"
                  ></span>
                </div>
                <div>
                  STARTING AT $<span>30</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div style={{ padding: "13px" }}>
            <div>
              <Carousel showThumbs={false} showIndicators={false}>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
              </Carousel>
            </div>
            <div style={{ border: "1px solid #c5c5c5" }}>
              <div className="avatar-box" style={{ padding: "10px" }}>
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="Avatar"
                    className="avatar-pic"
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p>jawad_ali</p>
                  <p>Level 1 seller</p>
                </div>
              </div>
              <p style={{ padding: "0px 10px" }}>
                I will create responsive website and navigation
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <span
                  style={{ color: "orange" }}
                  className="fa fa-star checked"
                ></span>
                <p style={{ color: "orange" }}>4.9</p>
                <p>(10)</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "#c5c5c5" }}
                    className="fa fa-bars"
                  ></span>
                  <span
                    style={{ color: "#c5c5c5", marginLeft: "5px" }}
                    className="fa fa-heart"
                  ></span>
                </div>
                <div>
                  STARTING AT $<span>30</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div style={{ padding: "13px" }}>
            <div>
              <Carousel showThumbs={false} showIndicators={false}>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
                <div>
                  <img src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg" />
                </div>
              </Carousel>
            </div>
            <div style={{ border: "1px solid #c5c5c5" }}>
              <div className="avatar-box" style={{ padding: "10px" }}>
                <div>
                  <img
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                    src="https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg"
                    alt="Avatar"
                    className="avatar-pic"
                  />
                </div>
                <div style={{ marginLeft: "10px" }}>
                  <p>jawad_ali</p>
                  <p>Level 1 seller</p>
                </div>
              </div>
              <p style={{ padding: "0px 10px" }}>
                I will create responsive website and navigation
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "0px 10px",
                }}
              >
                <span
                  style={{ color: "orange" }}
                  className="fa fa-star checked"
                ></span>
                <p style={{ color: "orange" }}>4.9</p>
                <p>(10)</p>
              </div>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
              >
                <div>
                  <span
                    style={{ color: "#c5c5c5" }}
                    className="fa fa-bars"
                  ></span>
                  <span
                    style={{ color: "#c5c5c5", marginLeft: "5px" }}
                    className="fa fa-heart"
                  ></span>
                </div>
                <div>
                  STARTING AT $<span>30</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default MPGCarousel;
