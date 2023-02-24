const fs = require('fs');
const path = require('path');

// Just using a pipe as a delimiter, but it can be whatever you want
const DELIMITER = '|';

const doMaths = () => {
    // grab the contents of the file (the `readFileSync` returns a buffer... `toString` makes a string)
    const contents = fs.readFileSync(path.join(__dirname, 'file.txt')).toString();
    // split on new line to get each row
    const rows = contents.split('\n');
    let min;
    let max;
    let sum = 0;
    let count = 0;
    rows.forEach(row => {
        row.split(DELIMITER).forEach(elm => {
            // it's a string, so gotta convert to number
            const currentNum = Number(elm);
            if (!min || currentNum < min) {
                min = currentNum;
            }
            if (!max || currentNum > max) {
                max = currentNum;
            }
            sum += currentNum;
            count++;
        })
    });
    console.log('MINIMUM: ', min);
    console.log('MAXIMUM: ', max);
    console.log('AVERAGE: ', Math.floor(sum / count));
}

doMaths();
