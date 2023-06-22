import { useEffect, useState } from 'react';
// import generatePaths from './generatePaths';

// const fs = require('fs');
// const path = require('path');

// const cartoonsPath = path.join(__dirname, 'public/cartoons');

// const generatePaths = () => {
//     const files = fs.readdirSync(cartoonsPath);
//     const paths = files.map((file) => `/${cartoonsPath}/${file}`);
//     return paths;
// };

// module.exports = generatePaths;

function Cartoons() {
    // const [cartoonPaths, setCartoonPaths] = useState([]);

    // useEffect(() => {
    //     const fetchCartoonPaths = async () => {
    //         try {
    //             const paths = generatePaths();
    //             setCartoonPaths(paths);
    //         } catch (error) {
    //             console.error('Error generating cartoon paths:', error);
    //         }
    //     };

    //     fetchCartoonPaths();
    // }, []);

    return (
        <div>
            {/* <img src={cartoonPaths[0]} /> */}
        </div>
    );
}

export default Cartoons;