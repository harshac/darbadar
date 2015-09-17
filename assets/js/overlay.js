function closeGallery(){
	$(".overlay").addClass("hide");	
	$("body").removeClass("modal-open");
}

function loadGallery(name){
  var currentImage=window.gallery.filter(function(photo){return photo.title == name})[0]
  var url=currentImage.url_l;
  // var currentImageIndex = $(currentImage).attr("index");
  // if(currentImageIndex>0){
  // 	$('.overlay .previous-image').attr("name", $(listOfImages[currentImageIndex-1]).attr("name"))
  // }
  // if(currentImageIndex< listOfImages.length){
  // 	$('.overlay .next-image').attr("name", $(listOfImages[(parseInt(currentImageIndex)+1)]).attr("name"))	
  // }  
  $(".overlay img").attr("src", url);
  $(".overlay .image-caption").text(currentImage.description._content)
  $(".overlay").removeClass("hide");
  $("body").addClass("modal-open");
}

var showGallery = function(album_id) {
  $.getJSON("https://api.flickr.com/services/rest/?&format=json&jsoncallback=?&api_key=cfff126f86dcd7009dbce5fe2e253f57&method=flickr.photosets.getPhotos&extras=url_t,url_m,url_o,url_s,url_l,url_z,description&photoset_id=" + album_id,
    function(data){
        window.gallery = data.photoset.photo;
    });
}

$(function() {
  var album_id = $('.post').data('album-id');
  if (!!album_id) {
    showGallery(album_id);

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
  }
})