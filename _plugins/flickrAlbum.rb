require 'net/http'
require 'nokogiri'
require_relative 'flickrCommon'

module Jekyll
  class FlickrAlbumUrlsTag < Liquid::Tag
    
    def initialize(tag_name, text, tokens)
      super
      @text = text
      @tag_name = tag_name
      @tokens = tokens
      @flickrCommon= FlickrCommon.new()
    end

    def render(context)
      albumId = context.environments.first["page"]["albumId"]      
      photos=@flickrCommon.getAlbumPhotosInfo(albumId)
      photoMap=photos.xpath("//photo").collect{ |photo| ["#{photo.attributes["title"].value}", @flickrCommon.buildPhotoUrl(photo.attributes)]}
      generateMarkup(photoMap)
    end

    def generateMarkup(photoMap)
      markup = "<ul class='gallery-list hide'>\n"
      photoMap.each do |photo|
        markup = "#{markup}<li class='gallery-item'><img src='#{photo.last}' name='#{photo.first}'/></li>\n"
      end  
      markup = "#{markup}</ul>"
    end
  end
end

Liquid::Template.register_tag('flickrAlbum', Jekyll::FlickrAlbumUrlsTag)