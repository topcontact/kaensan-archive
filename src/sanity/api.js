import { sanityClient, isSanityConfigured, urlFor } from './client.js';
import { RAW_ARCHIVE_DATA, setArchiveData } from '../data.js';

/**
 * Global reactive data store
 * Initialized with local fallback data for zero-latency instant render
 */
export const archiveStore = {
  data: { ...RAW_ARCHIVE_DATA },
  timeline: [],
  contact: null,
  siteSettings: null,
  isLive: false,
  subscribers: new Set(),
};

/**
 * Subscribe to data changes (e.g. when Sanity data arrives)
 * @param {Function} callback 
 * @returns {Function} unsubscribe
 */
export function subscribeArchive(callback) {
  archiveStore.subscribers.add(callback);
  return () => archiveStore.subscribers.delete(callback);
}

function notifySubscribers() {
  archiveStore.subscribers.forEach((cb) => {
    try {
      cb(archiveStore.data);
    } catch (e) {
      console.error('[ArchiveStore] Subscriber notification error:', e);
    }
  });
}

/**
 * Transform Sanity Work document into template work structure
 */
function transformSanityWork(doc) {
  const workId = doc.slug?.current || doc.slug || doc._id;
  const localMatch = RAW_ARCHIVE_DATA.works.find((w) => w.id === workId);

  const coverUrl = doc.coverImage?.asset ? urlFor(doc.coverImage).url() : (localMatch ? localMatch.image : '');
  const plateUrl = doc.plateImage?.asset ? urlFor(doc.plateImage).url() : (localMatch ? localMatch.plate : coverUrl);

  const gallery = (Array.isArray(doc.galleryImages) && doc.galleryImages.length > 0)
    ? doc.galleryImages.map((img) => ({
        url: img.asset ? urlFor(img).url() : (img.url || ''),
        title: img.title || '',
        alt: img.alt || doc.title || '',
      }))
    : (localMatch?.images || []);

  return {
    id: doc.slug?.current || doc._id,
    number: doc.number || '01',
    title: doc.title || 'UNTITLED',
    subtitle: doc.subtitle || '',
    year: doc.year || '2024',
    category: doc.category || 'CONTEMPORARY ART',
    medium: doc.medium || '',
    dimensions: doc.dimensions || '',
    duration: doc.duration || '',
    components: doc.components || '',
    venue: doc.venue || '',
    curator: doc.curator || '',
    status: doc.status || 'ARCHIVED',
    image: coverUrl,
    plate: plateUrl,
    images: gallery,
    imageAlt: doc.coverImage?.alt || doc.title || 'Work documentation',
    summary: doc.summary || '',
    statement: doc.statement || '',
  };
}

/**
 * Fetch all content live from Sanity CMS
 */
export async function fetchLiveArchiveData() {
  if (!isSanityConfigured || !sanityClient) {
    console.info('[Sanity] No project ID configured. Using authentic local archive dataset.');
    return archiveStore.data;
  }

  try {
    const query = `{
      "works": *[_type == "work"] | order(order asc, year desc) {
        ...,
        "slug": slug.current,
        coverImage { ..., asset-> },
        plateImage { ..., asset-> },
        galleryImages[] { ..., asset-> }
      },
      "artist": *[_type == "artist"][0] {
        ...,
        profileImage { ..., asset-> }
      },
      "exhibitions": *[_type == "exhibition"] | order(year desc, order asc),
      "contact": *[_type == "contactInfo"][0],
      "settings": *[_type == "siteSettings"][0] {
        ...,
        currentExhibition {
          ...,
          customHeroImage { ..., asset-> },
          featuredWork-> {
            ...,
            "slug": slug.current,
            coverImage { ..., asset-> },
            plateImage { ..., asset-> }
          }
        }
      }
    }`;

    const result = await sanityClient.fetch(query);

    if (result && result.works && result.works.length > 0) {
      const transformedWorks = result.works.map(transformSanityWork);
      
      // Determine current exhibition hero (Automatic work fallback + optional custom overrides)
      let currentExhibition = RAW_ARCHIVE_DATA.currentExhibition;
      if (result.settings?.currentExhibition) {
        const ce = result.settings.currentExhibition;
        const fw = ce.featuredWork ? transformSanityWork(ce.featuredWork) : transformedWorks[0];
        
        // Custom hero image override if provided, else use the work's image
        const heroImg = ce.customHeroImage?.asset ? urlFor(ce.customHeroImage).url() : fw.image;
        
        // Default title format: "TITLE — YEAR" (e.g. "HEAVY METAL — 2023")
        const defaultTitle = fw.year && !fw.title.includes(fw.year) ? `${fw.title} — ${fw.year}` : fw.title;

        currentExhibition = {
          id: fw.id,
          title: ce.customTitle?.trim() ? ce.customTitle : defaultTitle,
          subtitle: ce.customSubtitle?.trim() ? ce.customSubtitle : (fw.subtitle || fw.medium || ''),
          heroImage: heroImg,
          heroAlt: fw.imageAlt || fw.title,
          venue: ce.customVenue?.trim() ? ce.customVenue : (fw.venue || ''),
          curator: ce.customCurator?.trim() ? ce.customCurator : (fw.curator || ''),
          year: fw.year || '2023',
          status: ce.customStatus?.trim() ? ce.customStatus : (fw.status || 'PERMANENT ARCHIVE'),
          dates: ce.customDates?.trim() ? ce.customDates : '',
          city: ce.customCity?.trim() ? ce.customCity : 'BANGKOK, TH',
        };
      }

      // Update store
      const updatedData = {
        currentExhibition,
        artist: result.artist ? {
          ...RAW_ARCHIVE_DATA.artist,
          name: result.artist.name || RAW_ARCHIVE_DATA.artist.name,
          born: result.artist.born || RAW_ARCHIVE_DATA.artist.born,
          discipline: result.artist.discipline || RAW_ARCHIVE_DATA.artist.discipline,
          biography: result.artist.biography || RAW_ARCHIVE_DATA.artist.biography,
          education: result.artist.education || RAW_ARCHIVE_DATA.artist.education,
          residencies: result.artist.residencies || RAW_ARCHIVE_DATA.artist.residencies,
          lectureship: result.artist.lectureship || RAW_ARCHIVE_DATA.artist.lectureship,
        } : RAW_ARCHIVE_DATA.artist,
        works: transformedWorks,
      };

      archiveStore.data = updatedData;
      setArchiveData(updatedData);

      archiveStore.timeline = result.exhibitions || [];
      archiveStore.contact = result.contact || null;
      archiveStore.siteSettings = result.settings || null;
      archiveStore.isLive = true;

      console.info('[Sanity] Successfully synchronized with Sanity CMS.');
      notifySubscribers();
    }
  } catch (error) {
    console.warn('[Sanity] Fetch failed. Gracefully maintaining authentic local dataset.', error);
  }

  return archiveStore.data;
}

/**
 * Access work by ID from reactive store
 */
export function getWorkFromStore(id) {
  const works = archiveStore.data.works || RAW_ARCHIVE_DATA.works;
  return works.find((w) => w.id === id) || works[0];
}
