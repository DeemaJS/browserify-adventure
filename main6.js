var fs = require('fs');
var sprintf = require('sprintf');
var txt = fs.readFileSync("C:/Users/андрей/AppData/Roaming/npm/node_modules/browserify-adventure/problems/using_transforms/wake.txt", 'utf8');

txt.split('\n').forEach(function (line, index) {
	if (index % 5 === 0) console.log(sprintf("%3d %s", index, line));
	else console.log(sprintf("    %s", line));
})