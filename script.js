const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bg-music");

if (!openBtn || !envelope || !music) {
  console.error("Một phần tử quan trọng không tìm thấy:", { openBtn, envelope, music });
}

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");
  openBtn.style.display = "none";

  // phát nhạc
  music.play().catch(err => {
    console.warn("Lỗi khi play nhạc:", err);
  });

  // bắt tim bay
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 400);
});
