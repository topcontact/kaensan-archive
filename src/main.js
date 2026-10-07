import { renderHomeScreenDesktop, renderHomeScreenMobile } from './components/home.js';
import { renderArchiveDetailDesktop, renderArchiveDetailMobile } from './components/archive.js';
import { renderWorksCatalogue } from './components/works.js';
import { renderAboutPage } from './components/about.js';
import { renderContactPage } from './components/contact.js';
import { renderLightboxModal, renderMobileNavDrawer, toggleAudioSoundscape } from './components/modals.js';
import { ARCHIVE_DATA } from './data.js';

// Application State
const state = {
  activePage: 'home', // 'home' | 'works' | 'about' | 'contact' | 'detail'
  activeCategoryFilter: 'ALL',
  selectedWorkId: 'heavy-metal-2023',
  mobileSlideIndex: 0,
  cardSlideIndices: {}, // { [workId]: activeSlideIndex }
  dossierSlideIndex: 0,
  isAudioActive: false,
};

// Global flag to suppress click navigation during swipe
let isGlobalSwiping = false;

// Centralized SPA Router with Browser History API
function navigateTo(page, options = {}) {
  const { workId = null, pushHistory = true } = options;
  state.activePage = page;
  if (workId) {
    state.selectedWorkId = workId;
    state.dossierSlideIndex = state.cardSlideIndices[workId] || 0;
  }

  const url = new URL(window.location.href);
  url.searchParams.set('page', page);
  if (workId) {
    url.searchParams.set('work', workId);
  } else {
    url.searchParams.delete('work');
  }
  // Clean up any old dev parameters
  url.searchParams.delete('mode');
  url.searchParams.delete('screen');
  url.searchParams.delete('style');
  url.searchParams.delete('ratio');
  url.searchParams.delete('hero');
  url.searchParams.delete('detail_hero');
  url.searchParams.delete('hero_detail');
  url.searchParams.delete('dh');

  if (pushHistory) {
    window.history.pushState({ page, workId: state.selectedWorkId }, '', url.pathname + url.search);
  }

  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// In-App Back Navigation Handler (browser back with fallback)
function handleGoBack(fallbackPage = 'home') {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    navigateTo(fallbackPage, { pushHistory: true });
  }
}

