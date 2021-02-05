'use strict';

const bananasCount = require('./bananas');

test('Should return max amount of bananas', () => {
    const matrix = [
        [1, 3, 3],
        [2, 1, 4],
        [0, 6, 4]
    ];

    expect(bananasCount(matrix))
        .toEqual(12);
});

test('Should return max amount of bananas', () => {
    const matrix = [
        [0, 3, 3],
        [0, 1, 4],
        [0, 6, 4]
    ]

    expect(bananasCount(matrix))
        .toEqual(10);
});

test('Should return max amount of bananas in 4*4 dimensions', () => {
    const matrix = [
        [1, 3, 1, 5],
        [2, 2, 4, 1],
        [5, 0, 2, 3],
        [0, 6, 1, 2]
    ];

    expect(bananasCount(matrix))
        .toEqual(16);
});

test('Should return max amount of bananas in 4*4 dimensions', () => {
    const matrix = [
        [10, 33, 13, 15],
        [22, 21, 4, 1],
        [5, 0, 2, 3],
        [0, 6, 14,2]
    ];

    expect(bananasCount(matrix))
        .toEqual(83);
});

test('Should work with non-standart dimensions', () => {
    const matrix = [
        [10, 33, 13, 15, 0],
        [0, 21, 4, 1, 6],
        [22, 0, 2, 3, 14]
    ];

    expect(bananasCount(matrix))
        .toEqual(77);
});

test('should bring out as many bananas as possible ', () => {
    const matrix = [
        [1, 3, 74],
        [2, 1, 4],
        [0, 6, 4]
    ];

    expect(bananasCount(matrix))
        .toEqual(79);
});

test('should bring out as many bananas as possible ', () => {
    const matrix = [
        [0, 0, 45],
        [0, 1, 4],
        [0, 6, 4]
    ];

    expect(bananasCount(matrix))
        .toEqual(46);
});
