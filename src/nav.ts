/* Shared site header/topnav — rendered into <header id="site-header"> on every page. */

const isProduk = location.pathname.endsWith("produk.html");

const logoHref = isProduk ? "/index.html" : "#home";
const homeHref = logoHref;
const kebaikanHref = isProduk ? "/index.html#kebaikan" : "#kebaikan";
const tentangHref = isProduk ? "/index.html#tentang" : "#tentang";

const desktopLinkClass =
  "relative text-[15px] font-bold text-sun-pine/80 transition hover:text-sun-pine";
const desktopActiveClass =
  "relative text-[15px] font-extrabold text-sun-pine transition hover:text-sun-pine";
const mobileLinkClass = "rounded-xl px-4 py-3 font-bold text-white/85 hover:bg-white/10";
const mobileActiveClass = "rounded-xl bg-white/10 px-4 py-3 font-extrabold";

function desktopLink(href: string, label: string, active: boolean): string {
  const current = active ? ' aria-current="page"' : "";
  return `<a href="${href}" class="${active ? desktopActiveClass : desktopLinkClass}"${current}>${label}</a>`;
}

function mobileLink(href: string, label: string, active: boolean): string {
  return `<a href="${href}" class="${active ? mobileActiveClass : mobileLinkClass}">${label}</a>`;
}

const header = document.querySelector<HTMLElement>("#site-header");
if (header) {
  header.className = "absolute inset-x-0 top-0 z-40";
  header.innerHTML = `
      <div class="relative mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="${logoHref}"
          class="shrink-0 transition hover:-translate-y-0.5"
          aria-label="SunLicious — laman utama"
        >
          <img
            src="/sunlicious-logo.svg"
            alt="SunLicious — Minuman Pilihan Malaysia"
            width="610"
            height="345"
            class="h-auto w-[104px] sm:w-[120px]"
          />
        </a>

        <nav
          id="main-nav"
          class="relative hidden items-center gap-9 max-lg:hidden lg:absolute lg:left-1/2 lg:top-1/2 lg:flex lg:-translate-x-1/2 lg:-translate-y-1/2"
          aria-label="Navigasi utama"
        >
          ${desktopLink(homeHref, "Home", !isProduk)}
          ${desktopLink("/produk.html", "Produk", isProduk)}
          ${desktopLink(kebaikanHref, "Kebaikan", false)}
          ${desktopLink(tentangHref, "Tentang Kami", false)}
          <span class="nav-underline" aria-hidden="true"></span>
        </nav>

        <div class="flex items-center gap-2 sm:gap-3">
          <button
            id="menu-toggle"
            type="button"
            class="grid h-11 w-11 place-items-center rounded-full text-sun-pine transition hover:bg-white/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-pine lg:hidden"
            aria-label="Buka menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg
              class="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.4"
              stroke-linecap="round"
              aria-hidden="true"
            >
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile menu -->
      <div
        id="mobile-menu"
        class="mx-4 hidden rounded-2xl bg-sun-pine p-3 shadow-xl shadow-sun-pine/40 lg:hidden"
      >
        <nav class="flex flex-col text-white" aria-label="Navigasi mudah alih">
          ${mobileLink(homeHref, "Home", !isProduk)}
          ${mobileLink("/produk.html", "Produk", isProduk)}
          ${mobileLink(kebaikanHref, "Kebaikan", false)}
          ${mobileLink(tentangHref, "Tentang Kami", false)}
        </nav>
      </div>`;
}

/* ---------- mobile menu ---------- */

const toggle = document.querySelector<HTMLButtonElement>("#menu-toggle");
const menu = document.querySelector("#mobile-menu");

function setMenu(open: boolean) {
  menu?.classList.toggle("hidden", !open);
  toggle?.setAttribute("aria-expanded", String(open));
  toggle?.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
}

toggle?.addEventListener("click", () => {
  const willOpen = menu?.classList.contains("hidden") ?? false;
  setMenu(willOpen);
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenu(false);
});

/* ---------- desktop nav: sliding underline ----------
   Glides to the hovered/focused link, returns to the last active item on
   leave; .nav-enhanced swaps the static aria-current fallback for it. */

const nav = document.querySelector<HTMLElement>("#main-nav");
const underline = nav?.querySelector<HTMLElement>(".nav-underline");
let activeLink = nav?.querySelector<HTMLAnchorElement>('a[aria-current="page"]');

function moveTo(link: HTMLAnchorElement | null | undefined, instant = false) {
  if (!nav || !underline || !link) return;
  if (instant) underline.style.transition = "none";
  underline.style.left = `${link.offsetLeft}px`;
  underline.style.width = `${link.offsetWidth}px`;
  if (instant) {
    void underline.offsetWidth;
    underline.style.transition = "";
  }
}

function setActive(link: HTMLAnchorElement) {
  if (!activeLink || activeLink === link) return;
  activeLink.removeAttribute("aria-current");
  activeLink.classList.replace("font-extrabold", "font-bold");
  activeLink.classList.replace("text-sun-pine", "text-sun-pine/80");
  activeLink = link;
  link.setAttribute("aria-current", "page");
  link.classList.replace("font-bold", "font-extrabold");
  link.classList.replace("text-sun-pine/80", "text-sun-pine");
  moveTo(link);
}

if (nav && underline && activeLink) {
  nav.classList.add("nav-enhanced");
  moveTo(activeLink, true);

  for (const link of nav.querySelectorAll<HTMLAnchorElement>("a")) {
    link.addEventListener("mouseenter", () => moveTo(link));
    link.addEventListener("focus", () => moveTo(link));
    link.addEventListener("click", () => setActive(link));
  }
  nav.addEventListener("mouseleave", () => moveTo(activeLink));
  nav.addEventListener("focusout", () => {
    requestAnimationFrame(() => {
      if (!nav.contains(document.activeElement)) moveTo(activeLink);
    });
  });
  window.addEventListener("resize", () => moveTo(activeLink, true), { passive: true });
  void document.fonts?.ready.then(() => moveTo(activeLink, true));
}
