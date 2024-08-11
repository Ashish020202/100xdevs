// Node js code for generating SHA-256

//NOTES: https://app.100xdevs.com/pdf/425

const crypto = require ('crypto');

const input = 'Ashish';
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash);
