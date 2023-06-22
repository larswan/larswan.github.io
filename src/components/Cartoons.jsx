import { Image } from "antd";
import { useEffect, useState } from "react";

const Cartoons = () => {
    const [cartoonList, setCartoonList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('fileList.json');
                const data = await response.json();
                setCartoonList(data.cartoonList);
                console.log(data.cartoonList)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {cartoonList.map((cartoon, i) => {
                return (
                    <Image src={cartoon} key={i} />
                )
            })}
        </div>
    );
}
export default Cartoons