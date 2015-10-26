exports.parse = function (str) {
	return str.split('\n').map(JSON.parse);
};

exports.stringify = function (row) {
	return row.map(JSON.stringify).join('\n');
};