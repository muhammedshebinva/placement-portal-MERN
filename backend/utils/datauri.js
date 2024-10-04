// import DataUriParser from "datauri/parser.js"

// import path from "path";

// const getDataUri = (file) => {
//     const parser = new DataUriParser();
//     //const extName = path.extname(file.originalname).toString();
//     console.log(extName)
//     return parser.format(extName, file.buffer);
// }

// export default getDataUri;

import DataUriParser from "datauri/parser.js"
import * as path from 'path';

const getDataUri = (file) => {
  try {
    const parser = new DataUriParser();
    const extName = path.extname(file.originalname).toString();
   


    // Add error handling or type checking for unsupported file types
    // if (!supportedFileTypes.includes(extName)) {
    //   throw new Error('Unsupported file type');
    // }

    // Ensure file.buffer is valid
    // if (!file.buffer || file.buffer.length === 0) {
    //   throw new Error('Invalid file buffer');
    // }

    return parser.format(extName, file.buffer); // Convert buffer to base64 string
  } catch (error) {
    console.error('Error converting file to data URI:', error);
    return null; // Or handle error appropriately
  }
};

export default getDataUri;