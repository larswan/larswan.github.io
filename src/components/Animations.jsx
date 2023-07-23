import { useEffect } from "react"
import YouTubeVideo from "./YouTubeVideo"
import { useState } from "react"
import { Image } from "antd";
import { animationPaths } from "./paths";

const youTubeMap = [
    {
        name: "Obligatory Text",
        link: "https://www.youtube.com/embed/R7Z9eUg_M-Q"
    },
    {
        name: "Hallulujah Video",
        link: "https://www.youtube.com/embed/ktLZu3rV88I"
    },
    
]

const Animations = ({ footer }) => {
    // const [animationList, setAnimationList] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('fileList.json');
    //             const data = await response.json();
    //             setAnimationList(data.animationList);
    //             // console.log(data.animationList)
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className="animationContainer">
            {youTubeMap.map((video)=>{
                return <YouTubeVideo name={video.name} link={video.link} key={video.name} />
            })}
            {
                animationPaths.map((animation, i) => {
                    return(
                        <Image className="graphics" src={animation} key={i} />
                        // <img src={animation} key={i}/>
                    )
                })
            }
            {footer}
        </div>
    )
}
export default Animations