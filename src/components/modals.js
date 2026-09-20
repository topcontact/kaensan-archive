import { ARCHIVE_DATA } from '../data.js';

/**
 * Institutional Search Modal
 */
export function renderSearchModal() {
  const recentWorks = ARCHIVE_DATA.works.slice(0, 4);

  return `
    <div id="search-modal-backdrop" class="fixed inset-0 bg-black/80 backdrop-blur-md z-[120] flex items-start justify-center p-4 pt-20 transition-opacity duration-300">
      <div class="w-full max-w-2xl bg-neutral-950 border border-neutral-700 shadow-2xl p-6 relative">
        <div class="flex justify-between items-center border-b border-[#222222] pb-4 mb-4">
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-white"></span>
            <span class="text-xs font-mono tracking-widest text-neutral-400 uppercase">ARCHIVE SEARCH INDEX</span>
          </div>
          <button id="search-modal-close" class="text-neutral-400 hover:text-white font-mono text-sm px-2 py-0.5 border border-neutral-800 hover:border-neutral-500">
            ESC
          </button>
        </div>

        <div class="relative mb-6">
          <input 
            type="text" 
            id="search-input" 
            placeholder="Search works, materials, mediums, years..." 
            class="w-full bg-black border border-neutral-800 px-4 py-3 text-sm font-mono text-white placeholder-neutral-600 focus:outline-none focus:border-white transition-colors"
            autofocus
          />
          <div class="absolute right-3 top-3 text-[10px] font-mono text-neutral-500">
            INDEXED
          </div>
        </div>

        <div id="search-results-list" class="space-y-2 max-h-80 overflow-y-auto pr-1">
          <!-- Populated by search input -->
          <div class="text-xs font-mono text-neutral-500 py-2">FEATURED ARCHIVE ENTRIES:</div>
          ${recentWorks.map(w => `
            <div class="search-item p-3 border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-900 cursor-pointer flex justify-between items-center transition-colors" data-work-id="${w.id}">
              <div>
                <div class="text-white font-bold text-sm uppercase font-brand">${w.title} (${w.year})</div>
                <div class="text-[11px] text-neutral-400 font-mono">${w.subtitle} // ${w.venue}</div>
              </div>
              <span class="text-xs font-mono text-neutral-500">${w.year} →</span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

/**
 * Documentation Lightbox Modal
 */
export function renderLightboxModal(item) {
  return `
    <div id="lightbox-backdrop" class="fixed inset-0 bg-black/95 backdrop-blur-lg z-[130] flex flex-col justify-between p-6 lg:p-12">
      <!-- Lightbox Header -->
      <div class="flex justify-between items-center border-b border-[#222222] pb-4">
        <div>
          <div class="text-xs font-mono text-neutral-400 uppercase tracking-widest">${item.tag || 'ARCHIVE'} // ARCHIVAL ARTIFACT</div>
          <h2 class="text-lg font-bold font-brand uppercase tracking-tight text-white mt-1">${item.title}</h2>
        </div>
        <button id="lightbox-close" class="text-neutral-300 hover:text-white border border-neutral-800 hover:border-white px-3 py-1 font-mono text-xs uppercase transition-colors">
          [ CLOSE ESC ]
        </button>
      </div>

      <!-- Main Image View -->
      <div class="flex-1 flex items-center justify-center my-6 overflow-hidden">
        <div class="relative border border-neutral-700 p-2 bg-neutral-950 max-h-[70vh] max-w-5xl">
          <img 
            src="${item.image}" 
            alt="${item.title}" 
            class="max-h-[64vh] w-auto object-contain filter grayscale contrast-125"
          />
        </div>
      </div>

      <!-- Lightbox Footer / Technical Telemetry -->
      <div class="border-t border-[#222222] pt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
        <div>
          <span class="text-neutral-500 uppercase tracking-wider block">TECH SPECS</span>
          <span class="text-white">${item.tech || 'Archival Plate'}</span>
        </div>
        <div>
          <span class="text-neutral-500 uppercase tracking-wider block">CURATORIAL CONTEXT</span>
          <span class="text-neutral-300">${item.subtitle || ''}</span>
        </div>
        <div class="md:text-right">
          <span class="text-neutral-500 uppercase tracking-wider block">STATUS</span>
          <span class="text-white">AUTHENTICATED 2024 RECORD</span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Mobile Navigation Drawer
 */
export function renderMobileNavDrawer() {
  return `
    <div id="mobile-drawer-backdrop" class="fixed inset-0 bg-black/90 backdrop-blur-xl z-[140] flex flex-col justify-between p-6 animate-fade-in">
      <div class="flex justify-between items-center border-b border-[#222222] pb-4">
        <div class="text-xl font-bold font-brand tracking-tighter uppercase text-white">KAENSAN</div>
        <button id="drawer-close-btn" class="p-2 border border-neutral-800 text-neutral-300 hover:text-white">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav class="my-auto flex flex-col gap-6 text-xl font-brand uppercase tracking-tight text-neutral-400">
        <button id="drawer-nav-home" class="text-left text-white border-l-2 border-white pl-4 hover:translate-x-2 transition-transform">
          01 // HOME
        </button>
        <button id="drawer-nav-archive" class="text-left hover:text-white border-l-2 border-transparent hover:border-neutral-500 pl-4 hover:translate-x-2 transition-transform">
          02 // WORK
        </button>
        <button id="drawer-nav-about" class="text-left hover:text-white border-l-2 border-transparent hover:border-neutral-500 pl-4 hover:translate-x-2 transition-transform">
          03 // ABOUT
        </button>
        <button id="drawer-nav-contact" class="text-left hover:text-white border-l-2 border-transparent hover:border-neutral-500 pl-4 hover:translate-x-2 transition-transform">
          04 // CONTACT
        </button>
      </nav>

      <div class="border-t border-[#222222] pt-4 text-xs font-mono text-neutral-500 flex justify-between items-center">
        <span>BANGKOK, TH</span>
        <span class="text-neutral-300">© 2024 KAENSAN</span>
      </div>
    </div>
  `;
}

/**
 * Audio Soundscape Synthesizer
 */
let audioCtx = null;
let osc1 = null;
let osc2 = null;
let gainNode = null;
let isAudioPlaying = false;

export function toggleAudioSoundscape(callback) {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }

  if (isAudioPlaying) {
    if (gainNode) {
      gainNode.gain.setValueAtTime(gainNode.gain.value, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);
      setTimeout(() => {
        try {
          osc1.stop();
          osc2.stop();
        } catch (e) {}
      }, 1200);
    }
    isAudioPlaying = false;
    if (callback) callback(false);
  } else {
    audioCtx.resume().then(() => {
      osc1 = audioCtx.createOscillator();
      osc2 = audioCtx.createOscillator();
      gainNode = audioCtx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(28, audioCtx.currentTime);

      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(56, audioCtx.currentTime);

      gainNode.gain.setValueAtTime(0.0001, audioCtx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 2.0);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      osc1.start();
      osc2.start();

      isAudioPlaying = true;
      if (callback) callback(true);
    });
  }
}
