import { readdirSync } from 'fs';
import { useEffect, useState } from 'react';


const Sketches = () => {
    const [cartoonPaths, setCartoonPaths] = useState([]);

    useEffect(() => {
        const fetchCartoonPaths = async () => {
            try {
                const directoryPath = 'public/cartoons';
                const files = readdirSync(directoryPath);
                const paths = files.map((file) => `/${directoryPath}/${file}`);
                setCartoonPaths(paths);
            } catch (error) {
                console.error('Error reading directory:', error);
            }
        };

        fetchCartoonPaths();
    }, []);

    return (
        <div>
            {cartoonPaths.map((cartoon)=>{
                <img src={cartoon} />
            })}
        </div>
    );
}
export default Sketches