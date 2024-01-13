"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { DotIcon } from "lucide-react";

function Slider() {
  const slides = [
    {
      url: "https://cdn-images.farfetch-contents.com/18/70/98/91/18709891_41030295_800.jpg",
    },
    {
      url: "https://cdn-images.farfetch-contents.com/20/19/25/61/20192561_45802048_800.jpg",
    },
    {
      url: "/p03.jpg",
    },
    {
      url: "/p04.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  const intervalRef = useRef<any>(null);

  const autoSlide = () => {
    // Clear any existing interval
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    // Automatically advance to the next slide every 5000 milliseconds (5 seconds)
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  // Start the auto slide when the component mounts
  useEffect(() => {
    autoSlide();

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [currentIndex]);

  return (
    <div className="max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover bg-no-repeat duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden sm:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden sm:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <ArrowRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <DotIcon />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
