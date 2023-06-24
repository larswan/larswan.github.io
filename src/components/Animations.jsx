import { useEffect } from "react"
import YouTubeVideo from "./YouTubeVideo"
import { useState } from "react"
import { Image } from "antd";

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

const Animations = () => {
    const [animationList, setAnimationList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('fileList.json');
                const data = await response.json();
                setAnimationList(data.animationList);
                console.log(data.animationList)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="artContainer">
            {youTubeMap.map((video)=>{
                return <YouTubeVideo name={video.name} link={video.link} />
            })}
            {
                animationList.map((animation, i) => {
                    return(
                        <Image src={animation} key={i} />
                        // <img src={animation} key={i}/>
                    )
                })
            }
        </div>
    )
}
export default Animations