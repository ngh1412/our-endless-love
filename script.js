// full script - robust + logs + typing + hearts + audio fallback

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openBtn');
  const envelope = document.getElementById('envelope');
  const letterText = document.getElementById('letterText');
  const heartsWrap = document.getElementById('heartsWrap');
  const audio = document.getElementById('bgAudio');

  if (!openBtn || !envelope || !letterText || !heartsWrap || !audio) {
    console.error('Missing required DOM nodes', {openBtn, envelope, letterText, heartsWrap, audio});
    return;
  }

  // the message (use template exactly as you want to appear)
  const MESSAGE = `Gửi em,

Có thể anh không phải người giỏi nói lời hoa mỹ, nhưng mỗi khi nghĩ về em, tim anh như có nắng xuyên qua cơn mưa.
Em khiến mọi thứ xung quanh trở nên dịu dàng và ấm áp hơn rất nhiều.

Cảm ơn em vì đã đến bên anh. Anh sẽ giữ cảm giác này mãi mãi.
Nếu có thể, anh chỉ muốn nắm tay em và nói: "Anh thương em." 💗

— Từ người luôn nghĩ về em`;

  // typing config
  const TYPING_SPEED = 28; // ms per char
  let typingIndex = 0;

  // start hearts interval when opening
  let heartsTimer = null;
  function startHearts() {
    if (heartsTimer) return;
    heartsTimer = setInterval(() => {
      spawnHeart();
    }, 360);
  }

  function spawnHeart() {
    const h = document.createElement('div');
    h.className = 'heart';
    h.innerText = '💖';
    const left = Math.random() * (window.innerWidth - 80) + 20;
    const size = Math.random() * 18 + 12;
    h.style.left = left + 'px';
    h.style.fontSize = size + 'px';
    h.style.animationDuration = (Math.random() * 1.6 + 2.4) + 's';
    heartsWrap.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }

  // typing effect
  function typeNextChar() {
    if (typingIndex >= MESSAGE.length) return;
    letterText.textContent += MESSAGE.charAt(typingIndex);
    typingIndex++;
    // scroll to bottom of paper-inner if long
    const parent = letterText.parentElement;
    parent.scrollTop = parent.scrollHeight;
    if (typingIndex < MESSAGE.length) {
      setTimeout(typeNextChar, TYPING_SPEED);
    }
  }

  // main open handler
  openBtn.addEventListener('click', async () => {
    // visual open
    envelope.classList.add('open');
    openBtn.style.display = 'none';

    // start typing with tiny delay so animation looks smooth
    setTimeout(() => {
      typeNextChar();
    }, 420);

    // attempt to play audio; show controls fallback if rejected
    try {
      const p = audio.play();
      if (p !== undefined) await p;
      console.log('Audio playing');
    } catch (err) {
      console.warn('Audio.play() rejected, enabling controls for manual play', err);
      audio.controls = true;
      audio.style.position = 'fixed';
      audio.style.left = '20px';
      audio.style.bottom = '20px';
      audio.style.zIndex = 9999;
      audio.style.display = 'block';
    }

    // start hearts
    startHearts();
  });

  // optional: allow pressing Enter to open (accessibility)
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && openBtn.style.display !== 'none') {
      openBtn.click();
    }
  });

  // responsive: remove old hearts on resize to avoid overflow
  window.addEventListener('resize', () => {
    // nothing heavy, DOM hearts have auto cleanup; ensure no memory leak
  });
});
