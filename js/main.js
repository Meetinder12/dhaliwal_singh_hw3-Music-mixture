let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),

	draggedPiece;

	

	document.getElementById("resetBut").addEventListener("click", resetBoard);


function changeBGImage() {
	
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
	
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); 
	console.log('dragged over me'); 
}

function handleDrop(e) { 
    console.log("drag event",e)
	e.preventDefault();
	console.log('dropped something on me');

    if (this.childElementCount == 0){
		this.appendChild(draggedPiece);
	}
	}
    

	




theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// add the drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

// add the dragover AND the drop event handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));

