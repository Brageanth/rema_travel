import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".fade-in").forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%", // cuando el top del elemento llega al 90% del viewport
      toggleActions: "play none none none", // solo anima una vez
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
  });
});
