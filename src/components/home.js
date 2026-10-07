import { ARCHIVE_DATA } from '../data.js';
import { renderFooter } from './footer.js';

/**
 * KAENSAN — Official Home Screen (Minimalist Floating Monolith)
 * Designed for pure gallery minimalism across all responsive breakpoints:
 * - Minimal Header: KAENSAN (left) | WORK, ABOUT, CONTACT (right)
 * - Pure 16:9 floating art canvas without any badges or overlays
 * - Curatorial caption: Title, Subtitle, Venue, and [ EXPLORE PROJECT ARCHIVE → ]
 * - Clean Footer: BANGKOK, TH (left) | INSTAGRAM, EMAIL, © 2024 KAENSAN (right)
 * - Zero format switchers, zero clocks/tickers
 */

export function renderHomeScreenDesktop() {
  const exhibition = ARCHIVE_DATA.currentExhibition;
  return `
    <div class="min-h-screen w-full bg-black text-[#F0F0F0] selection:bg-white selection:text-black select-none flex flex-col justify-between overflow-x-hidden">
      ${renderInstitutionalNavbar(false)}
      
      <div class="flex-1 flex flex-col justify-between">
        ${renderHeroMonolith(exhibition, false)}
      </div>

      ${renderFooter({ containerClass: 'w-full max-w-7xl mx-auto' })}
    </div>
  `;
}

export function renderHomeScreenMobile() {
  const exhibition = ARCHIVE_DATA.currentExhibition;
  return `
    <div class="min-h-screen w-full bg-black text-[#F0F0F0] selection:bg-white selection:text-black select-none flex flex-col justify-between overflow-x-hidden">
      ${renderInstitutionalNavbar(true)}
      
      <div class="flex-1 flex flex-col justify-between">
        ${renderHeroMonolith(exhibition, true)}
      </div>

      ${renderFooter()}
    </div>
  `;
}

/**
 * Institutional Top Navigation Bar
 * Left: KAENSAN
 * Right: WORK, ABOUT, CONTACT (Desktop) | WORK, Menu (Mobile)
 */
function renderInstitutionalNavbar(isMobile) {
  if (isMobile) {
    return `
      <!-- Mobile Navigation Bar -->
      <nav class="sticky top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#222222] h-16 flex justify-between items-center px-4 sm:px-6 z-40 shrink-0">
        <!-- Brand -->
        <button id="mobile-nav-brand" class="text-xl font-black font-brand tracking-tighter uppercase text-white hover:opacity-85 transition-opacity cursor-pointer">
          KAENSAN
        </button>

        <!-- Right Quick Actions -->
        <div class="flex items-center gap-3">
          <button id="nav-btn-work" class="text-sm font-mono tracking-widest uppercase text-neutral-200 hover:text-white transition-colors cursor-pointer px-3 py-1 border border-neutral-800 bg-[#0d0d0d]">
            WORK
          </button>
          <!-- 2-line minimal hamburger button -->
          <button id="mobile-menu-toggle" class="p-2 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer bg-[#0d0d0d]" aria-label="Open Navigation Menu">
            <svg class="w-5 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor">
              <line x1="0" y1="2" x2="20" y2="2" stroke-width="1.75" />
              <line x1="0" y1="10" x2="20" y2="10" stroke-width="1.75" />
            </svg>
          </button>
        </div>
      </nav>
    `;
  }

  return `
    <!-- Desktop Navigation Bar -->
    <nav class="sticky top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#222222] h-18 lg:h-20 flex justify-between items-center px-6 sm:px-8 lg:px-12 z-40 shrink-0">
      <!-- Left: Brand -->
      <div class="flex items-center">
        <button id="nav-brand-home" class="group flex items-center text-sm font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer">
          <span class="text-2xl sm:text-3xl font-black font-brand tracking-tighter uppercase text-white group-hover:opacity-85 transition-opacity">
            KAENSAN
          </span>
        </button>
      </div>

      <!-- Right: Global Nav (WORK, ABOUT, CONTACT) -->
      <div class="hidden sm:flex items-center gap-8 lg:gap-10 text-sm font-mono tracking-widest uppercase text-neutral-400">
        <button id="nav-btn-work" class="text-white hover:text-white transition-colors cursor-pointer border-b border-white pb-0.5 font-bold">
          WORK
        </button>
        <button id="nav-btn-about" class="hover:text-white transition-colors cursor-pointer">
          ABOUT
        </button>
        <button id="nav-btn-contact" class="hover:text-white transition-colors cursor-pointer">
          CONTACT
        </button>
      </div>

      <!-- Fallback Hamburger for small tablet -->
      <div class="flex items-center gap-2 sm:hidden">
        <button id="mobile-menu-toggle" class="p-2 text-neutral-300 hover:text-white border border-neutral-800" aria-label="Open Navigation Menu">
          <svg class="w-5 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor">
            <line x1="0" y1="2" x2="20" y2="2" stroke-width="1.75" />
            <line x1="0" y1="10" x2="20" y2="10" stroke-width="1.75" />
          </svg>
        </button>
      </div>
    </nav>
  `;
}


