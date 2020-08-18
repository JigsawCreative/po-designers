var $ = jQuery;

$(window).load(function() {
  $(".flexslider").flexslider({
    animation: "fade",
    slideshowSpeed: 5000,
    animationSpeed: 600,
    animationLoop: true,
    pauseOnAction: false,
    controlNav: true,
    rtl: true,
    customDirectionNav: $(".custom-navigation a"),
  });
});
