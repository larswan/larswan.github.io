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
    const [count, setCount] = useState(0)
    // const [max, setMax] = useState()
    const max = sketchPaths.length-1
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

    const increment = () => {
        // console.log("max " + max)
        if (count === max){
            setCount(0)
        }
        else {
            setCount((prev)=>++prev)
        }
    }

    return (
        <div className="sketchPageContainer">
            {/* <Button style={{ fontSize: '20px', height: 50, borderRadius: 100}} type="primary" onClick={()=>decrement()}>
                <CaretLeftOutlined />
            </Button> */}

           <div onClick={()=>increment()} className="sketchFrame">
                <img className="sketch" src={randomizedSketches[count]} key={randomizedSketches[count]} />
           </div>
            
            {/* <Button style={{ fontSize: '20px', height: 50, borderRadius: 100}} type="primary" onClick={()=>increment()}>
                <CaretRightOutlined />
            </Button> */}
            {footer}
        </div>
    );
}
export default Sketches