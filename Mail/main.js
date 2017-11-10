const Router = require("./router");

document.addEventListener("DOMContentLoaded", () => {
  let navLi = document.querySelectorAll(".sidebar-nav li");

  let content = document.querySelector(".content");
  let newRouter = new Router(content);
  newRouter.start();

  navLi.forEach( (el) => {
    el.addEventListener("click", () => {
      window.location.hash = el.innerText.toLowerCase();
    });
  });
});
