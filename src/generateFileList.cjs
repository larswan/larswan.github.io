// const fs = require('fs');
// const path = require('path');

// function generateFileList(dir) {
//     const files = fs.readdirSync(dir);

//     const fileList = files.map((file) => path.join(dir, file));

//     return fileList;
// }

// export const sketchList = generateFileList('public/sketches');
// export const animationList = generateFileList('public/animations');
// export const graphicList = generateFileList('public/graphics');
// export const cartoonList = generateFileList('public/cartoons');

// console.log(fileList);

const fs = require("fs");
const path = require("path");

function generateFileList(dir) {
  const files = fs.readdirSync(dir);

  const fileList = files.map((file) => {
    const fullPath = path.join(dir, file);
    // Remove 'public' from the start and ensure leading slash
    return fullPath.replace(/^public/, "");
  });

  return fileList;
}

const sketchList = generateFileList("public/sketches");
const animationList = generateFileList("public/animations");
const graphicList = generateFileList("public/graphics");
const cartoonList = generateFileList("public/cartoons");

const data = {
  sketchList,
  animationList,
  graphicList,
  cartoonList,
};

const jsonData = JSON.stringify(data);

fs.writeFileSync("fileList.json", jsonData);

console.log("File list generated and saved to fileList.json");
