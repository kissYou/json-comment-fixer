const jsonFix = require('./index');
const fs = require('fs');

const file = `./test.json`;
const jsonContent = fs.readFileSync(file, 'utf-8');

const { data, changed } = jsonFix(jsonContent, { parse: false }); // Lint (and fix) it

console.log(changed);
