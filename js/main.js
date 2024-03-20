let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),

	draggedPiece;

	

	document.getElementById("resetBut").addEventListener("click", resetBoard);


function resetBoard() {
	puzzlePieces.forEach(piece => {
	piece.parentNode.removeChild(piece);
	document.getElementById("Pieces").appendChild(piece);
	});

}

function changePieces(id){

    document.getElementById("guitar").src="images/guitar"+ id + ".jpg";
    document.getElementById("drum").src="images/drum"+ id + ".jpg";
    document.getElementById("piano").src="images/piano"+ id + ".jpg";
    document.getElementById("volin").src="images/volin"+ id + ".jpg";
	document.getElementById("flute").src="images/flute"+ id + ".jpg";

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

const  	albumCovers = document.querySelectorAll(".instruments img"),
        theAudioEl = document.querySelector('#audioEl'),
        playButton = document.querySelector('#playButton'),
        pauseButton = document.querySelector('#pauseButton'),
        rewindButton = document.querySelector('#rewindButton'),
        volSlider = document.querySelector('#volumeControl');


		function loadAudio() {
			let currentSrc = `audio/${this.dataset.trackref}.mp3`;
			// set the new audio source
			theAudioEl.src = currentSrc;    
			// load the new audio source
			theAudioEl.load();
		
			// tell the audio element to play
			playAudio();
		}
		// tell the audio element to play
		function playAudio() { 
			theAudioEl.play(); 
		}
		function restartAudio() { 
			theAudioEl.currentTime = 0; 
			playAudio(); 
		}
		
		function pauseAudio() { 
			theAudioEl.pause(); 
		}
		
		function setVolume() {
			// get the numeric value of the volume slider between 0 (min) and 100 (max)
			// that's what the volume of the audio should be set to
			console.log(this.value);
		
			// divide the value by 100 to get a floating point number between 0 and 1 -> .5, .85 etc
			// and then set the audio element's volume level to match
			theAudioEl.volume = (this.value/100); 
		}
		
		// add event handling to the album covers (listen for a click event)
		albumCovers.forEach(cover => cover.addEventListener('click', loadAudio));
		
		// add event handling for the custom controls
		playButton.addEventListener('click', playAudio);
		rewindButton.addEventListener('click', restartAudio);
		pauseButton.addEventListener('click', pauseAudio);
		
		volSlider.addEventListener('change', setVolume);

