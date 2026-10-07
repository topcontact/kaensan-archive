/**
 * Shared Institutional Footer Component
 * Flawless responsive layout across all screens (Mobile 320px to 4K Ultra-wide)
 * - Desktop: Single horizontal bar [BANGKOK, TH / © 2014—2024 KAENSAN RATTANASOMRERK] ... [INSTAGRAM   EMAIL]
 * - Mobile: Architectural 2-row grid without awkward line breaking or wrapping
 */
export function renderFooter({ containerClass = 'max-w-5xl xl:max-w-6xl mx-auto', extraClass = '' } = {}) {
  return `
    <footer class="w-full border-t border-[#222222] bg-[#050505] px-4 sm:px-8 lg:px-12 py-6 sm:py-8 font-mono text-sm text-neutral-400 shrink-0 z-10 ${extraClass}">
      <div class="${containerClass}">
        
        <!-- Desktop Layout (sm:flex): Single horizontal bar -->
        <div class="hidden sm:flex justify-between items-center text-sm">
          <div class="flex items-center gap-3">
            <span class="text-neutral-500 uppercase tracking-wider text-sm">BANGKOK, TH</span>
            <span class="text-neutral-700 mx-2">/</span>
            <span class="text-neutral-400 text-sm">© 2014—2024 KAENSAN RATTANASOMRERK</span>
          </div>
          <div class="flex items-center gap-8 text-neutral-400 text-sm">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="mailto:kaensan@gmail.com" class="hover:text-white transition-colors">EMAIL</a>
          </div>
        </div>

        <!-- Mobile Layout (sm:hidden): Architectural 2-row grid -->
        <div class="flex flex-col gap-3.5 sm:hidden">
          <!-- Row 1: Location on Left, Social Links on Right -->
          <div class="flex justify-between items-center text-sm">
            <span class="text-neutral-500 uppercase tracking-widest text-xs font-semibold">BANGKOK, TH</span>
            <div class="flex items-center gap-5 text-sm text-neutral-300">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">INSTAGRAM</a>
              <a href="mailto:kaensan@gmail.com" class="hover:text-white transition-colors">EMAIL</a>
            </div>
          </div>
          <!-- Row 2: Clean full-width Copyright (guaranteed no word wrapping glitches) -->
          <div class="text-neutral-500 text-xs tracking-wider pt-2.5 border-t border-[#161616]">
            © 2014—2024 KAENSAN RATTANASOMRERK
          </div>
        </div>

      </div>
    </footer>
  `;
}
