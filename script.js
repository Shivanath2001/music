const input = document.querySelector("input");
const song = document.querySelector("#song");
const ctrlicon = document.querySelector("#ctrlicon");
// console.dir89+7.(song);
ctrlicon.addEventListener("click", (e) => {
  console.log(e);
  if (ctrlicon.classList.contains("fa-pause")) {
    song.pause();
    ctrlicon.classList.remove("fa-pause");
    ctrlicon.classList.add("-play");
    // console.log(ctrlicon);
  } else {
    song.play();
    ctrlicon.classList.add("fa-pause");
    ctrlicon.classList.remove("fa-play");
    console.log(ctrlicon);
    if (song.play()) {
      setInterval(() => {
        input.max = song.duration;

        input.value = song.currentTime;
      });
    }
  }
});

input.onchange = () => {
  song.play();
  song.currentTime = input.value;
  ctrlicon.classList.add("fa-pause");
  ctrlicon.classList.remove("fa-play");
};
