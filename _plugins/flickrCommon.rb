require 'net/http'
require 'nokogiri'

class FlickrCommon
	API_KEY="db5ff0f27c564d31b746465b05db9894"
	USER_ID="135351035@N03"
    
    def initialize()
    end

    def getAlbumPhotosInfo(albumId)
		uri=URI.parse("https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=#{API_KEY}&user_id=#{USER_ID}&photoset_id=#{albumId}
")
      	Nokogiri::XML(Net::HTTP.get(uri))
    end


	def buildPhotoUrl(attributes)
		farmID=attributes["farm"].value
		serverId=attributes["server"].value
		id=attributes["id"].value
		secret=attributes["secret"].value

		"https://farm#{farmID}.staticflickr.com/#{serverId}/#{id}_#{secret}_c.jpg"
	end
end
