//$(function() {
//	$('#switcher-large').on('click', function() {
//		$('body').addClass('large');
//	});
//});

// step2 removeClass('이름');

//$(function() {
//	$('#switcher-large').on('click', function() {
//		$('body').addClass('large');
//	});
//	$('#switcher-narrow').on('click',function(){
//		$('body').removeClass('large').addClass('narrow');
//	});
//	$('#switcher-default').on('click', function() {
//		$('body').removeClass('large').removeClass('narrow');
//	});
//});



// step3 = > 클릭한 버튼만 selected 스타일 적용

//$(function() {
//	$('#switcher-large').on('click', function() {
//		$('body').addClass('large');
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//	});
//	$('#switcher-narrow').on('click',function(){
//		$('body').removeClass('large').addClass('narrow');
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//	});
//	$('#switcher-default').on('click', function() {
//		$('body').removeClass('large').removeClass('narrow');
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//	});
//});

// step4 = > 중복된 소스를 최소화 하자.

$(function() {
	$('#switcher-large').on('click', function() {
		$('body').addClass('large');
	});
	$('#switcher-narrow').on('click',function(){
		$('body').removeClass('large').addClass('narrow');
	});
	$('#switcher-default').on('click', function() {
		$('body').removeClass('large').removeClass('narrow');
	});
	
	$('#switcher .button').on('click',function(){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
	});
	
});







