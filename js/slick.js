$(document).ready(function() {
	$('.text-slider__body').slick({
		arrows:true,
		adaptiveHeight: false, //true для 480
		speed: 1800, //1000 для 480
		easing: 'ease-in-out',
		autoplay: true,
		autoplaySpeed: 4000,
		touchThreshold: 10,
		responsive: [
			{
				breakpoint: 479.98,
				settings: {
					adaptiveHeight: true,
					speed: 1000,
				}
			}
		]
	});
});


$(document).ready(function() {
	$('.partners__slider').slick({
		arrows:false,
		slidesToShow: 6,
		//variableWidth: true,
		/*infinite: false,
		adaptiveHeight: false,
		swipe: false,
		autoplay: false,*/
		responsive: [
			{
				breakpoint: 1199.98,
				settings: {
					slidesToShow: 5,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					swipe: false,
					pauseOnFocus: false,
					pauseOnHover: false,
				}
			},
			{
				breakpoint: 992.98,
				settings: {
					slidesToShow: 4,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2500,
					swipe: false,
					pauseOnFocus: false,
					pauseOnHover: false,

				}
			},
			{
				breakpoint: 767.98,
				settings: {
					slidesToShow: 3,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2500,
					swipe: false,
					pauseOnFocus: false,
					pauseOnHover: false,

				}
			},
			{
				breakpoint: 479.98,
				settings: {
					slidesToShow: 2,
					infinite: true,
					autoplay: true,
					autoplaySpeed: 2500,
					swipe: true,
					pauseOnFocus: false,
					pauseOnHover: false,
				}
			},
		]
	});
});

$(document).ready(function() {
	$('.r-slider').slick({
		arrows:true,
		adaptiveHeight: true, //true для 480
		speed: 1800, //1000 для 480
		easing: 'ease-in-out',
		autoplay: true,
		autoplaySpeed: 4000,
		touchThreshold: 10,
		responsive: [
			{
				breakpoint: 479.98,
				settings: {
					adaptiveHeight: true,
					speed: 1000,
				}
			},
			{
				breakpoint: 479.98,
				settings: "unslick"
			}
		]
	});
});

/*Этот код выключает слайдер на ширине экрана <= 480px, для повторной отработки скрипта
страницу необходимо перезагрузить, как и в случае со стандартным settings: "unslick".
window.addEventListener("resize", function() {
	if (window.innerWidth <= 480) {
		$('.r-slider').slick('unslick');
		sliderIsLive = false;
	}
	else {
		if (sliderIsLive) {
			$('.r-slider').slick();
			sliderIsLive = true;
		}
	}
});
*/