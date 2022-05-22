const fs = require('fs');
const util = require('util');
const readFromFile = util.promisify(fs.readFile);

const readAndAppend = (newContent, file) => {
    fs.readFile(file, 'utf-8', (err, data) => {
        if(!err) {
            const fileData = JSON.parse(data);
            fileData.push(newContent);
            fs.writeFile(file, JSON.stringify(fileData), (err) => {
                err ? console.error(err) : console.info(`New record has been added to ${file}`) 
            })
        }
        else {
            console.error(err);
        }
    })
}

const writeToFile = (newContent, file) => {
    fs.writeFile(file, JSON.stringify(newContent), (err) => {
        err ? console.error(err) : console.info(`Data has been written to ${file}`) 
    })
}

module.exports = { readFromFile, readAndAppend, writeToFile };