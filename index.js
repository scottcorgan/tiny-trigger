var doc = document;
var slice = [].slice;

module.exports = function (selector, evt, multiple) {
  var i;
  var elements = select(selector, multiple);
  
  for(i in elements) {
    dispatch(elements[i], evt);
  }
};

function dispatch (element, event) {
  if (document.createEvent) {
    var evt = document.createEvent('MouseEvents');
    evt.initEvent(event, true, false);
    element.dispatchEvent(evt);  
  } else if(document.createEventObject) {
    element.fireEvent('on' + event) ; 
  } else if (typeof element['on' + event] === 'function' ) {
    element['on' + event](); 
  }
};

function select (selector, multiple) {
  return (typeof selector == 'string')
    ? (multiple) ? slice.call(doc.querySelectorAll(selector), 0) : [doc.querySelector(selector)]
    : (selector.length) ? slice.call(selector, 0) : [selector];
};