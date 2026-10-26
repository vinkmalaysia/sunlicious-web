import Parallax from "parallax-js";

/* ---------- decorative motion for the prop rasters ----------
   Two independent, composable channels on the same props (each lives in a
   full-bleed frame because parallax.js pins those frames to the scene's
   top-left and animates them with its own transform):

   1. mouse sway  — [data-parallax-scene] frames sway by data-depth (0–1
      relative depth; per-scene data-scalar-x/y sets the amplitude — ~18%
      of the scene's width / ~14% of its height — so a depth-0.45 layer
      sweeps up to ~80px per full pointer swing). data-hover-only eases
      each scene back to rest when the cursor leaves its section.
   2. scroll drift — [data-drift] imgs translate vertically as the page
      scrolls (rise while scrolling down, pass through their authored
      position at the viewport centre). Applied on the inner img so it
      composes with the frame's mouse transform instead of colliding.

   Init is deliberately gated:

     - reduced-motion off everywhere — respect the OS preference;
     - mouse sway additionally only with a fine pointer — touch devices
       keep the scroll drift but have no cursor to sway with. */
export function initParallax(): void {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  /* ---------- mouse sway ---------- */
  const scenes = document.querySelectorAll<HTMLElement>("[data-parallax-scene]");
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    scenes.forEach((scene) => new Parallax(scene, { hoverOnly: true }));
  }

  /* ---------- scroll drift ---------- */
  const drifted = [...document.querySelectorAll<HTMLElement>("[data-drift]")];
  if (!drifted.length) return;

  const props = drifted.map((element) => ({
    element,
    drift: Number.parseFloat(element.dataset.drift!) || 0,
    center: 0, // document-space centre
    applied: 0, // translate currently carried, cancelled out of the next measure
  }));

  const measure = () => {
    for (const prop of props) {
      // Rects reflect transforms, so subtract the drift already applied; the
      // remainder is the prop's authored position. Without this the offset
      // would compound at every measure (scroll-touch + image/font settle.)
      const rect = prop.element.getBoundingClientRect();
      prop.center = rect.top + window.scrollY + rect.height / 2 - prop.applied;
    }
  };

  let frame = 0;

  const render = () => {
    frame = 0;
    const anchor = window.scrollY + window.innerHeight / 2;
    for (const prop of props) {
      const y = (anchor - prop.center) * prop.drift;
      prop.applied = -y;
      prop.element.style.transform = `translate3d(0, ${(-y).toFixed(2)}px, 0)`;
    }
  };

  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(render);
  };

  addEventListener("scroll", schedule, { passive: true });
  addEventListener("resize", () => {
    measure();
    schedule();
  });
  addEventListener("load", () => {
    measure();
    schedule();
  });
  addEventListener("pageshow", measure); // bfcache restore restores stale offsets

  schedule();
}
