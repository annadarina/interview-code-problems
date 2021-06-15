/**
 * @param {string[]} emails
 * @return {{}}
 */
const numUniqueEmails = function (emails) {
  const set = new Set;

  for (let i = 0; i < emails.length; i++) {
    let email = emails[i].split('@');
    email[0] = email[0].split('+')[0].replace(/\./g, '');
    set.add(email.join('@'));
  }

  return set.size;
};

const output1 = numUniqueEmails(["test.email+alex@leetcode.com", "test.e.mail+bob.cathy@leetcode.com", "testemail+david@lee.tcode.com"]);
const output2 = numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"]);
console.log(output1); // 2
console.log(output2); // 3

