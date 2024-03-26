
const instruments = document.querySelector('#instruments');
const dropzone = document.querySelector('.drop-zone');
const audioPlayer = document.querySelector('.audioPlayer');

instruments.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', 'dragging');
});

dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
});

dropzone.addEventListener('drop', function(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (data === 'dragging') {
        // Play music
        audioPlayer.play();
    }
});

// drop section

let draggedPiece = null;

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

instruments.addEventListener("dragstart", handleStartDrag);

dropzone.addEventListener("dragover", handleDragOver);

dropzone.addEventListener("drop", handleDrop);

const audio = document.querySelector('.audioPlayer');
const playBtn = document.querySelector('#play-btn');
const pauseBtn = document.querySelector('#pause-btn');
const rewindBtn = document.querySelector('#rewind-btn');
const volumeControl = document.querySelector('#volume-control');

// Check if the audio element is properly selected
console.log("Audio element:", audio);

// Check if the buttons are properly selected
console.log("Play Button:", playBtn);
console.log("Pause Button:", pauseBtn);
console.log("Rewind Button:", rewindBtn);

// Check if volume control is properly selected
console.log("Volume Control:", volumeControl);

playBtn.addEventListener('click', () => {
  console.log("Play button clicked");
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  console.log("Pause button clicked");
  audio.pause();
});

rewindBtn.addEventListener('click', () => {
  console.log("Rewind button clicked");
  audio.currentTime = 0;
});

volumeControl.addEventListener('input', () => {
  console.log("Volume changed");
  audio.volume = volumeControl.value;
});
