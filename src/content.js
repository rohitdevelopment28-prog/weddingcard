// All wedding details live here, in both languages.
// To change a date, time, venue or name, edit this file only.

export const MUSIC_SRC = '/music.mp3'

export const CONTACTS = [
  { label: '78757 14000', tel: '+917875714000' },
  { label: '79722 27231', tel: '+917972227231' },
]

const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

export const MAPS = {
  wedding: mapsSearch('Suruchi Resort, Kurul Nagaon Road, Alibag, Maharashtra 402201'),
  haldi: mapsSearch('P K Cottage, Kurul, Alibag, Maharashtra'),
}

const RESORT = 'Suruchi Resort, Kurul-Nagaon Road, Alibaug, Raigad 402201'

// Times carry the IST offset so the countdown and calendar are right anywhere in the world.
// End times for the Haldi and the wedding are estimates, used only for calendar entries.
export const EVENTS = [
  { id: 'haldi', start: '2026-12-11T09:00:00+05:30', end: '2026-12-11T12:00:00+05:30', place: 'P. K. Cottage, Kurul, Alibaug' },
  { id: 'wedding', start: '2026-12-12T12:20:00+05:30', end: '2026-12-12T13:00:00+05:30', place: RESORT },
  { id: 'reception', start: '2026-12-12T13:00:00+05:30', end: '2026-12-12T15:00:00+05:30', place: RESORT },
]

