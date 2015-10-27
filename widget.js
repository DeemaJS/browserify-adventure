var domify = require('domify');

module.exports = function () {
	var name = '';
	return {
		setName: function (newName) {
			name = newName;
		},
		appendTo: function (el) {
			return el.appendChild(
				domify('<div>Hello <span class="name">' + name + '</span>!</div>'))
		} 
	};
}
