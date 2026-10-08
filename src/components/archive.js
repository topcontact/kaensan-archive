import { getWorkById } from '../data.js';
import { renderFooter } from './footer.js';

/**
 * Screen 7: Archive / Work Detail Screen Desktop & Tablet
 * Official Design: "Floating Monolith Canvas" (Design 1)
 * Responsive across all viewports (Mobile, Tablet, Laptop, Desktop, Ultrawide):
 * - 16:9 Widescreen Floating Art Canvas with subtle border and obsidian shadow
 * - Top-left minimal year badge [ 2023 ]
 * - Multi-image interactive slider (‹ › arrows, counter, dash dots, swipe gesture)
 * - Curatorial Caption beneath canvas: Bold brutalist Title, Subtitle, and Archive Ref
 * - Split Curatorial Statement & Specifications (FORMAT, DURATION, DIMENSIONS, YEAR)
 * - VENUE positioned directly under Statement with architectural divider
 * - Process & Documentation photo mosaic
 * - Institutional Minimal Footer
 */
export function renderArchiveDetailDesktop(workId = 'heavy-metal-2023', slideIndex = 0) {
  const work = getWorkById(workId);
  const paragraphs = work.statement.split('\n\n').filter(p => p.trim().length > 0);

  const hasMultipleImages = Array.isArray(work.images) && work.images.length > 1;
  const currentSlide = hasMultipleImages ? (slideIndex % work.images.length) : 0;
  const activeHeroObj = hasMultipleImages ? work.images[currentSlide] : null;
  const heroImageUrl = activeHeroObj ? (typeof activeHeroObj === 'string' ? activeHeroObj : activeHeroObj.url) : work.image;
  const heroImageAlt = activeHeroObj ? (activeHeroObj.alt || work.imageAlt) : (work.imageAlt || work.title);

  // Process & Documentation Images (รูปรอง / ภาพเบื้องหลัง)
  const processImages = (Array.isArray(work.documentationImages) && work.documentationImages.length > 0)
    ? work.documentationImages
    : (hasMultipleImages 
        ? work.images 
        : [
            { url: work.plate || work.image, alt: work.title },
            { url: work.image, alt: work.title }
          ]);

  const mosaicSpans = [
    'md:col-span-7',
    'md:col-span-5',
    'md:col-span-5',
    'md:col-span-7',
    'md:col-span-6',
    'md:col-span-6'
  ];

  return `
    <div class="min-h-screen bg-black text-[#F0F0F0] relative selection:bg-white selection:text-black select-none flex flex-col justify-between">
      
      <!-- Fixed Institutional Top Navigation Bar -->
      <nav class="sticky top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#181818] h-18 lg:h-20 flex justify-between items-center px-4 sm:px-8 lg:px-12 z-40 shrink-0">
        <!-- Left: Brand / Return to Works -->
        <button 
          id="archive-back-home" 
          class="group flex items-center gap-3 text-sm font-mono text-neutral-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
          title="Return to Works"
        >
          <span class="group-hover:-translate-x-1 transition-transform text-base">←</span>
          <span class="text-2xl sm:text-3xl font-black font-brand tracking-tighter uppercase text-white group-hover:opacity-85 transition-opacity">KAENSAN</span>
          <span class="text-neutral-700 font-mono text-sm hidden sm:inline">/</span>
          <span class="text-sm font-mono text-neutral-400 uppercase tracking-widest hidden sm:inline">WORK</span>
        </button>

        <!-- Right: Nav links -->
        <div class="hidden sm:flex items-center gap-8 lg:gap-10 text-sm font-mono tracking-widest uppercase text-neutral-400">
          <button id="nav-works" class="text-white border-b border-white pb-0.5 cursor-pointer font-bold">WORK</button>
          <button id="nav-about" class="hover:text-white transition-colors cursor-pointer">ABOUT</button>
          <button id="nav-contact" class="hover:text-white transition-colors cursor-pointer">CONTACT</button>
        </div>

        <!-- Mobile Menu Toggle Button (Fallback for tablet/smaller screens) -->
        <div class="flex items-center gap-2 sm:hidden">
          <button id="mobile-archive-menu" class="p-2 text-neutral-300 hover:text-white border border-neutral-800 transition-colors cursor-pointer bg-[#0d0d0d]" aria-label="Open Navigation Menu">
            <svg class="w-5 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor">
              <line x1="0" y1="2" x2="20" y2="2" stroke-width="1.75" />
              <line x1="0" y1="10" x2="20" y2="10" stroke-width="1.75" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Main Content Container -->
      <main class="w-full flex-1">
        
        <!-- 1. Hero Section: "Floating Monolith Canvas" (Strict 16:9 Aspect Ratio) -->
        <section class="w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-6">
          
          <!-- Strict 16:9 Floating Art Canvas -->
          <div 
            id="dossier-hero-surface"
            class="relative w-full aspect-[16/9] bg-black border border-white/20 overflow-hidden shadow-2xl group ${hasMultipleImages ? 'cursor-grab active:cursor-grabbing' : ''}"
            data-work-id="${work.id}"
          >
            <img 
              id="dossier-hero-img"
              src="${heroImageUrl}" 
              alt="${heroImageAlt}" 
              class="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.015]"
            />

            <!-- Top Left Minimal Year Badge -->
            <div class="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 border border-[#333333] bg-black/85 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1 text-sm font-mono tracking-widest text-neutral-200 pointer-events-none z-10">
              ${work.year}
            </div>

            ${hasMultipleImages ? renderStandardHeroControls(work, currentSlide) : ''}
          </div>

          <!-- Curatorial Title Bar Under Canvas (Apple Typographic Rhythm) -->
          <div class="mt-6 sm:mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4 font-mono">
            <div class="min-w-0 flex-1">
              <div class="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-2">
                ARCHIVAL ENTRY // ${work.year}
              </div>
              <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black font-brand uppercase tracking-tighter text-white leading-tight mb-2">
                ${work.title}
              </h1>
              <p class="text-base sm:text-lg font-sans text-neutral-300 leading-relaxed">
                ${work.subtitle || work.medium}
              </p>
            </div>

            <div class="shrink-0 text-left md:text-right font-mono text-sm text-neutral-400 tracking-widest pt-2 md:pt-0 border-t md:border-t-0 border-[#1a1a1a]">
              <span class="text-neutral-500">ARCHIVE REF</span>
              <span class="text-neutral-700 mx-2">//</span>
              <span class="text-white font-bold">[ ${work.year} ]</span>
            </div>
          </div>
        </section>

        <!-- 2. Curatorial Statement & Specifications Section -->
        <section class="w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-14 sm:py-20 lg:py-24 border-t border-[#181818]">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            
            <!-- Left Column: Technical Specifications List -->
            <div class="lg:col-span-4 space-y-7 sm:space-y-8 text-neutral-400">
              ${work.medium ? `
                <div>
                  <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">FORMAT</div>
                  <div class="text-sm sm:text-base text-neutral-200 font-sans leading-relaxed whitespace-pre-line">${work.medium}</div>
                </div>
              ` : ''}

              ${work.duration ? `
                <div>
                  <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">DURATION</div>
                  <div class="text-sm sm:text-base text-neutral-200 font-sans leading-relaxed">${work.duration}</div>
                </div>
              ` : ''}

              ${work.dimensions ? `
                <div>
                  <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">DIMENSIONS</div>
                  <div class="text-sm sm:text-base text-neutral-200 font-sans leading-relaxed">${work.dimensions}</div>
                </div>
              ` : ''}

              ${work.year ? `
                <div>
                  <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">YEAR</div>
                  <div class="text-sm sm:text-base text-neutral-200 font-sans leading-relaxed">${work.year}</div>
                </div>
              ` : ''}
            </div>

            <!-- Right Column: Curatorial Statement + Venue -->
            <div class="lg:col-span-8">
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-black font-brand uppercase tracking-tight text-white mb-8 sm:mb-10">
                CURATORIAL STATEMENT
              </h2>

              <div class="space-y-6 text-base sm:text-lg text-neutral-300 font-sans leading-[1.8] sm:leading-[1.85] font-normal">
                ${paragraphs.map(p => `<p>${p}</p>`).join('')}
              </div>

              <!-- VENUE moved directly under statement with thin divider -->
              ${work.venue ? `
                <div class="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-[#1a1a1a]">
                  <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 font-bold mb-2">VENUE</div>
                  <div class="text-base sm:text-lg text-neutral-200 font-sans leading-relaxed whitespace-pre-line">${work.venue}</div>
                </div>
              ` : ''}
            </div>
          </div>
        </section>

        <!-- 3. Process & Documentation Photo Mosaic -->
        <section class="w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-16 sm:py-20 border-t border-[#181818]">
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
      </main>

      <!-- Institutional Minimal Footer -->
      ${renderFooter({ extraClass: 'mt-16' })}
    </div>
  `;
}

