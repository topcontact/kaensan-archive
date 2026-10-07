import { ARCHIVE_DATA } from '../data.js';
import { renderFooter } from './footer.js';

/**
 * Works Catalogue / Overview Screen
 * Single Column (1-Col) Monolithic Presentation across all viewports
 * Minimal Curatorial Spec Card matching museum catalogue standards:
 * - 16:9 Cinema Viewport with Year Stamp [ 2023 ]
 * - Title & Medium Subtitle
 * - Architectural Divider
 * - Right-aligned [ DETAIL → ] Action
 */
export function renderWorksCatalogue(cardSlideIndices = {}) {
  const allWorks = ARCHIVE_DATA.works;

  return `
    <div class="min-h-screen bg-black text-[#F0F0F0] selection:bg-white selection:text-black select-none flex flex-col justify-between">
      
      <!-- Institutional Top Navigation Bar -->
      <nav class="sticky top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#222222] h-18 lg:h-20 flex justify-between items-center px-4 sm:px-8 lg:px-12 z-40 shrink-0">
        <!-- Left: Brand -->
        <button id="works-nav-home" class="group flex items-center text-sm font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer">
          <span class="text-2xl sm:text-3xl font-black font-brand tracking-tighter uppercase text-white group-hover:opacity-85 transition-opacity">
            KAENSAN
          </span>
        </button>

        <!-- Right: Global Nav (WORK, ABOUT, CONTACT) -->
        <div class="hidden sm:flex items-center gap-8 lg:gap-10 text-sm font-mono tracking-widest uppercase text-neutral-400">
          <button id="works-link-work" class="text-white hover:text-white transition-colors cursor-pointer border-b border-white pb-0.5 font-bold">
            WORK
          </button>
          <button id="works-link-about" class="hover:text-white transition-colors cursor-pointer">
            ABOUT
          </button>
          <button id="works-link-contact" class="hover:text-white transition-colors cursor-pointer">
            CONTACT
          </button>
        </div>

        <!-- Right: Mobile Menu Toggle Button (2-line SVG) -->
        <div class="flex items-center gap-2 sm:hidden">
          <button id="works-mobile-menu" class="p-2 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer bg-[#0d0d0d]" aria-label="Open Navigation Menu">
            <svg class="w-5 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor">
              <line x1="0" y1="2" x2="20" y2="2" stroke-width="1.75" />
              <line x1="0" y1="10" x2="20" y2="10" stroke-width="1.75" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Clean Architectural Header (Work + Year range + Count) -->
      <header class="w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-14 pb-6 border-b border-[#222222]">
        <div class="flex items-baseline justify-between gap-4">
          <div>
            <h1 class="text-4xl sm:text-6xl md:text-7xl font-black font-brand uppercase tracking-tighter text-white">
              WORK
            </h1>
          </div>

          <div class="text-right font-mono text-sm sm:text-base text-neutral-400 tracking-widest">
            <span class="text-neutral-500">2011 — 2023</span>
            <span class="text-neutral-700 mx-2">/</span>
            <span class="text-white font-bold">[ ${allWorks.length.toString().padStart(2, '0')} ]</span>
          </div>
        </div>
      </header>

      <!-- Main Works Container (Strictly 1 Column across all screen sizes) -->
      <main class="w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 flex flex-col gap-10 sm:gap-14 lg:gap-16 flex-1">
        ${renderSingleColumnWorks(allWorks, cardSlideIndices)}
      </main>

      <!-- Institutional Footer (Clean, matching Home Screen) -->
      ${renderFooter({ extraClass: 'mt-16' })}
    </div>
  `;
}

/**
 * 1-Column Work Cards List
 * Strictly 1 work per row regardless of viewport width
 */