/**
 * Pure 16:9 Floating Monolith Hero Canvas & Curatorial Caption
 * Apple.com Hierarchy: Kicker -> Headline (H1) -> Subhead -> Specs -> CTA
 */
function renderHeroMonolith(exhibition, isMobile) {
  if (isMobile) {
    return `
      <!-- Mobile View: Pure 16:9 Monolith -->
      <main class="w-full flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-5 sm:py-6 my-auto">
        <!-- Strict 16:9 Floating Art Canvas -->
        <div class="w-full aspect-[16/9] border border-white/20 bg-black overflow-hidden relative shadow-[0_15px_35px_-10px_rgba(255,255,255,0.08)] group cursor-pointer" id="monolith-hero-box">
          <img 
            src="${exhibition.heroImage}" 
            alt="${exhibition.heroAlt}" 
            class="w-full h-full object-cover object-center filter grayscale contrast-125 transition-all duration-700 group-hover:scale-[1.02]"
          />
        </div>

        <!-- Curatorial Caption Block Beneath Image (Apple Typographic Rhythm) -->
        <div class="w-full mt-5 flex flex-col gap-3">
          <div>
            <div class="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1">
              FEATURED EXHIBITION // 2023
            </div>
            <h1 class="text-2xl sm:text-3xl font-black font-brand uppercase tracking-tight text-white leading-tight mb-1">
              ${exhibition.title}
            </h1>
            <p class="text-base text-neutral-300 font-sans leading-snug mb-1">
              ${exhibition.subtitle}
            </p>
            <p class="text-sm font-mono text-neutral-500 uppercase tracking-wider">
              ${exhibition.venue}
            </p>
          </div>

          <!-- Touch-friendly Full-Width Action Button -->
          <button id="mobile-cta-explore" class="w-full py-3.5 bg-white text-black text-sm uppercase font-mono font-bold tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer text-center shadow-lg mt-2">
            [ EXPLORE PROJECT ARCHIVE → ]
          </button>
        </div>
      </main>
    `;
  }

  // Desktop / Tablet View: Pure 16:9 Monolith
  return `
    <main class="w-full flex-1 flex flex-col justify-center items-center px-6 sm:px-10 lg:px-14 py-4 sm:py-6 lg:py-8 my-auto">
      <!-- Strict 16:9 Floating Canvas with Height Adaptability -->
      <div 
        class="w-full max-w-4xl xl:max-w-5xl aspect-[16/9] max-h-[50vh] border border-white/20 bg-black overflow-hidden relative shadow-[0_25px_60px_-15px_rgba(255,255,255,0.07)] group cursor-pointer transition-all duration-700 hover:border-white/50" 
        id="monolith-hero-box"
      >
        <img 
          src="${exhibition.heroImage}" 
          alt="${exhibition.heroAlt}" 
          class="w-full h-full object-cover object-center filter grayscale contrast-125 transition-all duration-1000 ease-out group-hover:scale-[1.018]"
        />

        <!-- Subtle hover overlay without text badges -->
        <div class="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>

      <!-- Curatorial Caption Row Beneath Image (Apple Typographic Rhythm) -->
      <div class="w-full max-w-4xl xl:max-w-5xl mt-6 lg:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 font-mono text-sm">
        <!-- Left Column: Kicker, Headline, Subhead, Venue -->
        <div class="min-w-0 flex-1">
          <div class="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
            FEATURED EXHIBITION // 2023
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black font-brand uppercase tracking-tighter text-white leading-tight mb-2">
            ${exhibition.title}
          </h1>
          <p class="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed mb-1.5">
            ${exhibition.subtitle}
          </p>
          <p class="text-sm font-mono text-neutral-400 uppercase tracking-wider">
            ${exhibition.venue}
          </p>
        </div>

        <!-- Right Column: Explore CTA Button -->
        <div class="shrink-0 pt-2 md:pt-0">
          <button id="cta-explore-archive" class="px-8 py-4 bg-white text-black hover:bg-neutral-200 uppercase font-mono text-sm font-bold tracking-widest transition-all cursor-pointer inline-flex items-center gap-2 group shadow-xl whitespace-nowrap">
            <span>[ EXPLORE PROJECT ARCHIVE</span>
            <span class="group-hover:translate-x-1.5 transition-transform">→ ]</span>
          </button>
        </div>
      </div>
    </main>
  `;
}
