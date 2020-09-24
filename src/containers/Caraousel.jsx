import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./stylesheets/Caraousel.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpeg";
const imgUrls = [img1, img2];
const Arrow = ({ direction, onClick }) => (
  <div className={`slide-arrow ${direction}`} onClick={onClick}>
    <FontAwesomeIcon
      icon={direction === "right" ? faChevronRight : faChevronLeft}
    />
  </div>
);
const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "450px",
    width: "100%",
  };
  return <div className="image-slide" style={styles}></div>;
};

class Caraousel extends Component {
  state = {
    currentIndex: 0,
    slide: true,
  };
  previousSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === 0;
    const index = resetIndex ? lastIndex : currentIndex - 1;
    this.setState({ currentIndex: index });
  };
  nextSlide = () => {
    const lastIndex = imgUrls.length - 1;
    const { currentIndex } = this.state;
    const resetIndex = currentIndex === lastIndex;
    const index = resetIndex ? 0 : currentIndex + 1;
    this.setState({ currentIndex: index });
  };
  render() {
    const { currentIndex } = this.state;
    return (
      <div className="container">
        <Arrow direction="left" onClick={this.previousSlide} />
        <ImageSlide url={imgUrls[currentIndex]} />
        <Arrow direction="right" onClick={this.nextSlide} />
      </div>
    );
  }
}
export default Caraousel;
