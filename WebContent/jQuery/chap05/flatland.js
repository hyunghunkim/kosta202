$(function() {
   // 새로운 태그 생성
   $('<ol id="notes"></ol>').insertBefore($('#footer'));   // == insertBefore('#footer')
   
   // span이 3개이기 때문에 각각 다른 작업이 필요하기 때문에 each()를 사용한다.
   $('span.footnote').each(function(index) {
      $(this).before('<a id="context-' + (index + 1) + '">[' + (index + 1) + ']</a>')
             .appendTo('#notes')
      		 .append('&nbsp;<a href="#context-' + (index + 1)+'">context-'+(index+1)+'</a>')
      		 .wrap('<li></li>');
   });
   
   
})