/**
 * Screen 6: Archive / Work Detail Mobile (Dedicated Mobile Experience)
 * Strict 16:9 Aspect Ratio with Proportional Typography
 */
export function renderArchiveDetailMobile(workId = 'heavy-metal-2023', slideIndex = 0) {
  const work = getWorkById(workId);
  const paragraphs = work.statement.split('\n\n').filter(p => p.trim().length > 0);

  const hasMultipleImages = Array.isArray(work.images) && work.images.length > 1;
  const currentSlide = hasMultipleImages ? (slideIndex % work.images.length) : 0;
  const activeHeroObj = hasMultipleImages ? work.images[currentSlide] : null;
  const heroImageUrl = activeHeroObj ? (typeof activeHeroObj === 'string' ? activeHeroObj : activeHeroObj.url) : work.image;
  const heroImageAlt = activeHeroObj ? (activeHeroObj.alt || work.imageAlt) : (work.imageAlt || work.title);

  // Process & Documentation Images (รูปรอง / ภาพเบื้องหลัง)
  const processImages = (Array.isArray(work.documentationImages) && work.documentationImages.length > 0)
    ? work.documentationImages
    : (hasMultipleImages 
        ? work.images 
        : [
            { url: work.plate || work.image, alt: work.title },
            { url: work.image, alt: work.title }
          ]);

  return `
    <div class="min-h-screen bg-black text-[#F0F0F0] select-none flex flex-col justify-between">
      
      <!-- Mobile Sticky Top Bar -->
      <header class="sticky top-0 z-40 bg-black/95 backdrop-blur border-b border-[#181818] px-4 sm:px-6 h-16 flex justify-between items-center shrink-0">
        <button id="mobile-archive-back" class="text-sm font-mono text-neutral-400 hover:text-white flex items-center gap-2.5 cursor-pointer">
          <span class="text-base">←</span>
          <span class="font-black font-brand text-white tracking-tight uppercase text-xl">KAENSAN</span>
        </button>

        <div class="flex items-center gap-2">
          <button id="mobile-archive-menu" class="p-2 border border-neutral-800 text-neutral-300 cursor-pointer bg-[#0d0d0d]" aria-label="Open Navigation Menu">
            <svg class="w-5 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor">
              <line x1="0" y1="2" x2="20" y2="2" stroke-width="1.75" />
              <line x1="0" y1="10" x2="20" y2="10" stroke-width="1.75" />
            </svg>
          </button>
        </div>
      </header>

      <!-- Main Mobile Body -->
      <main class="flex-1">
        
        <!-- 1. Mobile Hero: Strict 16:9 Floating Canvas -->
        <section class="p-4 sm:p-5">
          <div 
            id="mobile-dossier-hero-surface"
            class="relative w-full aspect-[16/9] bg-black border border-white/20 overflow-hidden shadow-2xl"
            data-work-id="${work.id}"
          >
            <img 
              id="mobile-dossier-hero-img" 
              src="${heroImageUrl}" 
              alt="${heroImageAlt}" 
              class="w-full h-full object-cover object-center" 
            />
            
            <!-- Top-Left Minimal Year Badge -->
            <div class="absolute top-3 left-3 border border-[#333333] bg-black/85 backdrop-blur px-2.5 py-1 text-sm font-mono tracking-widest text-neutral-200 z-10">
              ${work.year}
            </div>

            ${hasMultipleImages ? renderMobileHeroControls(work, currentSlide) : ''}
          </div>

          <!-- Curatorial Caption Block Beneath Canvas -->
          <div class="mt-4 sm:mt-5 font-mono">
            <h1 class="text-2xl sm:text-3xl font-black font-brand uppercase tracking-tight text-white mb-1.5 leading-tight">
              ${work.title}
            </h1>
            <p class="text-sm font-mono text-neutral-400 uppercase tracking-wider mb-2 leading-relaxed">
              ${work.subtitle || work.medium}
            </p>
            <div class="text-sm font-mono text-neutral-500 tracking-widest pt-2.5 border-t border-[#1a1a1a] flex justify-between items-center">
              <span>ARCHIVE REF</span>
              <span class="text-white font-bold">[ ${work.year} ]</span>
            </div>
          </div>
        </section>

        <!-- 2. Technical Specs List -->
        <section class="p-4 sm:p-6 space-y-5 text-neutral-400 border-t border-[#181818]">
          ${work.medium ? `
            <div>
              <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">FORMAT</div>
              <div class="text-sm text-neutral-200 font-sans leading-relaxed">${work.medium}</div>
            </div>
          ` : ''}
          ${work.duration ? `
            <div>
              <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">DURATION</div>
              <div class="text-sm text-neutral-200 font-sans leading-relaxed">${work.duration}</div>
            </div>
          ` : ''}
          ${work.dimensions ? `
            <div>
              <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">DIMENSIONS</div>
              <div class="text-sm text-neutral-200 font-sans leading-relaxed">${work.dimensions}</div>
            </div>
          ` : ''}
          ${work.year ? `
            <div>
              <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1">YEAR</div>
              <div class="text-sm text-neutral-200 font-sans leading-relaxed">${work.year}</div>
            </div>
          ` : ''}
        </section>

        <!-- 3. Curatorial Statement & Venue -->
        <section class="p-4 sm:p-6 border-t border-[#181818]">
          <h2 class="text-xl sm:text-2xl font-black font-brand uppercase tracking-tight text-white mb-4">
            CURATORIAL STATEMENT
          </h2>
          <div class="space-y-4 text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
            ${paragraphs.map(p => `<p>${p}</p>`).join('')}
          </div>

          <!-- VENUE under statement -->
          ${work.venue ? `
            <div class="mt-6 pt-5 border-t border-[#1a1a1a]">
              <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 font-bold mb-1.5">VENUE</div>
              <div class="text-sm sm:text-base text-neutral-200 font-sans leading-relaxed whitespace-pre-line">${work.venue}</div>
            </div>
          ` : ''}
        </section>

        <!-- 4. Process & Documentation Image List -->
        <section class="p-4 sm:p-6 border-t border-[#181818]">
          <h2 class="text-xl sm:text-2xl font-black font-brand uppercase tracking-tight text-white mb-4">
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
      </main>

      <!-- Mobile Minimal Footer -->
      ${renderFooter({ extraClass: 'mt-12' })}
    </div>
  `;
}

