/**
 * Site Settings Schema for Kaensan Archive
 * Global configurations, branding, and featured exhibition controls
 */
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
          description: '✨ เลือกลิสต์ผลงาน ระบบจะดึงชื่อ, ปี, สื่อ, รูปภาพ และสถานที่จัดแสดง (Venue) มาแสดงผลอัตโนมัติทันที',
          type: 'reference',
          to: [{ type: 'work' }],
          weak: true,
        },
        {
          name: 'exhibitionStatus',
          title: 'Exhibition Status (สถานะ / ป้ายกำกับนิทรรศการ)',
          description: '*แสดงบนชื่องาน (เช่น RECENT EXHIBITION, CURRENT EXHIBITION, ON VIEW — ค่าเริ่มต้น: RECENT EXHIBITION)',
          type: 'string',
          initialValue: 'RECENT EXHIBITION',
          fieldset: 'overrides',
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
          description: '*แสดงล่างชื่องาน (เว้นว่างไว้ = ดึงคำบรรยายเทคนิค/สื่อจากผลงานอัตโนมัติ)',
          type: 'string',
          fieldset: 'overrides',
        },
        {
          name: 'customVenue',
          title: 'สถานที่จัดแสดง (Venue Override)',
          description: '*แสดงล่าง คำบรรยายสื่อ (เว้นว่างไว้ = ดึงสถานที่จากผลงานที่เลือกอัตโนมัติ)',
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
