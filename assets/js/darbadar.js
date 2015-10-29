// Image captions
$('.post-content img').each(function(){
  var caption = $(this).attr('data-caption');
  $(this).wrap('<div class="image"></div>').after("<div class='image-caption'>" + caption + "</div>")
});

// Tooltips
$('body').append('<div class="tooltip-container"><div class="tooltip"></div><div class="pointer"></div></div>');
$tooltip = $('.tooltip');
$pointer = $(".pointer");
$container = $(".post-body");

$('[title]').each(function() {
  var title = $(this).attr('title');
  $(this).attr('data-title', title).removeAttr('title');
});

$('.post-content').on('mouseenter', '[data-title]' , function() {
  // reset
  $('.tooltip, .pointer').css({
    top: 0,
    left: 0
  });

  var offset = $(this).offset();
  var width = $(this).width();
  var containerWidth = $container.width() - 32;

  $(".tooltip-container").stop().fadeIn();
  $tooltip.css('max-width',containerWidth).text($(this).data('title'));

  var containerRightOffset = $container.offset().left + containerWidth;
  var spaceAvailable = containerRightOffset - offset.left;
  var tooltipWidth = $tooltip.outerWidth();
  var h = $tooltip.outerHeight();

  $tooltip.css({
    'top' : offset.top - h - 10, // magic number arrived after trial and error ;)
    'left': tooltipWidth > spaceAvailable ? offset.left - ( tooltipWidth - spaceAvailable) + 32 : offset.left,
    'word-wrap': 'break-word'
  });

  $pointer.css({
    'top' : offset.top - 10, // magic number arrived after trial and error ;)
    'left': offset.left + (width/2),
  });

});

$('.post-content').on('mouseleave','[data-title]' , function(e) {
  $(".tooltip-container").stop().fadeOut();
});


// Share
var openPopup = function(href){
  event.preventDefault();
  var left = (screen.width/2)-(550/2);
  var top = (screen.height/2)-(420/2);
  var windowOptions = 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,centerscreen,width=550,height=420,top='+top+', left='+left;
  window.open(href,'Share', windowOptions);
}