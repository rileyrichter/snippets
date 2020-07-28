// We'll need to init 6 lists and also add custom styling via CSS to the nav
$(document).ready(function(){
    $('.firstlist').owlCarousel({
          loop: true,
          margin: 30,
          autoplayHoverPause: true,
          responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1
            },
            // breakpoint from 480 up
            478 : {
                items: 2
            },
            // breakpoint from 768 up
            767 : {
                items: 3
            },
            // breakpoint from 991 up
            991: {
              items: 4
            }
        }
      },
    );
    $('.testing').owlCarousel({
        loop: true,
        autoplayHoverPause: true,
    },
  );
});
// We'll lose this since we'll be using the native nav items from Owl
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