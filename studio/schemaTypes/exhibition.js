export default {
  name: 'exhibition',
  title: 'Exhibition Timeline (ประวัตินิทรรศการ)',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year (ปี ค.ศ. เช่น 2024)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Work / Project Title (ชื่อผลงานที่จัดแสดง)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'exhibitionName',
      title: 'Exhibition Type / Name (เช่น Duo Exhibition, The Best Art Thesis 2023)',
      type: 'string',
    },
    {
      name: 'venue',
      title: 'Venue / Museum / Gallery (สถานที่จัดแสดง)',
      type: 'string',
    },
    {
      name: 'location',
      title: 'City & Country (เมือง/ประเทศ เช่น Bangkok, Thailand หรือ Oldenburg, Germany)',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Sort Order (ลำดับในแต่ละปี)',
      type: 'number',
      initialValue: 1,
    },
  ],
  orderings: [
    {
      title: 'Year Descending',
      name: 'yearDesc',
      by: [
        { field: 'year', direction: 'desc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'venue',
      description: 'year',
    },
  },
};
