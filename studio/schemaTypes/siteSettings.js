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
      fieldsets: [
        {
          name: 'overrides',
          title: '✏️ ปรับแต่งเพิ่มเติมเฉพาะหน้าแรก (Optional Overrides)',
          description: 'เว้นว่างไว้ทั้งหมดเพื่อใช้ค่าเริ่มต้นที่ดึงจากผลงานที่เลือกโดยอัตโนมัติ',
          options: { collapsible: true, collapsed: false },
        },
      ],
      fields: [
        {
          name: 'featuredWork',
          title: '📌 เลือกผลงานหลักที่จะแสดงที่หน้าแรก (Featured Artwork)',
          description: '✨ เลือกลิสต์ผลงาน ระบบจะดึงชื่อ, ปี, สื่อ, รูปภาพ, สถานที่จัดแสดง (Venue), และภัณฑารักษ์มาแสดงผลอัตโนมัติทันที',
          type: 'reference',
          to: [{ type: 'work' }],
        },
        {
          name: 'customTitle',
          title: 'ชื่อผลงาน / Exhibition Title Override',
          description: 'เว้นว่างไว้ = ดึง [ชื่อผลงาน — ปี] จากผลงานที่เลือกอัตโนมัติ',
          type: 'string',
          fieldset: 'overrides',
        },
        {
          name: 'customSubtitle',
          title: 'คำบรรยายสื่อ / Subtitle Override',
          description: 'เว้นว่างไว้ = ดึงคำบรรยายเทคนิค/สื่อจากผลงานอัตโนมัติ',
          type: 'string',
          fieldset: 'overrides',
        },
        {
          name: 'customHeroImage',
          title: 'รูปภาพเฉพาะหน้าแรก (Hero Image Override)',
          description: 'เว้นว่างไว้ = ใช้รูปภาพหลัก (Cover Image) ของผลงานที่เลือกอัตโนมัติ',
          type: 'image',
          options: { hotspot: true },
          fieldset: 'overrides',
        },
        {
          name: 'customVenue',
          title: 'สถานที่จัดแสดง (Venue Override)',
          description: 'เว้นว่างไว้ = ดึงสถานที่จากผลงานที่เลือกอัตโนมัติ',
          type: 'string',
          fieldset: 'overrides',
        },
        {
          name: 'customCurator',
          title: 'ภัณฑารักษ์ / Curator Override',
          description: 'เว้นว่างไว้ = ดึงภัณฑารักษ์จากผลงานที่เลือกอัตโนมัติ',
          type: 'string',
          fieldset: 'overrides',
        },
        {
          name: 'customStatus',
          title: 'Archival Status Stamp',
          description: 'เว้นว่างไว้ = ดึงสถานะจากผลงาน (เช่น PERMANENT ARCHIVE หรือ ARCHIVED)',
          type: 'string',
          fieldset: 'overrides',
        },
        {
          name: 'customDates',
          title: 'Dates / Tour Information',
          description: 'ช่วงเวลาจัดแสดง เช่น MUSEUM OF SOMETHING // RIVER CITY BANGKOK',
          type: 'string',
          fieldset: 'overrides',
        },
        {
          name: 'customCity',
          title: 'City Stamp',
          description: 'เช่น BANGKOK, TH',
          type: 'string',
          initialValue: 'BANGKOK, TH',
          fieldset: 'overrides',
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
