function arrange(elements, cols) {
    elements.each(putInContainer.bind(cols));
}

function putInContainer(i, elem) {
    var smallestCol = getSmallestCol(this);
    $(this[smallestCol]).append(elem);
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

