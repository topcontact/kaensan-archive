import { renderFooter } from './footer.js';
import { ARCHIVE_DATA } from '../data.js';
import { archiveStore } from '../sanity/api.js';
import { urlFor } from '../sanity/client.js';

/**
 * Default Curatorial Timeline Data
 */
const defaultTimelineData = [
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

/**
 * About Page Component
 * Complete curatorial biography, education, exhibition timeline (2012—2024),
 * artist residencies, and film/biennale work experience
 */
export function renderAboutPage() {
  const artist = ARCHIVE_DATA.artist || {};
  const allWorks = (archiveStore.data?.works && archiveStore.data.works.length > 0)
    ? archiveStore.data.works
    : (ARCHIVE_DATA.works || []);

  const norm = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]/g, '');

  const findMatchingWork = (title, workId) => {
    if (workId) {
      const match = allWorks.find((w) => w.id === workId);
      if (match) return match;
    }
    const titleNorm = norm(title);
    return allWorks.find((w) => {
      const wNorm = norm(w.title);
      return wNorm === titleNorm || wNorm.includes(titleNorm) || titleNorm.includes(wNorm);
    });
  };

  let timelineData = defaultTimelineData;

  if (archiveStore.timeline && archiveStore.timeline.length > 0) {
    const grouped = {};
    archiveStore.timeline.forEach((item) => {
      const y = String(item.year || '2024').trim();
      if (!grouped[y]) grouped[y] = [];
      grouped[y].push({
        title: item.title,
        workId: item.workId,
        exhibition: item.exhibitionName || 'Exhibition',
        venue: item.venue || '',
        location: item.location || '',
        note: item.note || '',
        workNumber: item.workNumber,
        workSubtitle: item.workSubtitle,
        workMedium: item.workMedium,
        workDimensions: item.workDimensions,
        workImage: item.workImage,
        workImageAlt: item.workImageAlt,
        workSummary: item.workSummary,
      });
    });
    timelineData = Object.keys(grouped)
      .sort((a, b) => Number(b) - Number(a))
      .map((year) => ({
        year,
        items: grouped[year],
      }));
  }

  const profileImg = artist.profileImage ? urlFor(artist.profileImage).url() : '/assets/kaensan_portrait.jpg';
  const artistName = artist.name || 'KAENSAN RATTANASOMRERK';
  const born = artist.born || '1989, Bangkok, TH';
  const academic = artist.lectureship || 'Lecturer, Thammasat (2020–2024)';
  const eduMa = artist.education?.[0] ? `${artist.education[0].institution} (${artist.education[0].year})` : 'Chiang Mai Univ (2023)';
  const eduBa = artist.education?.[1] ? `${artist.education[1].institution} (${artist.education[1].year})` : 'Thammasat Univ (2012)';
  const residencies = artist.residencies?.[0] ? artist.residencies[0].location : 'BKK, Thailand';

  return `
    <div class="min-h-screen bg-black text-[#F0F0F0] selection:bg-white selection:text-black select-none">
      
      <!-- Institutional Top Navigation Bar (Responsive Desktop & Mobile) -->
      <nav class="sticky top-0 w-full bg-black/95 backdrop-blur-md border-b border-[#222222] h-16 sm:h-20 flex justify-between items-center px-4 sm:px-8 lg:px-12 z-40">
        <!-- Left: Brand / Return to Home -->
        <div class="flex items-center gap-3 sm:gap-4">
          <button id="about-nav-home" class="group flex items-center gap-2 text-sm font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer">
            <span class="group-hover:-translate-x-1 transition-transform">←</span>
            <span class="text-xl sm:text-2xl font-black font-brand tracking-tighter uppercase text-white">KAENSAN</span>
          </button>
          <span class="text-neutral-700 font-mono text-sm hidden sm:inline">/</span>
          <span class="text-sm font-mono text-neutral-400 uppercase tracking-widest hidden md:inline">
            BIOGRAPHY & TIMELINE (2012—2024)
          </span>
        </div>

        <!-- Right: Desktop Nav Links -->
        <div class="hidden sm:flex items-center gap-6 md:gap-8 text-sm font-mono tracking-widest uppercase text-neutral-400">
          <button id="about-link-work" class="hover:text-white transition-colors cursor-pointer">WORK</button>
          <button id="about-link-about" class="text-white border-b border-white pb-0.5 cursor-pointer">ABOUT</button>
          <button id="about-link-contact" class="hover:text-white transition-colors cursor-pointer">CONTACT</button>
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
                  src="${profileImg}" 
                  alt="${artistName} — Portrait" 
                  class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div class="absolute bottom-2 left-2 bg-black/85 backdrop-blur px-3 py-1 text-sm font-mono tracking-widest text-neutral-300 border border-white/10">
                  ${artistName.toUpperCase()}
                </div>
              </div>
            </div>

            <!-- Artist Fact Sheet -->
            <div class="border border-[#222222] bg-[#070707] divide-y divide-[#1c1c1c] text-sm font-mono w-full">
              <div class="p-3 sm:p-3.5 flex justify-between items-center">
                <span class="text-neutral-500 uppercase text-sm">BORN</span>
                <span class="text-white text-right">${born}</span>
              </div>
              <div class="p-3 sm:p-3.5 flex justify-between items-center">
                <span class="text-neutral-500 uppercase text-sm">EDUCATION (MA)</span>
                <span class="text-white text-right">${eduMa}</span>
              </div>
              <div class="p-3 sm:p-3.5 flex justify-between items-center">
                <span class="text-neutral-500 uppercase text-sm">EDUCATION (BA)</span>
                <span class="text-white text-right">${eduBa}</span>
              </div>
              <div class="p-3 sm:p-3.5 flex justify-between items-center">
                <span class="text-neutral-500 uppercase text-sm">ACADEMIC</span>
                <span class="text-white text-right">${academic}</span>
              </div>
              <div class="p-3 sm:p-3.5 flex justify-between items-center">
                <span class="text-neutral-500 uppercase text-sm">RESIDENCIES</span>
                <span class="text-white text-right">${residencies}</span>
              </div>
            </div>
          </div>

          <!-- Right Column: Name & Authentic Curatorial Biography (8 cols) -->
          <div class="lg:col-span-8 flex flex-col justify-center">
            <div class="text-sm font-mono tracking-widest text-neutral-500 uppercase mb-2 sm:mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-white"></span>
              <span>BIOGRAPHY & CURATORIAL PROFILE</span>
            </div>

            <h1 class="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-brand uppercase tracking-tighter text-white mb-3 sm:mb-6 leading-tight">
              ${artistName.toUpperCase()}
            </h1>

            <div class="text-sm sm:text-base font-mono text-neutral-400 tracking-wider uppercase mb-6 sm:mb-8 border-l-2 border-white pl-3 sm:pl-4">
              ${artist.discipline || 'ARTIST & FILMMAKER'} // ${born.toUpperCase()}
            </div>

            <!-- Authentic Biography Text -->
            <div class="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-neutral-300 font-sans leading-[1.8] font-normal">
              ${artist.biography ? artist.biography.split('\n\n').map(p => `<p>${p}</p>`).join('') : `
                <p>
                  <strong class="text-white font-semibold">Kaensan Rattanasomrerk</strong> was born in 1989 in Bangkok, Thailand. He graduated from Thammasat University with a Bachelor of Arts in Journalism and Mass Communication, Film Department. He later pursued a Master of Arts in Visual Arts from the Faculty of Fine Arts at Chiang Mai University.
                </p>
                <p>
                  He utilizes moving images as a tool to address contemporary social issues. He possesses extensive knowledge and experience in filmmaking and visual arts; his artworks mainly stem from collaborations between moving images and other fields of study.
                </p>
                <p>
                  He is highly motivated to work cross-media with local communities and scientists. His works have been exhibited across <strong class="text-white">Germany, Japan, Taiwan, Singapore, and Thailand</strong>, including solo presentations at Edith Russ Haus, Museum of Something, and Treasure Hill Artist Village.
                </p>
              `}
            </div>
          </div>
        </section>

        <!-- Middle Section: Exhibition Timeline (2012 — 2024) -->
        <section class="pt-10 sm:pt-16">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#222222] gap-2">
            <div>
              <h2 class="text-2xl sm:text-3xl md:text-4xl font-black font-brand uppercase tracking-tight text-white">
                EXHIBITIONS & WORKS (2012 — 2024)
              </h2>
              <div class="text-xs sm:text-sm font-mono text-neutral-400 uppercase tracking-widest mt-1">
                SINGLE SOURCE OF TRUTH — EXHIBITION HISTORY WITH DIRECT DOSSIER ACCESS
              </div>
            </div>
            <div class="text-xs font-mono text-neutral-500 uppercase tracking-widest flex items-center gap-2">
              <span class="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>CLICK WORK TO PREVIEW OR OPEN DOSSIER</span>
            </div>
          </div>

          <!-- Timeline Architectural Grid (Mobile & Desktop Responsive) -->
          <div class="border border-[#222222] divide-y divide-[#222222] bg-[#070707]">
            ${timelineData.map((group, groupIdx) => `
              <div class="p-5 sm:p-7 md:p-8 flex flex-col md:grid md:grid-cols-12 gap-4 sm:gap-6 hover:bg-[#0c0c0c] transition-colors">
                
                <!-- Year Column (Header on mobile, 2 cols on desktop) -->
                <div class="md:col-span-2 pb-2 md:pb-0 border-b md:border-b-0 border-[#1a1a1a] flex items-baseline md:flex-col justify-between">
                  <div class="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-white tracking-tight">
                    ${group.year}
                  </div>
                  <div class="text-xs font-mono text-neutral-500 hidden md:block mt-1">
                    ${group.items.length} ${group.items.length === 1 ? 'ENTRY' : 'ENTRIES'}
                  </div>
                </div>

                <!-- Events Column (10 cols) -->
                <div class="md:col-span-10 divide-y divide-[#181818]">
                  ${group.items.map((item, itemIdx) => {
                    const matchedWork = findMatchingWork(item.title, item.workId);
                    const hasWork = Boolean(matchedWork);
                    const itemKey = `${groupIdx}-${itemIdx}-${norm(item.title)}`;
                    const previewImage = item.workImage || matchedWork?.image || matchedWork?.plate || '';
                    const previewAlt = item.workImageAlt || matchedWork?.title || item.title;
                    const workNumber = item.workNumber || matchedWork?.number || '01';
                    const workCategory = matchedWork?.category || 'CONTEMPORARY ART';
                    const workMedium = item.workMedium || matchedWork?.medium || item.workSubtitle || matchedWork?.subtitle || '';
                    const workDimensions = item.workDimensions || matchedWork?.dimensions || '';
                    const workSummary = item.workSummary || matchedWork?.summary || (matchedWork?.statement ? matchedWork.statement.slice(0, 180) + '...' : '');

                    return `
                      <div class="${itemIdx > 0 ? 'pt-5 mt-5' : ''} group/row">
                        <!-- Header row -->
                        <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-3">
                          
                          <!-- Left: Clickable Work Title + Exhibition Meta -->
                          <div class="flex-1 min-w-0">
                            <div class="flex items-baseline flex-wrap gap-x-2 gap-y-1">
                              ${hasWork ? `
                                <button 
                                  type="button"
                                  class="timeline-accordion-trigger group/btn inline-flex items-center gap-2 text-left cursor-pointer focus:outline-none"
                                  data-target-drawer="drawer-${itemKey}"
                                  aria-expanded="false"
                                  title="คลิกเพื่อเปิดกล่องดูรูปและรายละเอียดผลงาน"
                                >
                                  <span class="text-white font-bold font-brand uppercase tracking-tight text-base sm:text-lg md:text-xl group-hover/btn:text-neutral-300 underline decoration-neutral-700 underline-offset-4 group-hover/btn:decoration-white transition-all">
                                    ${item.title}
                                  </span>
                                  <span class="timeline-chevron inline-flex items-center justify-center w-5 h-5 text-xs font-mono font-bold text-neutral-400 group-hover/btn:text-white border border-neutral-800 group-hover/btn:border-neutral-500 bg-neutral-950 transition-colors">
                                    +
                                  </span>
                                </button>
                              ` : `
                                <span class="text-white font-bold font-brand uppercase tracking-tight text-base sm:text-lg md:text-xl">
                                  ${item.title}
                                </span>
                              `}

                              <span class="text-neutral-600 text-sm font-mono select-none">—</span>

                              <span class="text-neutral-300 text-sm sm:text-base font-sans font-medium">
                                ${item.exhibition}
                              </span>
                            </div>

                            <div class="text-xs sm:text-sm font-mono text-neutral-400 mt-1.5 flex flex-wrap items-center gap-2">
                              <span>${item.venue}</span>
                              ${item.note ? `<span class="text-neutral-500 italic">(${item.note})</span>` : ''}
                            </div>
                          </div>

                          <!-- Right: Location Badge + Direct Dossier Jump Link -->
                          <div class="flex items-center gap-2 self-start md:self-auto shrink-0 mt-1 md:mt-0">
                            ${item.location ? `
                              <span class="text-xs sm:text-sm font-mono text-neutral-300 border border-neutral-800 px-2.5 py-1 bg-neutral-950">
                                ${item.location}
                              </span>
                            ` : ''}

                            ${hasWork ? `
                              <button 
                                type="button"
                                class="timeline-direct-link text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white border border-neutral-800 hover:border-white px-2.5 py-1 bg-neutral-950 hover:bg-neutral-900 transition-colors cursor-pointer flex items-center gap-1.5"
                                data-work-id="${matchedWork.id}"
                                title="เปิดหน้าผลงานเต็ม (Work Dossier)"
                              >
                                <span>DOSSIER</span>
                                <span>↗</span>
                              </button>
                            ` : ''}
                          </div>

                        </div>

                        <!-- Expandable Preview Drawer (Single Source of Truth) -->
                        ${hasWork ? `
                          <div 
                            id="drawer-${itemKey}" 
                            class="timeline-preview-drawer hidden mt-4 border border-neutral-800 bg-[#0a0a0a] overflow-hidden transition-all duration-300 shadow-2xl"
                          >
                            <div class="p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
                              
                              <!-- Thumbnail Column (4 cols on desktop) -->
                              <div class="md:col-span-4">
                                <div class="relative aspect-video sm:aspect-[4/3] bg-black border border-neutral-800 overflow-hidden group/img cursor-pointer timeline-direct-link" data-work-id="${matchedWork.id}" title="คลิกเพื่อเปิดหน้าผลงานเต็ม">
                                  ${previewImage ? `
                                    <img 
                                      src="${previewImage}" 
                                      alt="${previewAlt}" 
                                      class="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500 ease-out"
                                      loading="lazy"
                                    />
                                  ` : `
                                    <div class="w-full h-full flex items-center justify-center text-neutral-600 font-mono text-xs">
                                      NO PREVIEW IMAGE
                                    </div>
                                  `}
                                  <div class="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                    <span class="text-xs font-mono tracking-widest text-white border border-white px-3 py-1 bg-black/80 backdrop-blur">
                                      VIEW DOSSIER ↗
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <!-- Specs & Dossier Telemetry Column (8 cols on desktop) -->
                              <div class="md:col-span-8 flex flex-col justify-between space-y-3">
                                <div>
                                  <!-- Micro Badges -->
                                  <div class="flex flex-wrap items-center gap-2 text-xs font-mono tracking-widest text-neutral-500 uppercase mb-1">
                                    <span>WORK NO. ${workNumber}</span>
                                    <span>/</span>
                                    <span class="text-neutral-400">${workCategory}</span>
                                    <span>/</span>
                                    <span class="text-neutral-300">${matchedWork.year || item.year}</span>
                                  </div>

                                  <!-- Work Title -->
                                  <h4 class="text-lg sm:text-xl font-black font-brand uppercase text-white tracking-tight">
                                    ${matchedWork.title}
                                  </h4>

                                  <!-- Medium / Dimensions -->
                                  ${(workMedium || workDimensions) ? `
                                    <div class="text-xs sm:text-sm font-mono text-neutral-400 mt-1">
                                      ${[workMedium, workDimensions].filter(Boolean).join(' // ')}
                                    </div>
                                  ` : ''}

                                  <!-- Short Curatorial Statement Excerpt -->
                                  ${workSummary ? `
                                    <p class="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mt-2.5 line-clamp-3">
                                      ${workSummary}
                                    </p>
                                  ` : ''}
                                </div>

                                <!-- Action CTAs -->
                                <div class="flex flex-wrap items-center gap-3 pt-3 border-t border-neutral-800/80">
                                  <button 
                                    type="button"
                                    class="timeline-goto-work bg-white text-black hover:bg-neutral-200 px-4 py-2 text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer transition-colors"
                                    data-work-id="${matchedWork.id}"
                                  >
                                    <span>OPEN WORK DOSSIER</span>
                                    <span class="text-sm">→</span>
                                  </button>

                                  <button 
                                    type="button"
                                    class="timeline-drawer-close text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 px-3 py-2 text-xs font-mono uppercase tracking-widest cursor-pointer transition-colors"
                                    data-target-drawer="drawer-${itemKey}"
                                  >
                                    ✕ CLOSE
                                  </button>
                                </div>
                              </div>

                            </div>
                          </div>
                        ` : ''}

                      </div>
                    `;
                  }).join('')}
                </div>

              </div>
            `).join('')}
          </div>
        </section>

        <!-- Work Experience & Film/Biennale Section -->
        <section class="pt-10 sm:pt-16">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-[#222222] gap-2">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-black font-brand uppercase tracking-tight text-white">
              FILM & BIENNALE EXPERIENCE
            </h2>
            <div class="text-sm font-mono text-neutral-400 uppercase tracking-widest">
              COLLABORATIVE DIRECTION, CINEMATOGRAPHY & EDITING
            </div>
          </div>

          <div class="border border-[#222222] divide-y divide-[#222222] bg-[#070707]">
            ${workExperienceData.map(item => `
              <div class="p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 hover:bg-[#0c0c0c] transition-colors font-mono text-sm">
                <div class="flex items-center gap-4">
                  <span class="text-neutral-500 text-sm font-bold">${item.year}</span>
                  <div>
                    <span class="text-white text-sm sm:text-base font-bold">${item.role}:</span>
                    <span class="text-neutral-300 text-sm sm:text-base font-sans ml-1">${item.project}</span>
                  </div>
                </div>
                <div class="text-sm text-neutral-400 border border-neutral-800 px-2.5 py-1 self-start sm:self-auto bg-neutral-950">
                  ${item.partner}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Direct Contact Footer Banner -->
        <section class="mt-12 sm:mt-16 p-6 sm:p-8 border border-[#222222] bg-gradient-to-r from-[#080808] via-black to-[#080808] flex flex-col md:flex-row justify-between items-start md:items-center gap-5 sm:gap-6">
          <div class="w-full sm:w-auto">
            <div class="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-1.5 font-bold">INQUIRIES & REPRODUCTION RIGHTS</div>
            <div class="text-lg sm:text-xl font-bold font-brand uppercase text-white tracking-tight">CONTACT KAENSAN STUDIO</div>
            <div class="text-sm font-mono text-neutral-400 mt-1 break-all sm:break-normal">
              kaensan@gmail.com // +(66) 85-902-1411
            </div>
          </div>

          <button id="about-btn-contact-cta" class="w-full md:w-auto px-6 py-3.5 border border-white bg-white text-black hover:bg-neutral-200 text-sm font-mono font-bold tracking-widest uppercase transition-colors text-center cursor-pointer">
            [ SEND DIRECT ENQUIRY → ]
          </button>
        </section>

      </main>

      <!-- Institutional Footer -->
      ${renderFooter({ containerClass: 'max-w-7xl mx-auto', extraClass: 'mt-12 sm:mt-16' })}

    </div>
  `;
}
