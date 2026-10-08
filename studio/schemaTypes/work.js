import { CategoryInput } from '../components/CategoryInput.jsx';
import { StatusInput } from '../components/StatusInput.jsx';

export default {
  name: 'work',
  title: 'Work (ผลงาน)',
  type: 'document',
  fields: [
    // -------------------------------------------------------------
    // 1. TOP HERO CANVAS (รูปหลักของผลงาน — บนสุด)
    // -------------------------------------------------------------
    {
      name: 'mainImages',
      title: '1. รูปหลักของผลงาน (Main Hero Images)',
      description: 'สามารถลงได้หลายรูป สำหรับแสดงบนผืนผ้าใบหลัก (Hero Canvas). ติ๊กตัวเลือก "★ ตั้งเป็นรูปหลักสำหรับหน้าแรก" บนรูปที่ต้องการให้เป็นภาพหน้าแรกของเว็บ',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'isMainHero',
              title: '★ ตั้งเป็นรูปหลักสำหรับหน้าแรก (Use as Main Home Hero)',
              description: 'ติ๊กเพื่อใช้รูปนี้เป็นภาพเปิดเมื่อผลงานชิ้นนี้ถูกเลือกแสดงบนหน้าแรกของเว็บ',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'title',
              title: 'Caption / Subtitle (คำบรรยายภาพ)',
              type: 'string',
            },
            {
              name: 'alt',
              title: 'Alt Text (คำอธิบายรูปภาพ)',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'title',
              isMain: 'isMainHero',
              media: 'asset',
            },
            prepare({ title, isMain, media }) {
              return {
                title: (isMain ? '★ [MAIN HERO] ' : '') + (title || 'Work Image'),
                subtitle: isMain ? 'ภาพหลักสำหรับหน้าแรก (Home Screen)' : 'ภาพในแกลเลอรีผลงาน',
                media,
              };
            },
          },
        },
      ],
    },

    // -------------------------------------------------------------
    // 2. CURATORIAL TITLE BAR & CORE METADATA (ข้อมูลหัวเรื่อง)
    // -------------------------------------------------------------
    {
      name: 'title',
      title: '2. Title (ชื่อผลงาน)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: '3. Subtitle / คำบรรยายสั้น (เช่น 34-MIN VIDEO INSTALLATION)',
      type: 'string',
    },
    {
      name: 'year',
      title: '4. Year (ปีที่สร้าง เช่น 2011, 2023)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: '5. Category (หมวดหมู่)',
      description: 'เลือกจาก Dropdown หรือพิมพ์หมวดหมู่เองตามต้องการ',
      type: 'string',
      components: {
        input: CategoryInput,
      },
    },
    {
      name: 'status',
      title: '6. Archival Status (สถานะการจัดเก็บ)',
      description: 'เลือกจาก Dropdown หรือพิมพ์สถานะเองตามต้องการ (เช่น ARCHIVED, ON VIEW)',
      type: 'string',
      initialValue: 'ARCHIVED',
      components: {
        input: StatusInput,
      },
    },
    {
      name: 'slug',
      title: '7. Slug (URL Identifier เช่น heavy-metal-2023)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'number',
      title: '8. Work Index / Number (เช่น 01, 02)',
      type: 'string',
    },

    // -------------------------------------------------------------
    // 3. SPECIFICATIONS & STATEMENT (รายละเอียดเทคนิค & คำแถลง)
    // -------------------------------------------------------------
    {
      name: 'medium',
      title: '9. FORMAT / Medium / Technique (เทคนิค/สื่อที่ใช้)',
      type: 'string',
    },
    {
      name: 'duration',
      title: '10. DURATION (ความยาว/ระยะเวลา เช่น 13-minute Loop)',
      type: 'string',
    },
    {
      name: 'dimensions',
      title: '11. DIMENSIONS (ขนาดผลงาน เช่น 60 cm x 45 cm)',
      type: 'string',
    },
    {
      name: 'components',
      title: '12. Components / Installation Elements (องค์ประกอบการติดตั้ง)',
      type: 'text',
      rows: 2,
    },
    {
      name: 'statement',
      title: '13. CURATORIAL STATEMENT (บทความ/แถลงการณ์ภัณฑารักษ์)',
      type: 'text',
      rows: 8,
    },
    {
      name: 'venue',
      title: '14. Exhibition Venue (สถานที่จัดแสดง)',
      type: 'string',
    },
    {
      name: 'curator',
      title: '15. Curator / Institution (ภัณฑารักษ์/สถาบัน)',
      type: 'string',
    },

    // -------------------------------------------------------------
    // 4. BOTTOM SECTION: PROCESS & DOCUMENTATION (รูปรอง / เบื้องหลัง)
    // -------------------------------------------------------------
    {
      name: 'documentationImages',
      title: '16. Process & Documentation (รูปรอง / รูปเบื้องหลังของงาน)',
      description: 'รูปภาพเบื้องหลังการทำงาน การติดตั้ง หรือภาพมุมมองในพื้นที่จัดแสดง (แสดงที่ส่วนล่างสุดของหน้าผลงาน)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'title',
              title: 'Caption / Description',
              type: 'string',
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            },
          ],
        },
      ],
    },

    // -------------------------------------------------------------
    // 5. ADMINISTRATIVE & SORTING
    // -------------------------------------------------------------
    {
      name: 'order',
      title: '17. Sort Order (ลำดับการแสดงผล, 1 = แสดงแรกสุด)',
      type: 'number',
      initialValue: 1,
    },

    // Backward-compatibility hidden fields for legacy records
    {
      name: 'coverImage',
      title: 'Legacy Cover Image',
      type: 'image',
      hidden: true,
    },
    {
      name: 'plateImage',
      title: 'Legacy Plate Image',
      type: 'image',
      hidden: true,
    },
    {
      name: 'galleryImages',
      title: 'Legacy Gallery Images',
      type: 'array',
      of: [{ type: 'image' }],
      hidden: true,
    },
    {
      name: 'summary',
      title: 'Legacy Summary',
      type: 'text',
      hidden: true,
    },
  ],
  orderings: [
    {
      title: 'Custom Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Year Descending',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      mainImages: 'mainImages',
      coverImage: 'coverImage',
    },
    prepare({ title, subtitle, mainImages, coverImage }) {
      const hero = (Array.isArray(mainImages) && mainImages.length > 0)
        ? (mainImages.find((img) => img.isMainHero) || mainImages[0])
        : coverImage;
      return {
        title: title || 'Untitled Work',
        subtitle: subtitle || '',
        media: hero,
      };
    },
  },
};
