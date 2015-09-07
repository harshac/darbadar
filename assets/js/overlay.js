// Image click
$('.post-content img').click(function(){
  var name=$(this).attr("name")
  loadGallery(name)
});

$(".previous-image").click(function(){
  var name=$(this).attr("name")
  loadGallery(name)
})

$(".next-image").click(function(){
  var name=$(this).attr("name")
  loadGallery(name)
})

$(".post-header").click(function(){
	loadGallery("feature-image")
})

$(document).keydown(function(e){
    if(e.which == 27)
    {
      closeGallery()
    } else if(e.which == 37){
    	loadGallery($(".previous-image").attr("name"))
	} else if(e.which == 39)
    {
      loadGallery($(".next-image").attr("name"))
    }
})


$(".close-button").click(function(){
	closeGallery();
})

function closeGallery(){
	$(".overlay").addClass("hide");	
	$("body").removeClass("modal-open");
}

function loadGallery(name){
  var listOfImages=$(".gallery-item")
  var currentImage=$(".gallery-item[name=" + name + "]")
  var url=$(currentImage).attr("src");
  var currentImageIndex = listOfImages.index(currentImage)
  if(currentImageIndex>0){
  	$('.overlay .previous-image').attr("name", $(listOfImages[currentImageIndex-1]).attr("name"))
  }
  if(currentImageIndex< listOfImages.length){
  	$('.overlay .next-image').attr("name", $(listOfImages[currentImageIndex+1]).attr("name"))	
  }  
  $(".overlay img").attr("src", url);
  $(".overlay .image-caption").text($(currentImage).attr("data-caption"))
  $(".overlay").removeClass("hide");
  $("body").addClass("modal-open");
}

$(document).ready(function(){
  $.getJSON("https://api.flickr.com/services/rest/?&format=json&jsoncallback=?&api_key=cfff126f86dcd7009dbce5fe2e253f57&method=flickr.photosets.getPhotos&extras=url_t,url_m,url_o,url_s,url_l,url_z,description&photoset_id=72157656782024589",
    function(data){
      $.each(data.photoset.photo, function(index, value){
        $(".gallery-list").append("<li class='gallery-item' src=\"" + value.url_l + "\" name=\"" + value.title + "\" data-caption=\"" + value.description._content + "\" index=\"" + index + "\"></li>");
        console.log(value.url_l);  
      })
      
    });
})