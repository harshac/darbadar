// Gallery
var gallery = {
  album: null,
  currentImageIndex: 0,
  maxHeight: screen.availHeight,
  maxWidth: screen.availWidth,

  close: function() {
    $("body").removeClass("overlay");
  },

  showNextImage: function() {
    var nextIndex = this.currentImageIndex + 1;
    this.showImageByIndex((nextIndex == this.album.length) ? 0 : nextIndex); // circular navigation
  },

  showPreviousImage: function() {
    var prevIndex = this.currentImageIndex - 1;
    this.showImageByIndex((prevIndex == -1) ? this.album.length - 1 : prevIndex); // circular navigation
  },

  showImageByName: function(name) {
    var image = this.album.filter(function(photo, index) {
      gallery.currentImageIndex = (photo.name == name) ? index : gallery.currentImageIndex; // set current index
      return (photo.name == name);
    })[0];

    this._showImage(image);
  },

  showImageByIndex: function(index) {
    this.currentImageIndex = index; // set current index
    this._showImage(this.album[index]);
  },

  _showImage: function(image) {
    var dimensions = this._getDimensions(image),
        height = dimensions.height,
        width = dimensions.width;

    $('.gallery-image-container').css('margin-top', -1 * height / 2);

    $('.gallery-image')
      .removeAttr('src')
      .attr({
        src: image.src,
        height: height,
        width: width
      })
      .fadeIn();

    $('.gallery-image-caption')
      .find('p')
      .css('width', width)
      .html(unescape(image.caption));

    $('.prev-image, .next-image')
      .css('width', ($(document).width() - width)/2 )

    $('body').addClass('overlay');
  },

  _getDimensions: function(image) {
    var aspectRatio = screen.availWidth/screen.availHeight,
        minHeight = Math.min(image.height, screen.availHeight),
        minWidth = Math.min(image.width, screen.availWidth);

    return {
      height: (aspectRatio > 1) ? minHeight : minWidth * (image.height/image.width),
      width: (aspectRatio > 1) ? minHeight * (image.width/image.height) : minWidth
    }
  },

  loadAlbum: function(album_id) {
    $.getJSON("https://api.flickr.com/services/rest/?&format=json&jsoncallback=?&api_key=cfff126f86dcd7009dbce5fe2e253f57&method=flickr.photosets.getPhotos&extras=url_t,url_m,url_o,url_s,url_l,url_z,description&photoset_id=" + album_id, function(data) {
      gallery.album = data.photoset.photo.map(function(photo) {
        return {
          name: photo.title,
          src: photo.url_l,
          width: photo.width_l,
          height: photo.height_l,
          caption: photo.description._content
        }
      });
      $('body').addClass('gallery-loaded');
      gallery.bindEvents();
    });
  },

  bindEvents: function() {
    $('.has-bg').click(function() {
      gallery.showImageByName("feature-image");
    });

    $('.post-content img').click(function() {
      var name = $(this).attr("name");
      gallery.showImageByName(name);
    });

    $(".prev-image").click(function() {
      gallery.showPreviousImage();
    });

    $(".next-image").click(function() {
      gallery.showNextImage();
    });

    $(".post-header").click(function() {
      gallery.showImageByName("feature-image");
    });

    $(document).keydown(function(e) {
      if (e.which == 27) {
        gallery.close();
      } else if (e.which == 37) {
        gallery.showPreviousImage();
      } else if (e.which == 39) {
        gallery.showNextImage();
      }
    });

    $(".close-button").click(function() {
      gallery.close();
    });
  }
}

// On DOM ready, load the gallery if albumId is present in the post
$(function() {
  var album_id = $('.post').data('album-id');
  if (!!album_id) {
    gallery.loadAlbum(album_id);
  }
})