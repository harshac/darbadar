require 'net/http'
require 'nokogiri'
require 'pry'

module Jekyll
  class FlickrImageUrlTag < Liquid::Tag

	API_KEY="db5ff0f27c564d31b746465b05db9894"
	USER_ID="135351035@N03"
    
    def initialize(tag_name, text, tokens)
      super
      @text = text
      @tag_name = tag_name
      @tokens = tokens
    end

    def render(context)
      albumId = context.environments.first["page"]["albumId"]
      response=getAlbumPhotosInfo(albumId)
      photoAttributes=findPhoto(@text, response)      
      buildPhotoUrl(photoAttributes)
    end

    def getAlbumPhotosInfo(albumId)
		uri=URI.parse("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=#{API_KEY}&user_id=#{USER_ID}&photoset_id=#{albumId}
")
      	Nokogiri::XML(Net::HTTP.get(uri))
    end

    def findPhoto(title, photosXML)
    	photosXML.xpath("//photo[@title='#{title.strip}']").first.attributes
    end

	def buildPhotoUrl(attributes)
		farmID=attributes["farm"].value
		serverId=attributes["server"].value
		id=attributes["id"].value
		secret=attributes["secret"].value

		"https://farm#{farmID}.staticflickr.com/#{serverId}/#{id}_#{secret}_c.jpg"
	end
  end
end

Liquid::Template.register_tag('flickrUrl', Jekyll::FlickrImageUrlTag)