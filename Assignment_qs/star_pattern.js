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
const numbersOfRows = 6;
generateStarPattern(numbersOfRows);





//pattern-2


function rightAlignedTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
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


//pattern -3

function centerAlignedTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let k = 1; k <= rows - i; k++) {
            pattern += ' ';
        }
        for (let j = 1; j <= i; j++) {
            pattern += ' *';
        }
        console.log(pattern);
    }
}

const rowsCentertAligned = 5;
centerAlignedTriangle(rowsCentertAligned);


//pattern - 4


function printInvertedPyramid(rows) {
    // Outer loop for number of rows
    for (let i = rows; i >= 1; i--) {
        let row = '';
        // Inner loop for printing stars
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

// Example usage
const numberOfRows = 5;
printInvertedPyramid(numberOfRows);
