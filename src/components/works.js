import { ARCHIVE_DATA } from '../data.js';

/**
 * Works Catalogue / Overview Screen
 * Designed strictly according to the user's hierarchy:
 * 1. Image first (High-impact, dominant visual with swipable multi-photo slider support)
 * 2. Work Title second (Bold, architectural uppercase brand typography)
 * 3. Short details third (Concise curatorial summary, venue, year, format/medium)
 */
export function renderWorksCatalogue(cardSlideIndices = {}) {
  const allWorks = ARCHIVE_DATA.works;

  return `
    <div class="min-h-screen bg-black text-[#F0F0F0] selection:bg-white selection:text-black select-none">
      
      <!-- Institutional Top Navigation Bar -->
      <nav class="sticky top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#222222] h-20 flex justify-between items-center px-6 sm:px-8 lg:px-12 z-40">
        <!-- Left: Brand / Return to Home -->
        <div class="flex items-center gap-4">
          <button id="works-nav-home" class="group flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors">
            <span class="group-hover:-translate-x-1 transition-transform">←</span>
            <span class="text-xl font-black font-brand tracking-tighter uppercase text-white">KAENSAN</span>
          </button>
          <span class="text-neutral-700 font-mono text-xs">/</span>
          <span class="text-xs font-mono text-neutral-400 uppercase tracking-widest hidden md:inline">
            WORKS ARCHIVE (2011—2023)
          </span>
        </div>

        <!-- Right: Search & Global Nav -->
        <div class="hidden sm:flex items-center gap-6 sm:gap-8 text-xs font-mono tracking-widest uppercase text-neutral-400">
          <button id="works-link-work" class="text-white border-b border-white pb-0.5">WORK</button>
          <button id="works-link-about" class="hover:text-white transition-colors">ABOUT</button>
          <button id="works-link-contact" class="hover:text-white transition-colors">CONTACT</button>
          <button id="works-search-trigger" class="hover:text-white transition-colors p-1.5 border border-neutral-800 hover:border-neutral-500 flex items-center gap-2 px-2.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span class="text-[10px] text-neutral-500 font-mono">CMD+K</span>
          </button>
        </div>

        <!-- Right: Mobile Menu Toggle Button (2-line SVG) -->
        <div class="flex items-center gap-2 sm:hidden">
          <button id="works-mobile-menu" class="p-2 text-neutral-300 hover:text-white border border-neutral-800" aria-label="Open Navigation Menu">
            <svg class="w-5 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor">
              <line x1="0" y1="2" x2="20" y2="2" stroke-width="1.75" />
              <line x1="0" y1="10" x2="20" y2="10" stroke-width="1.75" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Clean Architectural Header (Work + Year range + Count) -->
      <header class="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-10 pb-5 sm:pb-6 border-b border-[#222222]">
        <div class="flex items-baseline justify-between gap-4">
          <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-brand uppercase tracking-tighter text-white">
            WORK
          </h1>

          <div class="text-right font-mono text-xs sm:text-sm text-neutral-400 tracking-widest">
            <span class="text-neutral-500">2011 — 2023</span>
            <span class="text-neutral-700 mx-2">/</span>
            <span class="text-white font-bold">[ ${allWorks.length.toString().padStart(2, '0')} ]</span>
          </div>
        </div>
      </header>

      <!-- Works Grid (Prioritizing Images First, Title Second, Details Third) -->
      <main class="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          ${allWorks.map(work => {
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
              <!-- 1. PRIORITY 1: DOMINANT HIGH-IMPACT AUTHENTIC IMAGE (SWIPABLE SLIDER SUPPORT) -->
              <div 
                class="relative w-full aspect-[16/10] bg-black overflow-hidden border-b border-[#222222] ${hasMultipleImages ? 'card-carousel-surface' : ''}"
                data-work-id="${work.id}"
              >
                <img 
                  id="card-img-${work.id}"
                  src="${activeImageUrl}" 
                  alt="${activeImageAlt}" 
                  class="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.01]"
                  loading="lazy"
                />

                <!-- Top Left: Year Only Badge -->
                <div class="absolute top-3 left-3 bg-black/85 backdrop-blur-md border border-white/20 px-2.5 py-1 text-[10px] font-mono tracking-widest text-neutral-200 pointer-events-none z-10">
                  <span>${work.year}</span>
                </div>

                ${hasMultipleImages ? `
                  <!-- Interactive Arrow Controls -->
                  <div class="absolute inset-y-0 inset-x-3 flex items-center justify-between pointer-events-none z-30">
                    <button 
                      class="card-carousel-btn pointer-events-auto w-9 h-11 sm:w-10 sm:h-12 flex items-center justify-center bg-black/85 hover:bg-white hover:text-black text-white border border-white/30 backdrop-blur transition-all duration-200 cursor-pointer text-xl font-mono shadow-xl select-none"
                      data-action="prev"
                      data-work-id="${work.id}"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button 
                      class="card-carousel-btn pointer-events-auto w-9 h-11 sm:w-10 sm:h-12 flex items-center justify-center bg-black/85 hover:bg-white hover:text-black text-white border border-white/30 backdrop-blur transition-all duration-200 cursor-pointer text-xl font-mono shadow-xl select-none"
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
                ` : ''}

                <!-- Bottom Hover Overlay Hint -->
                <div class="absolute bottom-3 right-3 bg-black/90 backdrop-blur border border-white/30 px-3 py-1 text-[10px] font-mono tracking-widest text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20">
                  <span>DETAIL</span>
                  <span>↗</span>
                </div>
              </div>

              <!-- CONTENT CONTAINER -->
              <div class="p-5 sm:p-7 flex flex-col justify-between flex-1 bg-gradient-to-b from-[#070707] to-[#040404]">
                <div>
                  <!-- Subtitle / Medium Specification -->
                  <div class="text-[10px] sm:text-[11px] font-mono tracking-widest text-neutral-500 uppercase mb-2">
                    <span>${work.subtitle}</span>
                  </div>

                  <!-- 2. PRIORITY 2: WORK TITLE -->
                  <h2 class="text-xl sm:text-2xl lg:text-3xl font-black font-brand uppercase tracking-tight text-white group-hover:text-neutral-200 transition-colors leading-tight mb-2 sm:mb-3">
                    ${work.title}
                  </h2>

                  <!-- 3. PRIORITY 3: AUTHENTIC CURATORIAL SUMMARY -->
                  <p class="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed line-clamp-3">
                    ${work.summary}
                  </p>
                </div>

                <!-- Footer Specs & Action Line -->
                <div class="mt-6 pt-4 border-t border-[#181818] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div class="text-neutral-500 text-[11px] tracking-wider uppercase truncate max-w-[70%]">
                    <span class="text-neutral-600">VENUE:</span> <span class="text-neutral-300">${work.venue}</span>
                  </div>

                  <div class="text-white font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-[11px] tracking-widest">
                    <span>[ DETAIL</span>
                    <span>→ ]</span>
                  </div>
                </div>
              </div>
            </article>
            `;
          }).join('')}
        </div>
      </main>

      <!-- Institutional Footer -->
      <footer class="w-full border-t border-[#222222] bg-[#050505] px-6 sm:px-8 lg:px-12 py-12 text-xs font-mono text-neutral-400 mt-16">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div class="text-base font-bold uppercase tracking-tighter text-white font-brand mb-1">KAENSAN ARCHIVE</div>
            <p class="text-neutral-500 text-[11px]">ARCHITECTURAL RESEARCH & MONOCHROMATIC MOVING IMAGE ARCHIVE</p>
          </div>

          <div class="flex flex-wrap items-center gap-6 text-neutral-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="https://vimeo.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">VIMEO</a>
          </div>

          <div class="text-right">
            <div class="text-white font-semibold">BANGKOK, TH</div>
            <div id="works-live-time" class="text-neutral-500 text-[11px]">02:41:00 AM ICT</div>
          </div>
        </div>
      </footer>
    </div>
  `;
}
