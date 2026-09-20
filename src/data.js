/**
 * KAENSAN ARCHIVE — AUTHENTIC WORKS & CV DATABASE
 * Sourced directly from official portfolio documentation (2024- Cv and Works.pdf)
 * Artist: Kaensan Rattanasomrerk (b. 1989, Bangkok, Thailand)
 */

export const ARCHIVE_DATA = {
  currentExhibition: {
    id: 'heavy-metal-2023',
    title: 'HEAVY METAL — 2023',
    subtitle: '5µm SCANNING ELECTRON MICROSCOPE PHOTOGRAPHY & MULTIMODAL INSTALLATION',
    heroImage: '/assets/works/heavy_metal/heavy_metal_main.png',
    heroAlt: '5 Micrometer Scanning Electron Microscope Photograph of E-waste CPU Gold Extraction',
    venue: 'THE BEST ART THESIS EXHIBITION // THE QUEEN’S GALLERY, BANGKOK',
    curator: 'FACULTY OF FINE ARTS, CHIANG MAI UNIVERSITY',
    year: '2023',
    status: 'PERMANENT ARCHIVE',
    dates: 'MUSEUM OF SOMETHING, CHIANG MAI // RIVER CITY BANGKOK',
    city: 'BANGKOK, TH',
  },

  artist: {
    name: 'Kaensan Rattanasomrerk',
    born: '1989, Bangkok, Thailand',
    discipline: 'Moving Image / Visual Art / Installation',
    education: [
      { year: '2023', degree: 'Master of Arts (Visual Arts)', institution: 'Faculty of Fine Arts, Chiang Mai University' },
      { year: '2012', degree: 'Bachelor of Arts (Film & Mass Communication)', institution: 'Faculty of Journalism and Mass Communication, Thammasat University' },
    ],
    lectureship: 'Lecturer, Thammasat University (2020–2024)',
    residencies: [
      { year: '2015', location: 'Treasure Hill Artist Village, Taipei, Taiwan' },
      { year: '2014', location: 'T-air, Urahoro-Cho, Tokachi, Hokkaido, Japan' },
      { year: '2013', location: 'Treasure Hill Artist Village, Taipei, Taiwan' },
    ],
    biography: `Kaensan Rattanasomrerk was born in 1989 in Bangkok, Thailand. He graduated from Thammasat University with a Bachelor of Arts in Journalism and Mass Communication, Film Department. He later pursued a Master of Arts in Visual Arts from the Faculty of Fine Arts at Chiang Mai University. He utilizes moving images as a tool to address contemporary social issues. He possesses extensive knowledge and experience in filmmaking and visual arts; his artworks mainly stem from collaborations between moving images and other fields of study. He is highly motivated to work cross-media with local communities and scientists. His works have been exhibited across Germany, Japan, Taiwan, Singapore, and Thailand.`
  },

  works: [
    {
      id: 'heavy-metal-2023',
      number: '01',
      title: 'HEAVY METAL',
      subtitle: '5µm SCANNING ELECTRON MICROSCOPE PHOTOGRAPH',
      year: '2023',
      category: 'MICROSCOPY & SCULPTURE',
      medium: '5 Micrometer Scanning Electron Microscope Photograph',
      dimensions: '60 cm x 45 cm',
      duration: 'Exhibition Installation Series',
      components: 'Electron Microscope Photographs, Discarded CPU Gold Extraction, Molten Silica Glass Sculpture, Video',
      venue: 'The Queen’s Gallery, Bangkok / Museum of Something, Chiang Mai',
      curator: 'The Best Art Thesis 2023 / Museum of Something',
      status: 'ARCHIVED',
      image: '/assets/works/heavy_metal/heavy_metal_main.png',
      plate: '/assets/works/heavy_metal/heavy_metal_main.png',
      imageAlt: '5 Micrometer Scanning Electron Microscope Photograph of heavy metals',
      summary: 'Examines links between humans, technology, and nature through managing outdated e-waste and the impact of waste colonialism, extracting gold from discarded CPUs in molten semiconductor silica glass.',
      statement: `Heavy Metal presents the issue of interconnection that links humans, technology, and nature through the recording of landscapes and the results of the search for valuable metals. The focus is on the process of managing outdated electronic waste, as well as the impact of waste colonialism by powerful countries.

This multifaceted project comprises a sculpture, a video, and photographs. Gold is meticulously extracted from discarded CPUs found amidst mountains of electronic waste. The extraction process involves hazardous chemicals that pose risks to human health and the environment. Once separated, the gold is encased in molten glass derived from silica sand, a fundamental component of semiconductors.

The video provides an in-depth look into the gold extraction process, interwoven with behind-the-scenes activities. Additionally, the text in movie screenplay format, inspired by the artist's memories, is incorporated into the video to enhance the narrative further. Accompanying the video are a series of electron microscope images.`
    },
    {
      id: 'monolith-2023',
      number: '02',
      title: 'MONOLITH',
      subtitle: '300µm SCANNING ELECTRON MICROSCOPE PHOTOGRAPH',
      year: '2023',
      category: 'ELECTRON MICROSCOPY',
      medium: '300 Micrometer Scanning Electron Microscope Photograph',
      dimensions: '60 cm x 90 cm',
      duration: 'Static Optical Capture',
      components: 'SEM Electron Beam in Vacuum (10,000V Accelerating Voltage, 9.0mm Lens Distance)',
      venue: 'River City Bangkok / Museum of Something',
      curator: 'Mango Art Festival / Solo Exhibition',
      status: 'ARCHIVED',
      image: '/assets/works/work_14_monolith.jpg',
      plate: '/assets/works/work_14_monolith_plate.jpg',
      imageAlt: '300 Micrometer Scanning Electron Microscope Photograph inspired by Ansel Adams',
      summary: 'Portrays toxic chemical residues of Aqua Regia gold extraction. Inspired by Ansel Adams’ "Monolith" Yosemite photograph, captured via electron beams in vacuum across 300 micrometers.',
      statement: `The photograph portrays heavy metals and toxic substances which are the residues of the gold extraction process that uses Aqua Regia. The photograph was inspired by ‘Monolith’, the photograph of Ansel Adams that captures a mountain in Yosemite National Park. 

The photograph is taken with electron beams in a vacuum. The distance from the electron lens to the object was 9.0 millimeters with an accelerating voltage difference of 10,000 watts, displaying an image in an area of 300.00 micrometers.`
    },
    {
      id: 'subtle-silence-2023',
      number: '03',
      title: 'SUBTLE SILENCE',
      subtitle: 'VIDEO INSTALLATION // 13-MIN LOOP',
      year: '2023',
      category: 'VIDEO & FILM',
      medium: 'Video',
      dimensions: 'Site-specific Projection',
      duration: '13-minute Loop',
      components: '1 Channel Video (Color)',
      venue: 'Chiang Mai / Bangkok Exhibition Spaces',
      curator: 'Kaensan Studio Archive',
      status: 'ARCHIVED',
      image: '/assets/works/work_15_subtle_silence.jpg',
      plate: '/assets/works/work_15_subtle_silence_plate.jpg',
      imageAlt: 'Subtle Silence video installation plate',
      summary: 'Records location scouting in chemical leak impact areas, e-waste gold extraction, and moving narrative of transferring a stroke patient to a bedridden care facility.',
      statement: `The video records the process of location scouting to find suitable spots for filming in an area that has been affected by chemical leaks. It also features the process of extracting gold from electronic waste, along with a film script written from a blend of landscapes and memories of the artist when he took a stroke patient from home to a bedridden patient care center.`
    },
    {
      id: 'aqua-regia-2023',
      number: '04',
      title: 'AQUA REGIA',
      subtitle: 'GOLD IN MELTED SILICON GLASS SCULPTURE',
      year: '2023',
      category: 'MATERIAL SCULPTURE',
      medium: 'Gold in Melted Glass',
      dimensions: '15 cm x 15 cm x 15 cm',
      duration: 'Sculptural Object',
      components: 'CPU Gold Residue, Aqua Regia Acid Extraction, Molten Silica Sand Glass (SiO2)',
      venue: 'The Queen’s Gallery, Bangkok',
      curator: 'Best Art Thesis Selection Committee',
      status: 'ARCHIVED',
      image: '/assets/works/work_16_aqua_regia.jpg',
      plate: '/assets/works/work_16_aqua_regia_plate.jpg',
      imageAlt: 'Aqua Regia gold encapsulated in melted glass cube',
      summary: 'Pure gold extracted from central processing unit pieces using nitric and hydrochloric Aqua Regia, permanently encased within molten semiconductor silica glass.',
      statement: `The gold is extracted from pieces of central processing units using Aqua Regia, a strong acid composed of nitric acid and hydrochloric acid. Aqua Regia is one of the few acids capable of extracting valuable metals such as gold, white gold, and palladium from other substances. 

The residue of the extraction process is then covered in melting glass made from sand or silicon (SiO2), the same material used in semiconductors, which are primary parts of the central processing unit.`
    },
    {
      id: 'db-2019',
      number: '05',
      title: 'dB (DECIBEL)',
      subtitle: 'ARCHIVAL LOGARITHMIC PRINT // YALA COURT',
      year: '2019',
      category: 'PRINT & SOUND',
      medium: 'Print',
      dimensions: '35 cm x 56 cm',
      duration: 'Archival Plate',
      components: 'Logarithmic Sound Decibel Waveform Visualization',
      venue: 'Kinjai Contemporary, Bangkok',
      curator: 'Bangkok Through Poster',
      status: 'ARCHIVED',
      image: '/assets/works/work_12_db.jpg',
      plate: '/assets/works/work_12_db_plate.jpg',
      imageAlt: 'dB logarithmic decibel scale measuring judge speech and 9mm gunshot',
      summary: 'Measures the subjective loudness and physical decibels of a local judge’s spoken statement and subsequent 9mm gunshot in Yala Provincial Court protest on October 4, 2019.',
      statement: `The decibel (dB) serves as a unit to gauge the intensity of two physical attributes, typically sound or electric power. Sound is the result of vibrations that give rise to audible pressure waves, eliciting the subjective experience of sound pressure and loudness. Although loudness is primarily a subjective perception, it can still be quantified using a logarithmic scale.

The image portrays a logarithmic scale measuring the loudness of a man's speech and the sound of a 9 mm gunshot in the courtroom of Yala Provincial Court around 12:35 PM on October 4, 2019. Following the delivery of a verdict, the man, a local senior judge, resorted to a self-inflicted gunshot to the chest. His statement preceding this act revealed that his superiors had interfered in the case, compelling him to alter the verdict against his own wishes.`
    },
    {
      id: 'sleeping-place-2019',
      number: '06',
      title: 'SLEEPING PLACE',
      subtitle: 'PANORAMIC NEGATIVE FILM (35MM)',
      year: '2019',
      category: 'PHOTOGRAPHY & FILM',
      medium: 'Panoramic Negative Film (35mm)',
      dimensions: '14 cm x 7 cm',
      duration: 'Static Negative Plate',
      components: '35mm Film Negative, Lightbox Exposure',
      venue: 'Absolute Space, Tainan, Taiwan / Baan Tuek Art Center, Chiang Mai',
      curator: 'You Exist, I Exist / Play Time Over',
      status: 'ARCHIVED',
      image: '/assets/works/work_11_sleeping_place.jpg',
      plate: '/assets/works/work_11_sleeping_place_plate.jpg',
      imageAlt: '35mm Panoramic negative film strip',
      summary: 'Investigates visualization as optical neuron transmission to the brain and how empirical memory accumulation alters human cognition.',
      statement: `Visualization is the reflection of an object into our eyes. Neurons trigger and transmit electrical messages to the brain via the optic nerve. However, visual information alone would be futile without empirical interpretation. Meanwhile, experience is an accumulation of knowledge throughout a lifetime. 

Visualization, therefore, is a special process involving not only cognition but also the memorization of individuals.`
    },
    {
      id: 'in-sight-2018',
      number: '07',
      title: 'IN SIGHT',
      subtitle: '2-CHANNEL VIDEO INSTALLATION',
      year: '2018',
      category: 'VIDEO & FILM',
      medium: 'Video Installation',
      dimensions: 'Dual Projection Architecture',
      duration: '4-minute',
      components: '2 Channel Video (Color)',
      venue: 'Bangkok Art and Culture Centre (BACC)',
      curator: 'Bangkok Layers: Topography of Mirror Cities',
      status: 'ARCHIVED',
      image: '/assets/works/work_10_in_sight.jpg',
      plate: '/assets/works/work_10_in_sight_plate.jpg',
      imageAlt: 'In Sight 2-channel video projection of Erawan shrine and stellar genesis',
      summary: 'Contrast of everyday devotion at Erawan Shrine against celestial star genesis, documenting memories of the 2015 bomb attack where key evidence was erased.',
      statement: `Brahma, one of the highest gods of creation, is revered at the Erawan shrine, a place for people to pay homage to the creator God following Hindu beliefs. In 2015, a bomb attack on the shrine resulted in casualties, both Thai and foreign, yet justice remains elusive even now, with erasures of crucial evidence. The everyday scene at the shrine seemingly returns to normal.

This video portrays the ordinary scenes at the shrine, interwoven with images of star creation. The seemingly flawless images gradually transition to what serves as a testament to the nearly obliterated incident. The narrative is drawn from the recollections of a close friend who passed by the site during the event. Through this video, he aims to document and affirm this occurrence through his artistic expression.`
    },
    {
      id: 'flare-2017',
      number: '08',
      title: 'FLARE',
      subtitle: 'VIDEO INSTALLATION WITHIN KALEIDOSCOPE',
      year: '2017',
      category: 'INSTALLATION',
      medium: 'Video Installation',
      dimensions: 'Custom Kaleidoscope Chamber',
      duration: '7-minute Loop',
      components: '1 Channel Video (Color) within a Kaleidoscope, Interactive Mirrors',
      venue: 'Suan Mokkh, Bangkok, Thailand',
      curator: 'Wake Up Experiences',
      status: 'ARCHIVED',
      image: '/assets/works/work_09_flare.jpg',
      plate: '/assets/works/work_09_flare_plate.jpg',
      imageAlt: 'Flare video installation inside kaleidoscope reflective chamber',
      summary: 'Narrates a man ascending a pitch-dark hill where fear takes shape, engaging viewers to confront their own reflected expressions inside an illuminated kaleidoscope.',
      statement: `This artwork captures the story of a man's ascent up a dark hill, entirely devoid of light, stepping into the unknown without awareness. He wanders until the fear starts to take shape.

The artist explores the understanding of one's emotions in every moment, simulating this dialogue into a Video Installation that prompts viewers to consider the characteristics of emotions that unfold in each instance. The audience actively engages with the installation by looking into a mirror and witnessing their own reflections amid the video's illumination. This interactivity invites the audience to become integral to the artwork's experience.`
    },
    {
      id: 'sleep-apnea-2015',
      number: '09',
      title: 'SLEEP APNEA',
      subtitle: 'VIDEO INSTALLATION & SLEEPING CHAMBER',
      year: '2015',
      category: 'INSTALLATION',
      medium: 'Video Installation',
      dimensions: 'Immersive Room Installation',
      duration: '8-minute Loop',
      components: '1 Channel Video (Color), 1 TV Monitor with Closed-Circuit Television, Sleeping Area',
      venue: 'Treasure Hill Artist Village, Taipei, Taiwan',
      curator: 'Sleep Apnea Solo Exhibition',
      status: 'ARCHIVED',
      image: '/assets/works/work_08_sleep_apnea.jpg',
      plate: '/assets/works/work_08_sleep_apnea_plate.jpg',
      imageAlt: 'Sleep Apnea sleeping area installation with CCTV surveillance monitor',
      summary: 'Depicts a city under a spell where residents lose the distinction between dreams and reality, inspired by Thailand’s 2014 coup and enforced social conformity.',
      statement: `This artwork represents a city under a mysterious spell, where residents become lost in dreamlike fantasies, unable to distinguish dreams from reality. It's inspired by Thailand's 2014 military coup, where criticism and free expression were restricted. 

New values were enforced, reshaping the nation's identity. History was rewritten, questions silenced, and the outcome remains uncertain. The artwork reflects the transformative impact of these events.`
    },
    {
      id: 'lost-sea-2015',
      number: '10',
      title: 'LOST SEA',
      subtitle: 'VIDEO INSTALLATION ON WATER SURFACE',
      year: '2015',
      category: 'VIDEO & FILM',
      medium: 'Video Installation',
      dimensions: 'Water Basin Projection',
      duration: '6-minute Loop',
      components: '1 Channel Video (Color), Water’s Surface Projection Pool',
      venue: 'Taipei Artist Village, Taipei, Taiwan',
      curator: 'Short-Term Memory Group Exhibition',
      status: 'ARCHIVED',
      image: '/assets/works/work_07_lost_sea.jpg',
      plate: '/assets/works/work_07_lost_sea_plate.jpg',
      imageAlt: 'Lost Sea video projected onto ripples of water basin',
      summary: 'Intertwines memories of a grandfather merit-making ceremony with forest monastery realizations on human suffering amidst life’s fluctuating sea.',
      statement: `This artwork delves into two deeply personal memories. The first memory captures the connection between the artist's mother and the artist's late grandfather, observed during a ceremony to make merit for the grandfather. For the artist, it symbolizes a unique link between the living and the departed, where memories keep the past alive.

The second memory stems from a visit to a forest monastery. The artist's questions about human suffering lead to a profound realization: peace resides at the center of life's ever-changing sea, amid birth and death, good and evil. The suffering arises when the sense of self gets entangled in the sea of memories. The artwork explores the artist's constant navigation through memories, where joy and sorrow can be triggered by past experiences.`
    },
    {
      id: 'rebirth-2014',
      number: '11',
      title: 'REBIRTH',
      subtitle: 'TRANSPARENT BOX INSTALLATION // HOKKAIDO',
      year: '2014',
      category: 'INSTALLATION',
      medium: 'Video Installation',
      dimensions: 'Outdoor Hillside Transparent Enclosure',
      duration: '7-minute Loop & 8:30-minute Loop',
      components: '1 Channel Video (Color), 1 TV Monitor (Color), Light Texts with Hokkaido Local Flowers',
      venue: 'Urahoro-Cho, Tokachi, Hokkaido, Japan / Chung Shan Creative Hub, Taipei',
      curator: 'T-air Solo Exhibition / On-Site Art Festival',
      status: 'ARCHIVED',
      image: '/assets/works/work_06_rebirth.jpg',
      plate: '/assets/works/work_06_rebirth_plate.jpg',
      imageAlt: 'Rebirth light texts with Hokkaido flowers inside hillside glass structure',
      summary: 'Explores the "collapse of self" and cyclicity of birth and death using illuminated text, local flora, and video installed in a transparent box on Hokkaido hills.',
      statement: `In this video installation, the artist explores the concept of the "collapse of self," where everything lacks inherent essence, and people define themselves from nothing. Birth and death are intertwined, with all things affecting one another.

"Rebirth" symbolizes transformation, as a flower shifts from lifelessness to vibrant growth, embodying the cycle of change in nature. "Mysterious Allure" narrates a tale of ghostly fish luring the young to the mountains for an unsettling fate, while the text "It is beautiful but poisonous" reflects on external desires and the transition of senses into emotions. The three artworks serve as a medium to explore memories and the interplay between the past and the future, showcased in a large transparent box within the town's hills.`
    },
    {
      id: 'enclose-2014',
      number: '12',
      title: 'ENCLOSE',
      subtitle: 'MULTICHANNEL VIDEO INSTALLATION',
      year: '2014',
      category: 'INSTALLATION',
      medium: 'Video Installation',
      dimensions: 'Room Installation',
      duration: '7-minute Loop',
      components: '1 Channel Video (Color), 1 TV Monitor (Color), 1 Channel Video (Black & White)',
      venue: 'Treasure Hill Artist Village, Taipei, Taiwan',
      curator: 'Enclose Solo Video Exhibition',
      status: 'ARCHIVED',
      image: '/assets/works/work_05_enclose.jpg',
      plate: '/assets/works/work_05_enclose_plate.jpg',
      imageAlt: 'Enclose installation showing TV monitors and projections in dark room',
      summary: 'Created during residency in Taipei, drawing inspiration from subconscious fear, inevitable mortality, and instincts to control life within an ever-turning wheel.',
      statement: `"Enclose" is an installation art piece created during the artist's residency at Treasure Hill Artist Village in Taipei, Taiwan. It draws inspiration from the undercurrent of fear in our subconscious minds. 

As humans, we are bound by the rules of nature: birth, aging, pain, and ultimately, death. In the relentless passage of time, we exist within an ever-turning wheel of existence. Despite our inability to control every facet of our lives, our instincts compel us to try.`
    },
    {
      id: 'exit-2013',
      number: '13',
      title: 'EXIT',
      subtitle: 'SITE-SPECIFIC VIDEO INSTALLATION',
      year: '2013',
      category: 'INSTALLATION',
      medium: 'Site-Specific Video Installation',
      dimensions: 'Museum Exit Doorway Installation',
      duration: '17-minute Loop',
      components: '1 Channel Video (Color), TV Screen with Chinese Monk Robe Carving',
      venue: 'Chung Shan Creative Hub, Taipei, Taiwan',
      curator: 'ThaiTai: A Measure of Understanding (with Jakrawal Nilthamrong)',
      status: 'ARCHIVED',
      image: '/assets/works/work_04_exit.jpg',
      plate: '/assets/works/work_04_exit_plate.jpg',
      imageAlt: 'Exit installation at museum doorway showing Thai migrant experiences in Taiwan',
      summary: 'Collaborative site-specific work with Jakrawal Nilthamrong at museum exit door exploring how cultural institutions shape identities of Thai diaspora in Taiwan.',
      statement: `"Exit" is a video installation that explores how places like museums shape a community's identity. The video is shown at the museum's exit door and reveals the lives and different dreams of Thai people living in Taiwan.

Inside the museum, a TV screen shows the same Thai woman from the video, wearing Chinese monk clothing and carving a rock. This artwork is a collaboration between artists Jakrawal Nilthamrong and Kaensan Rattanasomrerk. They worked on it during Rattanasomrerk's residency at the ThaiTai project in the Treasure Hill Artist Village.`
    },
    {
      id: 'substantial-2013',
      number: '14',
      title: 'SUBSTANTIAL',
      subtitle: 'VIDEO INSTALLATION & SACRED OBJECT TRANSMUTATION',
      year: '2013',
      category: 'INSTALLATION',
      medium: 'Video Installation',
      dimensions: 'Video Projection & Plinth',
      duration: '8-minute Loop',
      components: '1 Brass Ball (3 cm), 1 Channel Video (Color)',
      venue: 'Kunstverein Göttingen, Germany / Chulalongkorn University / NTU Singapore',
      curator: 'Haunted Thresholds / in transit / FAITH and FAIRY TALES',
      status: 'ARCHIVED',
      image: '/assets/works/work_03_substantial.jpg',
      plate: '/assets/works/work_03_substantial_plate.jpg',
      imageAlt: 'Substantial video projection with 3cm brass ball consecrated object',
      summary: 'Examines material transformation using sacred object processes in Thailand, probing the contradiction of unquestioned worship alongside modern technology.',
      statement: `In "Essence Distorted," the artist explores how materials change over time. This change happens because of things like how far they are from their original state, how long it takes, and how people view them. To understand this, the artist makes something using a special process used for sacred objects to see what stays the same, what disappears, and what transforms.

This artwork also looks at a cultural idea from Thailand. It's like a puzzle: the more we get attached to where we live, the more we sometimes go against nature's rules. In today's world, we have new knowledge and technology, but we also see people worshipping special objects without asking questions, hoping it will make them happy right away.`
    },
    {
      id: 'rhythm-2012',
      number: '15',
      title: 'RHYTHM',
      subtitle: 'VIDEO // FACTORY LABOR & MODERN DREAMS',
      year: '2012',
      category: 'VIDEO & FILM',
      medium: 'Video',
      dimensions: 'Single Channel Screening',
      duration: '6-minute Loop',
      components: '1 Channel Video (Color)',
      venue: 'Tid Silp Bon Ratchaburi #2 Art Festival, Thailand',
      curator: 'City Art Festival',
      status: 'ARCHIVED',
      image: '/assets/works/work_02_rhythm.jpg',
      plate: '/assets/works/work_02_rhythm_plate.jpg',
      imageAlt: 'Rhythm video still showing female factory worker envisioning university life',
      summary: 'Interviews young Isan female laborers in a Bangkok sweet factory envisioning life as university students, contrasting consumer modernity with factory realities.',
      statement: `"Rhythm" is a companion piece to "Falling Rain," exploring the lives of Northeastern-born laborers who come to work in a Bangkok sweet factory. 

This video features interviews with young female laborers, asking them to envision life as university students. Their aspirations, shaped by modernity, fashion, beauty, and comfort, reflect the city's ethos in a dreamlike visual setting with intriguingly placed objects. This film offers a captivating glimpse into the contrasts and aspirations of these laborers' lives.`
    },
    {
      id: 'falling-rain-2011',
      number: '16',
      title: 'FALLING RAIN',
      subtitle: '34-MIN VIDEO INSTALLATION',
      year: '2011',
      category: 'INSTALLATION',
      medium: 'Video Installation',
      dimensions: 'Gallery Room Setting',
      duration: '34-minute',
      components: '1 TV Monitor (Color), 2 Low Stools, 2 Window Curtains',
      venue: 'Kuan-Du Film Festival, Taipei National University of Arts, Taiwan',
      curator: 'Kuan-Du Film Festival Selection',
      status: 'ARCHIVED',
      image: '/assets/works/falling_rain/falling_rain_01.jpg',
      plate: '/assets/works/falling_rain/falling_rain_01.jpg',
      images: [
        {
          url: '/assets/works/falling_rain/falling_rain_01.jpg',
          title: 'Installation Space // CRT Monitor & Stools',
          alt: 'Falling Rain installation space with TV monitor, 2 low stools, and window curtains'
        },
        {
          url: '/assets/works/falling_rain/falling_rain_02.jpg',
          title: 'Exhibition Interaction // Viewer on Low Stool',
          alt: 'Young woman sitting on low stool watching the video monitor'
        },
        {
          url: '/assets/works/falling_rain/falling_rain_03.jpg',
          title: 'Video Narrative // Living Room & Grandfather Clock',
          alt: 'Narrative scene with grandfather clock, gramophone, and man in armchair'
        },
        {
          url: '/assets/works/falling_rain/falling_rain_04.jpg',
          title: 'Video Narrative // Factory Worker Resting Under Curtains',
          alt: 'Young woman lying on mattress under floral window curtains'
        }
      ],
      imageAlt: 'Falling Rain installation with TV monitor, low stools, and window curtains',
      summary: 'Chronicles migrant workers from Isan working in Bangkok ceramic sweet factories, weaving real-life dialogues and domestic longing into moving image.',
      statement: `"Falling Rain" draws inspiration from young laborers from Northeastern Thailand who move to Bangkok to work in sweet factories. The factory environment, filled with ceramic dust and machinery noise, sharply contrasts with their dreams of urban life. 

The installation incorporates domestic items—stools and window curtains—to evoke the intimacy and dislocation felt by these workers, with their real-life experiences and dialogues woven into the film's narrative.`
    }
  ]
};

// Helper to get detailed work data
export function getWorkById(id) {
  return ARCHIVE_DATA.works.find(w => w.id === id) || ARCHIVE_DATA.works[0];
}
