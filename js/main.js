
const instruments = document.querySelector('#instruments div');
const dropzone = document.querySelector('.drop-zone');

const audioPlayer = document.querySelector('.audioPlayer');

// drop section

let draggedPiece = null;

function handleStartDrag() { 
  console.log('started dragging this piece:', this);
  draggedPiece = this.cloneNode(true); // Clone the node being dragged
}


const audio = document.querySelector('#audio');
const playBtn = document.querySelector('#play-btn');
const pauseBtn = document.querySelector('#pause-btn');
const rewindBtn = document.querySelector('#rewind-btn');
const volumeControl = document.querySelector('#volume-control');

playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    }
});

pauseBtn.addEventListener('click', () => {
    if (!audio.paused) {
        audio.pause();
    }
});

rewindBtn.addEventListener('click', () => {
    audio.currentTime = 0;
});

volumeControl.addEventListener('input', () => {
    audio.volume = volumeControl.value;
});

