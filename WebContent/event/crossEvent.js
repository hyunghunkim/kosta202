// 함수의 이름이 중복됨을 방지하기 위해서 자바의 패키지와 같은 자바스크립트의 코드 처리 방법
var cross = {};

cross.Event = {};

cross.Event.addListener = function(element, name, handler, capture) {
	capture = capture || false;	// 넘겨받는 capture값이 존재하면 그 값을 저장하고, 없다면 false를 저장한다.
	
	if(element.addEventListener) {		// 표준 브라우저인 경우는 addEventListener이 실행 가능하기 때문에
		element.addEventListener(name, handler, capture);
	}
	else {	// 구 버전 IE일 경우
		element.attachEvent("on"+name, handler);
	}
	
};


// 이벤트 버블링이 일어나지 않게끔 처리
cross.Event.stopBubble = function(event) {
	if(event.stopPropagation) {		// 표준 브라우저인 경우
		event.stopPropagation();
	}
	else {		// 구형 IE일 경우
		event.cancelBubble = true;
	}
};