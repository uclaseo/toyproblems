/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let count = 0;
    let map = {};
    emails.forEach(email => {
        let parts = email.split('@');
        let uniqueEmail = `${parts[0].replace(/\./g, '').split('+')[0]}@${parts[1]}`;
        if (map[uniqueEmail] === undefined) {
            count++;
            map[uniqueEmail] = uniqueEmail;
        }
    });
    return count;
};

let emails = [
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com"
];
console.log(numUniqueEmails(emails));