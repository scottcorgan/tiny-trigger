var trigger = function (selector, evt, multiple) {
  var domEvent;
  var i;
  
  elements = select(selector, multiple);
  
  for(i in elements) {
    dispatch(elements[i], evt);
  }
};

var dispatch = function (element, evt) {
  if (document.createEventObject) {
    // dispatch for IE
    domEvent = document.createEventObject();
    return element.fireEvent('on' + evt, domEvent)
  }
  else {
    // dispatch for firefox + others
    domEvent = document.createEvent("HTMLEvents");
    domEvent.initEvent(evt, true, true); // event type,bubbling,cancelable
    return !element.dispatchEvent(domEvent);
  }
};

var select = function (selector, multiple) {
  return (typeof selector == 'string')
    ? (multiple) ? [].slice.call(document.querySelectorAll(selector), 0) : [document.querySelector(selector)]
    : [selector];
};

module.exports = trigger;