/**
 * Reusable Desktop 16:9 Hero Slider Controls
 */
function renderStandardHeroControls(work, currentSlide) {
  return `
    <!-- Top-Right Slide Counter -->
    <div class="absolute top-4 right-4 z-20 pointer-events-none">
      <div class="border border-white/20 bg-black/75 backdrop-blur px-3 py-1 text-sm font-mono tracking-widest text-neutral-200">
        <span id="dossier-hero-counter">0${currentSlide + 1} / 0${work.images.length}</span>
      </div>
    </div>

    <!-- Arrow Controls -->
    <div class="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none z-20">
      <button 
        id="dossier-hero-prev" 
        class="pointer-events-auto px-3.5 py-2 sm:px-4 sm:py-2.5 bg-black/75 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur transition-all cursor-pointer font-mono text-sm tracking-widest shadow-xl select-none"
        aria-label="Previous Slide"
      >
        ‹
      </button>
      <button 
        id="dossier-hero-next" 
        class="pointer-events-auto px-3.5 py-2 sm:px-4 sm:py-2.5 bg-black/75 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur transition-all cursor-pointer font-mono text-sm tracking-widest shadow-xl select-none"
        aria-label="Next Slide"
      >
        ›
      </button>
    </div>

    <!-- Bottom Dash Indicators -->
    <div id="dossier-hero-dashes" class="absolute bottom-4 right-4 flex items-center gap-1.5 z-20 pointer-events-none">
      ${work.images.map((_, i) => `
        <span class="dossier-hero-dash h-[3px] ${i === currentSlide ? 'w-6 bg-white shadow-glow' : 'w-2 bg-neutral-600'} transition-all duration-300 rounded-full"></span>
      `).join('')}
    </div>
  `;
}

