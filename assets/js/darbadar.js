// Image caotions
$('.post-content img').each(function(){
  var caption = $(this).attr('data-caption');
  $(this).wrap('<div class="image"></div>').after("<div class='image-caption'>" + caption + "</div>")
});

// Tooltips
$('.post-content [title]').on('hover', function(e) {
  e.preventDefault();
})