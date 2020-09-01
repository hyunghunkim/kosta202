$(function(){
	$('#selected-plays > li').addClass('horizontal');
	$('li:not(horazontal)').addClass('sub-level');
	$('a[href $=pdf]').addClass('pdflink');
	$('a[href^=mailto]').addClass('mailto');
	$('a[href*=henry]:not(.mailto)').addClass('henrylink');
	
	//$('tr:odd').addClass('alt');	//짝수번째
	//$('tr:nth-child(odd)').addClass('alt');	//홀수번째
	$('tr').filter(':odd').addClass('alt');
	
	//$('td:contains(Henry)').addClass('highlight');
	//$('td:contains(Henry)').nextAll().andSelf().addClass('highlight');
	//$('td:contains(Henry)').parent().find('td').addClass('highlight');
	$('td:contains(Henry)').parent().find('td:eq(0)').addClass('highlight')
						   .end().find('td:eq(1)').addClass('highlight');
	
});
