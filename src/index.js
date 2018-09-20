module.exports = function solveSudoku(matrix) {

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][j] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            }
        }
    }


    for (let i = 0; i < matrix.length; i++) {
        compareRow(matrix, i);
    }


    for (let i = 0; i < matrix.length; i++) {
        compareColumn(matrix, i);
    }

    return matrix;
};


function compareRow(matrix, column) {
    for (let i = 0; i < matrix.length; i++) {
        if (typeof matrix[column][i] !== "object") {
            const elem = matrix[column][i];
            for (let j = 0; j < matrix.length; j++) {
                if (typeof matrix[column][j] === "object") {
                    const index = matrix[column][j].indexOf(elem);
                    if (index !== -1) {
                        matrix[column][j].splice(index, 1);
                    }
                    if (matrix[column][j].length === 0) {
                        matrix[column][j] = matrix[column][j][0];
                    }
                }
            }
        }
    }
    return matrix;
}

function compareColumn(matrix, row) {
    for (let i = 0; i < matrix.length; i++) {
        if (typeof matrix[i][row] !== "object") {
            const elem = matrix[i][row];
            for (let j = 0; j < matrix.length; j++) {
                if (typeof matrix[j][row] === "object") {
                    const index = matrix[j][row].indexOf(elem);
                    if (index !== -1) {
                        matrix[j][row].splice(index, 1);
                    }
                    if (matrix[j][row].length === 0) {
                        matrix[j][row] = matrix[j][row][0];
                    }
                }
            }
        }
    }
    return matrix;
}