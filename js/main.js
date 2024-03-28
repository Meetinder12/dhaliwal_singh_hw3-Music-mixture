
const instruments = document.querySelectorAll('#instruments div img');
const dropzone = document.querySelector('.drop-zone');
let currentAudio = null;


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

    const trackRef = draggedPiece.getAttribute('data-trackref');
    const droppedPiece = draggedPiece.cloneNode(true); // Clone the dragged piece

    if (droppedPiece !== null) {
        this.appendChild(droppedPiece);
        playAudio(trackRef); // Play audio associated with the dropped image
    }
}

instruments.forEach(instrument => {
    instrument.addEventListener("dragstart", handleStartDrag);
});

dropzone.addEventListener("dragover", handleDragOver);
dropzone.addEventListener("drop", handleDrop);

// Audio section

function loadAudio(trackRef) {
    const audio = document.querySelector(`audio[data-trackref="${trackRef}"]`);
    audio.volume = Math.min(volumeControl.value / 100 * 8, 1);
    audio.src = `audio/${trackRef}.mp3`;
    return audio;
}

function playAudio(trackRef) {
    if (currentAudio) {
        currentAudio.pause(); // Pause the current audio if it's playing
    }
    const audio = loadAudio(trackRef);
    audio.play();
    currentAudio = audio; // Update the current audio
}

const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const rewindBtn = document.getElementById('rewind-btn');
const volumeControl = document.getElementById('volume-control');

playBtn.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.play();


    }
});

pauseBtn.addEventListener('click', () => {

    if (currentAudio) {
        currentAudio.pause();

    }
});

rewindBtn.addEventListener('click', () => {

    if (currentAudio) {
        currentAudio.currentTime = 0;
    }
});

volumeControl.addEventListener('input', () => {
    if (currentAudio) {
        currentAudio.volume = volumeControl.value;
    }

});

