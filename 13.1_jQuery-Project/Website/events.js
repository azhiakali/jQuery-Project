for (let li of document.body.querySelectorAll("#one li")) {
  li.addEventListener("click", function (evt) {
    evt.target.parentNode.removeChild(li);
  });
}

document.body.querySelector("#two ul")
  .addEventListener("click", function (evt) {
    if (evt.target.tagName === "LI") {
      evt.target.parentNode.removeChild(evt.target);
    }
});

$("#three li").on("click", function (evt) {
  $(evt.target).remove();
});

$("#four ul").on("click", "li", function (evt) {
  $(evt.target).remove();
});

let newNum = 1;

for (let id of ["one", "two", "three", "four"]) {
  $(`#${id} button`).on("click", function (evt) {
    $(`#${id} ul`).append(`<li>new ${newNum++}</li>`);
  });
}

