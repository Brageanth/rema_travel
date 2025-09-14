import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollAndLenis() {
  useEffect(() => {
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

    const idGradient = "#DESTINOS_DESTACADOS";

    gsap
      .timeline({
        scrollTrigger: {
          trigger: idGradient,
          start: "top bottom", // Cuando entra en viewport
          end: "bottom top", // Cuando sale del viewport
          scrub: true, // 🔥 Esto sincroniza con el scroll
        },
      })
      .to(idGradient, { backgroundPosition: "0% 0%" })
      .to(idGradient, { backgroundPosition: "0% 100%" })
      .to(idGradient, { backgroundPosition: "100% 100%" })
      .to(idGradient, { backgroundPosition: "100% 0%" });

    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.querySelectorAll("[data-header-section]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const selector = e.target.textContent.replaceAll(" ", "_");
        const target = document.getElementById(selector);
        if (target) lenis.scrollTo(target);
      });
    });
  }, []);

  return null;
}
