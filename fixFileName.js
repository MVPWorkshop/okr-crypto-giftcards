var fs = require('fs');

// PACKAGE_ERROR and FILE_ERROR is shown on your error
fs.readFile('./node_modules/secure-random/lib/secure-random.js', 'utf8', function (err,data) {
  if (err) return console.log(err);

  var result = data.replace('require(\'crypto\')', 'require(\'crypto-browserify\');');
  fs.writeFile('./node_modules/secure-random/lib/secure-random.js', result, 'utf8', function (err) {
    if (err) return console.log(err);
  });

});