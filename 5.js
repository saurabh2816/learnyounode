var fs = require('fs');
var path = require('path');
//var ext = '.js';
var ext = '.' + process.argv[3]
fs.readdir(process.argv[2], callback);

function callback( err, list) {
  if(err)
  throw err;

  //console.log(list);
  for(var i=0; i<list.length; i++)
  if(ext == path.extname(list[i]))
  console.log(list[i]);
