import { renderHomeScreenDesktop, renderHomeScreenMobile } from './components/home.js';
import { renderArchiveDetailDesktop, renderArchiveDetailMobile } from './components/archive.js';
import { renderWorksCatalogue } from './components/works.js';
import { renderAboutPage } from './components/about.js';
import { renderContactPage } from './components/contact.js';
import { renderSearchModal, renderLightboxModal, renderMobileNavDrawer, toggleAudioSoundscape } from './components/modals.js';
import { ARCHIVE_DATA } from './data.js';

// Application State
const state = {
  currentViewMode: 'screen_8', // 'screen_8' | 'screen_9' | 'works' | 'about' | 'screen_7' | 'screen_6' | 'fluid'
  activePage: 'home', // 'home' | 'works' | 'about' | 'detail'
  activeCategoryFilter: 'ALL',
  selectedWorkId: 'heavy-metal-2023',
  mobileSlideIndex: 0,
  cardSlideIndices: {}, // { [workId]: activeSlideIndex }
  dossierSlideIndex: 0,
  isAudioActive: false,
};

// Global flag to suppress click navigation during swipe
let isGlobalSwiping = false;

// Bangkok Clock Ticker
function getBangkokTimeString() {
  const now = new Date();
  return now.toLocaleTimeString('en-US', {
    timeZone: 'Asia/Bangkok',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
}

function updateLiveClocks() {
  const timeStr = getBangkokTimeString();
  const toolbarClock = document.getElementById('toolbar-live-time');
  if (toolbarClock) toolbarClock.textContent = `${timeStr} BKK`;

  const homeLiveTime = document.getElementById('home-live-time');
  if (homeLiveTime) homeLiveTime.textContent = timeStr;

  const mobileLiveTime = document.getElementById('mobile-live-time');
  if (mobileLiveTime) mobileLiveTime.textContent = timeStr;

  const footerLiveTime = document.getElementById('footer-live-time');
  if (footerLiveTime) footerLiveTime.textContent = `${timeStr} ICT`;

  const mobileArchiveTime = document.getElementById('mobile-archive-time');
  if (mobileArchiveTime) mobileArchiveTime.textContent = timeStr;

  const worksLiveTime = document.getElementById('works-live-time');
  if (worksLiveTime) worksLiveTime.textContent = `${timeStr} ICT`;

  const contactLiveTime = document.getElementById('contact-live-clock');
  if (contactLiveTime) contactLiveTime.textContent = `${timeStr} ICT`;
}

// Render the application root
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const mode = state.currentViewMode;
  const isFluid = mode === 'fluid';
  const isDesktopScreen = isFluid 
    ? window.innerWidth >= 1024 
    : (mode === 'screen_8' || mode === 'screen_7' || mode === 'works');

  let htmlContent = '';

  if (state.activePage === 'home') {
    if (mode === 'screen_9' || (!isDesktopScreen && isFluid)) {
      // Screen 9: Home Mobile
      htmlContent = `
        <div class="max-w-md mx-auto min-h-screen border-x border-[#222222] shadow-2xl bg-black">
          ${renderHomeScreenMobile()}
        </div>
      `;
    } else {
      // Screen 8: Home Desktop
      htmlContent = renderHomeScreenDesktop();
    }
  } else if (state.activePage === 'works') {
    // Works Catalogue Overview Screen (Images first, Title second, Short details third)
    htmlContent = renderWorksCatalogue(state.cardSlideIndices);
  } else if (state.activePage === 'about') {
    // Biography & Curatorial Timeline Screen (kaensan.com/about)
    htmlContent = renderAboutPage();
  } else if (state.activePage === 'contact') {
    // Contact & Enquiry Form Screen (kaensan.com/contact)
    htmlContent = renderContactPage();
  } else {
    // Work Detail Screen
    if (mode === 'screen_6' || (!isDesktopScreen && isFluid)) {
      // Screen 6: Archive Detail Mobile
      htmlContent = `
        <div class="max-w-md mx-auto min-h-screen border-x border-[#222222] shadow-2xl bg-black">
          ${renderArchiveDetailMobile(state.selectedWorkId, state.dossierSlideIndex)}
        </div>
      `;
    } else {
      // Screen 7: Archive Detail Desktop
      htmlContent = renderArchiveDetailDesktop(state.selectedWorkId, state.dossierSlideIndex);
    }
  }

  app.innerHTML = htmlContent;
  bindEvents();
  updateLiveClocks();
}

// Bind DOM event listeners
function bindEvents() {
  // Navigation: Brand / Home
  const brandHome = document.getElementById('nav-brand-home');
  if (brandHome) {
    brandHome.addEventListener('click', () => {
      state.activePage = 'home';
      state.currentViewMode = 'screen_8';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const mobileBrandHome = document.getElementById('mobile-nav-brand');
  if (mobileBrandHome) {
    mobileBrandHome.addEventListener('click', () => {
      state.activePage = 'home';
      state.currentViewMode = 'screen_9';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // CTA Explore Archive -> Enters Works Catalogue Overview
  const ctaExplore = document.getElementById('cta-explore-archive');
  if (ctaExplore) {
    ctaExplore.addEventListener('click', () => {
      state.activePage = 'works';
      state.currentViewMode = 'works';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // CTA Explore Archive (Mobile variant in SCR_8 footer)
  const ctaExploreMobileSCR8 = document.getElementById('cta-explore-archive-mobile');
  if (ctaExploreMobileSCR8) {
    ctaExploreMobileSCR8.addEventListener('click', () => {
      state.activePage = 'works';
      state.currentViewMode = 'works';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const mobileCtaExplore = document.getElementById('mobile-cta-explore');
  if (mobileCtaExplore) {
    mobileCtaExplore.addEventListener('click', () => {
      state.activePage = 'works';
      state.currentViewMode = 'works';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Top Nav Buttons (WORK)
  const navWorkButtons = [
    document.getElementById('nav-btn-work'),
    document.getElementById('nav-btn-archive'),
    document.getElementById('nav-works'),
    document.getElementById('works-link-work'),
  ];
  navWorkButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        state.activePage = 'works';
        state.currentViewMode = 'works';
        updateToolbarTabs();
        renderApp();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });

  // Works Page Nav Events
  const worksNavHome = document.getElementById('works-nav-home');
  if (worksNavHome) {
    worksNavHome.addEventListener('click', () => {
      state.activePage = 'home';
      state.currentViewMode = 'screen_8';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const worksLinkHome = document.getElementById('works-link-home');
  if (worksLinkHome) {
    worksLinkHome.addEventListener('click', () => {
      state.activePage = 'home';
      state.currentViewMode = 'screen_8';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const worksSearchTrigger = document.getElementById('works-search-trigger');
  if (worksSearchTrigger) {
    worksSearchTrigger.addEventListener('click', openSearchModal);
  }

  // Category filter tabs on Works page
  const filterBtns = document.querySelectorAll('.work-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategoryFilter = btn.getAttribute('data-category');
      renderApp();
    });
  });

  // Work Cards Click -> Opens Detail View
  const workCards = document.querySelectorAll('.work-card');
  workCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (isGlobalSwiping) return; // Prevent detail opening if user was swiping photos
      if (e.target.closest('.card-carousel-btn') || e.target.closest('.card-dash-indicator')) {
        return; // NEVER open detail when interacting with carousel buttons or dash dots
      }
      state.selectedWorkId = card.getAttribute('data-work-id');
      state.dossierSlideIndex = state.cardSlideIndices[state.selectedWorkId] || 0;
      state.activePage = 'detail';
      if (state.currentViewMode === 'works' || state.currentViewMode === 'screen_8') {
        state.currentViewMode = 'screen_7';
      } else if (state.currentViewMode === 'screen_9') {
        state.currentViewMode = 'screen_6';
      }
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Detail Page Back Button -> Returns to Works Catalogue
  const archiveBackHome = document.getElementById('archive-back-home');
  if (archiveBackHome) {
    archiveBackHome.addEventListener('click', () => {
      state.activePage = 'works';
      state.currentViewMode = 'works';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const mobileArchiveBack = document.getElementById('mobile-archive-back');
  if (mobileArchiveBack) {
    mobileArchiveBack.addEventListener('click', () => {
      state.activePage = 'works';
      state.currentViewMode = 'works';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Nav Buttons (ABOUT)
  const navAboutButtons = [
    document.getElementById('nav-btn-about'),
    document.getElementById('works-link-about'),
    document.getElementById('about-link-about'),
    document.getElementById('nav-about'),
    document.getElementById('drawer-nav-about'),
  ];
  navAboutButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        state.activePage = 'about';
        state.currentViewMode = 'about';
        updateToolbarTabs();
        renderApp();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });

  // About Page Nav Events
  const aboutNavHome = document.getElementById('about-nav-home');
  if (aboutNavHome) {
    aboutNavHome.addEventListener('click', () => {
      state.activePage = 'home';
      state.currentViewMode = 'screen_8';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const aboutLinkWork = document.getElementById('about-link-work');
  if (aboutLinkWork) {
    aboutLinkWork.addEventListener('click', () => {
      state.activePage = 'works';
      state.currentViewMode = 'works';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Global Navigation: Contact Links
  const contactButtons = [
    document.getElementById('nav-btn-contact'),
    document.getElementById('about-btn-contact-cta'),
    document.getElementById('about-link-contact'),
    document.getElementById('nav-contact'),
    document.getElementById('works-link-contact'),
    document.getElementById('footer-contact-link'),
    document.getElementById('contact-link-contact')
  ];
  contactButtons.forEach(btn => {
    if (btn) {
      btn.addEventListener('click', () => {
        state.activePage = 'contact';
        state.currentViewMode = 'contact';
        updateToolbarTabs();
        renderApp();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });

  // Contact Page Internal Navigation Links
  const contactNavHome = document.getElementById('contact-nav-home');
  if (contactNavHome) {
    contactNavHome.addEventListener('click', () => {
      state.activePage = 'works';
      state.currentViewMode = 'works';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const contactLinkWork = document.getElementById('contact-link-work');
  if (contactLinkWork) {
    contactLinkWork.addEventListener('click', () => {
      state.activePage = 'works';
      state.currentViewMode = 'works';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const contactLinkAbout = document.getElementById('contact-link-about');
  if (contactLinkAbout) {
    contactLinkAbout.addEventListener('click', () => {
      state.activePage = 'about';
      state.currentViewMode = 'about';
      updateToolbarTabs();
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Wire up Contact Form Validation & Transmission
  setupContactForm();

  // Search Triggers
  const searchTriggers = [
    document.getElementById('nav-btn-search'),
    document.getElementById('mobile-search-btn'),
    document.getElementById('archive-search-trigger'),
    document.getElementById('mobile-archive-search'),
    document.getElementById('contact-search-trigger'),
  ];
  searchTriggers.forEach(btn => {
    if (btn) btn.addEventListener('click', openSearchModal);
  });

  // Mobile Drawer Menu Triggers
  const drawerTriggers = [
    document.getElementById('mobile-menu-toggle'),
    document.getElementById('mobile-archive-menu'),
    document.getElementById('works-mobile-menu'),
    document.getElementById('about-mobile-menu'),
    document.getElementById('contact-mobile-menu'),
  ];
  drawerTriggers.forEach(btn => {
    if (btn) btn.addEventListener('click', openMobileDrawer);
  });

  // Soundscape Trigger
  const btnSoundscape = document.getElementById('btn-soundscape-trigger');
  if (btnSoundscape) {
    btnSoundscape.addEventListener('click', () => {
      toggleAudioSoundscape((isPlaying) => {
        state.isAudioActive = isPlaying;
        if (isPlaying) {
          btnSoundscape.classList.add('bg-white', 'text-black');
          btnSoundscape.classList.remove('bg-black/70', 'text-white');
          btnSoundscape.innerHTML = `
            <span class="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span>[ SOUNDSCAPE ACTIVE // 28HZ RESONANCE — MUTE ]</span>
          `;
        } else {
          btnSoundscape.classList.remove('bg-white', 'text-black');
          btnSoundscape.classList.add('bg-black/70', 'text-white');
          btnSoundscape.innerHTML = `
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-live-dot"></span>
            <span>[ INITIATE SOUNDSCAPE / AUDIO LOOP ]</span>
          `;
        }
      });
    });
  }

  // Lightbox on Bento Cards in Screen 7
  const bentoCards = document.querySelectorAll('.bento-card');
  bentoCards.forEach(card => {
    card.addEventListener('click', () => {
      const itemId = card.getAttribute('data-item-id');
      const item = ARCHIVE_DATA.featuredWork?.processItems?.find(p => p.id === itemId);
      if (item) openLightbox(item);
    });
  });

  // Mobile Carousel in Screen 6
  setupMobileCarousel();

  // Multi-image Carousel for Works Catalogue Cards
  setupCardCarousels();

  // Multi-image Hero Slider for Detail Dossier
  setupDossierSliders();
}

// Works Card Carousel Controls (Prev/Next buttons, touch swipe, mouse drag swipe, dash dots)
function setupCardCarousels() {
  // 1. Chevrons / Prev-Next buttons
  const carouselBtns = document.querySelectorAll('.card-carousel-btn');
  carouselBtns.forEach(btn => {
    // Suppress mousedown/mouseup/touch bubbling so parent card doesn't treat it as a card click
    ['mousedown', 'mouseup', 'touchstart', 'touchend', 'pointerdown', 'pointerup'].forEach(evtType => {
      btn.addEventListener(evtType, (e) => {
        e.stopPropagation();
      });
    });

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const workId = btn.getAttribute('data-work-id');
      const action = btn.getAttribute('data-action');
      const work = ARCHIVE_DATA.works.find(w => w.id === workId);
      if (!work || !Array.isArray(work.images) || work.images.length <= 1) return;

      let current = state.cardSlideIndices[workId] || 0;
      if (action === 'next') {
        current = (current + 1) % work.images.length;
      } else {
        current = (current - 1 + work.images.length) % work.images.length;
      }
      state.cardSlideIndices[workId] = current;
      updateCardCarouselDOM(workId, current, work.images);
    });
  });

  // 2. Dash Dots (Direct click jump to photo)
  const dashIndicators = document.querySelectorAll('.card-dash-indicator');
  dashIndicators.forEach(dashBtn => {
    ['mousedown', 'mouseup', 'touchstart', 'touchend', 'pointerdown', 'pointerup'].forEach(evtType => {
      dashBtn.addEventListener(evtType, (e) => {
        e.stopPropagation();
      });
    });

    dashBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      const workId = dashBtn.getAttribute('data-work-id');
      const slideIdx = parseInt(dashBtn.getAttribute('data-slide-index'), 10);
      const work = ARCHIVE_DATA.works.find(w => w.id === workId);
      if (!work || !Array.isArray(work.images) || isNaN(slideIdx)) return;

      state.cardSlideIndices[workId] = slideIdx;
      updateCardCarouselDOM(workId, slideIdx, work.images);
    });
  });

  // 3. Touch swipe & pointer drag on .card-carousel-surface
  const surfaces = document.querySelectorAll('.card-carousel-surface');
  surfaces.forEach(surface => {
    const workId = surface.getAttribute('data-work-id');
    const work = ARCHIVE_DATA.works.find(w => w.id === workId);
    if (!work || !Array.isArray(work.images) || work.images.length <= 1) return;

    let startX = 0;
    let startY = 0;
    let isTouching = false;

    const onStart = (clientX, clientY) => {
      startX = clientX;
      startY = clientY;
      isTouching = true;
    };

    const onMove = (clientX, clientY) => {
      if (!isTouching) return;
      const dx = clientX - startX;
      const dy = clientY - startY;
      if (Math.abs(dx) > 12 && Math.abs(dx) > Math.abs(dy)) {
        isGlobalSwiping = true;
      }
    };

    const onEnd = (clientX) => {
      if (!isTouching) return;
      isTouching = false;
      const dx = clientX - startX;
      if (Math.abs(dx) > 35) {
        let current = state.cardSlideIndices[workId] || 0;
        if (dx < 0) {
          // Swiped left -> Next photo
          current = (current + 1) % work.images.length;
        } else {
          // Swiped right -> Prev photo
          current = (current - 1 + work.images.length) % work.images.length;
        }
        state.cardSlideIndices[workId] = current;
        updateCardCarouselDOM(workId, current, work.images);
      }
      setTimeout(() => {
        isGlobalSwiping = false;
      }, 200);
    };

    // Touch events for mobile/tablet
    surface.addEventListener('touchstart', (e) => {
      if (e.target.closest('.card-carousel-btn') || e.target.closest('.card-dash-indicator')) return;
      if (e.touches.length === 1) {
        onStart(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    surface.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        onMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    surface.addEventListener('touchend', (e) => {
      if (e.changedTouches.length > 0) {
        onEnd(e.changedTouches[0].clientX);
      }
    });

    // Mouse drag support for desktop
    let isMouseDown = false;
    surface.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      if (e.target.closest('.card-carousel-btn') || e.target.closest('.card-dash-indicator')) return;
      isMouseDown = true;
      onStart(e.clientX, e.clientY);
    });

    surface.addEventListener('mousemove', (e) => {
      if (!isMouseDown) return;
      onMove(e.clientX, e.clientY);
    });

    surface.addEventListener('mouseup', (e) => {
      if (!isMouseDown) return;
      isMouseDown = false;
      onEnd(e.clientX);
    });

    surface.addEventListener('mouseleave', () => {
      if (isMouseDown) {
        isMouseDown = false;
        setTimeout(() => { isGlobalSwiping = false; }, 100);
      }
    });
  });
}

function updateCardCarouselDOM(workId, currentIdx, images) {
  const img = document.getElementById(`card-img-${workId}`);
  const counter = document.getElementById(`card-counter-${workId}`);
  const dashes = document.querySelectorAll(`.card-dash-${workId}`);
  const activeObj = images[currentIdx];
  const url = typeof activeObj === 'string' ? activeObj : activeObj.url;
  const alt = activeObj.alt || '';

  if (img) {
    img.src = url;
    img.alt = alt;
  }
  if (counter) {
    counter.textContent = `${currentIdx + 1}/${images.length}`;
  }
  dashes.forEach((dash, idx) => {
    if (idx === currentIdx) {
      dash.className = `card-dash-${workId} h-[3px] w-6 bg-white transition-all duration-300 rounded-full`;
    } else {
      dash.className = `card-dash-${workId} h-[3px] w-2.5 bg-neutral-600 transition-all duration-300 rounded-full`;
    }
  });
}

// Detail Dossier Multi-image Hero Slider
function setupDossierSliders() {
  const work = ARCHIVE_DATA.works.find(w => w.id === state.selectedWorkId);
  if (!work || !Array.isArray(work.images) || work.images.length <= 1) return;

  const images = work.images;
  const total = images.length;

  function updateDossierView(newIndex) {
    state.dossierSlideIndex = (newIndex + total) % total;
    state.cardSlideIndices[work.id] = state.dossierSlideIndex; // Keep card in sync

    const activeObj = images[state.dossierSlideIndex];
    const url = typeof activeObj === 'string' ? activeObj : activeObj.url;
    const alt = activeObj.alt || work.title;
    const caption = activeObj.title || `PHOTO 0${state.dossierSlideIndex + 1}`;

    // Desktop elements
    const heroImg = document.getElementById('dossier-hero-img');
    const heroCounter = document.getElementById('dossier-hero-counter');
    const heroDashes = document.querySelectorAll('.dossier-hero-dash');

    if (heroImg) {
      heroImg.src = url;
      heroImg.alt = alt;
    }
    if (heroCounter) {
      heroCounter.textContent = `0${state.dossierSlideIndex + 1} / 0${total}`;
    }
    heroDashes.forEach((dash, idx) => {
      dash.className = `dossier-hero-dash h-[3px] ${idx === state.dossierSlideIndex ? 'w-6 bg-white' : 'w-2 bg-neutral-600'} transition-all duration-300 rounded-full`;
    });

    // Mobile elements
    const mobileHeroImg = document.getElementById('mobile-dossier-hero-img');
    const mobileCounter = document.getElementById('mobile-dossier-hero-counter');
    const mobileDashes = document.querySelectorAll('.mobile-dossier-dash');

    if (mobileHeroImg) {
      mobileHeroImg.src = url;
      mobileHeroImg.alt = alt;
    }
    if (mobileCounter) {
      mobileCounter.textContent = `0${state.dossierSlideIndex + 1} / 0${total}`;
    }
    mobileDashes.forEach((dash, idx) => {
      dash.className = `mobile-dossier-dash h-[2px] ${idx === state.dossierSlideIndex ? 'w-4 bg-white' : 'w-2 bg-neutral-600'} transition-all rounded-full`;
    });
  }

  // Desktop buttons
  const prevBtn = document.getElementById('dossier-hero-prev');
  const nextBtn = document.getElementById('dossier-hero-next');
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateDossierView(state.dossierSlideIndex - 1);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateDossierView(state.dossierSlideIndex + 1);
    });
  }

  // Mobile buttons
  const mobilePrev = document.getElementById('mobile-dossier-prev');
  const mobileNext = document.getElementById('mobile-dossier-next');
  if (mobilePrev) {
    mobilePrev.addEventListener('click', (e) => {
      e.stopPropagation();
      updateDossierView(state.dossierSlideIndex - 1);
    });
  }
  if (mobileNext) {
    mobileNext.addEventListener('click', (e) => {
      e.stopPropagation();
      updateDossierView(state.dossierSlideIndex + 1);
    });
  }

  // Touch and pointer swipe handlers on hero surfaces
  const surfaces = [
    document.getElementById('dossier-hero-surface'),
    document.getElementById('mobile-dossier-hero-surface'),
  ].filter(Boolean);

  surfaces.forEach(surface => {
    let startX = 0;
    let startY = 0;
    let isTracking = false;

    surface.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isTracking = true;
      }
    }, { passive: true });

    surface.addEventListener('touchend', (e) => {
      if (!isTracking || e.changedTouches.length === 0) return;
      isTracking = false;
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) {
          updateDossierView(state.dossierSlideIndex + 1);
        } else {
          updateDossierView(state.dossierSlideIndex - 1);
        }
      }
    });

    // Mouse drag for desktop hero
    let isMouseDown = false;
    surface.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      if (e.target.closest('button')) return;
      startX = e.clientX;
      isMouseDown = true;
    });

    surface.addEventListener('mouseup', (e) => {
      if (!isMouseDown) return;
      isMouseDown = false;
      const dx = e.clientX - startX;
      if (Math.abs(dx) > 35) {
        if (dx < 0) {
          updateDossierView(state.dossierSlideIndex + 1);
        } else {
          updateDossierView(state.dossierSlideIndex - 1);
        }
      }
    });
  });
}

// Mobile Carousel Controls for Screen 6
function setupMobileCarousel() {
  const prevBtn = document.getElementById('btn-carousel-prev');
  const nextBtn = document.getElementById('btn-carousel-next');
  const carouselImg = document.getElementById('mobile-carousel-img');
  const slideCounter = document.getElementById('mobile-slide-counter');
  const dashes = document.querySelectorAll('.carousel-dash');
  const items = ARCHIVE_DATA.featuredWork?.processItems || [];

  if (!prevBtn || !nextBtn || !carouselImg || items.length === 0) return;

  function updateCarouselView() {
    const item = items[state.mobileSlideIndex];
    carouselImg.src = item.image;
    carouselImg.alt = item.title;
    if (slideCounter) slideCounter.textContent = `0${state.mobileSlideIndex + 1} / 04`;

    dashes.forEach((dash, idx) => {
      if (idx === state.mobileSlideIndex) {
        dash.className = 'carousel-dash w-6 h-[2px] bg-white transition-all';
      } else {
        dash.className = 'carousel-dash w-4 h-[2px] bg-neutral-600 transition-all';
      }
    });
  }

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    state.mobileSlideIndex = (state.mobileSlideIndex - 1 + items.length) % items.length;
    updateCarouselView();
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    state.mobileSlideIndex = (state.mobileSlideIndex + 1) % items.length;
    updateCarouselView();
  });

  dashes.forEach((dash, idx) => {
    dash.style.cursor = 'pointer';
    dash.addEventListener('click', () => {
      state.mobileSlideIndex = idx;
      updateCarouselView();
    });
  });
}

// Modal Handlers
function openSearchModal() {
  const container = document.getElementById('modal-container');
  if (!container) return;
  container.innerHTML = renderSearchModal();

  const closeBtn = document.getElementById('search-modal-close');
  const backdrop = document.getElementById('search-modal-backdrop');
  const searchInput = document.getElementById('search-input');
  const resultsList = document.getElementById('search-results-list');

  const close = () => { container.innerHTML = ''; };
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });
  }

  // Live search filtering
  if (searchInput && resultsList) {
    searchInput.focus();
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const allItems = ARCHIVE_DATA.works.map(w => ({
        id: w.id,
        title: `${w.title} (${w.year})`,
        meta: `${w.subtitle} // ${w.venue}`,
        target: 'detail'
      }));

      const filtered = allItems.filter(item => 
        item.title.toLowerCase().includes(q) || item.meta.toLowerCase().includes(q)
      );

      if (filtered.length === 0) {
        resultsList.innerHTML = `
          <div class="p-6 text-center text-xs font-mono text-neutral-500">
            NO ARCHIVE RECORDS MATCHING "${q.toUpperCase()}"
          </div>
        `;
      } else {
        resultsList.innerHTML = filtered.map(item => `
          <div class="search-item p-3 border border-neutral-900 hover:border-neutral-700 hover:bg-neutral-900 cursor-pointer flex justify-between items-center transition-colors" data-work-id="${item.id}">
            <div>
              <div class="text-white font-bold text-sm uppercase font-brand">${item.title}</div>
              <div class="text-[11px] text-neutral-400 font-mono">${item.meta}</div>
            </div>
            <span class="text-xs font-mono text-neutral-500">DETAIL →</span>
          </div>
        `).join('');

        resultsList.querySelectorAll('.search-item').forEach(itemEl => {
          itemEl.addEventListener('click', () => {
            const workId = itemEl.getAttribute('data-work-id');
            if (workId) {
              state.selectedWorkId = workId;
              state.activePage = 'detail';
              state.currentViewMode = 'screen_7';
              updateToolbarTabs();
              renderApp();
              close();
            }
          });
        });
      }
    });

    // Also bind existing initial items
    resultsList.querySelectorAll('.search-item').forEach(itemEl => {
      itemEl.addEventListener('click', () => {
        const workId = itemEl.getAttribute('data-work-id');
        if (workId) {
          state.selectedWorkId = workId;
          state.activePage = 'detail';
          state.currentViewMode = 'screen_7';
          updateToolbarTabs();
          renderApp();
          close();
        }
      });
    });
  }
}

function openLightbox(item) {
  const container = document.getElementById('modal-container');
  if (!container) return;
  container.innerHTML = renderLightboxModal(item);

  const closeBtn = document.getElementById('lightbox-close');
  const backdrop = document.getElementById('lightbox-backdrop');

  const close = () => { container.innerHTML = ''; };
  if (closeBtn) closeBtn.addEventListener('click', close);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) close();
    });
  }
}

function openMobileDrawer() {
  const container = document.getElementById('modal-container');
  if (!container) return;
  container.innerHTML = renderMobileNavDrawer();

  const closeBtn = document.getElementById('drawer-close-btn');
  const close = () => { container.innerHTML = ''; };
  if (closeBtn) closeBtn.addEventListener('click', close);

  const navHome = document.getElementById('drawer-nav-home');
  if (navHome) {
    navHome.addEventListener('click', () => {
      state.activePage = 'home';
      state.currentViewMode = 'screen_9';
      updateToolbarTabs();
      renderApp();
      close();
    });
  }

  const navArchive = document.getElementById('drawer-nav-archive');
  if (navArchive) {
    navArchive.addEventListener('click', () => {
      state.activePage = 'works';
      state.currentViewMode = 'works';
      updateToolbarTabs();
      renderApp();
      close();
    });
  }

  const navAbout = document.getElementById('drawer-nav-about');
  if (navAbout) {
    navAbout.addEventListener('click', () => {
      state.activePage = 'about';
      state.currentViewMode = 'about';
      updateToolbarTabs();
      renderApp();
      close();
    });
  }

  const navContact = document.getElementById('drawer-nav-contact');
  if (navContact) {
    navContact.addEventListener('click', () => {
      state.activePage = 'contact';
      state.currentViewMode = 'contact';
      updateToolbarTabs();
      renderApp();
      close();
    });
  }
}

// Screen Switcher Toolbar Logic
function setupToolbar() {
  const btnScr8 = document.getElementById('btn-screen-8');
  const btnScr9 = document.getElementById('btn-screen-9');
  const btnWorks = document.getElementById('btn-works');
  const btnScr7 = document.getElementById('btn-screen-7');
  const btnScr6 = document.getElementById('btn-screen-6');
  const btnResp = document.getElementById('btn-responsive');

  if (btnScr8) {
    btnScr8.addEventListener('click', () => {
      state.currentViewMode = 'screen_8';
      state.activePage = 'home';
      updateToolbarTabs();
      renderApp();
    });
  }

  if (btnScr9) {
    btnScr9.addEventListener('click', () => {
      state.currentViewMode = 'screen_9';
      state.activePage = 'home';
      updateToolbarTabs();
      renderApp();
    });
  }

  if (btnWorks) {
    btnWorks.addEventListener('click', () => {
      state.currentViewMode = 'works';
      state.activePage = 'works';
      updateToolbarTabs();
      renderApp();
    });
  }

  const btnAbout = document.getElementById('btn-about');
  if (btnAbout) {
    btnAbout.addEventListener('click', () => {
      state.currentViewMode = 'about';
      state.activePage = 'about';
      updateToolbarTabs();
      renderApp();
    });
  }

  const btnContact = document.getElementById('btn-contact');
  if (btnContact) {
    btnContact.addEventListener('click', () => {
      state.currentViewMode = 'contact';
      state.activePage = 'contact';
      updateToolbarTabs();
      renderApp();
    });
  }

  if (btnScr7) {
    btnScr7.addEventListener('click', () => {
      state.currentViewMode = 'screen_7';
      state.activePage = 'detail';
      updateToolbarTabs();
      renderApp();
    });
  }

  if (btnScr6) {
    btnScr6.addEventListener('click', () => {
      state.currentViewMode = 'screen_6';
      state.activePage = 'detail';
      updateToolbarTabs();
      renderApp();
    });
  }

  if (btnResp) {
    btnResp.addEventListener('click', () => {
      state.currentViewMode = 'fluid';
      updateToolbarTabs();
      renderApp();
    });
  }
}

function updateToolbarTabs() {
  const tabIds = {
    'screen_8': 'btn-screen-8',
    'screen_9': 'btn-screen-9',
    'works': 'btn-works',
    'about': 'btn-about',
    'contact': 'btn-contact',
    'screen_7': 'btn-screen-7',
    'screen_6': 'btn-screen-6',
    'fluid': 'btn-responsive',
  };

  Object.entries(tabIds).forEach(([mode, id]) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    const isCurrent = (state.currentViewMode === mode) || (mode === 'works' && state.activePage === 'works') || (mode === 'about' && state.activePage === 'about') || (mode === 'contact' && state.activePage === 'contact');
    if (isCurrent) {
      btn.className = 'screen-tab px-2 py-0.5 border border-white bg-white text-black font-semibold uppercase text-[10px] transition-colors';
    } else {
      btn.className = 'screen-tab px-2 py-0.5 border border-[#333333] hover:border-neutral-500 text-neutral-400 hover:text-white uppercase text-[10px] transition-colors';
    }
  });
}

// Setup Contact Form Validation and Simulated Dispatch
function setupContactForm() {
  const form = document.getElementById('contact-enquiry-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const successBanner = document.getElementById('contact-success-banner');
    const submitBtn = document.getElementById('contact-submit-btn');

    let isValid = true;

    if (!nameInput.value.trim()) {
      nameError.classList.remove('hidden');
      nameInput.classList.add('border-red-500');
      isValid = false;
    } else {
      nameError.classList.add('hidden');
      nameInput.classList.remove('border-red-500');
    }

    if (emailInput.value.trim() && !/^\S+@\S+\.\S+$/.test(emailInput.value.trim())) {
      emailError.classList.remove('hidden');
      emailInput.classList.add('border-red-500');
      isValid = false;
    } else {
      emailError.classList.add('hidden');
      emailInput.classList.remove('border-red-500');
    }

    if (!messageInput.value.trim()) {
      messageError.classList.remove('hidden');
      messageInput.classList.add('border-red-500');
      isValid = false;
    } else {
      messageError.classList.add('hidden');
      messageInput.classList.remove('border-red-500');
    }

    if (!isValid) return;

    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>TRANSMITTING...</span>';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>SUBMIT ENQUIRY</span><span class="group-hover:translate-x-1 transition-transform">→</span>';
      if (successBanner) {
        successBanner.classList.remove('hidden');
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
    }, 600);
  });
}

// Global Keyboard Shortcuts
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const container = document.getElementById('modal-container');
    if (container) container.innerHTML = '';
  }
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openSearchModal();
  }
  if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
    e.preventDefault();
    openSearchModal();
  }
});

// Window resize handler for fluid mode
window.addEventListener('resize', () => {
  if (state.currentViewMode === 'fluid') {
    renderApp();
  }
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  setupToolbar();
  renderApp();
  setInterval(updateLiveClocks, 1000);
});
