/*
 * $() : 팩토리 함수
 * 팩토리 함수는 ()의 대상을 jQuery 객체로 만들어준다.
 * window.onload는 외부에 있는 리소스까지 다 읽어들여야만 완료되고, document.ready는 문서 구조만 파악되면 완료된다.
 */ 

/*$(document).ready(function() {
	$(".poem-stanza").addClass("highlight");	// poem-stanza라는 클래스 이름을 가진 태그에 highlight라는 이름의 css를 적용
});*/

// 7~9번 라인과 동일한 기능을 한다.
$(function() {
	$(".poem-stanza").addClass("highlight");
});