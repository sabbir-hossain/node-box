const { execFile } = require('node:child_process');
const fs = require('fs');
const path = require('path');


const dirPath = __dirname;
const regex = /server([0-9])+\.js$/;

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter files with regex
    const matchedFiles = files.filter(file => regex.test(file));

    console.log('Matched files:', matchedFiles);

    for(const file of matchedFiles) {
      // console.log(`Executing: node ${file}`);
      const child = execFile('node', [`${file}`], (error, stdout, stderr) => {
        if (error) {
          throw error;
        }
        console.log(stdout);
      });
    }
});

