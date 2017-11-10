class DOMNodeCollection {
  constructor(htmlArr) {
    this.htmlArr = htmlArr;
  }

  empty() {
    this.htmlArr.forEach( (el) => {
      el.html("");
    });
  }

  remove() {

  }

  attr(attribute, value) {
    let firstAttr = this.htmlArr[0].getAttribute(attribute);
    if ((firstAttr !== undefined) && (value === undefined)) {
      return firstAttr;
    } else if (value !== undefined) {
      this.htmlArr.forEach((el) => {
        if (el.getAttribute(attribute)) {
          el.setAttribute(attribute, value);
        }
      });
    }
  }

  addClass(...classNames) {
    this.htmlArr.forEach( (el) => {
      classNames.forEach( (className) => {
        el.classList.add(className);
      });
    });
  }

  removeClass(...classNames) {
    this.htmlArr.forEach( (el) => {
      classNames.forEach( (className) => {
        el.classList.remove(className);
      });
    });
  }

  html(string) {
    if(string !== undefined) {
      this.htmlArr.forEach( (el) => {
        el.innerHTML = string;
      });
    } else {
      return this.htmlArr[0].innerHTML;
    }
  }

  find() {

  }

  children() {
    let childrenArr = [];

    this.htmlArr.forEach( (el) => {
      childrenArr.push(el.children);
    });

    return new DOMNodeCollection(childrenArr);
  }

  parent() {

  }

  append(htmlEl) {
    this.htmlArr.forEach( (el) => {
      htmlEl.htmlArr.forEach( (el2) => {
        el.innerHTML += el2.outerHTML;
      });
    });
  }

}

module.exports = DOMNodeCollection;
