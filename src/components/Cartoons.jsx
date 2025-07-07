// To update cartoon file path list run node src/generateFileList.cjs

import { Image } from "antd";
import { useEffect, useState } from "react";

const Cartoons = ({ footer }) => {
  const [cartoonList, setCartoonList] = useState([]);

  useEffect(() => {
    fetch("/fileList.json")
      .then((res) => res.json())
      .then((data) => {
        setCartoonList(data.cartoonList);
      });
  }, []);

  return (
    <div className="pageContainer">
      <div className="artContainer">
        {cartoonList.map((cartoon, i) => {
          return <Image className="graphics" src={cartoon} key={i} />;
        })}
        {footer}
      </div>
    </div>
  );
};
export default Cartoons;
