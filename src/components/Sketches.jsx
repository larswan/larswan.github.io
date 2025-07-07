// To update sketch file path list run node src/generateFileList.cjs

import { useEffect, useState } from "react";

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const Sketches = ({ footer }) => {
  const [sketchPaths, setSketchPaths] = useState([]);
  const [count, setCount] = useState(0); // Will be set after fetch
  const [currentImage, setCurrentImage] = useState(null);
  const [imageOpacity, setImageOpacity] = useState(0); // Start transparent
  const [transitionDuration, setTransitionDuration] = useState("opacity 2s");
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Fetch fileList.json on mount
  useEffect(() => {
    fetch("/fileList.json")
      .then((res) => res.json())
      .then((data) => {
        const shuffled = shuffleArray(data.sketchList);
        setSketchPaths(shuffled);
        // Start on the last image (to match previous behavior, but now in shuffled order)
        setCount(shuffled.length - 1);
        setCurrentImage(shuffled[shuffled.length - 1]);
        setTimeout(() => {
          setImageOpacity(1);
          setTimeout(() => setTransitionDuration("opacity 0.3s"), 2000);
        }, 100);
      });
  }, []);

  const decrement = () => {
    if (isTransitioning || sketchPaths.length === 0) return;
    setIsTransitioning(true);
    setImageOpacity(0);
    let newCount = count === 0 ? sketchPaths.length - 1 : count - 1;
    setTimeout(() => {
      const img = new window.Image();
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
          {currentImage && (
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
          )}
        </div>
        {footer}
      </div>
    </div>
  );
};

export default Sketches;
