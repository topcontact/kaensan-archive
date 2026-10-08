export default {
  name: 'artist',
  title: 'Artist Profile (ประวัติศิลปิน)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name (ชื่อ-นามสกุล)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'born',
      title: 'Born / Birthplace (ปีเกิดและสถานที่ เช่น 1989, Bangkok, Thailand)',
      type: 'string',
    },
    {
      name: 'discipline',
      title: 'Discipline / Field (สาขาความเชี่ยวชาญ)',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Portrait (รูปภาพศิลปิน)',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'biography',
      title: 'Biography (ประวัติสังเขป)',
      type: 'text',
      rows: 7,
    },
    {
      name: 'lectureship',
      title: 'Academic / Lectureship (งานวิชาการ/อาจารย์)',
      type: 'string',
    },
    {
      name: 'education',
      title: 'Education (ประวัติการศึกษา)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'degree', title: 'Degree', type: 'string' },
            { name: 'institution', title: 'Institution / Faculty', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'residencies',
      title: 'Artist Residencies (โครงการศิลปินพำนัก)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', title: 'Year', type: 'string' },
            { name: 'location', title: 'Location / Village', type: 'string' },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'discipline',
      media: 'profileImage',
    },
  },
};
