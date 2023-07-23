function moveImageUp() {
  let tableImage = document.getElementById('tableImage');
  let currentPosition = parseFloat(tableImage.style.top) || 0;
  let newPosition = currentPosition - 9;
  if (newPosition < -37) {
    newPosition = -37;
  }
  tableImage.style.top = newPosition + 'px';
}

function moveImageDown() {
  let tableImage = document.getElementById('tableImage');
  let currentPosition = parseFloat(tableImage.style.top) || 0;
  let newPosition = currentPosition + 8;
  if (newPosition > 34) {
    newPosition = 34;
  }
  tableImage.style.top = newPosition + 'px';
}

let upButton = document.getElementById('up-button');
let downButton = document.getElementById('bottom-button');

upButton.addEventListener('click', moveImageUp);
downButton.addEventListener('click', moveImageDown);


document.addEventListener("DOMContentLoaded", function () {
  const blackRound = document.querySelector(".black-round");
  const img = document.querySelector(".voice-control__assistant img");

  function animateOnScroll() {
    const elementTop = blackRound.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;

    if (elementTop > 0 && elementTop < viewportHeight) {
      blackRound.style.opacity = "1"; // появление круга
      blackRound.style.transform = "scale(1.4)";

      setTimeout(() => {
        img.style.visibility = "visible";
        img.style.animation = "slideOut 5s ease-in-out";
        blackRound.style.transform = "scale(1)";
        setTimeout(() => {
          img.style.animation = "levitation 2s ease-in-out infinite";
        }, 5000);
      }, 1500);
    }
  }

  window.addEventListener("scroll", animateOnScroll); // запуск функции при прокрутке страницы
  animateOnScroll(); // запуск анимации при загрузке страницы
});