var url = require('url');
var querystring = require('querystring');

var addr = prompt('Enter path');
var parsedUrl = url.parse(addr).query;
var params = querystring.parse(parsedUrl);

console.log(url.resolve(addr, params.file));