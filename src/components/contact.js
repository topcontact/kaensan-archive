import { renderFooter } from './footer.js';

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
          <button id="contact-nav-home" class="group flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors focus:outline-none cursor-pointer">
            <span class="group-hover:-translate-x-1 transition-transform">←</span>
            <span class="text-xl sm:text-2xl font-black font-brand tracking-tighter uppercase text-white">KAENSAN</span>
          </button>
          <span class="text-neutral-700 font-mono text-sm hidden sm:inline">/</span>
          <span class="text-sm font-mono text-neutral-400 uppercase tracking-widest hidden md:inline">
            CONTACT & ENQUIRIES
          </span>
        </div>

        <!-- Right: Desktop Nav Links -->
        <div class="hidden sm:flex items-center gap-6 md:gap-8 text-sm font-mono tracking-widest uppercase text-neutral-400">
          <button id="contact-link-work" class="hover:text-white transition-colors cursor-pointer">WORK</button>
          <button id="contact-link-about" class="hover:text-white transition-colors cursor-pointer">ABOUT</button>
          <button id="contact-link-contact" class="text-white border-b border-white pb-0.5 cursor-pointer font-bold">CONTACT</button>
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
          <div>
            <div class="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-2 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-white animate-pulse"></span>
              <span>STUDIO & ARCHIVAL COMMUNICATIONS</span>
            </div>
            <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-brand uppercase tracking-tighter text-white">
              CONTACT KAENSAN
            </h1>
          </div>
        </header>

        <!-- Two-Column Editorial Contact Grid (Split 5 / 7 cols) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 sm:pt-16 items-start">
          
          <!-- Left Column: Direct Communication Directory (5 cols) -->
          <div class="lg:col-span-5 space-y-10">
            
            <!-- Artist Identity Block -->
            <div>
              <div class="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-2 font-bold">ARTIST & FILMMAKER</div>
              <h2 class="text-2xl sm:text-3xl font-black font-brand uppercase tracking-tight text-white mb-2">
                KAENSAN RATTANASOMRERK
              </h2>
              <p class="text-sm sm:text-base text-neutral-300 font-sans leading-relaxed">
                For exhibition commissions, curatorial essays, museum installations, film festivals, and archival acquisitions.
              </p>
            </div>

            <!-- Direct Contact Specs Table -->
            <div class="border border-[#222222] bg-[#070707] divide-y divide-[#181818] text-sm font-mono">
              
              <!-- Telephone -->
              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-sm font-bold">TELEPHONE</span>
                <a href="tel:+66859021411" class="text-white hover:text-neutral-300 transition-colors font-bold tracking-wider">
                  (66)85-902-1411
                </a>
              </div>

              <!-- Electronic Mail (Both addresses from kaensan.com/contact) -->
              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-sm font-bold">ELECTRONIC MAIL</span>
                <div class="flex flex-col sm:items-end gap-1">
                  <a href="mailto:kaensan@gmail.com" class="text-white hover:text-neutral-300 transition-colors font-medium">
                    kaensan@gmail.com
                  </a>
                  <span class="text-neutral-600 text-sm hidden sm:inline">/</span>
                  <a href="mailto:kaensan@me.com" class="text-neutral-300 hover:text-white transition-colors font-medium">
                    kaensan@me.com
                  </a>
                </div>
              </div>

              <!-- Instant Messaging Channels -->
              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-sm font-bold">SKYPE</span>
                <span class="text-white font-medium">Kaensan</span>
              </div>

              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-sm font-bold">LINE</span>
                <span class="text-white font-medium">Kaensan</span>
              </div>

              <!-- Studio Location -->
              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-sm font-bold">STUDIO LOCATION</span>
                <span class="text-white">Bangkok, Thailand</span>
              </div>

              <!-- Academic Appointment -->
              <div class="p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1.5 hover:bg-[#0c0c0c] transition-colors">
                <span class="text-neutral-500 uppercase tracking-widest text-sm font-bold">ACADEMIC</span>
                <span class="text-neutral-300">Thammasat University (2020—2024)</span>
              </div>
            </div>

            <!-- Archival Notice Badge -->
            <div class="border-l-2 border-white/40 pl-4 py-1.5 text-sm font-mono text-neutral-300">
              <span class="text-white font-bold uppercase">INSTITUTIONAL ARCHIVE:</span> Inquiries regarding permanent museum installations and archival plates are reviewed within 48 business hours.
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
                  <p class="text-sm font-mono text-neutral-400 uppercase tracking-wider mt-1">
                    Direct communication dispatch
                  </p>
                </div>
                <div class="text-sm font-mono text-neutral-400">
                  <span class="text-red-400">*</span> REQUIRED FIELDS
                </div>
              </div>

              <!-- Form Container (Streamlined: EMAIL & MESSAGE Only) -->
              <form id="contact-enquiry-form" class="space-y-6" novalidate>
                
                <!-- Anti-Spam Honeypot Field (Hidden from real users) -->
                <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

                <!-- Email Field (Required) -->
                <div>
                  <label for="contact-email" class="block text-sm font-mono uppercase tracking-widest text-neutral-300 font-bold mb-2">
                    EMAIL <span class="text-red-400">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    required
                    placeholder="YOUR.NAME@INSTITUTION.ORG"
                    class="w-full bg-[#0c0c0c] border border-[#222222] focus:border-white focus:bg-black focus:outline-none transition-colors p-4 text-sm sm:text-base font-mono text-white placeholder-neutral-700"
                  />
                  <span id="email-error" class="hidden text-sm font-mono text-red-400 mt-1.5 block">
                    Please provide a valid email address.
                  </span>
                </div>

                <!-- Message Field (Required) -->
                <div>
                  <label for="contact-message" class="block text-sm font-mono uppercase tracking-widest text-neutral-300 font-bold mb-2">
                    MESSAGE <span class="text-red-400">*</span>
                  </label>
                  <textarea 
                    id="contact-message" 
                    name="message" 
                    rows="6" 
                    required 
                    placeholder="DESCRIBE YOUR INQUIRY, EXHIBITION PROPOSAL, OR CURATORIAL COMMISSION..."
                    class="w-full bg-[#0c0c0c] border border-[#222222] focus:border-white focus:bg-black focus:outline-none transition-colors p-4 text-sm sm:text-base font-mono text-white placeholder-neutral-700 leading-relaxed resize-y"
                  ></textarea>
                  <span id="message-error" class="hidden text-sm font-mono text-red-400 mt-1.5 block">
                    Please enter your message.
                  </span>
                </div>

                <!-- Action Button & Security Badge Area -->
                <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button 
                    type="submit" 
                    id="contact-submit-btn" 
                    class="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-neutral-200 text-sm font-mono font-bold tracking-widest uppercase transition-all duration-200 cursor-pointer shadow-xl inline-flex items-center justify-center gap-2 group"
                  >
                    <span>SUBMIT ENQUIRY</span>
                    <span class="group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                  <div class="text-sm font-mono text-neutral-500 text-center sm:text-right">
                    DIRECT DISPATCH // SSL ENCRYPTED
                  </div>
                </div>

                <!-- Success / Confirmation Notice (Hidden by Default) -->
                <div id="contact-success-banner" class="hidden mt-6 p-4 sm:p-5 border border-emerald-500/40 bg-emerald-950/20 text-sm font-mono text-emerald-300">
                  <div class="flex items-center gap-2 font-bold mb-1">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>ENQUIRY TRANSMITTED SUCCESSFULLY</span>
                  </div>
                  <p class="text-neutral-300 text-sm leading-relaxed" id="contact-success-desc">
                    Your transmission has been forwarded to kaensan@gmail.com. We will respond to your email promptly.
                  </p>
                </div>

                <!-- Error Notice (Hidden by Default) -->
                <div id="contact-error-banner" class="hidden mt-6 p-4 sm:p-5 border border-red-500/40 bg-red-950/20 text-sm font-mono text-red-300">
                  <div class="flex items-center gap-2 font-bold mb-1">
                    <span>TRANSMISSION FAILED</span>
                  </div>
                  <p class="text-neutral-300 text-sm leading-relaxed" id="contact-error-desc">
                    Unable to send message via automated service. Please contact directly at <a href="mailto:kaensan@gmail.com" class="text-white underline font-bold">kaensan@gmail.com</a>.
                  </p>
                </div>

              </form>

            </div>

          </div>

        </div>

      </main>

      <!-- Institutional Footer -->
      ${renderFooter({ containerClass: 'max-w-5xl xl:max-w-6xl mx-auto', extraClass: 'mt-16' })}

    </div>
  `;
}