// Browser Back / Forward & Gesture Swipe Navigation
window.addEventListener('popstate', (e) => {
  const params = new URLSearchParams(window.location.search);
  const page = (e.state && e.state.page) || params.get('page') || 'home';
  const work = (e.state && e.state.workId) || params.get('work') || state.selectedWorkId;

  state.activePage = page;
  if (work) {
    state.selectedWorkId = work;
    state.dossierSlideIndex = state.cardSlideIndices[work] || 0;
  }

  renderApp();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Render the application root (Pure Native Fluid Responsive)
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  const isMobile = window.innerWidth < 768;
  let htmlContent = '';

  if (state.activePage === 'home') {
    htmlContent = isMobile ? renderHomeScreenMobile() : renderHomeScreenDesktop();
  } else if (state.activePage === 'works') {
    htmlContent = renderWorksCatalogue(state.cardSlideIndices);
  } else if (state.activePage === 'about') {
    htmlContent = renderAboutPage();
  } else if (state.activePage === 'contact') {
    htmlContent = renderContactPage();
  } else if (state.activePage === 'detail') {
    htmlContent = isMobile 
      ? renderArchiveDetailMobile(state.selectedWorkId, state.dossierSlideIndex) 
      : renderArchiveDetailDesktop(state.selectedWorkId, state.dossierSlideIndex);
  } else {
    htmlContent = renderHomeScreenDesktop();
  }

  app.innerHTML = htmlContent;
  bindEvents();
}

// Bind DOM event listeners
function bindEvents() {
  // Navigation: Brand / Home
  ['nav-brand-home', 'mobile-nav-brand', 'works-nav-home'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => navigateTo('home'));
  });

  // CTA Explore Archive & Monolith Box -> Works
  ['cta-explore-archive', 'cta-explore-archive-mobile', 'mobile-cta-explore', 'monolith-hero-box'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => navigateTo('works'));
  });

  // Top Nav Buttons (WORK)
  ['nav-btn-work', 'nav-btn-archive', 'nav-works', 'works-link-work'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => navigateTo('works'));
  });

  const worksLinkHome = document.getElementById('works-link-home');
  if (worksLinkHome) {
    worksLinkHome.addEventListener('click', () => navigateTo('home'));
  }


  // Category filter tabs on Works page
  const filterBtns = document.querySelectorAll('.work-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeCategoryFilter = btn.getAttribute('data-category');
      renderApp();
    });
  });

  // Works Variant Selector buttons
  const variantBtns = document.querySelectorAll('.works-variant-btn');
  variantBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.worksCardStyle = btn.getAttribute('data-style');
      renderApp();
    });
  });

  // Works Aspect Ratio Selector buttons
  const ratioBtns = document.querySelectorAll('.works-ratio-btn');
  ratioBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.worksAspectRatio = btn.getAttribute('data-ratio');
      renderApp();
    });
  });

  // Home Hero Design Switcher buttons
  const heroDesignBtns = document.querySelectorAll('.home-hero-btn');
  heroDesignBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const design = btn.getAttribute('data-design');
      if (design) {
        state.homeHeroDesign = design;
        renderApp();
      }
    });
  });

  // Work Detail Hero Design Switcher buttons
  const detailHeroBtns = document.querySelectorAll('.detail-hero-btn');
  detailHeroBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const design = btn.getAttribute('data-design');
      if (design) {
        state.detailHeroDesign = design;
        renderApp();
      }
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
      const workId = card.getAttribute('data-work-id');
      navigateTo('detail', { workId });
    });
  });

  // Detail Page In-App Back Buttons (True Browser History Back)
  ['archive-back-home', 'mobile-archive-back'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => handleGoBack('works'));
  });

  // About Page In-App Back Button
  const aboutNavHome = document.getElementById('about-nav-home');
  if (aboutNavHome) {
    aboutNavHome.addEventListener('click', () => handleGoBack('home'));
  }

  // Contact Page In-App Back Button
  const contactNavHome = document.getElementById('contact-nav-home');
  if (contactNavHome) {
    contactNavHome.addEventListener('click', () => handleGoBack('home'));
  }

  // Nav Buttons (ABOUT)
  const navAboutButtons = [
    document.getElementById('nav-btn-about'),
    document.getElementById('works-link-about'),
    document.getElementById('about-link-about'),
    document.getElementById('nav-about'),
    document.getElementById('contact-link-about')
  ];
  navAboutButtons.forEach(btn => {
    if (btn) btn.addEventListener('click', () => navigateTo('about'));
  });

  // Nav Buttons (WORK) from other pages
  ['about-link-work', 'contact-link-work'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => navigateTo('works'));
  });

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
    if (btn) btn.addEventListener('click', () => navigateTo('contact'));
  });

  // Wire up Contact Form Validation & Transmission
  setupContactForm();


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
      close();
      navigateTo('home');
    });
  }

  const navArchive = document.getElementById('drawer-nav-archive');
  if (navArchive) {
    navArchive.addEventListener('click', () => {
      close();
      navigateTo('works');
    });
  }

  const navAbout = document.getElementById('drawer-nav-about');
  if (navAbout) {
    navAbout.addEventListener('click', () => {
      close();
      navigateTo('about');
    });
  }

  const navContact = document.getElementById('drawer-nav-contact');
  if (navContact) {
    navContact.addEventListener('click', () => {
      close();
      navigateTo('contact');
    });
  }
}

// ============================================================================
// Approach 1: Form Backend Service Integration (Web3Forms / Formspree)
// ============================================================================
// Configuration:
// 1. Visit https://web3forms.com/ to get a free Access Key for kaensan@gmail.com.
// 2. Insert key in WEB3FORMS_ACCESS_KEY below.
// 3. Free tier includes 250 transmissions/month with anti-spam honeypot protection.
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

