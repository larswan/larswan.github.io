import { useEffect, useState } from "react";
import { sketchPaths } from "./paths";

function shuffleArray(array) {
  const newArray = [...array];
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
  const [imageOpacity, setImageOpacity] = useState(0); // Start transparent
  const [transitionDuration, setTransitionDuration] = useState("opacity 2s");
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
    // Fade in the first image
    setTimeout(() => {
      setImageOpacity(1);
      setTimeout(() => setTransitionDuration("opacity 0.3s"), 2000);
    }, 100);
  }, []);

  const decrement = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setImageOpacity(0);
    let newCount = count === 0 ? max : count - 1;
    setTimeout(() => {
      const img = new Image();
      img.onload = () => {
        setCurrentImage(sketchPaths[newCount]);
        setCount(newCount);
        setTimeout(() => {
          setImageOpacity(1);
          setIsTransitioning(false);
        }, 300);
      };
      img.onerror = () => {
        setImageOpacity(1);
        setIsTransitioning(false);
      };
      img.src = sketchPaths[newCount];
    }, 300);
  };

  return (
    <div className="vertCenter">
      <div className="sketchPageContainer">
        <div className="sketchFrame" onClick={decrement}>
          <img
            className="sketch"
            src={currentImage}
            key={currentImage}
            style={{
              opacity: imageOpacity,
              transition: transitionDuration,
              WebkitMaskImage: `
                linear-gradient(to right, transparent 0px, white 5px, white calc(100% - 5px), transparent 100%),
                linear-gradient(to bottom, transparent 0px, white 5px, white calc(100% - 5px), transparent 100%)
              `,
              WebkitMaskComposite: "source-in",
              maskImage: `
                linear-gradient(to right, transparent 0px, white 5px, white calc(100% - 5px), transparent 100%),
                linear-gradient(to bottom, transparent 0px, white 5px, white calc(100% - 5px), transparent 100%)
              `,
              maskComposite: "intersect",
            }}
          />
        </div>
        {footer}
      </div>
    </div>
  );
};

export default Sketches;
