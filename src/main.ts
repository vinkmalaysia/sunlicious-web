import "./style.css";

/* Mobile menu + desktop nav underline live in src/nav.ts (the shared topnav
   component renders that markup and wires its own behaviour). */

/* ---------- re-apply fragment anchor after load ----------
   The browser's initial fragment jump can be cancelled by the layout shifts
   that happen while web fonts and content settle (and the site's smooth
   scroll-behavior makes the abort stick) — leaving the page stuck at the top.
   Once everything is loaded, jump to the anchor instantly: smooth scrolling
   here just gives layout shifts another chance to cancel the animation. */
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
if ("IntersectionObserver" in window && revealables.length) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add(el.dataset.reveal === "pop" ? "pop" : "rise");
        if (el.dataset.delay) el.style.animationDelay = el.dataset.delay;
        io.unobserve(el);
      }
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  revealables.forEach((el) => io.observe(el));
}
