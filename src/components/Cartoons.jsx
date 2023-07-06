import { Image } from "antd";
import { useEffect, useState } from "react";
import { cartoonPaths } from "./paths";

const Cartoons = ({ footer }) => {
    // const [cartoonList, setCartoonList] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('fileList.json');
    //             const data = await response.json();
    //             setCartoonList(data.cartoonList);
    //             // console.log(data.cartoonList)
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className="artContainer">
            {cartoonPaths.map((cartoon, i) => {
                return (
                    <Image className="graphics" src={cartoon} key={i} />
                )
            })}
            {footer}
        </div>
    );
}
export default Cartoons