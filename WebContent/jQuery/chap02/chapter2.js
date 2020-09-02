$(function() {
	$("#selected-plays > li").addClass("horizontal");
	$("li:not(.horizontal)").addClass("sub-level");
	
	$("a[href $= pdf]").addClass("pdflink");
	$("a[href ^= mailto]").addClass("mailto");
	$("a[href *= henry]:not(.mailto)").addClass("henrylink");

	//$("tr:odd").addClass("alt");	// 인덱스가 0부터 시작하기 때문에 odd를 해도 짝수 행에 스타일이 적용된다.
	//$("tr:nth-child(odd)").addClass("alt");
	$("tr").filter(":odd").addClass("alt");	// 모든 tr 태그중에서 짝수번째만 추려내어 스타일이 적용된다.
	
	//$("td:contains(Henry)").addClass("highlight");
	//$("td:contains(Henry)").nextAll().addClass("highlight");
	//$("td:contains(Henry)").nextAll().andSelf().addClass("highlight");
	//$("td:contains(Henry)").parent().addClass("highlight");
	$("td:contains(Henry)").parent().find("td:eq(0)").addClass("highlight")
							.end().find("td:eq(1)").addClass("highlight");

});

