// Image click
$('.post-content img').click(function(){
  var name=$(this).attr("name")
  loadGallery(name)
});

$(".prev-image").click(function(){
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

$(document).keyup(function(e){
    if(e.which == 27)
    {
      $(".overlay").addClass("hide");
    }
})

function loadGallery(name){
  var listOfImages=$(".gallery-list img")
  var currentImage=$(".gallery-list li img[name=" + name + "]")
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
}