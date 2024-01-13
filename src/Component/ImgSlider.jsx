
"use client";

import { useState, useRef, useEffect } from "react";
import rightArrow from "../assets/sliderAssets/rightArrow.png";
import leftArrow from "../assets/sliderAssets/leftArrow.png";

export default function ImageSlider({ images, text }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const sliderRef = useRef(null);

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
    const sliderCurrent = sliderRef.current;
    const slidesArray = Array.from(sliderCurrent.querySelectorAll("img"));
    const targetSlide = slidesArray[index];
    sliderCurrent.scrollLeft = targetSlide.offsetLeft;
  }

  const handlePrevClick = () => {
    const newIndex = currentSlideIndex - 1 >=0 ? currentSlideIndex - 1 : images.length - 1;
    goToSlide(newIndex);
  }

  const handleNextClick = () => {
    const newIndex = currentSlideIndex + 1 < images.length ? currentSlideIndex + 1 : 0;
    goToSlide(newIndex);
  }

  useEffect(() => {
    const sliderCurrent = sliderRef.current;

    if (!sliderCurrent) {
      return;
    }
    const slides = sliderCurrent.querySelectorAll("div");
    const slidesArray = Array.from(slides);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = slidesArray.indexOf(entry.target);
            setCurrentSlideIndex(index);
          }
        });
      },
      {
        root: sliderCurrent,
        threshold: 0.5,
      }
    );
    slides.forEach((slide) => observer.observe(slide));

    return () => slides.forEach((slide) => observer.unobserve(slide));
  }, []);

  return (
    <div className="w-full h-full">
      {/* Slider */}
      <div
        ref={sliderRef}
        className="w-full flex flex-row overflow-x-scroll snap-x snap-mandatory"
        style={{
          paddingBottom: "15px",
          clipPath: "inset(0 0 15px 0)",
        }}
      >
        {images.map((url, index) => {
          return (
            <div key={url} className="w-full flex-shrink-0 snap-start">
              <img src={url}/>
              <p>{text[index]}</p>
            </div>
          );
        })}
      </div>

      <button 
        className=""
        onClick={handlePrevClick}>
        <img src={leftArrow} />
      </button>
      <button
        className=""
        onClick={handleNextClick}>
        <img src={rightArrow} />
      </button>
    </div>
  );
}