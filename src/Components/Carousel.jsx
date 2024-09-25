import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleIndicatorClick = (index) => {
    if (isAnimating || index === activeIndex) return; // Prevent action if animating or already on the same index

    setIsAnimating(true); // Start animation

    // Determine direction based on index
    const direction = index > activeIndex ? "right" : "left";
    
    setActiveIndex(index);

    // Reset the animation state after transition
    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // This should match the transition duration (700ms)
  };

  return (
    <div className="carousel relative w-full h-[70vh] max-md:h-[100vh]">
      <div className="carousel-container relative w-full h-full ">
        {/* Slide 1 */}
        <div
          className={`absolute inset-0 w-full h-full flex max-md:flex-col items-center justify-between transition-transform duration-700 ease-in-out ${
            activeIndex === 0
              ? "translate-x-0"
              : activeIndex === 1
              ? "translate-x-full"
              : ""
          }`}
        >
          <div className="w-1/2 max-md:w-full h-full flex items-center justify-center">
            <img
              src="img/heroSlider.png"
              alt="Your sound best for your life"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-1/2 h-full max-md:w-full flex flex-col justify-center pl-32 max-md:pl-6">
          <p className="text-main text-[16px] font-medium">In the Spotlight</p>
            <h2 className="text-3xl md:text-4xl  font-bold mb-4">
              Your sound best <br /> for your life
            </h2>
            <p className="mb-10 max-md:mb-2 w-[60%] text-gray">
              These have large ear cups that encompass the ears, providing good
              sound isolation and often better sound quality.
            </p>
            <button className="bg-main w-[130px]  text-White px-4 py-2  mt-12 max-md:mt-4 rounded-lg font-medium flex items-center gap-2 ">
              Shop now <FaArrowRight className="mt-1 text-[14px]" />
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute inset-0 w-full h-full flex max-md:flex-col items-center justify-between transition-transform duration-700 ease-in-out ${
            activeIndex === 1
              ? "translate-x-0"
              : activeIndex === 0
              ? "-translate-x-full"
              : ""
          }`}
        >
          <div className="w-1/2 max-md:w-full h-full flex items-center justify-center">
            <img
              src="img/heroSlider2.png"
              alt="Experience the Best Audio"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-1/2 h-full max-md:w-full flex flex-col justify-center pl-32 max-md:pl-6">
          <p className="text-main text-[16px] font-medium">In the Spotlight</p>
            <h2 className="text-3xl md:text-4xl  font-bold mb-4">
              Your sound best <br /> for your life
            </h2>
            <p className="mb-10 max-md:mb-2 w-[60%] text-gray">
              These have large ear cups that encompass the ears, providing good
              sound isolation and often better sound quality.
            </p>
            <button className="bg-main w-[130px]  text-White px-4 py-2  mt-12 max-md:mt-4 rounded-lg font-medium flex items-center gap-2 ">
              Shop now <FaArrowRight className="mt-1 text-[14px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Indicators */}
      <div className="indicators  flex justify-center ">
        <div
          onClick={() => handleIndicatorClick(0)}
          className={`indicator h-2 bg-orange-500 rounded-full transition-all mt-8 duration-300 ${
            activeIndex === 0 ? "w-8" : "w-4"
          }`}
          style={{ cursor: "pointer" }}
        />
        <div
          onClick={() => handleIndicatorClick(1)}
          className={`indicator h-2 bg-orange-500 rounded-full transition-all duration-300 ${
            activeIndex === 1 ? "w-8" : "w-4"
          }`}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default Carousel;
