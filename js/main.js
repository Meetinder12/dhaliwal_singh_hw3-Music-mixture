const instruments = document.querySelector('#instruments div');
const dropzone = document.querySelector('.drop-zone');
const audioPlayer = document.querySelector('.audioPlayer');

// drop section

let draggedPiece = null;

function handleStartDrag() { 
  console.log('started dragging this piece:', this);
  draggedPiece = this.cloneNode(true); // Clone the node being dragged
}

function handleDragOver(e) { 
	e.preventDefault(); 
	console.log('dragged over me'); 
}


function handleDrop(e) { 
  console.log("drag event", e);
  e.preventDefault();
  console.log('dropped something on me');

  if (this.childElementCount == 0 && draggedPiece !== null) {
      this.appendChild(draggedPiece);
  }
}

instruments.addEventListener("dragstart", handleStartDrag);

dropzone.addEventListener("dragover", handleDragOver);

dropzone.addEventListener("drop", handleDrop);

// Audio section

function loadAudio(trackRef) {
  const audio = document.querySelector(`audio[data-trackref="${trackRef}"]`);

  audio.volume = volumeControl.value / 100;
  audio.src = `audio/${trackRef}.mp3`;
  audioPlayer.play();
}

function playAudio() {
  const draggedPiece = dropzone.querySelectorAll('img[data-trackref]');

  draggedPiece.forEach(img => {
    const trackRef = img.getAttribute('data-trackref');
    loadAudio(trackRef);
  });
}

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
  audioPlayer.play();
});

pauseBtn.addEventListener('click', () => {
  console.log("Pause button clicked");
  audioPlayer.pause();
});

rewindBtn.addEventListener('click', () => {
  console.log("Rewind button clicked");
  audioPlayer.currentTime = 0;
});

volumeControl.addEventListener('input', () => {
  console.log("Volume changed");
  audioPlayer.volume = volumeControl.value;
});
