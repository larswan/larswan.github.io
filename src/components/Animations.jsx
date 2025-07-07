// To update animation file path list run node src/generateFileList.cjs

import { useEffect, useState } from "react";
import YouTubeVideo from "./YouTubeVideo";
import { Image } from "antd";

const youTubeMap = [
  {
    name: "Obligatory Text",
    link: "https://www.youtube.com/embed/R7Z9eUg_M-Q",
  },
  {
    name: "Hallulujah Video",
    link: "https://www.youtube.com/embed/ktLZu3rV88I",
  },
];

const Animations = ({ footer }) => {
  const [animationList, setAnimationList] = useState([]);

  useEffect(() => {
    fetch("/fileList.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimationList(data.animationList);
      });
  }, []);

  return (
    <div className="pageContainer">
      <div className="animationContainer">
        {youTubeMap.map((video) => {
          return (
            <YouTubeVideo
              name={video.name}
              link={video.link}
              key={video.name}
            />
          );
        })}
        {animationList.map((animation, i) => {
          return <Image className="graphics" src={animation} key={i} />;
        })}
        {footer}
      </div>
    </div>
  );
};
export default Animations;
