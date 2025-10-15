const openBtn = document.getElementById('openBtn');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const bgMusic = document.getElementById('bgMusic');
const message = document.getElementById('message');

// Nội dung thư
const text = `Gửi em 💌

Cảm ơn em vì đã bước vào cuộc đời anh.
Từ khi có em, mọi thứ như dịu lại — cả thế giới này cũng dễ thương hơn hẳn.

Hy vọng bài hát này sẽ khiến em nhớ đến anh, như cách anh luôn nhớ về em. 💖`;

// Khi ấn "Mở thư"
openBtn.addEventListener('click', () => {
  envelope.style.display = 'none';
  letter.style.display = 'block';
  bgMusic.play();
  typeText(text);
  setInterval(createHeart, 400); // gọi tim bay
});

// Hiệu ứng gõ chữ
function typeText(str) {
  let i = 0;
  const speed = 40;
  function typing() {
    if (i < str.length) {
      message.innerHTML += str.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Tạo tim bay
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}
