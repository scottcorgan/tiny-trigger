(function (module) {
var doc = document;
var slice = [].slice;

module.exports = function (selector, evt, multiple) {
  var i;
  
  var elements = select(selector, multiple);
  
  for(i in elements) {
    dispatch(elements[i], evt);
  }
};

function dispatch (element, evt) {
  var domEvent;
  
  // dispatch for IE
  if (doc.createEventObject) {
    return element.fireEvent('on' + evt, doc.createEventObject());
  }
  
  domEvent = doc.createEvent("HTMLEvents");
  domEvent.initEvent(evt, true, true);
  return !element.dispatchEvent(domEvent);
};

function select (selector, multiple) {
  return (typeof selector == 'string')
    ? (multiple) ? slice.call(doc.querySelectorAll(selector), 0) : [doc.querySelector(selector)]
    : (selector.length) ? slice.call(selector, 0) : [selector];
};
}({ exports: window.tinyTrigger }));