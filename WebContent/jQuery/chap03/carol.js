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
//	
//	$('#switcher .button').on('click',function(){
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//	});
//	
//});

//step5 = > 좀더 소스를 최소화 하자.

//$(function() {
//	$('#switcher .button').on('click',function(){
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//		$('body').removeClass();
//	});
//	
//	
//	
//	$('#switcher-large').on('click', function() {
//		$('body').addClass('large');
//	});
//	$('#switcher-narrow').on('click',function(){
//		$('body').addClass('narrow');
//	});
//	
//});

//step6 = > 더 최소

//$(function() {
//	$('#switcher .button').on('click',function(){
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//		$('body').removeClass();
//		
//		if(this.id == "switcher-large"){
//			$('body').addClass('large');
//		}else if(this.id == 'switcher-narrow'){
//			$('body').addClass('narrow');
//		}
//	
//	});
//});

//step7 = > 이벤트 통합 함수 = > 개별함수 변경

//$(function() {
//	$('#switcher .button').click(function(){
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//		$('body').removeClass();
//		
//		if(this.id == "switcher-large"){
//			$('body').addClass('large');
//		}else if(this.id == 'switcher-narrow'){
//			$('body').addClass('narrow');
//		}
//	
//	});
//});

//step8
//$(function() {
//	$('#switcher .button').hover(function(){
//		$(this).addClass('hover');
//		
//	},function(){
//		$(this).removeClass('hover');
//		
//	})
//});


//step9 = > 스타일 변환기를 클릭 => 버튼 3개가 사라지게 하자. (.hidden)

//$(function() {
//	$('#switcher h3').click(function(){
//		$('#switcher .button').toggleClass('hidden');
//	});
//	
//	$('#switcher .button').click(function(){
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//		$('body').removeClass();
//		
//		if(this.id == "switcher-large"){
//			$('body').addClass('large');
//		}else if(this.id == 'switcher-narrow'){
//			$('body').addClass('narrow');
//		}
//	});
//});

//step10	//이벤트 버블링 처리

//$(function() {
//	$('#switcher').click(function(){
//		$('#switcher .button').toggleClass('hidden');
//	});
//	
//	
//	$('#switcher .button').click(function(event){
//		$('.button').removeClass('selected');
//		$(this).addClass('selected');
//		$('body').removeClass();
//		
//		if(this.id == "switcher-large"){
//			$('body').addClass('large');
//		}else if(this.id == 'switcher-narrow'){
//			$('body').addClass('narrow');
//		}
//		
//		event.stopPropagation();
//	});
//});

//step11
//on(): 이벤트를 발생,off(): 이벤트 해제
//large,narrow 버튼을 클릭 후 버튼이 사라지는 이벤트를 해제
//off(click)
$(function() {
	$('#switcher').on('click.kosta1',function(){
		$('#switcher .button').toggleClass('hidden');
	});
	
//	$('#switcher').on('click.kosta2',function(){
//		alert('다른 이벤트');
//	})
	
	$('#switcher .button').click(function(event){
		$('.button').removeClass('selected');
		$(this).addClass('selected');
		$('body').removeClass();
		
		if(this.id == "switcher-large"){
			$('body').addClass('large');
		}else if(this.id == 'switcher-narrow'){
			$('body').addClass('narrow');
		}
		
		event.stopPropagation();
	});
	
	$('#switcher-large,#switcher-narrow').click(function() {
		$('#switcher').off('click.kosta1');
	});
	
	$('#switcher').trigger('click.kosta1');
	
});













