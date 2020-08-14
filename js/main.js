$(document).ready(function() {
	$('.menu__burger').click(function(event) {
		$('.menu__burger,.menu__navigation').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.ac-title').click(function(event) {
		if($('.accordeon').hasClass('open')){
			$('.ac-title').not($(this)).removeClass('active');
			$('.ac-text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	})
})