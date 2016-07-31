(function () {

  var currentSlideClass = "slide-current";

  $("section:first-child").addClass(currentSlideClass);

  $(".js-next").on("click", function() {
    var current = $("." + currentSlideClass);

    if (current.next()[0].nodeName === "SECTION") {
      current.removeClass(currentSlideClass).next().addClass(currentSlideClass);
    }
  });

  $(".js-prev").on("click", function() {
    var current = $("." + currentSlideClass);

    if (current.prev()[0].nodeName === "SECTION") {
      current.removeClass(currentSlideClass).prev().addClass(currentSlideClass);
    }
  });


})();