// Setup Contact Form Validation and Service Dispatch
function setupContactForm() {
  const form = document.getElementById('contact-enquiry-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Anti-spam honeypot verification
    const botcheck = form.querySelector('input[name="botcheck"]');
    if (botcheck && botcheck.checked) {
      console.warn('Bot submission blocked via honeypot.');
      return;
    }

    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const successBanner = document.getElementById('contact-success-banner');
    const errorBanner = document.getElementById('contact-error-banner');
    const submitBtn = document.getElementById('contact-submit-btn');

    // Reset previous notification states
    let isValid = true;
    if (successBanner) successBanner.classList.add('hidden');
    if (errorBanner) errorBanner.classList.add('hidden');

    const emailValue = emailInput ? emailInput.value.trim() : '';
    const messageValue = messageInput ? messageInput.value.trim() : '';

    // Validate Email
    if (!emailValue || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      if (emailError) emailError.classList.remove('hidden');
      if (emailInput) emailInput.classList.add('border-red-500');
      isValid = false;
    } else {
      if (emailError) emailError.classList.add('hidden');
      if (emailInput) emailInput.classList.remove('border-red-500');
    }

    // Validate Message
    if (!messageValue || messageValue.length < 2) {
      if (messageError) messageError.classList.remove('hidden');
      if (messageInput) messageInput.classList.add('border-red-500');
      isValid = false;
    } else {
      if (messageError) messageError.classList.add('hidden');
      if (messageInput) messageInput.classList.remove('border-red-500');
    }

    if (!isValid) return;

    // Loading State
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span><span>TRANSMITTING...</span>';
    }

    try {
      // If Web3Forms Access Key is provided, dispatch directly via Web3Forms API
      if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            email: emailValue,
            message: messageValue,
            subject: `[KAENSAN ARCHIVE] New Inquiry from ${emailValue}`,
            from_name: 'Kaensan Archive Portal'
          })
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || 'Form submission failed');
        }
      } else {
        // Institutional dispatch simulation (for local preview / development)
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      // Success Display
      if (successBanner) {
        successBanner.classList.remove('hidden');
        successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
    } catch (err) {
      console.error('Contact Form Transmission Error:', err);
      // Fallback Display with direct mailto
      if (errorBanner) {
        const desc = document.getElementById('contact-error-desc');
        if (desc) {
          desc.innerHTML = `Unable to dispatch via automated service. Please contact directly at <a href="mailto:kaensan@gmail.com?subject=Archive%20Inquiry%20from%20${encodeURIComponent(emailValue)}&body=${encodeURIComponent(messageValue)}" class="text-white underline font-bold">kaensan@gmail.com</a>.`;
        }
        errorBanner.classList.remove('hidden');
        errorBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>SUBMIT ENQUIRY</span><span class="group-hover:translate-x-1 transition-transform">→</span>';
      }
    }
  });
}

// Global Keyboard Shortcuts
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const container = document.getElementById('modal-container');
    if (container) container.innerHTML = '';
  }
});

// Window resize handler (adapts layout across mobile/desktop boundary)
let lastIsMobile = window.innerWidth < 768;
window.addEventListener('resize', () => {
  const currentIsMobile = window.innerWidth < 768;
  if (currentIsMobile !== lastIsMobile) {
    lastIsMobile = currentIsMobile;
    renderApp();
  }
});

// Sync state from URL parameters
function syncFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const p = params.get('page');
  const w = params.get('work');
  if (p) {
    state.activePage = p;
    if (p === 'detail' && w) {
      state.selectedWorkId = w;
      state.dossierSlideIndex = state.cardSlideIndices[w] || 0;
    }
  }
}

// Global exposure for programmatic navigation & testing
window.__appState = state;
window.__renderApp = renderApp;
window.__navigateTo = navigateTo;

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  syncFromUrl();
  renderApp();
});
