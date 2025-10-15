const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bg-music");

openBtn.addEventListener("click", () => {
  envelope.classList.add("opened");
  music.play();
  openBtn.style.display = "none";
  startHeartAnimation();
});

function startHeartAnimation() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 300);
}
