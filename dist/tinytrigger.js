!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.tinyTrigger=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
(1)
});