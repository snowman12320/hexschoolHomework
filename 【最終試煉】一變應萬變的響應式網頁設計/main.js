$(document).ready(function () {
  $("#menuOpen").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("open");
  });
});