export const TEXT = {
  en: {
    invited: 'You’re invited',
    invitedSub: 'to a wedding by the sea',
    tapDoors: 'Tap the doors to open',
    welcome: 'Welcome to the wedding of',
    rohit: 'Rohit',
    shruti: 'Shruti',
    place: 'Alibaug, Maharashtra',
    scroll: 'Scroll down',
    dateTitle: 'The date',
    scratch: 'Scratch to reveal the date',
    revealAll: 'Reveal it for me',
    units: { day: 'Day', month: 'Month', year: 'Year' },
    date: { day: '12', month: 'December', year: '2026' },
    dateLine: 'Saturday, at 12:20 PM',
    dateSub: 'The muhurat, with lunch to follow',
    addCal: 'Add to calendar',
    ganesh: '॥ श्री गणेशाय नमः ॥',
    blessing: 'With the blessings of our elders, you are invited to the wedding of',
    groom: { name: 'Rohit Satvidkar', rel: 'Son of', parent: 'Shri Ramesh Bhaurao Satvidkar', from: 'Prabhadevi, Mumbai' },
    bride: { name: 'Shruti Chavan', rel: 'Daughter of', parent: 'Shri Sanjay Harishchandra Chavan', from: 'Vatul, Rajapur' },
    with: 'with',
    cardDate: 'Saturday, 12 December 2026',
    cardVenue: 'Suruchi Resort, Alibaug',
    storyTitle: 'Our story',
    story: [
      ['The day we met', 'The beginning of our favourite chapter'],
      ['Our first trip', 'Mumbai to the mountains, with too many photos'],
      ['The day we said yes', 'Happy tears, and a toast to forever'],
    ],
    eventsTitle: 'The celebrations',
    events: {
      haldi: { when: 'Fri, 11 Dec', time: '9:00 AM', name: 'Haldi', alt: 'हळदी', where: 'P. K. Cottage, Kurul' },
      wedding: { when: 'Sat, 12 Dec', time: '12:20 PM', name: 'Wedding', alt: 'विवाह', where: 'Suruchi Resort, Alibaug' },
      reception: { when: 'Sat, 12 Dec', time: '1:00 – 3:00 PM', name: 'Reception & lunch', alt: 'स्वागत व भोजन', where: 'Suruchi Resort, Alibaug' },
    },
    countTitle: 'The celebration begins',
    countUnits: ['Days', 'Hours', 'Minutes', 'Seconds'],
    until: { haldi: 'until the Haldi, on Friday, 11 December', wedding: 'until the wedding, on Saturday, 12 December' },
    married: 'Married, with your blessings.',
    venueTitle: 'Getting there',
    venueCity: 'Alibaug',
    venueName: 'Suruchi Resort',
    venueLines: ['Kurul–Nagaon Road, Taluka Alibaug,', 'District Raigad 402 201'],
    openMap: 'Open in Google Maps',
    haldiVenue: 'For the Haldi',
    haldiName: 'P. K. Cottage, Kurul',
    haldiMap: 'Get directions',
    familyTitle: 'Our families',
    memory: 'In loving memory of',
    memoryNames: ['Late Sau. Rashmi Ramesh Satvidkar', 'Late Bhaurao Laxman Satvidkar', 'Late Ramabai Bhaurao Satvidkar', 'Late Pundalik Sitaram Birje'],
    eager: 'Eager to welcome you',
    eagerNames: ['Shri Ramesh Bhau Satvidkar', 'Vikas & Shilpa Surve', 'Bhushan & Bhargavi Birje', 'Pradip & Priya Arekar', 'Sudip & Vishakha Birje', 'Smt. Sharda Chandrakant Surve', 'Smt. Pradnya Pundalik Birje', 'Smt. Sunanda Moreshwar Satvidkar'],
    hosts: 'Your hosts',
    hostNames: ['Omkar Pradip Arekar', 'Atharv Sanjay Satvidkar'],
    kids: 'Don’t you dare miss it',
    kidsLine: 'Swarni, Smahi, Amrita and Swamiraj say: you have to come to our Mama’s, our Dada’s wedding!',
    call: 'Call the family',
    withLove: 'With love, the Satvidkar, Birje, Arekar, Surve and Shivalkar families',
    playMusic: 'Play music',
    pauseMusic: 'Pause music',
    otherLang: 'मरा',
    switchLang: 'मराठीत वाचा',
  },
  mr: {
    invited: 'आग्रहाचे निमंत्रण',
    invitedSub: 'समुद्रकिनारी एका लग्नाचे',
    tapDoors: 'दार उघडण्यासाठी स्पर्श करा',
    welcome: 'यांच्या विवाहसोहळ्यात स्वागत',
    rohit: 'रोहित',
    shruti: 'श्रृती',
    place: 'अलिबाग, महाराष्ट्र',
    scroll: 'खाली पहा',
    dateTitle: 'शुभ तारीख',
    scratch: 'तारीख पाहण्यासाठी खरवडा',
    revealAll: 'थेट दाखवा',
    units: { day: 'दिवस', month: 'महिना', year: 'वर्ष' },
    date: { day: '१२', month: 'डिसेंबर', year: '२०२६' },
    dateLine: 'शनिवार, दुपारी १२ वाजून २० मिनिटे',
    dateSub: 'शुभमुहूर्त, त्यानंतर भोजन',
    addCal: 'कॅलेंडरमध्ये जोडा',
    ganesh: '॥ श्री गणेशाय नमः ॥',
    blessing: 'थोरामोठ्यांच्या आशीर्वादाने, या विवाहसोहळ्याचे आपणास निमंत्रण',
    groom: { name: 'रोहित सतविडकर', rel: 'सुपुत्र', parent: 'श्री. रमेश भाऊराव सतविडकर', from: 'प्रभादेवी, मुंबई' },
    bride: { name: 'श्रृती चव्हाण', rel: 'सुकन्या', parent: 'श्री. संजय हरिश्चंद्र चव्हाण', from: 'वाटूळ, राजापूर' },
    with: 'आणि',
    cardDate: 'शनिवार, १२ डिसेंबर २०२६',
    cardVenue: 'सुरुची रिसोर्ट, अलिबाग',
    storyTitle: 'आमची गोष्ट',
    story: [
      ['पहिली भेट', 'आमच्या आवडत्या प्रकरणाची सुरुवात'],
      ['पहिला प्रवास', 'मुंबई ते डोंगर, आणि भरपूर फोटो'],
      ['होकाराचा दिवस', 'आनंदाश्रू, आणि कायमची साथ'],
    ],
    eventsTitle: 'सोहळे',
    events: {
      haldi: { when: 'शुक्र, ११ डिसें', time: 'सकाळी ९.००', name: 'हळदी', alt: 'Haldi', where: 'पी. के. कॉटेज, कुरुळ' },
      wedding: { when: 'शनि, १२ डिसें', time: 'दुपारी १२.२०', name: 'विवाह', alt: 'Wedding', where: 'सुरुची रिसोर्ट, अलिबाग' },
      reception: { when: 'शनि, १२ डिसें', time: 'दुपारी १ ते ३', name: 'स्वागत व भोजन', alt: 'Reception & lunch', where: 'सुरुची रिसोर्ट, अलिबाग' },
    },
    countTitle: 'सोहळ्याला उरले',
    countUnits: ['दिवस', 'तास', 'मिनिटे', 'सेकंद'],
    until: { haldi: 'हळदीसाठी, शुक्रवार, ११ डिसेंबर', wedding: 'विवाहासाठी, शनिवार, १२ डिसेंबर' },
    married: 'आपल्या आशीर्वादाने विवाह संपन्न.',
    venueTitle: 'स्थळ',
    venueCity: 'अलिबाग',
    venueName: 'सुरुची रिसोर्ट',
    venueLines: ['कुरुळ–नागांव रोड, ता. अलिबाग,', 'जि. रायगड ४०२ २०१'],
    openMap: 'नकाशावर पहा',
    haldiVenue: 'हळदीसाठी',
    haldiName: 'पी. के. कॉटेज, कुरुळ',
    haldiMap: 'मार्ग पहा',
    familyTitle: 'आमचे कुटुंब',
    memory: 'पुण्यस्मरण',
    memoryNames: ['कै. सौ. रश्मी रमेश सतविडकर', 'कै. भाऊराव लक्ष्मण सतविडकर', 'कै. रमाबाई भाऊराव सतविडकर', 'कै. पुंडलिक सिताराम बिर्जे'],
    eager: 'आपल्या प्रतीक्षेत',
    eagerNames: ['श्री. रमेश भाऊ सतविडकर', 'श्री. विकास व सौ. शिल्पा सुर्वे', 'श्री. भूषण व सौ. भार्गवी बिर्जे', 'श्री. प्रदिप व सौ. प्रिया आरेकर', 'श्री. सुदिप व सौ. विशाखा बिर्जे', 'श्रीमती शारदा चंद्रकांत सुर्वे', 'श्रीमती प्रज्ञा पुंडलिक बिर्जे', 'श्रीमती सुनंदा मोरेश्वर सतविडकर'],
    hosts: 'निमंत्रक',
    hostNames: ['ओमकार प्रदिप आरेकर', 'अथर्व संजय सतविडकर'],
    kids: 'नक्की यायचं हं!',
    kidsLine: 'स्वर्णी, स्माही, अम्रीता आणि स्वामीराज म्हणतात: आमच्या मामाच्या, दादाच्या लग्नाला यायचं हं!',
    call: 'संपर्क',
    withLove: 'सप्रेम, सतविडकर, बिर्जे, आरेकर, सुर्वे आणि शिवलकर परिवार',
    playMusic: 'संगीत सुरू करा',
    pauseMusic: 'संगीत थांबवा',
    otherLang: 'EN',
    switchLang: 'Read in English',
  },
}

export const toDigits = (value, lang) =>
  lang === 'mr' ? String(value).replace(/\d/g, (d) => '०१२३४५६७८९'[d]) : String(value)

const stamp = (iso) => new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, '')

export function calendarUrl(id) {
  const event = EVENTS.find((e) => e.id === id)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${TEXT.en.events[id].name}: Rohit & Shruti`,
    dates: `${stamp(event.start)}/${stamp(event.end)}`,
    location: event.place,
  })
  return `https://calendar.google.com/calendar/render?${params}`
}
