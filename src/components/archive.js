import { getWorkById } from '../data.js';

/**
 * Screen 7: Archive / Work Detail Screen Desktop (Editorial Stream)
 * Clean, museum-grade layout retaining the user's preferred signature font design:
 * - Brand: Chivo bold architectural brand typography (`font-brand font-black tracking-tighter`).
 * - Hero title: Iconic brutalist uppercase display (`font-brand font-black tracking-tighter text-white`).
 * - Headings: Architectural uppercase bold (`font-brand font-black uppercase tracking-tight`).
 * - Specifications & Metadata: Technical monospace labels (`font-mono tracking-widest`) with clean sans-serif values.
 * - Multi-image slider support: subtle ‹ PREV / NEXT › and clean slide counter.
 * - Minimal Curatorial Statement split section (25 / 75).
 * - Process & Documentation interlocking photo mosaic without card/badge clutter.
 * - Minimal institutional footer.
 */
export function renderArchiveDetailDesktop(workId = 'heavy-metal-2023', slideIndex = 0) {
  const work = getWorkById(workId);
  const paragraphs = work.statement.split('\n\n').filter(p => p.trim().length > 0);

  const hasMultipleImages = Array.isArray(work.images) && work.images.length > 1;
  const currentSlide = hasMultipleImages ? (slideIndex % work.images.length) : 0;
  const activeHeroObj = hasMultipleImages ? work.images[currentSlide] : null;
  const heroImageUrl = activeHeroObj ? (typeof activeHeroObj === 'string' ? activeHeroObj : activeHeroObj.url) : work.image;
  const heroImageAlt = activeHeroObj ? (activeHeroObj.alt || work.imageAlt) : (work.imageAlt || work.title);

  // Process & Documentation Images
  const processImages = hasMultipleImages 
    ? work.images 
    : [
        { url: work.plate || work.image, alt: work.title },
        { url: work.image, alt: work.title }
      ];

  // Interlocking mosaic spans (Row 1: 7/5, Row 2: 5/7)
  const mosaicSpans = [
    'md:col-span-7',
    'md:col-span-5',
    'md:col-span-5',
    'md:col-span-7',
    'md:col-span-6',
    'md:col-span-6'
  ];

  return `
    <div class="min-h-screen bg-black text-[#F0F0F0] relative selection:bg-white selection:text-black select-none">
      <!-- Fixed Institutional Top Navigation Bar -->
      <nav class="sticky top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#181818] h-20 flex justify-between items-center px-6 sm:px-8 lg:px-12 z-40">
        <!-- Left: Brand / Return to Works -->
        <button 
          id="archive-back-home" 
          class="group flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors focus:outline-none"
          title="Return to Works"
        >
          <span class="group-hover:-translate-x-1 transition-transform">←</span>
          <span class="text-xl font-black font-brand tracking-tighter uppercase text-white">KAENSAN</span>
          <span class="text-neutral-700 font-mono text-xs hidden sm:inline">/</span>
          <span class="text-xs font-mono text-neutral-400 uppercase tracking-widest hidden sm:inline">WORK</span>
        </button>

        <!-- Right: Nav links + Search -->
        <div class="flex items-center gap-8 text-xs font-mono tracking-widest uppercase text-neutral-400">
          <button id="nav-works" class="text-white border-b border-white pb-0.5">WORK</button>
          <button id="nav-about" class="hover:text-white transition-colors">ABOUT</button>
          <button id="nav-contact" class="hover:text-white transition-colors">CONTACT</button>
          <button id="archive-search-trigger" class="hover:text-white transition-colors p-1.5 focus:outline-none" aria-label="Search">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Hero Installation Slide / Interactive Photo Surface -->
      <section 
        id="dossier-hero-surface"
        class="relative w-full h-[80vh] min-h-[580px] max-h-[860px] bg-black overflow-hidden flex items-end ${hasMultipleImages ? 'cursor-grab active:cursor-grabbing' : ''}"
        data-work-id="${work.id}"
      >
        <!-- Background Banner -->
        <img 
          id="dossier-hero-img"
          src="${heroImageUrl}" 
          alt="${heroImageAlt}" 
          class="absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out"
        />
        
        <!-- Architectural Obsidian Gradient Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none"></div>

        ${hasMultipleImages ? `
          <!-- Top Right: Minimal Counter -->
          <div class="absolute top-8 right-6 sm:right-8 lg:right-12 z-20 pointer-events-none">
            <div class="border border-white/20 bg-black/60 backdrop-blur px-3 py-1 text-xs font-mono tracking-widest text-neutral-300">
              <span id="dossier-hero-counter">0${currentSlide + 1} / 0${work.images.length}</span>
            </div>
          </div>

          <!-- Hero Left / Right Arrow Controls -->
          <div class="absolute inset-y-0 inset-x-4 sm:inset-x-8 lg:inset-x-12 flex items-center justify-between pointer-events-none z-20">
            <button 
              id="dossier-hero-prev" 
              class="pointer-events-auto px-3.5 py-2.5 bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur transition-all duration-200 cursor-pointer font-mono text-xs tracking-widest flex items-center gap-2"
              aria-label="Previous Slide"
            >
              <span>‹</span>
              <span class="hidden sm:inline">PREV</span>
            </button>
            <button 
              id="dossier-hero-next" 
              class="pointer-events-auto px-3.5 py-2.5 bg-black/60 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur transition-all duration-200 cursor-pointer font-mono text-xs tracking-widest flex items-center gap-2"
              aria-label="Next Slide"
            >
              <span class="hidden sm:inline">NEXT</span>
              <span>›</span>
            </button>
          </div>

          <!-- Subtle Dash Indicators at Bottom Right -->
          <div id="dossier-hero-dashes" class="absolute bottom-8 right-6 sm:right-8 lg:right-12 flex items-center gap-1.5 z-20 pointer-events-none">
            ${work.images.map((_, i) => `
              <span class="dossier-hero-dash h-[2.5px] ${i === currentSlide ? 'w-6 bg-white' : 'w-2 bg-neutral-600'} transition-all duration-300 rounded-full"></span>
            `).join('')}
          </div>
        ` : ''}

        <!-- Original Architectural Bold Typography -->
        <div class="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-12 sm:pb-16 pointer-events-none">
          <h1 class="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-brand uppercase tracking-tighter text-white leading-tight mb-3 sm:mb-4">
            ${work.title}
          </h1>
          
          <div class="text-xs sm:text-sm font-mono tracking-widest uppercase text-neutral-400">
            ${work.subtitle || work.medium}${work.year ? ` // ${work.year}` : ''}
          </div>
        </div>
      </section>

      <!-- Curatorial Statement & Specifications Section (Split 25/75) -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-28">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <!-- Left Column: Minimal Vertical Specifications List -->
          <div class="lg:col-span-3 space-y-7 sm:space-y-8 text-neutral-400">
            ${work.medium ? `
              <div>
                <div class="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">FORMAT</div>
                <div class="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed whitespace-pre-line">${work.medium}</div>
              </div>
            ` : ''}

            ${work.duration ? `
              <div>
                <div class="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">DURATION</div>
                <div class="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">${work.duration}</div>
              </div>
            ` : ''}

            ${work.dimensions ? `
              <div>
                <div class="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">DIMENSIONS</div>
                <div class="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">${work.dimensions}</div>
              </div>
            ` : ''}

            ${work.venue ? `
              <div>
                <div class="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">VENUE</div>
                <div class="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed whitespace-pre-line">${work.venue}</div>
              </div>
            ` : ''}

            ${work.curator ? `
              <div>
                <div class="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">CURATOR</div>
                <div class="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">${work.curator}</div>
              </div>
            ` : ''}

            ${work.year ? `
              <div>
                <div class="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">YEAR</div>
                <div class="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed">${work.year}</div>
              </div>
            ` : ''}
          </div>

          <!-- Right Column: Curatorial Statement with Original Bold Typography -->
          <div class="lg:col-span-9">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black font-brand uppercase tracking-tight text-white mb-8 sm:mb-10">
              CURATORIAL STATEMENT
            </h2>

            <div class="space-y-6 text-sm sm:text-base text-neutral-300 font-sans leading-[1.8] sm:leading-[1.85] font-normal">
              ${paragraphs.map(p => `<p>${p}</p>`).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- Process & Documentation Section -->
      <section class="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-[#181818]">
        <h2 class="text-2xl sm:text-3xl font-black font-brand uppercase tracking-tight text-white mb-8 sm:mb-10">
          PROCESS & DOCUMENTATION
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          ${processImages.map((imgObj, idx) => {
            const imgUrl = typeof imgObj === 'string' ? imgObj : imgObj.url;
            const imgAlt = imgObj.alt || `${work.title} documentation ${idx + 1}`;
            const spanClass = mosaicSpans[idx % mosaicSpans.length];

            return `
              <div class="${spanClass} border border-[#181818] bg-black overflow-hidden group aspect-[16/10]">
                <img 
                  src="${imgUrl}" 
                  alt="${imgAlt}"
                  class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Institutional Footer -->
      <footer class="w-full border-t border-[#181818] bg-black px-6 sm:px-8 lg:px-12 py-10 text-xs font-mono text-neutral-500 mt-16">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            © 2024 KAENSAN ARCHIVE. ALL RIGHTS RESERVED.
          </div>

          <div class="flex items-center gap-6 text-neutral-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="https://vimeo.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">VIMEO</a>
            <button id="footer-contact-link" class="hover:text-white transition-colors">CONTACT</button>
          </div>
        </div>
      </footer>
    </div>
  `;
}

/**
 * Screen 6: Archive / Work Detail Mobile
 */
export function renderArchiveDetailMobile(workId = 'heavy-metal-2023', slideIndex = 0) {
  const work = getWorkById(workId);
  const paragraphs = work.statement.split('\n\n').filter(p => p.trim().length > 0);

  const hasMultipleImages = Array.isArray(work.images) && work.images.length > 1;
  const currentSlide = hasMultipleImages ? (slideIndex % work.images.length) : 0;
  const activeHeroObj = hasMultipleImages ? work.images[currentSlide] : null;
  const heroImageUrl = activeHeroObj ? (typeof activeHeroObj === 'string' ? activeHeroObj : activeHeroObj.url) : work.image;
  const heroImageAlt = activeHeroObj ? (activeHeroObj.alt || work.imageAlt) : (work.imageAlt || work.title);

  const processImages = hasMultipleImages 
    ? work.images 
    : [
        { url: work.plate || work.image, alt: work.title },
        { url: work.image, alt: work.title }
      ];

  return `
    <div class="min-h-screen bg-black text-[#F0F0F0] select-none pb-12">
      <!-- Mobile Sticky Top Bar -->
      <header class="sticky top-0 z-40 bg-black/95 backdrop-blur border-b border-[#181818] px-5 py-4 flex justify-between items-center">
        <button id="mobile-archive-back" class="text-xs font-mono text-neutral-400 hover:text-white flex items-center gap-1.5">
          <span>←</span>
          <span class="font-black font-brand text-white tracking-tight uppercase text-base">KAENSAN</span>
        </button>

        <div class="flex items-center gap-3">
          <button id="mobile-archive-search" class="p-1.5 text-neutral-400 hover:text-white" aria-label="Search">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button id="mobile-archive-menu" class="p-1.5 border border-neutral-800 text-neutral-300" aria-label="Menu">
            <svg class="w-4 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor">
              <line x1="0" y1="2" x2="20" y2="2" stroke-width="1.75" />
              <line x1="0" y1="10" x2="20" y2="10" stroke-width="1.75" />
            </svg>
          </button>
        </div>
      </header>

      <!-- Hero Widescreen Image (Interactive Slider / Swipe Surface) -->
      <section 
        id="mobile-dossier-hero-surface"
        class="relative w-full bg-black border-b border-[#181818]"
        data-work-id="${work.id}"
      >
        <div class="relative overflow-hidden aspect-[16/10] bg-black">
          <img 
            id="mobile-dossier-hero-img"
            src="${heroImageUrl}" 
            alt="${heroImageAlt}" 
            class="w-full h-full object-cover transition-all duration-300"
          />

          <!-- Overlay gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

          ${hasMultipleImages ? `
            <!-- Counter Badge -->
            <div class="absolute top-3 right-3 bg-black/80 backdrop-blur border border-white/20 px-2 py-0.5 text-[9px] font-mono tracking-widest text-neutral-300 z-10">
              <span id="mobile-dossier-hero-counter">0${currentSlide + 1} / 0${work.images.length}</span>
            </div>

            <!-- Arrow Buttons -->
            <div class="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none z-20">
              <button 
                id="mobile-dossier-prev" 
                class="pointer-events-auto w-8 h-9 flex items-center justify-center bg-black/80 text-white border border-white/20 backdrop-blur font-mono text-sm"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button 
                id="mobile-dossier-next" 
                class="pointer-events-auto w-8 h-9 flex items-center justify-center bg-black/80 text-white border border-white/20 backdrop-blur font-mono text-sm"
                aria-label="Next image"
              >
                ›
              </button>
            </div>

            <!-- Bottom Dash Indicators -->
            <div class="absolute bottom-2 inset-x-0 flex justify-center items-center gap-1 z-20 pointer-events-none">
              ${work.images.map((_, i) => `
                <span class="mobile-dossier-dash h-[2px] ${i === currentSlide ? 'w-4 bg-white' : 'w-2 bg-neutral-600'} transition-all rounded-full"></span>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <!-- Mobile Title Header -->
        <div class="p-5">
          <h1 class="text-2xl sm:text-3xl font-black font-brand uppercase tracking-tight text-white mb-2 leading-tight">
            ${work.title}
          </h1>
          <p class="text-xs font-mono text-neutral-400 uppercase tracking-wider">
            ${work.subtitle || work.medium}${work.year ? ` // ${work.year}` : ''}
          </p>
        </div>
      </section>

      <!-- Artwork Spec List (Clean vertical list) -->
      <section class="p-5 space-y-5 text-neutral-400 border-b border-[#181818]">
        ${work.medium ? `
          <div>
            <div class="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">FORMAT</div>
            <div class="text-xs text-neutral-200 font-sans leading-relaxed">${work.medium}</div>
          </div>
        ` : ''}
        ${work.duration ? `
          <div>
            <div class="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">DURATION</div>
            <div class="text-xs text-neutral-200 font-sans leading-relaxed">${work.duration}</div>
          </div>
        ` : ''}
        ${work.venue ? `
          <div>
            <div class="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">VENUE</div>
            <div class="text-xs text-neutral-200 font-sans leading-relaxed">${work.venue}</div>
          </div>
        ` : ''}
        ${work.year ? `
          <div>
            <div class="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">YEAR</div>
            <div class="text-xs text-neutral-200 font-sans leading-relaxed">${work.year}</div>
          </div>
        ` : ''}
      </section>

      <!-- Curatorial Statement -->
      <section class="p-5">
        <h2 class="text-lg font-black font-brand uppercase tracking-tight text-white mb-4">
          CURATORIAL STATEMENT
        </h2>
        <div class="space-y-4 text-xs text-neutral-300 font-sans leading-relaxed">
          ${paragraphs.map(p => `<p>${p}</p>`).join('')}
        </div>
      </section>

      <!-- Process & Documentation Image List -->
      <section class="p-5 border-t border-[#181818]">
        <h2 class="text-lg font-black font-brand uppercase tracking-tight text-white mb-4">
          PROCESS & DOCUMENTATION
        </h2>
        <div class="space-y-4">
          ${processImages.map((imgObj, idx) => `
            <div class="border border-[#181818] bg-black overflow-hidden aspect-[16/10]">
              <img 
                src="${typeof imgObj === 'string' ? imgObj : imgObj.url}" 
                alt="${imgObj.alt || `${work.title} plate ${idx + 1}`}"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Mobile Footer -->
      <footer class="p-5 border-t border-[#181818] text-xs font-mono text-neutral-500 text-center mt-6">
        <p class="text-neutral-400">© 2024 KAENSAN ARCHIVE</p>
      </footer>
    </div>
  `;
}
