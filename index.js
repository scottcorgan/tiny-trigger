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
  
  // // dispatch for IE
  // if (doc.createEventObject) {
  //   return element.fireEvent('on' + evt, doc.createEventObject());
  // }
  
  if (document.createEventObject) {
      //ie
      e = document.createEventObject();                    
      element.fireEvent('on' + evt, e);
  }
  else {
      //others
      e = document.createEvent('HTMLEvents');
      e.initEvent(evt, true, true);
      element.dispatchEvent(e);
  }
  
  // domEvent = doc.createEvent("HTMLEvents");
  // domEvent.initEvent(evt, true, true);
  // return !element.dispatchEvent(domEvent);
};

function select (selector, multiple) {
  return (typeof selector == 'string')
    ? (multiple) ? slice.call(doc.querySelectorAll(selector), 0) : [doc.querySelector(selector)]
    : (selector.length) ? slice.call(selector, 0) : [selector];
};