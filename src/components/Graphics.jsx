import { Image } from "antd";
import { useEffect, useState } from "react";

const Graphics = () => {
    const [graphicList, setGraphicList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('fileList.json');
                const data = await response.json();
                setGraphicList(data.graphicList);
           } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="grid">
            {graphicList.map((graphic, i) => {
                return (
                    <div className="grid-item">
                        <Image src={graphic} key={i} />
                    </div>
                )
            })}
        </div>
    );
}
export default Graphics