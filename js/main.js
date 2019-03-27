// for the lightbox function
$(function () {
    var $gallery = $('.gallery a').simpleLightbox();

    $gallery.on('show.simplelightbox', function () {
        console.log('Requested for showing');
    })
});

var back_to_top_button = jQuery(".btn-back-to-top");

jQuery(window).scroll(function() {
  if (
    jQuery(this).scrollTop() > 100 &&
    !back_to_top_button.hasClass("scrolled")
  ) {
    back_to_top_button.addClass("scrolled");
  } else if (
    jQuery(this).scrollTop() < 100 &&
    back_to_top_button.hasClass("scrolled")
  ) {
    back_to_top_button.removeClass("scrolled");
  }
});

//click to scroll to top
back_to_top_button.click(function() {
  jQuery("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});