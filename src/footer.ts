/* Shared site footer — rendered into <footer id="site-footer"> on every page. */

const isProduk = location.pathname.endsWith("produk.html");

const linkClass = "transition hover:text-white";
const currentClass = "text-white";
const defaultClass = "text-white/85";

function pageLink(href: string, label: string, active: boolean): string {
  return `<li><a href="${href}" class="${active ? currentClass : defaultClass} ${linkClass}">${label}</a></li>`;
}

const footer = document.querySelector<HTMLElement>("#site-footer");
if (footer) {
  footer.className = "relative bg-sun-pine pb-10 pt-14 text-white sm:pt-16";
  footer.innerHTML = `
      <!-- curved pine wave bridging from the page above into the footer -->
      <svg
        class="pointer-events-none absolute inset-x-0 bottom-full h-[56px] w-full translate-y-[1px]"
        viewBox="0 0 1000 56"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 34 C120 12 260 44 400 28 C540 12 700 42 830 26 C900 18 960 24 1000 20 L1000 56 L0 56 Z"
          fill="#0f5a2b"
        />
      </svg>
      <div
        class="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 md:grid-cols-[1.1fr_0.6fr_1.3fr]"
      >
        <div>
          <div
            class="inline-block -rotate-3 rounded-2xl bg-sun-cream p-3 shadow-lg shadow-[#073a1c]/50"
          >
            <img
              src="/sunlicious-logo.svg"
              alt="SunLicious — Minuman Pilihan Malaysia"
              width="610"
              height="345"
              class="h-auto w-[170px]"
            />
          </div>
          <p class="mt-5 -rotate-2 font-hand text-3xl font-bold text-sun-juice">
            Minuman segar dari Malaysia
          </p>
          <p class="mt-3 max-w-[46ch] text-[14px] font-bold leading-relaxed text-white/80">
            Pengeluar minuman 100% jus buah tropika berpangkalan di Johor. Kami memproses pelbagai
            produk di kilang sendiri yang bertaraf pensijilan antarabangsa, mengutamakan kebersihan
            pengeluaran dan keselamatan produk.
          </p>
          <div class="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/rasasuria.my"
              class="grid h-10 w-10 place-items-center rounded-full border-[1.5px] border-white/30 text-white/85 transition hover:border-white/60 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-juice"
              aria-label="Rasa Suria di Instagram"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/rasasuria.my"
              class="grid h-10 w-10 place-items-center rounded-full border-[1.5px] border-white/30 text-white/85 transition hover:border-white/60 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sun-juice"
              aria-label="Rasa Suria di Facebook"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M13.4 21.5 v-7.6 h2.5 l.5 -3.2 h-3 V8.6 c0 -.9 .4 -1.6 1.7 -1.6 h1.4 V4.2 c-.6 -.1 -1.4 -.2 -2.3 -.2 -2.3 0 -3.8 1.4 -3.8 4 v2.7 H7.9 v3.2 h2.5 v7.6 Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <nav aria-label="Pautan pengaki">
          <h3 class="text-[13px] font-extrabold uppercase tracking-[0.14em] text-sun-juice">
            Laman
          </h3>
          <ul class="mt-4 space-y-2.5 text-[15px] font-bold" role="list">
            ${pageLink("/index.html", "Home", !isProduk)}
            ${pageLink("/produk.html", "Produk", isProduk)}
            ${pageLink("/index.html#kebaikan", "Kebaikan", false)}
            ${pageLink("/index.html#tentang", "Tentang Kami", false)}
          </ul>
        </nav>

        <div>
          <h3 class="text-[13px] font-extrabold uppercase tracking-[0.14em] text-sun-juice">
            Hubungi Kami
          </h3>
          <address
            class="mt-4 space-y-3 text-[14px] font-bold not-italic leading-relaxed text-white/85"
          >
            <p class="flex gap-2.5">
              <svg
                class="mt-0.5 h-4.5 w-4.5 shrink-0 text-white/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  d="M12 21 C8 16.6 5.5 13.4 5.5 10.2 a6.5 6.5 0 1 1 13 0 C18.5 13.4 16 16.6 12 21 Z"
                />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              <span
                >Rasa Suria Sdn. Bhd., No. 22, Jalan Pasir Gudang, Kawasan Perindustrian Pasir
                Gudang, 81700 Pasir Gudang, Johor Darul Ta&rsquo;zim, Malaysia</span
              >
            </p>
            <p class="flex gap-2.5">
              <svg
                class="mt-0.5 h-4.5 w-4.5 shrink-0 text-white/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path
                  d="M5 4 h4 l1.5 4.5 -2.2 1.6 a12.5 12.5 0 0 0 5.6 5.6 l1.6 -2.2 L20 15 v4 a1.8 1.8 0 0 1 -2 1.8 C10.6 20.2 3.8 13.4 3.2 6 a1.8 1.8 0 0 1 1.8 -2 Z"
                />
              </svg>
              <a href="tel:+6072514328" class="transition hover:text-white">+607-251 4328</a>
            </p>
            <p class="flex gap-2.5">
              <svg
                class="mt-0.5 h-4.5 w-4.5 shrink-0 text-white/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
                <path d="M4.5 7.5 L12 13 L19.5 7.5" />
              </svg>
              <a href="mailto:hello@rasasuria.com.my" class="transition hover:text-white"
                >hello@rasasuria.com.my</a
              >
            </p>
            <p class="flex gap-2.5">
              <svg
                class="mt-0.5 h-4.5 w-4.5 shrink-0 text-white/70"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="8.5" />
                <path d="M12 7.5 V12 L15 14" />
              </svg>
              <span
                >Isnin&ndash;Jumaat: 8:30 pagi &ndash; 5:30 petang &middot; Sabtu: 8:30 pagi &ndash;
                1:00 petang</span
              >
            </p>
          </address>
        </div>
      </div>

      <div
        class="mx-auto mt-12 flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-white/15 px-5 pt-6 text-[12.5px] font-bold text-white/70 sm:px-8"
      >
        <p>&copy; 2026 Rasa Suria Sdn. Bhd. &middot; Hak cipta terpelihara.</p>
        <p>No. Syarikat 200701029884 (1028473-D)</p>
        <p class="text-sun-juice">Halal JAKIM &middot; MeSTI &middot; HACCP &middot; GMP</p>
      </div>`;
}
