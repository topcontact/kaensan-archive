/**
 * About Page Component
 * Complete curatorial biography, education, exhibition timeline (2012—2024),
 * artist residencies, and film/biennale work experience for KAENSAN RATTANASOMRERK
 * Sourced directly from official 2024 CV and Works documentation
 */
export function renderAboutPage() {
  const timelineData = [
    {
      year: '2024',
      items: [
        {
          title: 'The Spore',
          exhibition: 'Duo Exhibition',
          venue: 'Edith Russ Haus',
          location: 'Oldenburg, Germany'
        }
      ]
    },
    {
      year: '2023',
      items: [
        {
          title: 'Heavy Metal',
          exhibition: 'The Best Art Thesis Exhibition 2023 (Group)',
          venue: 'The Queen’s Gallery',
          location: 'Bangkok, Thailand'
        },
        {
          title: 'Heavy Metal',
          exhibition: 'Solo Exhibition',
          venue: 'Museum of Something',
          location: 'Chiang Mai, Thailand'
        },
        {
          title: 'Heavy Metal',
          exhibition: 'Mango Art Festival (Group)',
          venue: 'River City Bangkok',
          location: 'Bangkok, Thailand'
        }
      ]
    },
    {
      year: '2021',
      items: [
        {
          title: 'Sleeping Place',
          exhibition: 'You Exist, I Exist (Group)',
          venue: 'Absolute Space',
          location: 'Tainan, Taiwan'
        }
      ]
    },
    {
      year: '2019',
      items: [
        {
          title: 'Decibel (dB)',
          exhibition: 'Bangkok Through Poster (Group)',
          venue: 'Kinjai Contemporary',
          location: 'Bangkok, Thailand'
        },
        {
          title: 'Sleeping Place',
          exhibition: 'Play Time Over (Group)',
          venue: 'Bans Baan Tuek Art Center',
          location: 'Chiang Mai, Thailand'
        }
      ]
    },
    {
      year: '2018',
      items: [
        {
          title: 'In Sight',
          exhibition: 'Bangkok Layers: Topography of Mirror Cities (Group)',
          venue: 'Bangkok Art and Culture Centre (BACC)',
          location: 'Bangkok, Thailand'
        }
      ]
    },
    {
      year: '2017',
      items: [
        {
          title: 'Flare',
          exhibition: 'Wake Up Experiences (Group)',
          venue: 'Suan Mokkh',
          location: 'Bangkok, Thailand'
        }
      ]
    },
    {
      year: '2015',
      items: [
        {
          title: 'Sleep Apnea',
          exhibition: 'Sleep Apnea Exhibition (Solo Video Exhibition)',
          venue: 'Treasure Hill Artist Village',
          location: 'Taipei, Taiwan'
        },
        {
          title: 'Lost Sea',
          exhibition: 'Short-Term Memory (Group)',
          venue: 'Taipei Artist Village',
          location: 'Taipei, Taiwan'
        },
        {
          title: 'Rebirth',
          exhibition: 'On-Site Art Festival (Group)',
          venue: 'Chung Shan Creative Hub',
          location: 'Taipei, Taiwan'
        }
      ]
    },
    {
      year: '2014',
      items: [
        {
          title: 'Substantial',
          exhibition: 'Haunted Thresholds: Spirituality in Contemporary Southeast Asia (Group)',
          venue: 'Kunstverein Göttingen',
          location: 'Göttingen, Germany'
        },
        {
          title: 'Rebirth',
          exhibition: 'Rebirth Video Exhibition (Solo)',
          venue: 'Urahoro-Cho, Tokachi',
          location: 'Hokkaido, Japan'
        },
        {
          title: 'Substantial',
          exhibition: 'FAITH and FAIRY TALES: New Media Art for Thailand (Group)',
          venue: 'ADM Gallery, School of Art Design and Media, Nanyang Technological University',
          location: 'Singapore'
        },
        {
          title: 'Enclose',
          exhibition: 'Enclose Video Exhibition (Solo)',
          venue: 'Treasure Hill Artist Village',
          location: 'Taipei, Taiwan'
        }
      ]
    },
    {
      year: '2013',
      items: [
        {
          title: 'Exit',
          exhibition: 'Thaitai: A Measure of Understanding (Group)',
          venue: 'Chung Shan Creative Hub',
          location: 'Taipei, Taiwan'
        },
        {
          title: 'Substantial',
          exhibition: 'in transit Exhibition (Group)',
          venue: 'The Art Center, Office of Academic Resources, Chulalongkorn University',
          location: 'Bangkok, Thailand'
        }
      ]
    },
    {
      year: '2012',
      items: [
        {
          title: 'Rhythm',
          exhibition: 'Tid Silp Bon Ratchaburi #2 Art Festival',
          venue: 'City Art Festival',
          location: 'Ratchaburi, Thailand'
        },
        {
          title: 'Falling Rain',
          exhibition: 'Kuan-Du Film Festival',
          venue: 'Taipei National University of Arts',
          location: 'Taipei, Taiwan'
        }
      ]
    }
  ];

  const workExperienceData = [
    {
      year: '2024',
      role: 'Producer',
      project: 'BioSphere: The Evidence of Living Things (Documentary Film)',
      partner: 'National Biobank of Thailand'
    },
    {
      year: '2024',
      role: 'Cinematographer & Assistant Director',
      project: 'The Actor from Golden Triangle / Huei-Mo Village / Ruins of the Intelligence Bureau',
      partner: 'Thailand Biennale 2024 (Chia-Wei HSU)'
    },
    {
      year: '2022',
      role: 'Colorist',
      project: 'Rhizome',
      partner: 'Bangkok Art Biennale 2022 (Jakrawal Nilthamrong)'
    },
    {
      year: '2022',
      role: 'Onsite Editor & Cinematographer (B-Roll)',
      project: 'Anatomy of Time (Feature Film)',
      partner: 'Jakrawal Nilthamrong'
    },
    {
      year: '2018',
      role: 'Cinematographer & Editor',
      project: 'Chalood Nimsamer, The Thai Master Artist (Biography Documentary)',
      partner: 'Suporn Shoosongdej'
    },
    {
      year: '2016',
      role: 'Assistant Director',
      project: 'Ferris Wheel',
      partner: 'Phuttiphong Aroonpheng'
    },
    {
      year: '2015',
      role: 'Assistant Editor',
      project: 'Vanishing Point',
      partner: 'Jakrawal Nilthamrong'
    }
  ];

  return `
    <div class="min-h-screen bg-black text-[#F0F0F0] selection:bg-white selection:text-black select-none">
      
      <!-- Institutional Top Navigation Bar (Responsive Desktop & Mobile) -->
      <nav class="sticky top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#222222] h-16 sm:h-20 flex justify-between items-center px-4 sm:px-8 lg:px-12 z-40">
        <!-- Left: Brand / Return to Home -->
        <div class="flex items-center gap-3 sm:gap-4">
          <button id="about-nav-home" class="group flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-white transition-colors">
            <span class="group-hover:-translate-x-1 transition-transform">←</span>
            <span class="text-lg sm:text-xl font-black font-brand tracking-tighter uppercase text-white">KAENSAN</span>
          </button>
          <span class="text-neutral-700 font-mono text-xs hidden sm:inline">/</span>
          <span class="text-xs font-mono text-neutral-400 uppercase tracking-widest hidden md:inline">
            BIOGRAPHY & TIMELINE (2012—2024)
          </span>
        </div>

        <!-- Right: Desktop Nav Links -->
        <div class="hidden sm:flex items-center gap-6 md:gap-8 text-xs font-mono tracking-widest uppercase text-neutral-400">
          <button id="about-link-work" class="hover:text-white transition-colors">WORK</button>
          <button id="about-link-about" class="text-white border-b border-white pb-0.5">ABOUT</button>
          <button id="about-link-contact" class="hover:text-white transition-colors">CONTACT</button>
        </div>

        <!-- Right: Mobile Menu Toggle Button (2-line SVG) -->
        <div class="flex items-center gap-2 sm:hidden">
          <button id="about-mobile-menu" class="p-2 text-neutral-300 hover:text-white border border-neutral-800" aria-label="Open Navigation Menu">
            <svg class="w-5 h-3" viewBox="0 0 20 12" fill="none" stroke="currentColor">
              <line x1="0" y1="2" x2="20" y2="2" stroke-width="1.75" />
              <line x1="0" y1="10" x2="20" y2="10" stroke-width="1.75" />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Main Content Container -->
      <main class="w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-16">
        
        <!-- Top Section: Bio & Quick Telemetry Split -->
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start pb-12 sm:pb-16 border-b border-[#222222]">
          
          <!-- Left Column: Quick Telemetry (4 cols) -->
          <div class="lg:col-span-4 flex flex-col gap-5 sm:gap-6">
            <div class="border border-neutral-700 bg-neutral-950 p-2 shadow-2xl max-w-[280px] sm:max-w-xs w-full mx-auto lg:mx-0">
              <div class="relative aspect-[3/4] bg-black overflow-hidden border border-neutral-800 flex items-center justify-center">
                <img 
                  src="/assets/kaensan_portrait.jpg" 
                  alt="Kaensan Rattanasomrerk — Portrait" 
                  class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div class="absolute bottom-2 left-2 bg-black/85 backdrop-blur px-2.5 py-1 text-[9px] font-mono tracking-widest text-neutral-300 border border-white/10">
                  KAENSAN RATTANASOMRERK
                </div>
              </div>
            </div>

            <!-- Artist Fact Sheet (Exact 2024 CV data) -->
            <div class="border border-[#222222] bg-[#070707] divide-y divide-[#1c1c1c] text-xs font-mono w-full">
              <div class="p-2.5 sm:p-3 flex justify-between items-center">
                <span class="text-neutral-500 uppercase text-[11px]">BORN</span>
                <span class="text-white text-right">1989, Bangkok, TH</span>
              </div>
              <div class="p-2.5 sm:p-3 flex justify-between items-center">
                <span class="text-neutral-500 uppercase text-[11px]">EDUCATION (MA)</span>
                <span class="text-white text-right">Chiang Mai Univ (2023)</span>
              </div>
              <div class="p-2.5 sm:p-3 flex justify-between items-center">
                <span class="text-neutral-500 uppercase text-[11px]">EDUCATION (BA)</span>
                <span class="text-white text-right">Thammasat Univ (2012)</span>
              </div>
              <div class="p-2.5 sm:p-3 flex justify-between items-center">
                <span class="text-neutral-500 uppercase text-[11px]">ACADEMIC</span>
                <span class="text-white text-right">Lecturer, Thammasat (2020–2024)</span>
              </div>
              <div class="p-2.5 sm:p-3 flex justify-between items-center">
                <span class="text-neutral-500 uppercase text-[11px]">RESIDENCIES</span>
                <span class="text-white text-right">Taipei / Hokkaido (T-air)</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Name & Authentic Curatorial Biography (8 cols) -->
          <div class="lg:col-span-8 flex flex-col justify-center">
            <div class="text-[10px] sm:text-xs font-mono tracking-widest text-neutral-500 uppercase mb-2 sm:mb-3 flex items-center gap-2">
              <span class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white"></span>
              <span>BIOGRAPHY & CURATORIAL PROFILE</span>
            </div>

            <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-brand uppercase tracking-tighter text-white mb-3 sm:mb-6 leading-tight">
              KAENSAN<br class="hidden sm:inline" /> RATTANASOMRERK
            </h1>

            <div class="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider uppercase mb-6 sm:mb-8 border-l-2 border-white pl-3 sm:pl-4">
              ARTIST & FILMMAKER // BANGKOK, THAILAND
            </div>

            <!-- Authentic Biography Text (Verbatim from 2024 CV) -->
            <div class="space-y-4 sm:space-y-6 text-xs sm:text-base text-neutral-300 font-sans leading-[1.75] sm:leading-[1.8] font-normal">
              <p>
                <strong class="text-white font-semibold">Kaensan Rattanasomrerk</strong> was born in 1989 in Bangkok, Thailand. He graduated from Thammasat University with a Bachelor of Arts in Journalism and Mass Communication, Film Department. He later pursued a Master of Arts in Visual Arts from the Faculty of Fine Arts at Chiang Mai University.
              </p>

              <p>
                He utilizes moving images as a tool to address contemporary social issues. He possesses extensive knowledge and experience in filmmaking and visual arts; his artworks mainly stem from collaborations between moving images and other fields of study.
              </p>

              <p>
                He is highly motivated to work cross-media with local communities and scientists. His works have been exhibited across <strong class="text-white">Germany, Japan, Taiwan, Singapore, and Thailand</strong>, including solo presentations at Edith Russ Haus, Museum of Something, and Treasure Hill Artist Village.
              </p>
            </div>
          </div>
        </section>

        <!-- Middle Section: Exhibition Timeline (2012 — 2024) -->
        <section class="pt-10 sm:pt-16">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#222222] gap-2">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-black font-brand uppercase tracking-tight text-white">
              EXHIBITIONS & WORKS (2012 — 2024)
            </h2>
            <div class="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest">
              OFFICIAL CV EXHIBITION RECORD
            </div>
          </div>

          <!-- Timeline Architectural Grid (Mobile & Desktop Responsive) -->
          <div class="border border-[#222222] divide-y divide-[#222222] bg-[#070707]">
            ${timelineData.map(group => `
              <div class="p-4 sm:p-6 md:p-8 flex flex-col md:grid md:grid-cols-12 gap-4 sm:gap-6 hover:bg-[#0c0c0c] transition-colors">
                
                <!-- Year Column (Header on mobile, 2 cols on desktop) -->
                <div class="md:col-span-2 pb-2 md:pb-0 border-b md:border-b-0 border-[#1a1a1a] flex items-baseline md:flex-col justify-between">
                  <div class="text-xl sm:text-2xl md:text-3xl font-black font-mono text-white tracking-tight">
                    ${group.year}
                  </div>
                  <span class="text-[9px] sm:text-[10px] font-mono text-neutral-500 uppercase tracking-widest">
                    RECORD
                  </span>
                </div>

                <!-- Events Column (10 cols) -->
                <div class="md:col-span-10 divide-y divide-[#181818]">
                  ${group.items.map((item, idx) => `
                    <div class="${idx > 0 ? 'pt-3 sm:pt-4 mt-3 sm:mt-4' : ''} flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-2">
                      <div>
                        <span class="text-white font-bold font-brand uppercase tracking-tight text-sm sm:text-base md:text-lg">
                          ${item.title}
                        </span>
                        <span class="text-neutral-500 text-xs font-mono mx-1 sm:mx-2">—</span>
                        <span class="text-neutral-300 text-xs sm:text-sm font-sans font-medium">
                          ${item.exhibition}
                        </span>
                        <div class="text-[10px] sm:text-[11px] font-mono text-neutral-400 mt-1">
                          ${item.venue}
                        </div>
                      </div>

                      <div class="self-start sm:self-auto shrink-0 mt-1 sm:mt-0">
                        <span class="text-[9px] sm:text-[11px] font-mono text-neutral-400 border border-neutral-800 px-2 py-0.5 bg-neutral-950">
                          ${item.location}
                        </span>
                      </div>
                    </div>
                  `).join('')}
                </div>

              </div>
            `).join('')}
          </div>
        </section>

        <!-- Work Experience & Film/Biennale Section -->
        <section class="pt-10 sm:pt-16">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#222222] gap-2">
            <h2 class="text-xl sm:text-2xl md:text-3xl font-black font-brand uppercase tracking-tight text-white">
              FILM & BIENNALE EXPERIENCE
            </h2>
            <div class="text-[10px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest">
              COLLABORATIVE DIRECTION, CINEMATOGRAPHY & EDITING
            </div>
          </div>

          <div class="border border-[#222222] divide-y divide-[#222222] bg-[#070707]">
            ${workExperienceData.map(item => `
              <div class="p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 hover:bg-[#0c0c0c] transition-colors font-mono">
                <div class="flex items-center gap-4">
                  <span class="text-neutral-500 text-xs">${item.year}</span>
                  <div>
                    <span class="text-white text-xs sm:text-sm font-bold">${item.role}:</span>
                    <span class="text-neutral-300 text-xs sm:text-sm font-sans ml-1">${item.project}</span>
                  </div>
                </div>
                <div class="text-[11px] text-neutral-400 border border-neutral-800 px-2 py-0.5 self-start sm:self-auto bg-neutral-950">
                  ${item.partner}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Direct Contact Footer Banner -->
        <section class="mt-12 sm:mt-16 p-5 sm:p-8 border border-[#222222] bg-gradient-to-r from-[#080808] via-black to-[#080808] flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6">
          <div class="w-full sm:w-auto">
            <div class="text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-widest mb-1">INQUIRIES & REPRODUCTION RIGHTS</div>
            <div class="text-base sm:text-lg font-bold font-brand uppercase text-white tracking-tight">CONTACT KAENSAN STUDIO</div>
            <div class="text-xs font-mono text-neutral-400 mt-1 break-all sm:break-normal">
              kaensan@gmail.com // +(66) 85-902-1411
            </div>
          </div>

          <button id="about-btn-contact-cta" class="w-full md:w-auto px-6 py-3 border border-white bg-white text-black hover:bg-neutral-200 text-xs font-mono font-bold tracking-widest uppercase transition-colors text-center cursor-pointer">
            [ SEND DIRECT ENQUIRY → ]
          </button>
        </section>

      </main>

      <!-- Institutional Footer -->
      <footer class="w-full border-t border-[#222222] bg-[#050505] px-4 sm:px-8 lg:px-12 py-8 sm:py-10 text-xs font-mono text-neutral-400 mt-12 sm:mt-16">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div>
            <span class="text-white font-bold">KAENSAN RATTANASOMRERK</span>
            <span class="text-neutral-600 mx-1 sm:mx-2">|</span>
            <span class="text-neutral-500">BANGKOK, THAILAND</span>
          </div>

          <div class="text-neutral-500 text-[10px] sm:text-[11px]">
            © 2024 KAENSAN RATTANASOMRERK. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

    </div>
  `;
}
