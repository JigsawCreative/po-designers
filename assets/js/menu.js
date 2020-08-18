var $ = jQuery;

$(document).ready(function() {
  $("#menu-open").click(function() {
    $("#menu-open span").toggleClass("open");
    $(".nav").slideToggle("slow");
  });

  //products sub menu
  $(".products-menu-link>a").click(function() {
    $(".downloads").removeClass("sub-menu-open");
    $(".products").toggleClass("sub-menu-open");
  });

  //downloads sub menu
  $(".download-menu-link").click(function() {
    $(".products").removeClass("sub-menu-open");
    $(".downloads").toggleClass("sub-menu-open");
  });
});