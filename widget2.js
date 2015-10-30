var fs = require('fs');
var domify = require('domify');
var insertCss = require('insert-css');
var EventEmitter = require('events').EventEmitter; 
var inherits = require('inherits');

var html = fs.readFileSync('./widget.html', 'utf8');
var css = fs.readFileSync('./widget.css', 'utf8');
insertCss(css);
                                                   
module.exports = Widget;                           
inherits(Widget, EventEmitter);                    
                                                   
function Widget () {
	var self = this;                               
  if (!(this instanceof Widget)) return new Widget;
  var form = this.element = domify(html);

  form.addEventListener('submit', function (ev) {
  	ev.preventDefault();
  	var msg = form.querySelector('textarea[name="msg"]').value;
  	self.emit('message', msg);
  });
}    

Widget.prototype.appendTo = function (target) {
	target.appendChild(this.element);
};                                            