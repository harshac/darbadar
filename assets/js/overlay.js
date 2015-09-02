// Image click
$('.post-content img').click(function(){
  var name=$(this).attr("name")
  loadGallery(name)
});

$(".prev-img").click(function(){
  var name=$(this).attr("name")
  loadGallery(name)
})

$(".next-img").click(function(){
  var name=$(this).attr("name")
  loadGallery(name)
})

function loadGallery(name){
  var listOfImages=$(".gallery-list img")
  var currentImage=$(".gallery-list li img[name=" + name + "]")
  var url=$(currentImage).attr("src");
  var currentImageIndex = listOfImages.index(currentImage)
  if(currentImageIndex>0){
  	$('.overlay .prev-img').attr("name", $(listOfImages[currentImageIndex-1]).attr("name"))
  }
  if(currentImageIndex< listOfImages.length){
  	$('.overlay .next-img').attr("name", $(listOfImages[currentImageIndex+1]).attr("name"))	
  }  
  $(".overlay img").attr("src", url);
  $(".overlay").removeClass("hide");
}