const audioImg = document.getElementById("audio-img");
const photoImg = document.getElementById("photo-img");
const videoImg = document.getElementById("video-img");
const miniImg = document.getElementById("mini-img");

// to store previous image urls
let audioPrev, photoPrev, videoPrev, miniPrev;

audioImg.addEventListener("mouseover", () => {
  audioPrev = audioImg.src;
  //   using relative path from root of the website/domain/server
  audioImg.src = "/assets/audio-11.webp";
});

audioImg.addEventListener("mouseout", () => {
  audioImg.src = audioPrev;
});
