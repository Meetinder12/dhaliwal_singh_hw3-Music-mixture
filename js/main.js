
const dragImage = document.querySelector('#dragImage');
const dropbox = document.querySelector('#dropbox');
const audioPlayer = document.querySelector('#audioPlayer');

dragImage.addEventListener('dragstart', function(e) {
    e.dataTransfer.setData('text/plain', 'dragging');
});

dropbox.addEventListener('dragover', function(e) {
    e.preventDefault();
});

dropbox.addEventListener('drop', function(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    if (data === 'dragging') {
        // Play music
        audioPlayer.play();
    }
});

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const rewindBtn = document.getElementById('rewind-btn');
const volumeControl = document.getElementById('volume-control');

playBtn.addEventListener('click', () => {
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  audio.pause();
});

rewindBtn.addEventListener('click', () => {
  audio.currentTime = 0;
});

volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
});

