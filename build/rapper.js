var fs = require('fs');
var fileContents;

fileContents = '(function (module) {\n';
fileContents += fs.readFileSync('./index.js').toString();
fileContents += '\n}({ exports: window.tinyTrigger }));'

fs.writeFileSync('./dist/tinytrigger.js', fileContents);