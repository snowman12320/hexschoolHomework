
$(document).ready(function () {
  $("#menuOpen").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("open");
  });

  $(".chefOpen").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("open2");
  });
  $(".chefOpen").click(function () {
    $("p").remove(".chefOpen");
  });

  $(".shopItem #shopFavorite").click(function (e) {
    e.preventDefault();
    $(".shopItem div").toggleClass("clickFavor");
  });
});
