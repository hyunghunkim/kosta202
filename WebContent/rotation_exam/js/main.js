$(function(){
	var $container = $('.slideshow');//슬라이더쇼 전체 컨테이너
	var $slideGroup = $('.slideshow-slides');//슬라이더 그룹
	var $slides = $slideGroup.find('.slide');//각각의 슬라이더
	var $nav = $container.find('.slideshow-nav');//네비게이션
	var $indicator = $container.find('.slideshow-indicator');//인디케이터
	
	var currentIndex = 0;
	var slideCount = $slides.length;
	
	
	$slides.each(function(i){
		$(this).css('left',100*i+'%');
	});
	
	
	//슬라이더 이동함수
	function goToSlide(index){
		$slideGroup.animate({
			left:-100*index+'%'
			
		},500);
		currentIndex = index;
		updateNav();
	}
	
	//네비게이션 업데이터 함수
	function updateNav() {
		var $navPrev = $nav.find('.prev');
		var $navNext = $nav.find('.next');
		
		if(currentIndex == 0){
			$navPrev.addClass('disabled');
		}else{
			$navPrev.removeClass('disabled');
		}
		
		if(currentIndex == slideCount-1){
			$navNext.addClass('disabled');
		}else{
			$navNext.removeClass('disabled');
		}
	}
	
	
	$nav.find('a').click(function(event) {
		event.preventDefault();//기본이벤트 취소
		if($(this).hasClass('prev')){
			goToSlide(currentIndex - 1);
		}else{
			goToSlide(currentIndex + 1);
		}
	});
	
});