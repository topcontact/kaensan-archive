export default {
  name: 'siteSettings',
  title: 'Site & Template Settings (การตั้งค่าทั่วไป)',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Brand / Monogram Name (เช่น KAENSAN)',
      type: 'string',
      initialValue: 'KAENSAN',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'siteTitle',
      title: 'Website Browser Title',
      type: 'string',
      initialValue: 'KAENSAN — Architectural & Exhibition Archive',
    },
    {
      name: 'currentExhibition',
      title: 'Current Featured Exhibition (หน้าแรก Home Screen)',
      type: 'object',
      fields: [
        {
          name: 'featuredWork',
          title: 'Select Work (เลือกจากรายการผลงานที่มี)',
          type: 'reference',
          to: [{ type: 'work' }],
        },
        {
          name: 'customTitle',
          title: 'Custom Title Override (หากต้องการระบุชื่อเอง เช่น HEAVY METAL — 2023)',
          type: 'string',
        },
        {
          name: 'customSubtitle',
          title: 'Custom Subtitle Override',
          type: 'string',
        },
        {
          name: 'customVenue',
          title: 'Venue (สถานที่จัดแสดง)',
          type: 'string',
        },
        {
          name: 'customCurator',
          title: 'Curator / Institution',
          type: 'string',
        },
        {
          name: 'customStatus',
          title: 'Status Stamp (เช่น PERMANENT ARCHIVE)',
          type: 'string',
        },
        {
          name: 'customDates',
          title: 'Dates / Tour (เช่น MUSEUM OF SOMETHING // RIVER CITY BANGKOK)',
          type: 'string',
        },
        {
          name: 'customCity',
          title: 'City (เช่น BANGKOK, TH)',
          type: 'string',
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social & External Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform (เช่น Instagram, Vimeo)', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'brandName',
      subtitle: 'siteTitle',
    },
  },
};
