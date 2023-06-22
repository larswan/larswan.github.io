import { Image } from "antd";
// import { getFileNameWithoutExtension } from "./functions";
import { sketchList } from "../generateFileList.cjs";

const Sketches = () => {

    const sketchArray=[
        {
            path: "sketches/WOODY.png",
            name:  "Woody"
        },
        {
            path: "sketches/Screen Shot 2020-09-02 at 4.24.11 AM.png",
            name:  ""
        },
        {
            path: "sketches/sadboi.png",
            name:  ""
        },
        {
            path: "sketches/im well bw.png",
            name:  ""
        },
        {
            path: "sketches/gull.png",
            name:  ""
        },
        {
            path: "sketches/Feb17 16.jpg",
            name:  ""
        },
    ]

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