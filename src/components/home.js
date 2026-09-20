import { ARCHIVE_DATA } from '../data.js';

/**
 * Screen 8: Home Desktop (Framed Layout)
 * Matches the exact museum-grade minimal architectural specification from the user mockup:
 * - Full viewport framed layout (100vh, overflow: hidden, zero page scrollbar)
 * - Outer padded container with 1px architectural perimeter border
 * - Header: Bold KAENSAN wordmark (left) + ARCHIVE, EXHIBITIONS, ABOUT, CONTACT (right)
 * - Hero Media: Edge-to-edge full width/height within the framed space for massive visual impact
 * - Bottom Meta Bar:
 *   - Left: ECHO — 2026 + EXHIBITION: ART CENTRE SILPAKORN UNIVERSITY (WANG THAPRA), BANGKOK
 *   - Center: [ EXPLORE PROJECT ARCHIVE → ]
 *   - Right (with vertical divider line): © 2026 KAENSAN ARCHIVE + INSTAGRAM / VIMEO
 */
export function renderHomeScreenDesktop() {
  const exhibition = ARCHIVE_DATA.currentExhibition;

  return `
    <div class="w-screen h-screen p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center overflow-hidden bg-black text-[#F0F0F0] select-none box-border">
      <!-- Framed Perimeter Container -->
      <div class="w-full h-full border border-[#222222] flex flex-col justify-between bg-black overflow-hidden relative">
        
        <!-- Top Institutional Header -->
        <header class="w-full h-16 md:h-20 border-b border-[#222222] flex justify-between items-center px-6 md:px-10 shrink-0 z-10 bg-black">
          <button id="nav-brand-home" class="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter uppercase font-brand text-white hover:opacity-85 transition-opacity">
            KAENSAN
          </button>

          <nav class="flex items-center gap-8 md:gap-12 text-xs md:text-[13px] font-mono tracking-widest uppercase text-neutral-300">
            <button id="nav-btn-work" class="hover:text-white transition-colors">
              WORK
            </button>
            <button id="nav-btn-about" class="hover:text-white transition-colors">
              ABOUT
            </button>
            <button id="nav-btn-contact" class="hover:text-white transition-colors">
              CONTACT
            </button>
          </nav>
        </header>

        <!-- Center Hero Media (Massive Edge-to-Edge Architectural Projection) -->
        <main class="flex-1 w-full min-h-0 relative overflow-hidden bg-black flex items-center justify-center">
          <img 
            id="home-hero-image"
            src="${exhibition.heroImage}" 
            alt="${exhibition.heroAlt}" 
            class="w-full h-full object-cover object-center filter grayscale contrast-125 transition-transform duration-1000 ease-out hover:scale-[1.01]"
          />
        </main>

        <!-- Bottom Meta Bar -->
        <footer class="w-full border-t border-[#222222] shrink-0 z-10 bg-black">
          <!-- Mobile: stacked layout -->
          <div class="flex md:hidden flex-col gap-2 px-4 py-3">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-base font-bold tracking-tight text-white font-brand uppercase leading-tight">
                  ${exhibition.title}
                </h2>
                <p class="text-[10px] text-neutral-400 tracking-wider uppercase font-mono mt-0.5">
                  ${exhibition.venue}
                </p>
              </div>
              <div class="text-[10px] font-mono text-neutral-500 text-right shrink-0 ml-3">
                © 2024 KAENSAN
              </div>
            </div>
            <button id="cta-explore-archive-mobile" class="w-full py-2 text-[11px] font-mono tracking-widest text-black bg-white hover:bg-neutral-200 uppercase transition-all cursor-pointer font-bold">
              [ EXPLORE PROJECT ARCHIVE → ]
            </button>
          </div>

          <!-- Desktop: three-column layout -->
          <div class="hidden md:flex h-24 justify-between items-center px-10">
            <!-- Left: Title & Venue -->
            <div class="flex flex-col justify-center">
              <h2 class="text-2xl font-bold tracking-tight text-white font-brand uppercase leading-tight mb-1">
                ${exhibition.title}
              </h2>
              <p class="text-xs text-neutral-300 tracking-wider uppercase font-mono">
                ${exhibition.venue}
              </p>
            </div>

            <!-- Center: CTA Action Link -->
            <div class="flex items-center justify-center">
              <button id="cta-explore-archive" class="text-sm font-mono tracking-widest text-white hover:text-neutral-300 uppercase transition-all py-2 cursor-pointer inline-flex items-center gap-1 group">
                <span>[ EXPLORE PROJECT ARCHIVE</span>
                <span class="group-hover:translate-x-1 transition-transform">→ ]</span>
              </button>
            </div>

            <!-- Right: Vertical Divider + Copyright & Socials -->
            <div class="border-l border-[#222222] pl-10 text-right flex flex-col justify-center">
              <div class="text-[13px] font-bold uppercase tracking-wider text-white font-mono mb-1">
                © 2024 KAENSAN ARCHIVE
              </div>
              <div class="flex items-center justify-end gap-8 text-xs tracking-widest uppercase text-neutral-400 font-mono">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">
                  INSTAGRAM
                </a>
                <a href="https://vimeo.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">
                  VIMEO
                </a>
              </div>
            </div>
          </div>
        </footer>

      </div>
    </div>
  `;
}

