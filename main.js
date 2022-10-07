
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
    var choose = e.target.dataset.num ; 
    // $(".shopItem div").toggleClass("clickFavor");
    $(".shopItem [data-num=" + choose + "]").toggleClass("favRed");
  });
});
