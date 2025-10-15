const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const letterContent = document.getElementById("letter-content");
const music = document.getElementById("bg-music");

const message = `
Gửi người mà anh thương nhiều hơn cả lời nói...  

Anh biết có lẽ anh không phải người hoàn hảo, nhưng mọi điều anh làm, từng lời anh nói, từng chút quan tâm nhỏ bé — đều thật lòng dành cho em.  
Mỗi khi em cười, cả thế giới trong anh như sáng lên. Mỗi khi em buồn, tim anh lại nhói, chỉ ước được ôm em vào lòng và nói: “Ổn mà, có anh đây.”  

Nếu có thể, anh chỉ muốn thời gian dừng lại... ở khoảnh khắc mà em nhìn anh, dịu dàng như thể cả thế giới chỉ còn hai đứa mình thôi.  

Thương yêu em nhiều lắm... mãi mãi luôn là như thế 💌
`;

envelope.addEventListener("click", () => {
  envelope.classList.add("hidden");
  letter.classList.remove("hidden");
  letter.classList.add("show");
  music.play();
  typeText(message, letterContent);
});

function typeText(text, element) {
  element.textContent = "";
  let index = 0;
  const interval = setInterval(() => {
    element.textContent += text[index];
    index++;
    if (index === text.length) clearInterval(interval);
  }, 40);
}
