var instagram = {
    imageFeed: null,

    getImages: function () {
        $.getJSON("https://www.instagram.com/graphql/query/?query_id=17888483320059182&variables=%7B%22id%22:%222301755000%22,%22first%22:20,%22after%22:null%7D", function (data) {
            instagram.imageFeed = data.graphql.user.edge_owner_to_timeline_media.edges.map(function (image) {
                return {
                    url: image["node"]["thumbnail_src"]
                }
            });
            instagram.initializeFeed();
        });
    },

    initializeFeed: function () {
        $('.instagram-grid img').each(function () {
            var imageSrc = instagram.imageFeed[$(this).index];
            $(this).attr('data-src', imageSrc);
        });
    },

    initializeLazyLoading: function () {
        $("img").unveil();
    }
};

// On DOM ready, load the images if albumId is present in the post
$(function () {
    instagram.getImages();

});