class Router {
  constructor(node) {
    this.node = node;
  }

  start() {
    this.render();
    window.addEventListener("hashchange", () => {
      this.render();
    });
  }

  render() {
    this.node.innerHTML = "";
    let routeName = this.activeRoute();
    let newEl = document.createElement("p", this.node.innerText);
    this.node.innerHTML = routeName;
    this.node.appendChild(newEl);
  }

  activeRoute() {
    return window.location.hash.slice(1);
  }
}

module.exports = Router;
