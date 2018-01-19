$(document).ready(function() {
    $('.dropdown').hover(
        function(){
            $(this).children('.sub-menu').stop().slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').stop().slideUp(200);
        }
    );
	$('.dropdown:first-child').click(
		function() {
			$(this).children('.sub-menu').stop().toggle();
	});
	
});

