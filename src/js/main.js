$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 4000,
    easing: 'easeOutElastic',
    slidesToShow: 1,
    pauseOnDotsHover: true,
  });
});
