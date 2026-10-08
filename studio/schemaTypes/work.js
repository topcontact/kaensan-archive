import { CategoryInput } from '../components/CategoryInput.jsx';

export default {
  name: 'work',
  title: 'Work (ผลงาน)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title (ชื่อผลงาน)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL Identifier เช่น heavy-metal-2023)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'number',
      title: 'Work Index / Number (เช่น 01, 02)',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle / Medium Specification',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Year (ปีที่สร้าง เช่น 2023)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category (หมวดหมู่)',
      description: 'เลือกจาก Dropdown หรือพิมพ์หมวดหมู่เองตามต้องการ',
      type: 'string',
      components: {
        input: CategoryInput,
      },
    },
    {
      name: 'medium',
      title: 'Medium / Technique (เทคนิค/สื่อที่ใช้)',
      type: 'string',
    },
    {
      name: 'dimensions',
      title: 'Dimensions (ขนาดผลงาน เช่น 60 cm x 45 cm)',
      type: 'string',
    },
    {
      name: 'duration',
      title: 'Duration (ความยาว/ระยะเวลา เช่น 13-minute Loop)',
      type: 'string',
    },
    {
      name: 'components',
      title: 'Components / Installation Elements (องค์ประกอบ)',
      type: 'text',
      rows: 2,
    },
    {
      name: 'venue',
      title: 'Exhibition Venue (สถานที่จัดแสดง)',
      type: 'string',
    },
    {
      name: 'curator',
      title: 'Curator / Institution (ภัณฑารักษ์/สถาบัน)',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Archival Status',
      type: 'string',
      initialValue: 'ARCHIVED',
      options: {
        list: [
          { title: 'ARCHIVED', value: 'ARCHIVED' },
          { title: 'ON VIEW', value: 'ON VIEW' },
          { title: 'PERMANENT ARCHIVE', value: 'PERMANENT ARCHIVE' },
        ],
      },
    },
    {
      name: 'coverImage',
      title: 'Cover / Hero Image (รูปภาพหลัก)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text (คำบรรยายภาพ)',
          type: 'string',
        },
      ],
    },
    {
      name: 'plateImage',
      title: 'Archival Plate Image (รูป Plate หรือ เอกสารประกอบ)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'galleryImages',
      title: 'Gallery / Exhibition Installation Views (ภาพชุด/สไลด์เพิ่มเติม)',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'title',
              title: 'Caption / Subtitle',
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
    {
      name: 'summary',
      title: 'Summary (คำอธิบายสั้น)',
      type: 'text',
      rows: 3,
    },
    {
      name: 'statement',
      title: 'Curatorial / Artist Statement (คำแถลงศิลปิน)',
      type: 'text',
      rows: 8,
    },
    {
      name: 'order',
      title: 'Sort Order (ลำดับการแสดงผล, 1 = แสดงแรกสุด)',
      type: 'number',
      initialValue: 1,
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
      media: 'coverImage',
    },
  },
};
