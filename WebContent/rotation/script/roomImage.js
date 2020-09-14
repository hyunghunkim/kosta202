$(document).ready(function(){
	var spacing = 260;
	
	function createControl(src){
		return $('<img/>')
			.attr('src', src)
			.addClass('control')
			.css('width', 239)
			.css('height', 189.4)
			.css('opacity', 0.6)
			.css('display', 'none');
	}
	
	var $leftRollover = createControl('images/icons/left.gif');
	var $rightRollover = createControl('images/icons/right.gif');
	var $enlargeRollover = createControl('images/icons/enlarge.gif');
	var $enlargeCover = $('<img/>')
										.addClass('enlarged')
										.hide()
										.appendTo('body');
	
	
	$('#rooms').css({
		'width' : spacing * 3,
		'height' : '216px',
		'overflow' : 'hidden',
		'position' : 'relative'
	}).find('.covers a').css({
		'float': 'none',
		'position': 'absolute',
		'left': 1000
	});
	
	var setUpCovers = function(){
		var $covers = $('#rooms .covers a');
		
		$covers.unbind('click');
		$covers.unbind('mouseenter');
		$covers.unbind('mouseleave');
		
		//left image => scroll right
		$covers.eq(0)
			.css('left', 0)
			.click(function(event){
				$covers.eq(0).animate({'left' : spacing}, 'fast');
				$covers.eq(1).animate({'left' : spacing * 2}, 'fast');
				$covers.eq(2).animate({'left' : spacing * 3}, 'fast');
				$covers.eq($covers.length -1)
					.css('left', -spacing)
					.animate({'left' : 0}, 'fast', function(){
						$(this).prependTo('#rooms .covers');
						setUpCovers();
					});
				event.preventDefault();
				
			})//end click
			.hover(function(){
				$leftRollover.appendTo(this).show();
			}, function(){
				$leftRollover.hide();
			});
		
		//right image => scroll left
		$covers.eq(2)
		.css('left', spacing * 2)
		.click(function(event){
			$covers.eq(0)
			.animate({'left' : -spacing}, 'fast', function(){
				$(this).appendTo('#rooms .covers');
				setUpCovers();
			});
			$covers.eq(1).animate({'left' : 0}, 'fast');
			$covers.eq(2).animate({'left' : spacing }, 'fast');
			$covers.eq(3)
				.css('left', spacing *3)
				.animate({'left' : spacing *2}, 'fast');
				
			event.preventDefault();
			
		})//end click
		.hover(function(){
			$rightRollover.appendTo(this).show();
		}, function(){
			$rightRollover.hide();
		});
		
	// Center Image : enlarge cover
		$covers.eq(1)
			.css('left', spacing)
			.click(function(event){
				var startPos = $(this).offset();
				startPos.width = $(this).width();
				startPos.height = $(this).height();
				
				var endPos = {};
				endPos.width = startPos.width *3;
				endPos.height = startPos.height *2;
				endPos.top = 300;
				endPos.left = ($('body').width() - endPos.width)/2;
				
				$enlargeCover.attr('src', $(this).attr('href'))
					.css(startPos)
					.show()
					.animate(endPos, 'normal', function(){
						$enlargeCover.one('click', function(){
							$enlargeCover.fadeOut();
						});
					});				
				
				event.preventDefault();				
				
			})//end click
			.hover(function(){
				$enlargeRollover.appendTo(this).show();
			}, function(){
				$enlargeRollover.hide();
			});
	};//end setUpCovers()
	
	setUpCovers();
});












