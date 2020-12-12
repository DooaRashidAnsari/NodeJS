const fs = require('fs').promises;
const fileSystem = require('fs');
const path = require('path');
const initialFilePath = path.join(__dirname,'../assets/todos/')

module.exports.readFile = async (filePath) => {
 try {
   const data = await fs.readFile(filePath);
   console.log(data.toString());
  } catch (error) {
   console.error(`Error reading file: ${error.message}`);
  }
}

module.exports.fileExists = async (fileName) => {
    let exists = false;
    try {
      exists = await fileSystem.existsSync(initialFilePath+fileName);      
     } catch (error) {
      console.error(`Error checking file existence: ${error.message}`);
     }
     return exists;
}

module.exports.createFile = async (fileName) => {
    try {
        const csvHeaders = 'title,desc'
        await fs.writeFile(initialFilePath+fileName, csvHeaders);
    } catch (error) {
        console.error(`Got an error trying to write to a file: ${error.message}`);
    }
}

module.exports.appendToFile = async (fileName, data) => {
    try {
        await fs.writeFile(initialFilePath+fileName, data, { flag: 'a' });
    } catch (error) {
        console.error(`Got an error trying to append to a file: ${error.message}`);
    }
}

module.exports.readFile = async (fileName) => {
    let data = '';
    try {
        data = await fs.readFile(initialFilePath+fileName);
    } catch (error) {
        console.error(`Got an error trying to read file: ${error.message}`);
    }
    return data.toString();
}
