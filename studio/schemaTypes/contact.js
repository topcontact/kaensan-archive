export default {
  name: 'contactInfo',
  title: 'Contact Information (ช่องทางการติดต่อ)',
  type: 'document',
  fields: [
    {
      name: 'artistIdentity',
      title: 'Artist Identity (เช่น KAENSAN RATTANASOMRERK)',
      type: 'string',
    },
    {
      name: 'headline',
      title: 'Headline Notice (ข้อความด้านบน)',
      type: 'string',
    },
    {
      name: 'telephone',
      title: 'Telephone (เบอร์โทรศัพท์)',
      type: 'string',
    },
    {
      name: 'emailPrimary',
      title: 'Primary Email',
      type: 'string',
    },
    {
      name: 'emailSecondary',
      title: 'Secondary Email',
      type: 'string',
    },
    {
      name: 'skype',
      title: 'Skype ID',
      type: 'string',
    },
    {
      name: 'line',
      title: 'Line ID',
      type: 'string',
    },
    {
      name: 'studioLocation',
      title: 'Studio Location (ที่ตั้งสตูดิโอ)',
      type: 'string',
    },
    {
      name: 'academicNotice',
      title: 'Academic Appointment (สถาบัน/ตำแหน่งทางวิชาการ)',
      type: 'string',
    },
    {
      name: 'archivalNotice',
      title: 'Archival Notice (ข้อความแจ้งการติดต่อ)',
      type: 'text',
      rows: 2,
    },
  ],
  preview: {
    select: {
      title: 'artistIdentity',
      subtitle: 'emailPrimary',
    },
  },
};
