$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 30,
          autoplayHoverPause: true
      },
    );
});
$('.slider-nav-left').on('click', function() {
    setTimeout(function() {
      $('.owl-prev').triggerHandler('click');
    });
  });
  $('.slider-nav-right').on('click', function() {
      setTimeout(function() {
        $('.owl-next').triggerHandler('click');
  })
})