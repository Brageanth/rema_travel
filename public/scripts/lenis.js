import Lenis from "lenis";

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

const sectionButtons = document.querySelectorAll("[data-header-section]");

sectionButtons.forEach((button) => {
  button.addEventListener("click", onClick);
});

function onClick(event) {
  const { srcElement } = event;
  const selector = srcElement.textContent.replaceAll(" ", "_");
  const domElement = document.getElementById(selector);
  lenis.scrollTo(domElement, {});
}

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
