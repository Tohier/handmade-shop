// for the lightbox function
$(function() {
  var $gallery = $(".gallery a").simpleLightbox();

  $gallery.on("show.simplelightbox", function() {
    console.log("Requested for showing");
  });
});

// the code for the back to top
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 500) {
    $('#back2Top').fadeIn();
  } else {
    $('#back2Top').fadeOut();
  }
});
$(document).ready(function () {
  $("#back2Top").click(function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

});