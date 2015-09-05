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
  var listOfImages=$(".gallery-item div")
  var currentImage=$(".gallery-item div[name=" + name + "]")
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