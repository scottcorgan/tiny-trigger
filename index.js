var doc = document;
var slice = [].slice;

module.exports = function trigger (selector, eventType, multiple) {
  var i;
  var elements = select(selector, multiple);
  
  for(i in elements) {
    dispatch(elements[i], eventType);
  }
};

function dispatch (element, eventType) {
  var eventData = {
    bubbles: true,
    cancelable: true,
    target: element
  };

  var event;

  if (doc.createEvent) {
    event = new Event(eventType, eventData);

    element.dispatchEvent(event);  
  } else if(doc.createEventObject) {
    event = doc.createEventObject();

    for(var e in eventData) {
      event[e] = eventData[e];
    }

    event.type = eventType;

    element.fireEvent('on' + eventType, event) ; 
  } else if (typeof element['on' + eventType] === 'function' ) {

    event = eventData;

    event.type = eventType;

    element['on' + eventType](event); 
  }
}

function select (selector, multiple) {
  return (typeof selector === 'string' || selector instanceof String)
    ? (multiple) ? slice.call(doc.querySelectorAll(selector), 0) : [doc.querySelector(selector)]
    : (selector.length) ? slice.call(selector, 0) : [selector];
}