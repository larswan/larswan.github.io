const fs = require('fs');
const path = require('path');

const cartoonsPath = path.join(__dirname, 'public/cartoons');

const generatePaths = () => {
    const files = fs.readdirSync(cartoonsPath);
    const paths = files.map((file) => `/${cartoonsPath}/${file}`);
    return paths;
};

module.exports = generatePaths;