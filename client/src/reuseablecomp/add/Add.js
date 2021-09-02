import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./add.css";
const Add = () => {
  return (
    <div className="adds">
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
  );
};

export default Add;
