// Image caotions
$('.post-content img').each(function(){
  var caption = $(this).attr('data-caption');
  $(this).wrap('<div class="image"></div>').after("<div class='image-caption'>" + caption + "</div>")
});

// Tooltips
$('body').append('<div class="tooltip"></div>');
$tooltip = $('.tooltip');

$('.post-content').on('mouseenter', '[title]' , function() {
  var offset = $(this).offset();
  $tooltip.text($(this).attr('title')).css('max-width',$(this).width()).fadeIn();
  var h = $tooltip.height();
  
  $tooltip.css({
    'top' : offset.top - h - 30,
    'left': offset.left
  });
});

$('.post-content').on('mouseleave','[title]' , function(e) {
  $tooltip.fadeOut();
});


// Share
var openPopup = function(href){
  event.preventDefault();
  var left = (screen.width/2)-(550/2);
  var top = (screen.height/2)-(420/2);
  var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,centerscreen,width=550,height=420,top='+top+', left='+left;
  window.open(href,'Share', windowOptions);
}