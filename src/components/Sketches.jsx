import { Image } from "antd";
import { useEffect, useState } from "react";
import { Button, Space } from 'antd';

const Sketches = () => {
    const [sketchList, setSketchList] = useState([])
    const [count, setCount] = useState()
    const [max, setMax] = useState()
    let maxe

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('fileList.json');
                const data = await response.json();
                console.log(data)
                setSketchList(data.sketchList);
                setCount(data.sketchList.length-1)
                setMax(data.sketchList.length-1)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(()=>{
        console.log("count = " + count)
        console.log("count = " + count)
        ,[count]})

    const increment = () => {
        console.log("max " + max)

        if (count === max){
            setCount(0)
        }
        else {
            setCount((prev)=>++prev)
        }
    }
    
    const decrement = () => {
        console.log(count)
        if (count == 0) {
            console.log("triggered " + max)
            setCount(max)
        }
        else {
            setCount((prev)=>--prev)
        }
    }


    return (
        <div>
            <Button type="primary" onClick={()=>decrement()}> back </Button>
            <Button type="primary" onClick={()=>increment()}>forward</Button>
           
            <Image src={sketchList[count]} key={sketchList[count]} />
           
            {/* {sketchList.map((sketch, i)=>{
                return(
                    <Image src={sketch}  key={i} />
                    )
                })} */}
            <div>
            
            </div>    
        </div>
    );
}
export default Sketches