// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textarea = document.getElementById('text-to-speak');
  const speakButton = document.querySelector("button");
  const faceImage = document.querySelector('#explore img');
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '<option value="" disabled selected>Select Voice:</option>';
    
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.value = voice.name;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  populateVoices();

  speakButton.addEventListener('click', () => {
    if (!textarea.value.trim()) {
      alert('Please enter text first!');
      return;
    }

    const selectedVoice = voices.find(
      voice => voice.name === voiceSelect.value
    );

    const utterance = new SpeechSynthesisUtterance(textarea.value);
    if (selectedVoice) utterance.voice = selectedVoice;

    utterance.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    
    utterance.onend = utterance.onerror = () => {
      faceImage.src = 'assets/images/smiling.png';
    };

    synth.speak(utterance);
  });
}