/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let origColor = image[sr][sc];
    if (origColor === newColor) return image;
    let color = function(r, c) {
        if (
            image[r] !== undefined
            && image[r][c] !== undefined
            && image[r][c] === origColor
        ) {
            image[r][c] = newColor;
            color(r-1, c);
            color(r+1, c);
            color(r, c-1);
            color(r, c+1);
        }
    };
    color(sr, sc);
    return image;
};

let testImg = [[0,0,0],[0,1,1]];
let testR = 1;
let testC = 1;
let testColor = 1;
console.log(floodFill(testImg, testR, testC, testColor));