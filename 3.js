var fs = require('fs');

var buf = fs.readFileSync('data.txt');

var str = buf.toString().split('\n');
console.log(str);
