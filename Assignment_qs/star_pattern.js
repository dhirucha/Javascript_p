function generateStarPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = ' ';
        for (let j = 1; j <= i; j++) {
            pattern += '* ';
        }
        console.log(pattern);
    }
}

// Change the number to adjust the number of rows in the pattern
const numberOfRows = 6;
generateStarPattern(numberOfRows);




function rightAlignedTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = ' ';
        for (let k = 1; k <= rows - i; k++) {
            pattern += ' ';
        }
        for (let j = 1; j <= i; j++) {
            pattern += '*';
        }
        console.log(pattern);
    }
}

const rowsRightAligned = 5;
rightAlignedTriangle(rowsRightAligned);
