(function() {

	var $tri1Btn = $('.trimestr1');
	var $tri2Btn = $('.trimestr2');
	var $tri3Btn = $('.trimestr3');
	var $infoBtn = $('.info')
	
	var $tri1Cont = $('#trimestr1');
	var $tri2Cont = $('#trimestr2');
	var $tri3Cont = $('#trimestr3');
	var $infoCont = $('#info')
		
	$tri1Btn.on("click", function(event) {
		event.preventDefault();
		if (!$tri1Btn.hasClass('highlighted')) {
			$tri2Btn.removeClass('highlighted');
			$tri3Btn.removeClass('highlighted');
			$infoBtn.removeClass('highlighted');
			$tri1Btn.addClass('highlighted');
			$tri2Cont.removeClass('visible');
			$tri3Cont.removeClass('visible');
			$infoCont.removeClass('visible');
			$tri1Cont.addClass('visible');
		};
	});
	
	$tri2Btn.on("click", function(event) {
		event.preventDefault();
		if (!$tri2Btn.hasClass('highlighted')) {
			$tri1Btn.removeClass('highlighted');
			$tri3Btn.removeClass('highlighted');
			$infoBtn.removeClass('highlighted');
			$tri2Btn.addClass('highlighted');
			$tri1Cont.removeClass('visible');
			$tri3Cont.removeClass('visible');
			$infoCont.removeClass('visible');
			$tri2Cont.addClass('visible');
		};
	});
	
	$tri3Btn.on("click", function(event) {
		event.preventDefault();
		if (!$tri3Btn.hasClass('highlighted')) {
			$tri1Btn.removeClass('highlighted');
			$tri2Btn.removeClass('highlighted');
			$infoBtn.removeClass('highlighted');
			$tri3Btn.addClass('highlighted');
			$tri1Cont.removeClass('visible');
			$tri2Cont.removeClass('visible');
			$infoCont.removeClass('visible');
			$tri3Cont.addClass('visible');
		};
	});
	
	$infoBtn.on("click", function(event) {
		event.preventDefault();
		if (!$infoBtn.hasClass('highlighted')) {
			$tri1Btn.removeClass('highlighted');
			$tri2Btn.removeClass('highlighted');
			$tri3Btn.removeClass('highlighted');
			$infoBtn.addClass('highlighted');
			$tri1Cont.removeClass('visible');
			$tri2Cont.removeClass('visible');
			$tri3Cont.removeClass('visible');
			$infoCont.addClass('visible');
		};
	});

})();
