const fs = require('fs');
const data = fs.readFileSync('accounts.json').toString().split('\n');
const arr = [];

for (let i = 1; i < data.length; i=i+2) {
  arr.push(JSON.parse(data[i]));
}

fs.writeFileSync('accounts_org.json', JSON.stringify(arr, null, 2));