/**
 * Screen 9: Home Mobile
 * Full height portrait (h-screen / min-h-screen, flex flex-col justify-between p-6)
 */
export function renderHomeScreenMobile() {
  const exhibition = ARCHIVE_DATA.currentExhibition;

  return `
    <div class="h-screen max-h-screen p-4 sm:p-5 flex flex-col justify-between bg-black text-[#F0F0F0] relative select-none box-border overflow-hidden">
      <!-- Framed Perimeter for Mobile -->
      <div class="w-full h-full border border-[#222222] flex flex-col justify-between bg-black overflow-hidden">
        
        <!-- Mobile Header -->
        <header class="w-full h-14 border-b border-[#222222] flex justify-between items-center px-4 shrink-0 bg-black">
          <button id="mobile-nav-brand" class="text-xl font-black tracking-tighter uppercase font-brand text-white">
            KAENSAN
          </button>

          <div class="flex items-center gap-3">
            <!-- Minimal Hamburger Icon (2-line SVG) -->
            <button id="mobile-menu-toggle" class="p-2 text-neutral-300 hover:text-white transition-colors" aria-label="Menu">
              <svg class="w-5 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor">
                <line x1="0" y1="2" x2="20" y2="2" stroke-width="1.75" />
                <line x1="0" y1="10" x2="20" y2="10" stroke-width="1.75" />
              </svg>
            </button>
          </div>
        </header>

        <!-- Centered Framed Art Piece -->
        <div class="flex-1 w-full min-h-0 relative overflow-hidden bg-black flex items-center justify-center">
          <img 
            src="${exhibition.heroImage}" 
            alt="${exhibition.heroAlt}" 
            class="w-full h-full object-cover object-center filter grayscale contrast-125"
          />
        </div>

        <!-- Mobile Bottom Content -->
        <div class="border-t border-[#222222] p-4 flex flex-col gap-3 font-mono text-xs bg-black shrink-0">
          <div>
            <h2 class="text-white text-base font-bold tracking-tight font-brand uppercase">
              ${exhibition.title}
            </h2>
            <p class="text-neutral-400 text-[10px] uppercase tracking-wider mt-0.5 leading-snug">
              ${exhibition.venue}
            </p>
          </div>

          <!-- Mobile CTA -->
          <button id="mobile-cta-explore" class="w-full py-2.5 text-center text-xs uppercase font-bold tracking-widest bg-white text-black hover:bg-neutral-200 transition-colors">
            [ EXPLORE PROJECT ARCHIVE → ]
          </button>

          <!-- Location & Live Time -->
          <div class="flex justify-between items-center text-[10px] text-neutral-500 pt-1 border-t border-neutral-900">
            <span class="text-neutral-400 tracking-widest">BANGKOK, TH</span>
            <div class="flex items-center gap-1.5 text-neutral-300 font-semibold">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span id="mobile-live-time">02:41:00 AM</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}
