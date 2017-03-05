$('.close-btn').click(function(){
	localStorage.setItem('showNotification', 'Bhutan');
	close();
});

var close = function(){
	$('.notification-bar').addClass("close");
}

$(function() {
	var showNotification = localStorage.getItem('showNotification');
  if (!!showNotification && showNotification.includes('Bhutan')) {
    close();
  }
})