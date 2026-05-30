AOS.init();

  const carousel = document.getElementById("trendingCarousel");

  carousel.addEventListener("mouseover", () => {
    carousel.style.animationPlayState = "paused";
  });

  carousel.addEventListener("mouseout", () => {
    carousel.style.animationPlayState = "running";
  });

const chatbot = document.getElementById("chatbot");
const toggleBtn = document.getElementById("chatbot-toggle");

toggleBtn.onclick = () => {
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
};

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  const body = document.getElementById("chatbot-body");

  if (message) {
    body.innerHTML += `<div><strong>You:</strong> ${message}</div>`;
    setTimeout(() => {
      body.innerHTML += `<div><strong>Bot:</strong> I'm here to help. How can I assist further?</div>`;
      body.scrollTop = body.scrollHeight;
    }, 700);
    input.value = '';
  }
}


