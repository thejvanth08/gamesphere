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

photoImg.addEventListener("mouseover", () => {
  photoPrev = photoImg.src;
  //   using relative path from root of the website/domain/server
  photoImg.src = "/assets/photo-22.webp";
});

photoImg.addEventListener("mouseout", () => {
  photoImg.src = photoPrev;
});

videoImg.addEventListener("mouseover", () => {
  videoPrev = videoImg.src;
  //   using relative path from root of the website/domain/server
  videoImg.src = "/assets/video-33.webp";
});

videoImg.addEventListener("mouseout", () => {
  videoImg.src = videoPrev;
});

miniImg.addEventListener("mouseover", () => {
  miniPrev = miniImg.src;
  //   using relative path from root of the website/domain/server
  miniImg.src = "/assets/mini-11.webp";
});

miniImg.addEventListener("mouseout", () => {
  miniImg.src = miniPrev;
});
