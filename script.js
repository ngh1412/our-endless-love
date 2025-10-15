const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click", () => {
  envelope.querySelector(".envelope").classList.add("open");
  openBtn.style.display = "none";
  music.play();
  startHearts();
});

function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    heart.innerHTML = "❤";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 400);
}
