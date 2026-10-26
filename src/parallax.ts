import Parallax from "parallax-js";

/* ---------- decorative motion for the prop rasters ----------
   Two channels on the same props: mouse sway via parallax.js
   ([data-parallax-scene]; fine pointers only — touch devices keep scroll
   drift but have no cursor) and scroll drift ([data-drift]; applied on the
   inner img so it composes with the frame's transform). Both gated on
   prefers-reduced-motion. */
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
    applied: 0, // drift already carried
  }));

  const measure = () => {
    for (const prop of props) {
      // Rects reflect transforms — subtract applied drift or the offset
      // compounds at every measure.
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
