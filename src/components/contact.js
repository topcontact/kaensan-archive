/**
 * Contact Page Component
 * Complete contact directory and interactive enquiry form for KAENSAN RATTANASOMRERK
 * Sourced directly from official site (https://kaensan.com/contact)
 * Designed in full alignment with the project's brutalist architectural museum theme
 */
export function renderContactPage() {
  return `
    <div class="min-h-screen bg-black text-[#F0F0F0] selection:bg-white selection:text-black select-none flex flex-col justify-between">
      
      <!-- Institutional Top Navigation Bar (Responsive Desktop & Mobile) -->
      <nav class="sticky top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#222222] h-16 sm:h-20 flex justify-between items-center px-4 sm:px-8 lg:px-12 z-40">
        <!-- Left: Brand / Return to Works -->
        <div class="flex items-center gap-3 sm:gap-4">
          <button id="contact-nav-home" class="group flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors focus:outline-none">
            <span class="group-hover:-translate-x-1 transition-transform">←</span>
            <span class="text-lg sm:text-xl font-black font-brand tracking-tighter uppercase text-white">KAENSAN</span>
          </button>
          <span class="text-neutral-700 font-mono text-xs hidden sm:inline">/</span>
          <span class="text-xs font-mono text-neutral-400 uppercase tracking-widest hidden md:inline">
            CONTACT & ENQUIRIES
          </span>
        </div>

        <!-- Right: Desktop Nav Links -->
        <div class="hidden sm:flex items-center gap-6 md:gap-8 text-xs font-mono tracking-widest uppercase text-neutral-400">
          <button id="contact-link-work" class="hover:text-white transition-colors">WORK</button>
          <button id="contact-link-about" class="hover:text-white transition-colors">ABOUT</button>
          <button id="contact-link-contact" class="text-white border-b border-white pb-0.5">CONTACT</button>
          <button id="contact-search-trigger" class="hover:text-white transition-colors p-1.5 border border-neutral-800 hover:border-neutral-500 flex items-center gap-2 px-2.5">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span class="text-[10px] text-neutral-500 font-mono">CMD+K</span>
          </button>
        </div>

        <!-- Right: Mobile Menu Toggle Button (2-line SVG) -->
        <div class="flex items-center gap-2 sm:hidden">
          <button id="contact-mobile-menu" class="p-2 text-neutral-300 hover:text-white border border-neutral-800" aria-label="Open Navigation Menu">
            <svg class="w-5 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor">
              <line x1="0" y1="2" x2="20" y2="2" stroke-width="1.75" />
              <line x1="0" y1="10" x2="20" y2="10" stroke-width="1.75" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Main Content Container -->
      <main class="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-16 lg:py-20 flex-1">
        
        <!-- Header: Massive Architectural Title -->
        <header class="pb-10 sm:pb-14 border-b border-[#222222]">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <div class="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-500 uppercase mb-2 flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                <span>STUDIO & ARCHIVAL COMMUNICATIONS</span>
              </div>
              <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-brand uppercase tracking-tighter text-white">
                CONTACT KAENSAN
              </h1>
            </div>

            <div class="text-left sm:text-right font-mono text-xs sm:text-sm text-neutral-400 tracking-widest">
              <span class="text-neutral-500">BANGKOK, THAILAND</span>
              <span class="text-neutral-700 mx-2 hidden sm:inline">/</span>
              <span class="text-neutral-300 block sm:inline mt-1 sm:mt-0" id="contact-live-clock">ICT (UTC+7)</span>
            </div>
          </div>
        </header>

        <!-- Two-Column Editorial Contact Grid (Split 5 / 7 cols) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 sm:pt-16 items-start">
          
          <!-- Left Column: Direct Communication Directory (5 cols) -->
          <div class="lg:col-span-5 space-y-10">
            
            <!-- Artist Identity Block -->
            <div>
              <div class="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">ARTIST & FILMMAKER</div>
              <h2 class="text-xl sm:text-2xl font-black font-brand uppercase tracking-tight text-white mb-2">
                KAENSAN RATTANASOMRERK
              </h2>
              <p class="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed">
                For exhibition commissions, curatorial essays, museum installations, film festivals, and archival acquisitions.
              </p>
            </div>

            <!-- Direct Contact Specs Table -->
            <div class="border border-[#222222] bg-[#070707] divide-y divide-[#181818] text-xs font-mono">
              
              <!-- Telephone -->
              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-[11px]">TELEPHONE</span>
                <a href="tel:+66859021411" class="text-white hover:text-neutral-300 transition-colors font-bold tracking-wider">
                  (66)85-902-1411
                </a>
              </div>

              <!-- Electronic Mail (Both addresses from kaensan.com/contact) -->
              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-[11px]">ELECTRONIC MAIL</span>
                <div class="flex flex-col sm:items-end gap-1">
                  <a href="mailto:kaensan@gmail.com" class="text-white hover:text-neutral-300 transition-colors font-medium">
                    kaensan@gmail.com
                  </a>
                  <span class="text-neutral-600 text-[10px] hidden sm:inline">/</span>
                  <a href="mailto:kaensan@me.com" class="text-neutral-300 hover:text-white transition-colors font-medium">
                    kaensan@me.com
                  </a>
                </div>
              </div>

              <!-- Instant Messaging Channels -->
              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-[11px]">SKYPE</span>
                <span class="text-white font-medium">Kaensan</span>
              </div>

              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-[11px]">LINE</span>
                <span class="text-white font-medium">Kaensan</span>
              </div>

              <!-- Studio Location -->
              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-[11px]">STUDIO LOCATION</span>
                <span class="text-white">Bangkok, Thailand</span>
              </div>

              <!-- Academic Appointment -->
              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-[11px]">ACADEMIC</span>
                <span class="text-neutral-300">Thammasat University (2020—2024)</span>
              </div>
            </div>

            <!-- Archival Notice Badge -->
            <div class="border-l-2 border-white/40 pl-4 py-1 text-[11px] font-mono text-neutral-400">
              <span class="text-neutral-300 font-bold uppercase">INSTITUTIONAL ARCHIVE:</span> Inquiries regarding permanent museum installations and archival plates are reviewed within 48 business hours.
            </div>

          </div>

          <!-- Right Column: Interactive Enquiry Form (7 cols) -->
          <div class="lg:col-span-7">
            
            <div class="border border-[#222222] bg-[#070707] p-6 sm:p-8 lg:p-10 shadow-2xl">
              
              <!-- Form Header -->
              <div class="pb-6 mb-8 border-b border-[#181818] flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h3 class="text-xl sm:text-2xl font-black font-brand uppercase tracking-tight text-white">
                    ENQUIRY FORM
                  </h3>
                  <p class="text-xs font-mono text-neutral-400 uppercase tracking-wider mt-1">
                    Direct communication dispatch
                  </p>
                </div>
                <div class="text-[11px] font-mono text-neutral-500">
                  <span class="text-red-400">*</span> REQUIRED FIELDS
                </div>
              </div>

              <!-- Form Container -->
              <form id="contact-enquiry-form" class="space-y-6" novalidate>
                
                <!-- Name Field (Required) -->
                <div>
                  <label for="contact-name" class="block text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-2">
                    NAME <span class="text-red-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    required 
                    placeholder="ENTER YOUR FULL NAME"
                    class="w-full bg-[#0c0c0c] border border-[#222222] focus:border-white focus:bg-black focus:outline-none transition-colors p-3.5 sm:p-4 text-xs sm:text-sm font-mono text-white placeholder-neutral-700"
                  />
                  <span id="name-error" class="hidden text-[11px] font-mono text-red-400 mt-1.5 block">
                    Please provide your name.
                  </span>
                </div>

                <!-- Email Field -->
                <div>
                  <label for="contact-email" class="block text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-2">
                    EMAIL
                  </label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    placeholder="YOUR.NAME@INSTITUTION.ORG"
                    class="w-full bg-[#0c0c0c] border border-[#222222] focus:border-white focus:bg-black focus:outline-none transition-colors p-3.5 sm:p-4 text-xs sm:text-sm font-mono text-white placeholder-neutral-700"
                  />
                  <span id="email-error" class="hidden text-[11px] font-mono text-red-400 mt-1.5 block">
                    Please provide a valid email address.
                  </span>
                </div>

                <!-- Phone Field -->
                <div>
                  <label for="contact-phone" class="block text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-2">
                    PHONE
                  </label>
                  <input 
                    type="tel" 
                    id="contact-phone" 
                    name="phone" 
                    placeholder="+66 (0) 00 000 0000"
                    class="w-full bg-[#0c0c0c] border border-[#222222] focus:border-white focus:bg-black focus:outline-none transition-colors p-3.5 sm:p-4 text-xs sm:text-sm font-mono text-white placeholder-neutral-700"
                  />
                </div>

                <!-- Message Field (Required) -->
                <div>
                  <label for="contact-message" class="block text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-2">
                    MESSAGE <span class="text-red-400">*</span>
                  </label>
                  <textarea 
                    id="contact-message" 
                    name="message" 
                    rows="5" 
                    required 
                    placeholder="DESCRIBE YOUR INQUIRY, EXHIBITION PROPOSAL, OR CURATORIAL COMMISSION..."
                    class="w-full bg-[#0c0c0c] border border-[#222222] focus:border-white focus:bg-black focus:outline-none transition-colors p-3.5 sm:p-4 text-xs sm:text-sm font-mono text-white placeholder-neutral-700 leading-relaxed resize-y"
                  ></textarea>
                  <span id="message-error" class="hidden text-[11px] font-mono text-red-400 mt-1.5 block">
                    Please enter your message.
                  </span>
                </div>

                <!-- Action Button & Feedback Area -->
                <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button 
                    type="submit" 
                    id="contact-submit-btn" 
                    class="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-xl inline-flex items-center justify-center gap-2 group"
                  >
                    <span>SUBMIT ENQUIRY</span>
                    <span class="group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                  <div class="text-[10px] font-mono text-neutral-600 text-center sm:text-right">
                    SECURE TRANSMISSION // SSL ENCRYPTED
                  </div>
                </div>

                <!-- Success / Confirmation Notice (Hidden by Default) -->
                <div id="contact-success-banner" class="hidden mt-6 p-4 border border-emerald-500/40 bg-emerald-950/20 text-xs font-mono text-emerald-300">
                  <div class="flex items-center gap-2 font-bold mb-1">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>ENQUIRY TRANSMITTED SUCCESSFULLY</span>
                  </div>
                  <p class="text-neutral-300 text-[11px] leading-relaxed">
                    Thank you for your transmission. Kaensan Rattanasomrerk will respond to your message promptly.
                  </p>
                </div>

              </form>

            </div>

          </div>

        </div>

      </main>

      <!-- Institutional Footer -->
      <footer class="w-full border-t border-[#222222] bg-[#050505] px-4 sm:px-8 lg:px-12 py-10 sm:py-12 text-xs font-mono text-neutral-500 mt-16">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2">
            <span class="text-white font-bold tracking-tighter uppercase font-brand">KAENSAN</span>
            <span>—</span>
            <span>2014—2024 © KAENSAN RATTANASOMRERK. ALL RIGHTS RESERVED.</span>
          </div>

          <div class="flex items-center gap-6 text-neutral-400 text-[11px]">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">INSTAGRAM</a>
            <a href="https://vimeo.com" target="_blank" rel="noreferrer" class="hover:text-white transition-colors">VIMEO</a>
            <a href="mailto:kaensan@gmail.com" class="hover:text-white transition-colors">EMAIL</a>
          </div>
        </div>
      </footer>

    </div>
  `;
}
