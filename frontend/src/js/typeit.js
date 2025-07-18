import TypeIt from "typeit";

document.addEventListener("DOMContentLoaded", function () {
    new TypeIt("#nametext", {
    //   strings: ["NONTHANAN SIMPREE"],
    // speed: 500,
    breakLines: false,
    loop: true
    })
    .type("nonthanan", { delay: 500 })
    .move(-8, { delay: 100 })
    .delete(1)
    .type("N" , {delay: 500 })
    .move(8, { delay: 100 })
    .type(" " , { delay: 100 })
    .type("simpree" , { delay: 500 })
    .move(-6, {delay: 100 })
    .delete(1)
    .type("S", { delay: 500 })
    .move(6, { delay: 100 })
    .go();
  });