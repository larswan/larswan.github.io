import { Image } from "antd";
import { useEffect, useState } from "react";

const Sketches = () => {
    const [sketchList, setSketchList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('fileList.json');
                const data = await response.json();
                setSketchList(data.sketchList);
                console.log(data.sketchList)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {sketchList.map((sketch, i)=>{
                return(
                    <Image src={sketch}  key={i} />
                )
            })}
        </div>
    );
}
export default Sketches