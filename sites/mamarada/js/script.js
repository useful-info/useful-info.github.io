(function() {

	var $menuBtn = $('.menu-btn');
	var $socialBtn = $('.footer-btn');
	
	var $navbar = $('.navbar');
	var $footbar = $('.footbar');
		
	$menuBtn.on("click", function(event) {
		event.preventDefault();
		if (!$navbar.hasClass('visible')) $navbar.addClass('visible');
		else $navbar.removeClass('visible');
	});
	
	$socialBtn.on("click", function(event) {
		event.preventDefault();
		if (!$footbar.hasClass('visible')) $footbar.addClass('visible');
		else $footbar.removeClass('visible');
	});
	
	
})();
