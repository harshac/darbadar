require 'net/http'
require 'nokogiri'
require 'pry'
require_relative 'flickrCommon'

module Jekyll
  class FlickrAlbumUrlsTag < Liquid::Tag
    API_KEY="db5ff0f27c564d31b746465b05db9894"
    
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
      photoIds=photos.xpath("//photo").collect{ |photo| ["#{photo.attributes["title"].value}", "#{photo.attributes["id"].value}"]}
      photoMap=photoIds.collect{|photo| [photo.first, getLargeImageUrl(photo.last)]}
      generateMarkup(photoMap)
    end

    def getLargeImageUrl(photoId)
        uri=URI.parse("https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=#{API_KEY}&photo_id=#{photoId}")
        response=Nokogiri::XML(Net::HTTP.get(uri))
        largeImage = response.xpath("//size[@label='Large']").first
        largeImage.attributes["source"].value
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