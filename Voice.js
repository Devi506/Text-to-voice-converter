let speech = new SpeechSynthesisUtterance();

speech.lang = "en";

document.querySelector("#talk").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
  });

  document.querySelector("#rate").addEventListener("input", () => {
    // Get rate Value from the input
    const rate = document.querySelector("#rate").value;
  
    // Set rate property of the SpeechSynthesisUtterance instance
    speech.rate = rate;
  
    // Update the rate label
    document.querySelector("#rate-label").innerHTML = rate;
  });

  document.querySelector("#volume").addEventListener("input", () => {
    // Get volume Value from the input
    const volume = document.querySelector("#volume").value;
  
    // Set volume property of the SpeechSynthesisUtterance instance
    speech.volume = volume;
  
    // Update the volume label
    document.querySelector("#volume-label").innerHTML = volume;
  });


  document.querySelector("#pitch").addEventListener("input", () => {
    // Get pitch Value from the input
    const pitch = document.querySelector("#pitch").value;
  
    // Set pitch property of the SpeechSynthesisUtterance instance
    speech.pitch = pitch;
  
    // Update the pitch label
    document.querySelector("#pitch-label").innerHTML = pitch;
  });

  window.speechSynthesis.onvoiceschanged = () => {
    // On Voices Loaded
  };

  let voices = []; // global array

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  speech.voice = voices[0];

  // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

document.querySelector("#voices").addEventListener("change", () => {
    speech.voice = voices[document.querySelector("#voices").value];
  });

  document.querySelector("#talk").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
  });

  document.querySelector("#pause").addEventListener("click", () => {
    window.speechSynthesis.pause();
  });


  document.querySelector("#resume").addEventListener("click", () => {
    window.speechSynthesis.resume();
  });
