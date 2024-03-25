
const instruments = document.querySelector('#instruments');
const dropzone = document.querySelector('.dropzone');
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

const audio = document.querySelector('#audio');
  const playBtn = document.querySelector('#play-btn');
  const pauseBtn = document.querySelector('#pause-btn');
  const rewindBtn = document.querySelector('#rewind-btn');
  const volumeControl = document.querySelector('#volume-control');

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