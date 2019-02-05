  // Gallery
var flickr = {
  album: null,
  currentImageIndex: 0,
  maxHeight: screen.availHeight,
  maxWidth: screen.availWidth,

  close: function() {
    $("body").removeClass("overlay");
  },

  findImage: function(name) {
    return flickr.album.filter(function(el){return el.name == name})[0]
  },

  loadAlbum: function(album_id) {
    $.getJSON("https://api.flickr.com/services/rest/?&format=json&jsoncallback=?&api_key=cfff126f86dcd7009dbce5fe2e253f57&method=flickr.photosets.getPhotos&extras=url_t,url_c,url_o,url_s,url_l,url_z,description&photoset_id=" + album_id, function(data) {
      flickr.album = data.photoset.photo.map(function(photo) {
        return {
          name: photo.title,
          src: photo.url_l,
          width: photo.width_l,
          height: photo.height_l,
          t_src: photo.url_t,
          c_src: photo.url_c,
          z_src: photo.url_z,
          caption: photo.description._content
        }
      });
      flickr.initializeBlogImages();
      flickr.initializeLazyLoading();
    });
  },

  initializeBlogImages: function(){
    $('.post-content img').each(function(){
      var name=$(this).attr('name');
      var image = flickr.findImage(name);
      var imageSrc = (!!image.c_src) ? image.c_src : image.z_src;
      $(this).attr('data-src', imageSrc);
      $(this).wrap('<div class="image"></div>').after("<div class='image-caption'>" + image.caption + "</div>")
    });
  },

  initializeLazyLoading: function(){
    $("img").unveil();
  }
};

// On DOM ready, load the images if albumId is present in the post
$(function() {
  var album_id = $('.post').data('album-id');
  if (!!album_id) {
    flickr.loadAlbum(album_id);
  }
});