function renderSingleColumnWorks(works, cardSlideIndices) {
  return works.map((work) => {
    const hasMultipleImages = Array.isArray(work.images) && work.images.length > 1;
    const currentIdx = cardSlideIndices[work.id] || 0;
    const activeImageObj = hasMultipleImages ? work.images[currentIdx] : null;
    const activeImageUrl = activeImageObj ? (typeof activeImageObj === 'string' ? activeImageObj : activeImageObj.url) : work.image;
    const activeImageAlt = activeImageObj ? (activeImageObj.alt || work.imageAlt) : work.imageAlt;

    return `
      <article 
        class="work-card group cursor-pointer border border-[#222222] hover:border-neutral-500 bg-[#070707] transition-all duration-500 flex flex-col overflow-hidden shadow-2xl"
        data-work-id="${work.id}"
      >
        <!-- 1. Cinema Viewport (16:9 Widescreen) -->
        <div 
          class="relative w-full aspect-[16/9] bg-black overflow-hidden border-b border-[#222222] ${hasMultipleImages ? 'card-carousel-surface' : ''}"
          data-work-id="${work.id}"
        >
          <img 
            id="card-img-${work.id}"
            src="${activeImageUrl}" 
            alt="${activeImageAlt}" 
            class="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.015]"
            loading="lazy"
          />

          <!-- Top-Left Badge: ONLY year in a border box -->
          <div class="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 border border-[#333333] bg-black/85 backdrop-blur-md px-2.5 py-1 text-sm font-mono tracking-widest text-neutral-200 pointer-events-none z-10">
            ${work.year}
          </div>

          ${renderCarouselControls(work, hasMultipleImages, currentIdx)}
        </div>

        <!-- 2. Minimal Curatorial Caption -->
        <div class="p-6 sm:p-8 bg-[#090909] flex flex-col">
          <div>
            <h2 class="text-2xl sm:text-3xl font-black font-brand uppercase tracking-tight text-white group-hover:text-neutral-200 transition-colors leading-tight mb-2">
              ${work.title}
            </h2>
            <p class="text-sm font-mono text-neutral-400 uppercase tracking-wider leading-relaxed">
              ${work.subtitle || work.medium}
            </p>
          </div>

          <!-- Horizontal Divider Line -->
          <div class="w-full border-t border-[#1e1e1e] mt-6 mb-4"></div>

          <!-- Bottom Action Row: Right-aligned [ DETAIL → ] -->
          <div class="flex items-center justify-end font-mono text-sm">
            <div class="text-white font-bold group-hover:translate-x-1.5 transition-transform inline-flex items-center gap-1.5 tracking-widest">
              <span>[ DETAIL</span>
              <span>→ ]</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Reusable carousel arrow controls & dot indicators for works with multiple photos
 */
function renderCarouselControls(work, hasMultipleImages, currentIdx) {
  if (!hasMultipleImages) return '';

  return `
    <!-- Interactive Arrow Controls -->
    <div class="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none z-30">
      <button 
        class="card-carousel-btn pointer-events-auto w-8 h-10 sm:w-9 sm:h-11 flex items-center justify-center bg-black/85 hover:bg-white hover:text-black text-white border border-white/30 backdrop-blur transition-all duration-200 cursor-pointer text-xl font-mono shadow-xl select-none"
        data-action="prev"
        data-work-id="${work.id}"
        aria-label="Previous image"
      >
        ‹
      </button>
      <button 
        class="card-carousel-btn pointer-events-auto w-8 h-10 sm:w-9 sm:h-11 flex items-center justify-center bg-black/85 hover:bg-white hover:text-black text-white border border-white/30 backdrop-blur transition-all duration-200 cursor-pointer text-xl font-mono shadow-xl select-none"
        data-action="next"
        data-work-id="${work.id}"
        aria-label="Next image"
      >
        ›
      </button>
    </div>

    <!-- Bottom Dash Indicators (Clickable) -->
    <div class="absolute bottom-3 inset-x-0 flex justify-center items-center gap-2 z-30 pointer-events-none">
      ${work.images.map((_, i) => `
        <button 
          class="card-dash-indicator pointer-events-auto p-1 cursor-pointer focus:outline-none"
          data-work-id="${work.id}"
          data-slide-index="${i}"
          aria-label="Jump to photo ${i + 1}"
        >
          <span class="card-dash-${work.id} block h-[3px] ${i === currentIdx ? 'w-6 bg-white shadow-glow' : 'w-2.5 bg-neutral-600 hover:bg-neutral-400'} transition-all duration-300 rounded-full"></span>
        </button>
      `).join('')}
    </div>
  `;
}
