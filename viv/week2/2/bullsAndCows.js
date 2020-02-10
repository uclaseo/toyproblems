/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bulls = 0;
    let cows = 0;
    let map = {}
    for (let i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) bulls++;
        else if (map[secret[i]]) map[secret[i]]++;
        else map[secret[i]] = 1;
    }
    for (let i = 0; i < guess.length; i++) {
        if (
            secret[i] !== guess[i]
            && map[guess[i]]
            && map[guess[i]] > 0
        ) {
            cows++;
            map[guess[i]]--;
        }
    }
    return `${bulls}A${cows}B`;
};