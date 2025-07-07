import { useEffect, useState } from "react";
import { Button, Space } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { sketchPaths } from "./paths";

function shuffleArray(array) {
  const newArray = [...array]; // Create a new array to avoid modifying the original array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Sketches = ({ footer }) => {
  const max = sketchPaths.length - 1;
  const [count, setCount] = useState(7); // Start with sadboi.png (index 7)
  const [currentImage, setCurrentImage] = useState(sketchPaths[7]); // Start with sadboi.png
  const [frameOpacity, setFrameOpacity] = useState(0); // Start with frame invisible
  const [imageOpacity, setImageOpacity] = useState(0); // Start with image invisible
  const [isTransitioning, setIsTransitioning] = useState(false);
  const randomizedSketches = shuffleArray(sketchPaths);

  // Preload all images when component mounts
  useEffect(() => {
    const preloadImages = () => {
      sketchPaths.forEach((path) => {
        const img = new Image();
        img.src = path;
      });
    };
    preloadImages();

    // Initial fade-in animation
    setTimeout(() => {
      setFrameOpacity(1);
      setTimeout(() => {
        setImageOpacity(1);
      }, 300); // Start image fade after frame fade
    }, 100);
  }, []);

  const decrement = () => {
    if (count === 0) {
      const newCount = max;
      setCount(newCount);
      loadNewImage(sketchPaths[newCount]);
    } else {
      const newCount = count - 1;
      setCount(newCount);
      loadNewImage(sketchPaths[newCount]);
    }
  };

  const loadNewImage = (imagePath) => {
    setIsTransitioning(true);

    // Step 1: Fade image to white
    setImageOpacity(0);

    setTimeout(() => {
      // Step 2: Fade frame to transparent
      setFrameOpacity(0);

      setTimeout(() => {
        // Step 3: Change image source
        setCurrentImage(imagePath);

        setTimeout(() => {
          // Step 4: Fade frame back in
          setFrameOpacity(1);

          setTimeout(() => {
            // Step 5: Fade image from white to visible
            setImageOpacity(1);
            setIsTransitioning(false);
          }, 300);
        }, 100);
      }, 300);
    }, 300);
  };

  return (
    <div className="vertCenter">
      <div className="sketchPageContainer">
        <div
          onClick={() => !isTransitioning && decrement()}
          className={`sketchFrame ${isTransitioning ? "transitioning" : ""}`}
          style={{
            opacity: frameOpacity,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <img
            className="sketch"
            src={currentImage}
            key={currentImage}
            style={{
              opacity: imageOpacity,
              transition: "opacity 0.3s ease-in-out",
              filter: imageOpacity === 0 ? "brightness(0) invert(1)" : "none", // White when opacity is 0
            }}
          />
        </div>
        {footer}
      </div>
    </div>
  );
};

export default Sketches;
