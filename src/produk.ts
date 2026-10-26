/* Galeri Produk — catalog cards rendered from data. Product photography lives
   in /public (WebP + AVIF per image); swap the entries (and drop the images in)
   as new flavors ship. */

type Product = {
  name: string;
  desc: string;
  img: string;
  alt: string;
  panelLight: string;
  panelTint: string;
};

const products: Product[] = [
  {
    name: "Jus Nanas",
    desc: "Manis dengan sedikit tart, diperah daripada nanas matang penuh — klasik Malaysia yang kaya dengan Vitamin C.",
    img: "/jus-nanas",
    alt: "Botol Jus Nanas SunLicious 500ml",
    panelLight: "#fffdf4",
    panelTint: "#fff6dd",
  },
  {
    name: "Jus Mangga",
    desc: "Pekat dan lembut, daripada mangga masak ranum — rasa tropika yang kaya dalam setiap tegukan.",
    img: "/jus-mangga",
    alt: "Botol Jus Mangga SunLicious 500ml",
    panelLight: "#fffaef",
    panelTint: "#fff0d9",
  },
  {
    name: "Jus Kelapa",
    desc: "Segar dan ringan, daripada kelapa muda dengan sedikit pulpa — hidrasi semula jadi untuk hari yang panas.",
    img: "/jus-kelapa",
    alt: "Botol Jus Kelapa SunLicious 500ml",
    panelLight: "#f7fbfe",
    panelTint: "#e9f3fa",
  },
];

const grid = document.querySelector<HTMLUListElement>("#produk-grid");
if (grid) {
  grid.innerHTML = products
    .map(
      (p, i) => `
  <li data-reveal="pop" style="animation-delay: ${(i * 0.08).toFixed(2)}s" class="h-full">
    <figure
      class="flex h-full flex-col rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-black/5 sm:p-3"
    >
      <div
        class="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-xl"
        style="background:
          radial-gradient(85% 62% at 50% 30%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 62%),
          linear-gradient(168deg, ${p.panelLight} 0%, ${p.panelTint} 100%)"
      >
        <picture class="block h-full w-full">
          <source srcset="${p.img}.avif" type="image/avif" />
          <source srcset="${p.img}.webp" type="image/webp" />
          <img
            src="${p.img}.webp"
            alt="${p.alt}"
            width="980"
            height="1470"
            loading="lazy"
            class="h-full w-full object-contain p-5 mix-blend-multiply"
          />
        </picture>
      </div>
      <figcaption class="flex flex-1 flex-col px-2 pb-2 pt-4">
        <h3 class="font-display text-[20px] font-extrabold leading-tight text-sun-pine sm:text-[22px]">
          ${p.name}
          <span class="text-[15px] font-bold text-sun-pine/55 sm:text-[16px]">500ml</span>
        </h3>
        <p class="mt-2 text-[13.5px] font-semibold leading-relaxed text-sun-pine/75 sm:text-sm">
          ${p.desc}
        </p>
      </figcaption>
    </figure>
  </li>`,
    )
    .join("");
}
