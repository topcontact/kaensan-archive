import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes/index.js';

export default defineConfig({
  name: 'default',
  title: 'Artist Portfolio & Archive Studio',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'your_project_id',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Archive')
          .items([
            // Singleton: Site Settings
            S.listItem()
              .title('Site Settings (ตั้งค่าเว็บไซต์ & Brand)')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            // Singleton: Artist Profile
            S.listItem()
              .title('Artist Profile (ประวัติศิลปิน & Bio)')
              .id('artistProfile')
              .child(
                S.document()
                  .schemaType('artist')
                  .documentId('artistProfile')
              ),
            // Singleton: Contact Info
            S.listItem()
              .title('Contact Info (ข้อมูลติดต่อ)')
              .id('contactInfo')
              .child(
                S.document()
                  .schemaType('contactInfo')
                  .documentId('contactInfo')
              ),
            S.divider(),
            // Works Catalogue
            S.documentTypeListItem('work').title('Works Archive (ผลงานทั้งหมด)'),
            // Exhibition Timeline
            S.documentTypeListItem('exhibition').title('Exhibition Timeline (ประวัตินิทรรศการ)'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
