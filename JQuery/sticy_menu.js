$(function(){
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 170) {
			$('nav').addClass('main-nav-scrolled');
			$('Header').hide();
		}
		else {
			$('nav').removeClass('main-nav-scrolled');
			$('Header').show();
		}
	});
});

