$(document).ready(function(){
    $('.image').click(function(){
    	var url=$(this).find("img").attr("src");    	
    	window.open(url);
    });
    
});