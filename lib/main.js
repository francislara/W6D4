const DOMNodeCollection = require('./dom_node_collection');

Window.prototype.$l = function (selector) {
  if(selector instanceof HTMLElement) {
    return new DOMNodeCollection(Array.from(selector));
  }
  return new DOMNodeCollection(Array.from(document.querySelectorAll(selector)));
};
