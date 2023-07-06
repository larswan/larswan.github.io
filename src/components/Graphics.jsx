import { Image } from "antd";
import { useEffect, useState } from "react";
import { graphicPaths } from "./paths";

const Graphics = ({footer}) => {
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
        <div className="artContainer">
            {graphicPaths.map((graphic, i) => {
                return (
                        <Image alt="graphic" className="graphics" src={graphic} key={i} />
                )
            })}
            {footer}
        </div>
    );
}
export default Graphics