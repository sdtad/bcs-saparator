$(function(){
$('.navigation-btn').on('click', function(){
	$('.navigation ul').slideToggle();
});	

$('.slider').slick({
	infinite: true,
	arrows: false,
	dots: false,
	autoplay: true,
  	autoplaySpeed: 5000,
  	speed: 500,
  	fade: true,
  	cssEase: 'linear'
});

$('.production__slider').slick({
	infinite: true,
	arrows: false,
	dots: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	// autoplay: true,
 //  	autoplaySpeed: 5000,
 //  	speed: 500,
  	responsive: [
    {
      breakpoint: 1160,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	
$('.map-content').on('click', function(){
	$('.map-inner').toggleClass('open');
});




});

