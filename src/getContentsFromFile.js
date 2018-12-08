const fs = require('fs');

/**
 * @description Read file and get the contents
 * @param {string} file - The file to be read
 */
const getContentsFromFile = file => {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch (error) {
    throw new Error('Error reading file. ' + error);
  }
};

module.exports = {
  getContentsFromFile
};
