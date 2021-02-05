"use strict";

function bananasCount(matrix) {
    let sum = 0;
    let index = 0;
    let array = [];

    for(let i = 0; i < matrix.length; i++) {
        sum += matrix[i][0];
        index = i;

        for (let j = 1; j < matrix[i].length; j++) {
            const next = getMaxOfThree(matrix, index, j);
            sum += next[0];
            index = next[1];
        }

        array.push(sum);
        sum = 0;
    }

    return Math.max(...array);
}

function getMaxOfThree(array, i, n) {
    let max = 0;
    let ind = 0;

    if(array[i-1]) {
        if(array[i-1][n] > max) {
            max = array[i-1][n];
            ind = i - 1;
        }
    }

    if(array[i][n] > max) {
        max = array[i][n];
        ind = i;
    }

    if (array[i+1]) {
        if(array[i+1][n] > max) {
            max = array[i+1][n];
            ind = i + 1;
        }
    }

    return [max, ind];
}

module.exports = bananasCount;
