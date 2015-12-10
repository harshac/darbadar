function arrange(elements, cols) {
    elements.each(function(i, elem) {
        putInContainer(elem,cols); // though this can be written better in JS
    });
}

function putInContainer(elem, cols) {
    var smallestCol = getSmallestCol(cols);
    $(cols[smallestCol]).append(elem);
}

function getColSize(col) {
    // return col.reduce(function(prev, curr) {
    //     return prev + curr;
    // },0);
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
  var tiles = $('.tile');
  tiles.each(function(index, tile) {
    $(tile).height(40 + (Math.random() * 40) );
  });
  var cols = $('.col')
  arrange(tiles, cols);
})

