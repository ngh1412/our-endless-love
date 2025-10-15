// --- CONFIG ---
const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];
const numHearts = 40;

// --- CREATE HEART PARTICLES ---
function createHeart() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 6 + 2,
    alpha: Math.random() * 0.5 + 0.5,
    speed: Math.random() * 0.5 + 0.2,
  };
}

// Fill the hearts array
for (let i = 0; i < numHearts; i++) {
  hearts.push(createHeart());
}

// --- DRAW HEART ---
function drawHeart(x, y, size, alpha) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 10, size / 10);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(0, -3, -5, -15, -10, -15);
  ctx.bezierCurveTo(-25, -15, -25, 7.5, -25, 7.5);
  ctx.bezierCurveTo(-25, 15, -15, 22, 0, 30);
  ctx.bezierCurveTo(15, 22, 25, 15, 25, 7.5);
  ctx.bezierCurveTo(25, 7.5, 25, -15, 10, -15);
  ctx.bezierCurveTo(5, -15, 0, -3, 0, 0);
  ctx.closePath();
  ctx.fillStyle = `rgba(255, 100, 150, ${alpha})`;
  ctx.fill();
  ctx.restore();
}

// --- DRAW TEXT ---
function drawText() {
  ctx.save();

  // Reset transform để tránh chữ bị ngược
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  ctx.font = "bold 30px 'Dancing Script', cursive";
  ctx.fillStyle = "#ffb6c1";
  ctx.textAlign = "center";
  ctx.fillText("To my endless love 💌", canvas.width / 2, canvas.height / 2 - 20);

  ctx.font = "22px 'Dancing Script', cursive";
  ctx.fillStyle = "#ffd6e8";
  ctx.fillText("Mãi mãi yêu em, người khiến trái tim này tan chảy 💖", canvas.width / 2, canvas.height / 2 + 20);

  ctx.restore();
}

// --- ANIMATE ---
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw moving hearts
  for (let i = 0; i < hearts.length; i++) {
    const h = hearts[i];
    drawHeart(h.x, h.y, h.size, h.alpha);
    h.y -= h.speed;
    if (h.y + h.size < 0) {
      hearts[i] = createHeart();
      hearts[i].y = canvas.height + hearts[i].size;
    }
  }

  drawText();
  requestAnimationFrame(animate);
}

animate();

// --- RESIZE HANDLER ---
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