/**
 * Reusable Mobile 16:9 Hero Slider Controls
 */
function renderMobileHeroControls(work, currentSlide) {
  return `
    <div class="absolute top-2.5 right-2.5 z-10 pointer-events-none">
      <div class="bg-black/80 backdrop-blur border border-white/20 px-2.5 py-0.5 text-xs font-mono tracking-widest text-neutral-300">
        <span id="mobile-dossier-hero-counter">0${currentSlide + 1} / 0${work.images.length}</span>
      </div>
    </div>
    <div class="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none z-20">
      <button id="mobile-dossier-prev" class="pointer-events-auto w-9 h-10 flex items-center justify-center bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur font-mono text-base shadow-lg" aria-label="Previous">‹</button>
      <button id="mobile-dossier-next" class="pointer-events-auto w-9 h-10 flex items-center justify-center bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 backdrop-blur font-mono text-base shadow-lg" aria-label="Next">›</button>
    </div>
    <div class="absolute bottom-2.5 inset-x-0 flex justify-center items-center gap-1.5 z-20 pointer-events-none">
      ${work.images.map((_, i) => `
        <span class="mobile-dossier-dash h-[2.5px] ${i === currentSlide ? 'w-5 bg-white shadow-glow' : 'w-2 bg-neutral-600'} transition-all rounded-full"></span>
      `).join('')}
    </div>
  `;
}
