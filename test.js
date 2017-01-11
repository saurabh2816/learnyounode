// this file for the JS code you need
// to run while learning diffferent modules of learnyounode

var fs = require('fs');
var dir = "/Users/rana/Desktop/git/learnyounode";

fs.readdir(dir, function(err, files) {
  files.forEach(function(items){
    console.log(items);
  });
});

// checking arguments index
// console.log(process.argv[2]);
// console.log(process.argv[3]);
