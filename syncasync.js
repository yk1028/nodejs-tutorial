const fs = require('fs');
console.log(1);
var data = fs.readFileSync('data.txt', {encoding: 'utf8'});
console.log(data);

console.log(2);
var data = fs.readFileSync('data.txt', {encoding: 'utf8'}, (err, data) =>{console.log(3); console.log(data)});
console.log(4);
console.log(data);