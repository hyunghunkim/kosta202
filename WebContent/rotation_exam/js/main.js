$(function(){
	var $container = $('.slideshow');//슬라이더쇼 전체 컨테이너
	var $slideGroup = $('.slideshow-slides');//슬라이더 그룹
	var $slides = $slideGroup.find('.slide');//각각의 슬라이더
	var $nav = $container.find('.slideshow-nav');//네비게이션
	var $indicator = $container.find('.slideshow-indicator');//인디케이터
	
	$slides.each(function(i){
		$(this).css('left',100*i+'%');
	});
	
	
	//슬라이더 이동함수
	function goToSlide(index){
		
	}
	
	
});