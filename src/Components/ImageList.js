// ImageList.js

const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);

const imagePaths = images.keys().map(images);
export default imagePaths;
