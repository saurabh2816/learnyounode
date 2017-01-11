var fs = require('fs');
var path = require('path');

module.exports = function(dirName, exName, callback) {
  var ex = '.' + exName;
  var fileArray = [];

  fs.readdir(dirName, function(err, files) {
    if(err)
    callback(err, null);

    files.forEach(function(items) {
      if(path.extname(items) === ex)
      fileArray.push(items);
    });
    callback(null, fileArray);
  });
};

function callback(err, files) {
  if(err)
  console.log(err);

  for(var i=0; i<files.length; i++)
  console.log(files[i]);
}

/*function callback(err, data) {
  fs.readdir(dirName, function reading(err, list) {
    if(err)
    console.log(err);

    else {
      for(var i=0; i<list.length; i++)
      {
        if(ex == path.extname(list[i]))
        console.log(list[i]);
      }
  }
});
}
*/
