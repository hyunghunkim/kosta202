//step1
//$(function() {
//	$('#letter-a a').click(function() {
//		$('#dictionary').hide().load('a.html',function(){
//			$(this).fadeIn();
//		});
//		return false;
//	});
//});

//step2
//$(function() {
//	$('#letter-b a').click(function() {
//		$.getJSON('b.json',function(data){
//			$('#dictionary').empty();
//			$.each(data,function(idx,item){
//				var html = '<div class="entry">';
//				html += '<h3 class="term">'+ item.term +'</h3>';
//				html += '<div class="part">'+ item.part +'</div>';
//				html += '<div class="definition">'+ item.definition + '</div>';
//				html +='</div>';
//				
//				$('#dictionary').append(html);
//			});
//		});
//		return false;
//	});
//});

//step3

//$(function(){
//	$('#letter-c a').click(function(){
//		$('#dictionary').empty();
//		$.getScript('c.js');
//		
//		return false;
//	});
//});

//step4

$(function() {
	$('#letter-d a').click(
			function() {
				$('#dictionary').empty();
				$.get('d.xml', function(data) {
					$(data).find('entry').each(
							function(index) {
								$entry = $(this);
								var html = '<div class="entry">';
								html += '<h3 class="term">'
										+ $entry.attr('term') + '</h3>';
								html += '<div class="part">'
										+ $entry.attr('part') + '</div>';
								html += '<div class="definition">'
										+ $entry.find('defintion').text()
										+ '</div>';
								html += '</div>';

								$('#dictionary').append(html);
							});
				});

				return false;
			});
});

// step5

$(function() {
	$('#letter-e a').click(function() {
		$('#dictionary').empty();
		$.getScript('c.js');
		$.get('server3.jsp',{'term':$(this).text()},function(data){
			$('#dictionary').text(data);
		});
		return false;
	});
});
