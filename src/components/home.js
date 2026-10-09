import { ARCHIVE_DATA, getWorkById } from '../data.js';
import { renderFooter } from './footer.js';

/**
 * KAENSAN — Official Home Screen (Minimalist Floating Monolith)
 * Designed for pure gallery minimalism across all responsive breakpoints:
 * - Minimal Header: KAENSAN (left) | WORK, ABOUT, CONTACT (right)
 * - Pure 16:9 floating art canvas with color reveal on hover & multi-photo slideshow
 * - Curatorial caption: Title, Subtitle, Venue (direct link to Work Dossier)
 * - Clean Footer: BANGKOK, TH (left) | INSTAGRAM, EMAIL, © 2024 KAENSAN (right)
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
 * Option B: Single Iconic Hero Key Visual (Zero Slideshow on Home Screen)
 * Clicking the image or caption leads directly to the Work Dossier Detail Page
 */
function renderHeroMonolith(exhibition, isMobile) {
  const targetWorkId = exhibition.id || 'heavy-metal-2023';
  const work = getWorkById(targetWorkId);

  // Single Iconic Hero Image
  const heroUrl = exhibition.heroImage || (work && (work.image || work.plate)) || '/assets/works/heavy_metal/heavy_metal_main.png';
  const heroAlt = exhibition.heroAlt || exhibition.title || 'Featured Work';

  if (isMobile) {
    return `
      <!-- Mobile View: Pure Minimal Monolith (Zero Clutter, Single Hero Frame) -->
      <main class="w-full flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-5 sm:py-6 my-auto">
        <!-- Strict 16:9 Floating Art Canvas (Click goes to detail) -->
        <div 
          class="w-full aspect-[16/9] border border-white/20 bg-black overflow-hidden relative shadow-[0_15px_35px_-10px_rgba(255,255,255,0.08)] group cursor-pointer" 
          id="monolith-hero-box"
          data-work-id="${targetWorkId}"
        >
          <!-- Color reveal on touch/hover: Default grayscale, reveals full color on hover/touch -->
          <img 
            id="home-hero-img"
            src="${heroUrl}" 
            alt="${heroAlt}" 
            class="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <!-- Curatorial Caption Block Beneath Image (Click links to Work Detail) -->
        <div class="w-full mt-5 flex flex-col gap-3">
          <div id="monolith-caption-box" class="cursor-pointer group/caption" data-work-id="${targetWorkId}">
            <div class="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1 flex items-center justify-between">
              <span>${(exhibition.exhibitionStatus || 'RECENT EXHIBITION').trim()}</span>
              <span class="text-xs text-neutral-400 group-hover/caption:text-white transition-colors font-mono">[ VIEW DETAILS → ]</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-black font-brand uppercase tracking-tight text-white group-hover/caption:text-neutral-300 transition-colors leading-tight mb-1">
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
          <button 
            id="mobile-cta-explore" 
            class="w-full py-3.5 bg-white text-black text-sm uppercase font-mono font-bold tracking-widest hover:bg-neutral-200 transition-colors cursor-pointer text-center shadow-lg mt-2"
            data-work-id="${targetWorkId}"
          >
            [ EXPLORE PROJECT ARCHIVE → ]
          </button>
        </div>
      </main>
    `;
  }

  // Desktop / Tablet View: Pure 16:9 Monolith (Single Iconic Frame)
  return `
    <main class="w-full flex-1 flex flex-col justify-center items-center px-6 sm:px-10 lg:px-14 py-4 sm:py-6 lg:py-8 my-auto">
      <!-- Strict 16:9 Floating Canvas (100% Pure Clean: Absolutely Zero Badges, Buttons, or Overlays on Image) -->
      <div 
        class="w-full max-w-4xl xl:max-w-5xl aspect-[16/9] max-h-[50vh] border border-white/20 bg-black overflow-hidden relative shadow-[0_25px_60px_-15px_rgba(255,255,255,0.07)] group cursor-pointer transition-all duration-700 hover:border-white/50" 
        id="monolith-hero-box"
        data-work-id="${targetWorkId}"
      >
        <!-- Color reveal on mouse hover: default monochrome filter, hover reveals full authentic color -->
        <img 
          id="home-hero-img"
          src="${heroUrl}" 
          alt="${heroAlt}" 
          class="w-full h-full object-cover object-center filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out group-hover:scale-[1.015]"
        />
      </div>

      <!-- Curatorial Caption Row Beneath Image (Click links to Detail) -->
      <div class="w-full max-w-4xl xl:max-w-5xl mt-6 lg:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 font-mono text-sm">
        <!-- Left Column: Kicker, Headline, Subhead, Venue (Interactive Link) -->
        <div 
          id="monolith-caption-box" 
          class="min-w-0 flex-1 cursor-pointer group/caption" 
          data-work-id="${targetWorkId}"
        >
          <div class="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2 flex items-center justify-between sm:justify-start sm:gap-4">
            <span>${(exhibition.exhibitionStatus || 'RECENT EXHIBITION').trim()}</span>
            <span class="text-xs text-neutral-400 group-hover/caption:text-white transition-colors font-mono">[ VIEW DETAILS → ]</span>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black font-brand uppercase tracking-tighter text-white group-hover/caption:text-neutral-300 transition-colors leading-tight mb-2">
            ${exhibition.title}
          </h1>
          <p class="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed mb-1.5 group-hover/caption:text-white transition-colors">
            ${exhibition.subtitle}
          </p>
          <p class="text-sm font-mono text-neutral-400 uppercase tracking-wider">
            ${exhibition.venue}
          </p>
        </div>

        <!-- Right Column: Explore CTA Button -->
        <div class="shrink-0 pt-2 md:pt-0">
          <button 
            id="cta-explore-archive" 
            class="px-8 py-4 bg-white text-black hover:bg-neutral-200 uppercase font-mono text-sm font-bold tracking-widest transition-all cursor-pointer inline-flex items-center gap-2 group shadow-xl whitespace-nowrap"
            data-work-id="${targetWorkId}"
          >
            <span>[ EXPLORE PROJECT ARCHIVE</span>
            <span class="group-hover:translate-x-1.5 transition-transform">→ ]</span>
          </button>
        </div>
      </div>
    </main>
  `;
}
