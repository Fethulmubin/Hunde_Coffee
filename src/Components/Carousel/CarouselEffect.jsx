import React from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./Carousel.module.css";
import { img } from "./img/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CarouselEffect = () => {
  return (
    <div className={classes.hero_img}>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink) => {
          return <img src={imageItemLink} />;
        })}
      </Carousel>
      
    </div>
  );
};

export default CarouselEffect;
