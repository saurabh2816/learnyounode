var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', callback);

function callback( err, data) {
  if(err)
  throw err;
  var str = data.split('\n').length - 1;
  console.log(str);
}
