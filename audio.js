
const AudioButton = document.getElementById("audio-button")
const AudioPlay = document.getElementById("AudioHeader")

AudioButton.addEventListener("click", () => {
  if (AudioButton.src.includes("sem-som.png")) {
    AudioButton.src = "/imagem/com-som.png"
    AudioPlay.play()
  } else {
    AudioButton.src = "sem-som.png"
    AudioPlay.pause()
  }
})

AudioButton.addEventListener("dblclick", () => {
  if (AudioButton.src.includes("/imagem/com-som.png")) {
    let NumAleatorio = Math.floor(Math.random() * 2) + 1

    if (NumAleatorio === 1) {
      AudioPlay.src = "d4vd - Feel It (Official Music Video) (1).mp3"
    } else {
      AudioPlay.src = "d4vd - Feel It (Official Music Video) (1).mp3"
    }
    
    AudioPlay.load()
    AudioPlay.play()
  }
})