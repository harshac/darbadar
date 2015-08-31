require 'net/http'
require 'nokogiri'
require_relative 'flickrCommon'
require 'pry'

module Jekyll
  class FlickrImageUrlTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
      @tag_name = tag_name
      @tokens = tokens
      @flickrCommon= FlickrCommon.new()
    end

    def render(context)
      albumId = context.environments.first["page"]["albumId"]
      response=@flickrCommon.getAlbumPhotosInfo(albumId)
      photoAttributes=findPhoto(@text, response)      
      @flickrCommon.buildPhotoUrl(photoAttributes)
    end

    def findPhoto(title, photosXML)
    	photosXML.xpath("//photo[@title='#{title.strip}']").first.attributes
    end
  end
end

Liquid::Template.register_tag('flickrUrl', Jekyll::FlickrImageUrlTag)