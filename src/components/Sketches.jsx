import { useEffect, useState } from "react";
import { Button, Space } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { sketchPaths } from "./paths";

function shuffleArray(array) {
    const newArray = [...array]; // Create a new array to avoid modifying the original array
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

const Sketches = ({footer}) => {
    // const [sketchList, setSketchList] = useState([])
    const max = sketchPaths.length-1
    const [count, setCount] = useState(max)
    const randomizedSketches = shuffleArray(sketchPaths)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('fileList.json');
    //             const data = await response.json();
    //             setSketchList(data.sketchList);
    //             setCount(data.sketchList.length-1)
    //             setMax(data.sketchList.length-1)
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const decrement = () => {
        // console.log("max " + max)
        if (count === 0){
            setCount(max)
        }
        else {
            setCount((prev)=>--prev)
        }
    }

    return (
        <div className="sketchPageContainer">
           <div onClick={()=>decrement()} className="sketchFrame">
                <img className="sketch" src={sketchPaths[count]} key={sketchPaths[count]} />
           </div>
            {footer}
        </div>
    );
}
export default Sketches