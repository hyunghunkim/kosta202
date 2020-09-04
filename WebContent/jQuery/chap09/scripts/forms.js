$(function() {
	$('.quantity input').change(function() {
		
		var subtotalCost = 0;
		var totalQuantity = 0;
		
		$('table tbody tr').each(function() {
			var price = parseFloat($(this).find('.price').text().replace(/^[^\d.]/,""));
			price = isNaN(price) ? 0 : price;
			
			var quantity = parseInt($(this).find('.quantity input').val());
			quantity = isNaN(quantity) ? 0 : quantity;
			
			var cost = price * quantity;
			$(this).find('.cost').text('$'+cost.toFixed(2));
			
			subtotalCost += cost;
			totalQuantity += quantity;
			
		});
		$('.subtotal .cost').text('$'+subtotalCost.toFixed(2));
		$('.shipping .quantity').text(totalQuantity);
		$('.shipping .cost').text('$'+totalQuantity*2);
		$('.tax .cost').text(subtotalCost);
		
		var totalCost = $('.subtotal .cost').text(subtotalCost.toFixed(2))
		+$('.shipping .cost').text(+totalQuantity*2)
		+$('.tax .cost').text(totalCost*6/100)
//		$('.total .cost').text('$'+totalCost.toFixed(2));
	});
});



