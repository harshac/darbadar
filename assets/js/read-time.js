function wordsPerMinute(body) {
    var text = $(body).text();  
    var wordCount = getWordCount(text);
    return Math.ceil(wordCount/300);
}

function getWordCount(text) {
  return text.split(" ").length;
}

function setReadTime(body) {
  var readTime = wordsPerMinute(body);
  var unit = readTime == 1 ? "min" : "mins";
  $('.post-read-time').append(readTime + " " + unit + " read");
}

$(function() {
  var body = $('.post-body');
  setReadTime(body);
})