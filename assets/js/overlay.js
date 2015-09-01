// Image click
$('.post-content img').click(function(){
  var name=$(this).attr("name")
  var url=$($(".gallery-list li img[name=" + name + "]")).attr("src");
  $(".overlay img").attr("src", url);
  $(".overlay").removeClass("hide");
});