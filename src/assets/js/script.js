(function ($) {
  "use strict";
  var PUS = {};
  /*==========================================
            :: slicknav
    ==========================================*/
  PUS.slicknav = function () {
    $("#main-menu").slicknav({
      allowParentLinks: true,
      prependTo: "#mobile-menu-wrap",
      label: "",
    });

    $(".mobile-menu-trigger").on("click", function (e) {
      $(".mobile-menu-container").addClass("menu-open");
      e.stopPropagation();
    });

    $(".mobile-menu-close").on("click", function (e) {
      $(".mobile-menu-container").removeClass("menu-open");
      e.stopPropagation();
    });
  };
  $(document).ready(function () {
    PUS.slicknav();
  });
})(jQuery);

jQuery(document).ready(function ($) {
  $(".loop").owlCarousel({
    center: true,
    //    height : 700,
    items: 3,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>",
    ],
    dots: false,
    //    autoWidth:true,
    loop: true,
    responsive: {
      320: {
        stagePadding: 20,
        items: 1,
        margin: 10,
      },
      768: {
        stagePadding: 70,
        items: 1,
        margin: 20,
      },
      1170: {
        autoWidth: true,
        items: 2,
        margin: 32,
      },
    },
  });

  $(".testimonials-carousel").owlCarousel({
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".card-group.owl-carousel").owlCarousel({
    stagePadding: 20,
    loop: true,
    margin: 16,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
    },
  });
});
