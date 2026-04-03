const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");
const dotsContainer = document.getElementById("dots");
const sliderArea = document.querySelector(".testimonial-right");

let index = 0;
let interval;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function goToSlide(i) {
  index = i;
  track.style.transform = `translateX(-${index * 100}%)`;
  updateDots();
  setActiveSlide();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

function startSlider() {
  interval = setInterval(() => {
    index++;
    if (index >= slides.length) index = 0;
    goToSlide(index);
  }, 3000);
}

function stopSlider() {
  clearInterval(interval);
}

// Init
setActiveSlide();
startSlider();

// Hover pause
sliderArea.addEventListener("mouseenter", stopSlider);
sliderArea.addEventListener("mouseleave", startSlider);


