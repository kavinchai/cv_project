function scrolls(id) {
  //   document.getElementById(id).scrollIntoView();
  var scrollDiv = document.getElementById(id).offsetTop;
  window.scrollTo({ top: scrollDiv, behavior: "smooth" });
}
