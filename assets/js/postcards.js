function arrange(elements, cols) {
    elements.each(function(i, elem) {
        putInContainer(elem,cols); // though this can be written better in JS
    });
}

function putInContainer(elem, cols) {
    var smallestCol = getSmallestCol(cols);
    // var tile="<div class='tile'><img src='' class='tile-img' alt=''/><p></div>"
    $(cols[smallestCol]).append(elem);
}

function getColSize(col) {
  return $(col).height();
}

function getSmallestCol(cols) {
    var smallest = getColSize(cols[0]),
        smallestColIndex = 0;
        
    cols.each(function(i, col) {
        var colSize = getColSize(col);
        if (colSize < smallest) {
            smallest = colSize;
            smallestColIndex = i;
        }
    });
    
    return smallestColIndex;
}

$(function() {
  var tiles = $('.postcard');
  var cols = $('.col')
  arrange(tiles, cols);
})

