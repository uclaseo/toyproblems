/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let bannedMap = {};
    for (let i = 0; i < banned.length; i++) bannedMap[banned[i]] = 1;

    let parts = paragraph.replace(/[^a-zA-Z]/g,' ').replace(/  +/g, ' ').toLowerCase().split(' ');
    
    let map = {};
    let word = null;
    for (let i = 0; i < parts.length; i++) {
        let currWord = parts[i];
        if (bannedMap[currWord]) continue;
        if (map[currWord]) map[currWord]++;
        else map[currWord] = 1;
        if (!word || map[currWord] > map[word]) {
            word = currWord;
        }
    }
    return word;
};

let testp = "a, a, a, a, b,b,b,c, c";
let testb = ["a"];

console.log(mostCommonWord(testp, testb));