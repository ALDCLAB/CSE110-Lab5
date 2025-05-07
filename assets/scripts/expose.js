// expose.js

window.addEventListener('DOMContentLoaded', init);

const jsConfetti = new JSConfetti();

function init() {
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('#expose img');
  const audioElement = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('#expose button');

  function updateVolume(volume) {
    let level;
    if (volume == 0) {
      level = 0;
    } else if (volume < 33) {
      level = 1;
    } else if (volume < 67) {
      level = 2;
    } else {
      level = 3;
    }
    volumeIcon.src = `assets/icons/volume-level-${level}.svg`;
    audioElement.volume = volume / 100;
  }

  updateVolume(volumeSlider.value);

  hornSelect.addEventListener('change', () => {
    const selectedHorn = hornSelect.value;
    if (selectedHorn !== 'select') {
      image.src = `assets/images/${selectedHorn}.svg`;
      audioElement.src = `assets/audio/${selectedHorn}.mp3`;
      audioElement.load();
    }
  });

  volumeSlider.addEventListener('input', (e) => {
    updateVolume(e.target.value);
  });

  playButton.addEventListener('click', () => {
    if (audioElement.src) {
      audioElement.play();
      if (hornSelect.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });
}