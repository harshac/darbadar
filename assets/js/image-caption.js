$('.post-content img').each(function(){
	var caption=$(this).attr('data-caption');
	$(this).after("<div class='image-caption'>" + caption + "</div>")
});
