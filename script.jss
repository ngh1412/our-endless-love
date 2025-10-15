const openBtn = document.getElementById("openBtn");
const envelope = document.getElementById("envelope");
const letter = document.querySelector(".letter");
const bgm = document.getElementById("bgm");

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");
  openBtn.style.display = "none";
  setTimeout(() => {
    letter.classList.add("show");
    bgm.play().catch(err => console.log("Không phát được nhạc:", err));
  }, 800);
});

// Hiệu ứng tim bay
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  document.body.appendChild(heart);

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
setInterval(createHeart, 400);
