var e = require('../index.js');
var test = require('tape');
var insert = require('domy-insert');

test('triggers DOM event', function (t) {
  insert('<div class="trigger-me"></div>').end();
  
  document
    .querySelector('.trigger-me')
    .addEventListener('click', function (e) {
      t.ok(true, 'event called');
      t.end();
    });
  
  e('.trigger-me', 'click');
});

test('triggers custom event', function (t) {
  insert('<div class="custom-trigger-me"></div>').end();
  
  document
    .querySelector('.custom-trigger-me')
    .addEventListener('custom-event', function (e) {
      t.ok(true, 'event called');
      t.end();
    });
  
  e('.custom-trigger-me', 'custom-event');
});

test('triggers multiple events', function (t) {
  var calls = 0;
  
  insert('<div class="multi"></div>').end();
  insert('<div class="multi"></div>').end();
  
  var elements = [].slice.call(document.querySelectorAll('.multi'), 0);
  
  for (var i in elements) {
    elements[i].addEventListener('change', function (e) {
      calls += 1;
    });
  }
  
  e('.multi', 'change', true);
  
  setTimeout(function () {
    t.equal(calls, 2, 'all elements triggered event');
    t.end();
  }, 1);
});

test('triggers events for array of DOM elements passed in', function (t) {
  var calls = 0;
  var elements = document.querySelectorAll('.multi');
  
  for (var i in [].slice.call(elements, 0)) {
    elements[i].addEventListener('click', function (e) {
      calls += 1;
    });
  }
  
  e(elements, 'click', true);
  
  setTimeout(function () {
    t.equal(calls, 2, 'all elements triggered event');
    t.end();
  }, 1);
});