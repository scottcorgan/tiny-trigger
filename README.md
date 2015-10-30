# tiny-trigger
 
Trigger cross-browser DOM events. Works with [Browserify](http:/browserify.org) and as a standalone.

[![browser support](https://ci.testling.com/scottcorgan/tiny-trigger.png)](https://ci.testling.com/scottcorgan/tiny-trigger)
 
## Install

NPM

```
npm install tiny-trigger --save
```

Bower

```
bower install tiny-trigger --save
```

```html
<script src="/bower_components/tiny-trigger/dist/tinytrigger.min.js"></script>
```

## Usage

Browserify
 
```js
var trigger = require('tiny-trigger');

document.querySelector('.some-element').addEventListener('click', function (e) {
  //
});

trigger('.some-element', 'click');
```
 
Browser
var trigger = window.tinyTrigger;

```js
document.querySelector('.some-element').addEventListener('click', function (e) {
  //
});

trigger('.some-element', 'click');
```

## trigger(selector, event[, multiple])

* `selector` - css selector OR DOM element OR array of DOM elements
* `event` - the name of the event to trigger
* `multple` - if passing in a css selector, should the function find one element or all the elements that match the selector (querySelector vs querySelectorAll)

## Run Tests

Requires [Phantomjs](phantomjs.org/download.html) is installed
 
```
npm install
npm test
```
