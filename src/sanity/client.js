import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Environment variables from Vite (.env / .env.local)
export const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_PROJECT_ID || '';
export const SANITY_DATASET = import.meta.env.VITE_SANITY_DATASET || 'production';
export const SANITY_API_VERSION = import.meta.env.VITE_SANITY_API_VERSION || '2024-01-01';

// Flag to check if live Sanity is configured
export const isSanityConfigured = Boolean(
  SANITY_PROJECT_ID && 
  SANITY_PROJECT_ID !== 'your_project_id' && 
  SANITY_PROJECT_ID.trim().length > 0
);

// Initialize Sanity Client
export const sanityClient = isSanityConfigured
  ? createClient({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VERSION,
      useCdn: true, // Fast edge-cached delivery
      perspective: 'published',
    })
  : null;

// Image URL Builder for Sanity Assets
const imageBuilder = isSanityConfigured && sanityClient ? imageUrlBuilder(sanityClient) : null;

/**
 * Generate optimized image URL from Sanity asset
 * @param {object|string} source - Sanity image record or local URL
 * @returns {string} - Optimized URL or fallback
 */
export function urlFor(source) {
  if (!source) return '';
  // If it's already a standard URL string (e.g. from local assets fallback)
  if (typeof source === 'string') return source;
  // If it's a Sanity image object with asset reference
  if (imageBuilder && source.asset) {
    return imageBuilder.image(source).auto('format').fit('max');
  }
  return source.url || '';
}
