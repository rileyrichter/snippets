$(document).ready(function(){
    $('.firstlist').owlCarousel({
          loop: true,
          margin: 30,
          autoplayHoverPause: true
      },
    );
    $('.testing').owlCarousel({
        loop: true,
        autoplayHoverPause: true,
        items: 1
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