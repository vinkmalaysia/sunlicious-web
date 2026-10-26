import "./style.css";
import { initParallax } from "./parallax";

initParallax();

/* ---------- re-apply fragment anchor after load ----------
   Layout shifts during load can cancel the browser's initial fragment jump
   (smooth scroll-behavior makes the abort stick), so jump again — instantly —
   once everything is loaded. */
if (location.hash.length > 1) {
  const reanchor = () => {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) target.scrollIntoView({ block: "start", behavior: "instant" });
  };
  if (document.readyState === "complete") reanchor();
  else window.addEventListener("load", reanchor, { once: true });
}

/* ---------- scroll reveal for below-the-fold sections ---------- */

const revealables = document.querySelectorAll<HTMLElement>("[data-reveal]");
const revealClass = (el: HTMLElement) =>
  el.classList.add(el.dataset.reveal === "pop" ? "pop" : "rise");
if ("IntersectionObserver" in window && revealables.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        if (el.dataset.delay) el.style.animationDelay = el.dataset.delay;
        revealClass(el);
        io.unobserve(el);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  revealables.forEach((el) => io.observe(el));
} else {
  /* No IntersectionObserver: reveal all immediately, or the CSS pre-hide
     hides the content forever. */
  revealables.forEach((el) => {
    if (el.dataset.delay) el.style.animationDelay = el.dataset.delay;
    revealClass(el);
  });
}
