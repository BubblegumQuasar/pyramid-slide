function getHeightAndDraw () {
    var heightStr = document.getElementById("height").value;
    var height = parseInt(heightStr);

    var brickChar = document.getElementById("brick").value;
    
    // console.log for debug
    drawPyramid(height, brickChar);
    console.log(height);

    // TODO 
    // actually draw the pyramid. 
}


var heightVal = document.getElementById("height");
var brickSetup = document.getElementById("brick");

heightVal.addEventListener("input", getHeightAndDraw);
brickSetup.addEventListener("change", getHeightAndDraw);



function drawPyramid(height, brickChar) {
    //remove extant content
    var pyramidNode = document.getElementById("pyramid");
    while (pyramidNode.hasChildNodes()) {
        pyramidNode.removeChild(pyramidNode.lastChild);
    }

    // for each row
    for (var row=0; row<height; row++){

        // calculate number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build a string per row
        var rowStr = ""
        for (var i = 0; i <numSpaces; i++){
            rowStr += " ";
        }
        for (var i = 0; i <numBricks; i++){
            rowStr += brickChar
        }

        // create a test element with this string
        textElem = document.createTextNode(rowStr);

        // create a <p> element with this str (one row at a time)
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the pyramid <div> container
        document.getElementById("pyramid").appendChild(rowElem);
    }

}