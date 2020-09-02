$(function() {
	var $speech = $('div.speech');
	var defaultSize = $speech.css('fontSize');// 12px

	$('#switcher button').click(function() {
		var num = parseInt($speech.css('fontSize'));

		switch (this.id) {
		case "switcher-large":
			num *= 1.2;
			break;
		case "switcher-small":
			num /= 1.2;
			break;
		default:
			num = parseInt(defaultSize);
			break;
		}

		$speech.animate({
			fontSize : num + 'px'
		}, 'slow');

	});
});
$(function() {
	$('div.label').click(function() {
		var pWidth = $('div.speech p').outerWidth();
		var divWidth = $('#switcher').outerWidth();
		var num = parseInt(pWidth) - parseInt(divWidth);

		$('#switcher').fadeTo('fast', 0.5).animate({
			marginLeft : num
		}, 'slow').fadeTo('fast', 1.0).slideUp('slow', function() {
			$(this).css('background', 'red');
		}).slideDown('slow');
	});
});

// 2번째 p태그를 화면에서 숨기기
// slideToggle('slow')
// read more <=> read less = > text()

$(function() {
	$('div.speech p').eq(1).hide('slow');
	$('a.more').click(function() {
		$('p:eq(1)').slideToggle('slow');
		var $link = $(this);
		if ($link.text() == 'read more') {
			$link.text('read less');
		} else {
			$link.text('read more');
		}
	});
});
