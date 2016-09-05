$('.close-btn').click(function(){
	localStorage.setItem('showNotification', false);
});

var close = function(){
	$('.notification-bar').addClass("close");
}

$(function() {
	var showNotification = localStorage.getItem('showNotification');
  if (showNotification == 'false') {
    close();
  }
})