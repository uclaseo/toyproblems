var numUniqueEmails = function (emails) {
  const map = {};
  for (let i = 0; i < emails.length; i += 1) {
    let email = '';
    const atIndex = emails[i].indexOf('@');
    const local = emails[i].slice(0, atIndex);
    const domain = emails[i].slice(atIndex);
    const plusIndex = local.indexOf('+');
    if (plusIndex > 0) {
      email = local.slice(0, plusIndex).split('.').join('') + domain;
    } else {
      email = local.split('.').join('') + domain
    }
    map[email] = true;
  }
  return Object.keys(map).length;
};