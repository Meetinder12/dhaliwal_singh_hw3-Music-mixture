// It is empty at the moment 

let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),

	draggedPiece;

	

	document.getElementById("resetBut").addEventListener("click", resetBoard);


function changeBGImage() {
	// the `` is a JavaScript template string. It tells the JS enging to evaluate the expression
	// inside the braces - run that little bit of code. In this case it's just pulling the ID of the
	// button we clicked on and putting it at the end of the image name (0, 1, 2, 3)
	// and updating the background-image style of the puzzle board element.

	// bug fix #2 should go here. it's at most 3 lines of JS code.
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    changePieces(this.id);
}

function resetBoard() {
	puzzlePieces.forEach(piece => {
	piece.parentNode.removeChild(piece);
	document.getElementById("Pieces").appendChild(piece);
	});

}

function changePieces(id){
    document.getElementById("top_left").src="images/topLeft"+ id + ".jpg";
    document.getElementById("top_right").src="images/topRight"+ id + ".jpg";
    document.getElementById("bottom_left").src="images/bottomLeft"+ id + ".jpg";
    document.getElementById("bottom_right").src="images/bottomRight"+ id + ".jpg";
}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); // e is shorthand for event
	// this overrides the default dragover behaviour
	console.log('dragged over me'); 
}

function handleDrop(e) { 
    console.log("drag event",e)
	e.preventDefault();
	console.log('dropped something on me');
	// bug fix #1 should go here, and it's at most 3 lines of JS code
    if (this.childElementCount == 0){
		this.appendChild(draggedPiece);
	}
	}
    

	// this line is going to move the dragged piece from the left side of the board
	// into whatever drop zone we choose. appendChild means "add element to the container"



// step 2
// event handling always goes at the bottom => 
// how do we want users to interact with our app

// 1 to 1 event handling
// theButton.addEventListener("click", changeBGImage);

// 1 to many event handling 
// add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// add the drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

// add the dragover AND the drop event handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

