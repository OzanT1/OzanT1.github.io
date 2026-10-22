const en = {
  meta: {
    title: 'Ozan Utku Yılmaz | Software Engineer',
    description: 'Ozan Utku Yılmaz is a software engineer based in Istanbul. Explore his software projects, experience, and the problems he has worked on.',
    locale: 'en_US',
  },
  common: { skip: 'Skip to content', home: 'Return to Home', notFound: 'This page could not be found.' },
  nav: {
    label: 'Main navigation', top: 'Ozan Utku Yılmaz, back to top', work: 'Work', about: 'About', contact: 'Say hello',
    language: 'Site language', english: 'Read in English', turkish: 'Türkçe oku',
  },
  hero: {
    role: 'Software engineer', location: 'Istanbul, Türkiye', firstLine: 'Always curious.', lead: 'Always ', emphasis: 'building.',
    intro: 'I’m Ozan. I love making software, figuring out unfamiliar problems, and learning whatever it takes to turn an idea into something that works.',
    work: 'Take a look at the work', collageLabel: 'A few things from my workbench', noteFirst: 'A few things from', noteSecond: 'my workbench.',
    automation: 'A business problem, solved.', find: 'Find', connect: 'Connect', track: 'Track', outreach: 'Creator outreach, on autopilot',
    worldAlt: 'Maintenance Protocol’s industrial multiplayer world', world: 'A world to build together', idea: 'An idea, given shape.', curve: 'Bézier Road Editor',
    footnote: 'Different problems. The same drive to figure them out.', github: 'The code is on GitHub',
  },
  work: {
    kicker: '01 / The work', count: 'projects & counting', firstLine: 'Some of the things', lead: 'I’ve ', emphasis: 'built.',
    introFirst: 'Useful tools, shared worlds, small experiments.', introSecond: 'Each one started with something I wanted to figure out.',
    more: 'There’s more behind the code', details: 'Code & details', gameplay: 'Gameplay', story: 'Project story',
    technologies: 'Technologies for {title}', githubLabel: '{title} on GitHub', videoLabel: 'Watch {title} gameplay', storyLabel: 'Read the {title} project story',
  },
  about: {
    kicker: '02 / A little about me', firstLine: 'I like the part where', lead: 'something ', emphasis: 'clicks.',
    intro: 'An unfamiliar problem is a good reason to learn something new.',
    firstParagraph: 'I’m a software engineer based in Istanbul. I like understanding how things work, asking useful questions, and staying with a problem until there’s something real on the other side.',
    secondParagraph: 'Sometimes that means building a tool from scratch for a business owner. Sometimes it means making a team’s systems work better. I care about understanding what’s needed, choosing the right tools, and following through.',
    degree: 'BSc, Computer Engineering', university: 'MEF University · 2021–2025', honors: 'Honors · GPA 3.22 / 4.00',
    experience: 'A few places I’ve contributed', linkedin: 'More of the story on LinkedIn',
    jobs: [
      { company: 'PEILABS', date: 'Part-time · Nov 2024–Oct 2025', text: 'Built multiplayer systems in C# and Unity while finishing university. Replaced polling with an event-driven AI architecture, improving AI system performance by 30%.' },
      { company: 'Omni Factors', date: 'Internship · Aug–Sep 2024', text: 'Built full-stack features and CRM automations with Node.js and Zendesk APIs. Resolved an API rate-limiting issue affecting system stability.' },
      { company: 'Microsoft', date: 'Internship · Jul–Aug 2024', text: 'Worked on time-series models in Python and PyTorch: preparing data, training LSTM and GRU models, and evaluating the results.' },
    ],
  },
  contact: {
    kicker: '03 / What’s next?', note: 'Let’s make something useful.', firstLine: 'Have something', emphasis: 'in mind?',
    intro: 'A problem to solve, an idea to explore, or a team to build with. I’d love to hear about it.', talk: 'Let’s talk',
    copyLabel: 'Copy email address', copy: 'Copy email', copied: 'Copied', success: 'Email copied.',
    failure: 'Select the email address to copy it, or click it to open your email app.',
  },
  footer: { top: 'Back to top' },
  artwork: {
    commerce: { alt: 'Architecture illustration: API, queue, worker, database, and cache', label: 'ONE ORDER. SEVERAL MOVING PARTS.', caption: 'A small map of the architecture ↗' },
    outreach: { alt: 'Workflow illustration: discover creators, deduplicate leads, send outreach, track follow-ups', label: 'FROM REPETITIVE TASK TO WORKFLOW', caption: 'YouTube → Apps Script → Google Sheets' },
    spline: { alt: 'Illustration of two Bézier splines with control points and a generated road mesh', label: 'A LITTLE MATH. A ROAD TO ANYWHERE.', caption: 'Control points → curves → mesh' },
    valet: { alt: 'Illustration of ValetOps data relationships between staff, tickets, cars, and parking', label: 'PUTTING THE OPERATION IN ORDER', caption: 'One operation. Connected data.' },
    workshop: { alt: 'Illustration of four players connected to one shared multiplayer workshop', label: 'FOUR PLAYERS. ONE SHARED WORKSHOP.', caption: 'Shared orders / shared state / shared budget' },
    compression: { alt: 'Conceptual illustration of repeated data becoming dictionary codes with LZW', label: 'SAME INFORMATION. LESS SPACE.', caption: 'Text & bitmap compression / LZW' },
    assembly: { alt: 'A five-by-five tic-tac-toe board illustrating the configurable MIPS assembly game', label: 'THINK OUTSIDE THE 3 × 3.', caption: 'A familiar game, a little closer to the metal.' },
    circles: { alt: 'Illustration of circles packed without overlapping', label: 'A PLACE FOR EVERY CIRCLE.', caption: 'An exercise in geometry & constraints.' },
    arcade: { alt: 'Illustration for a mobile idle arcade prototype; see the gameplay video for the actual game', label: 'A SMALL BUILD. BEST SEEN IN MOTION.', caption: 'Unity / mobile prototype / gameplay ↗' },
    queue: 'QUEUE', worker: 'WORKER', email: 'Email', discover: 'Discover', connect: 'Connect', follow: 'Follow through.',
    staff: 'Staff', cars: 'Cars', tickets: 'Tickets', parking: 'Parking', workshopSteps: 'Make. Paint. Deliver.',
  },
};

// The shared shape makes missing interface translations a TypeScript error.
const tr: typeof en = {
  meta: {
    title: 'Ozan Utku Yılmaz | Yazılım Mühendisi',
    description: 'Ozan Utku Yılmaz, İstanbul’da yaşayan bir yazılım mühendisidir. Geliştirdiği yazılım projelerine, deneyimine ve üzerinde çalıştığı problemlere göz atın.',
    locale: 'tr_TR',
  },
  common: { skip: 'İçeriğe geç', home: 'Ana sayfaya dön', notFound: 'Bu sayfa bulunamadı.' },
  nav: {
    label: 'Ana gezinme', top: 'Ozan Utku Yılmaz, sayfanın başına dön', work: 'Projeler', about: 'Hakkımda', contact: 'Merhaba de',
    language: 'Site dili', english: 'Read in English', turkish: 'Türkçe oku',
  },
  hero: {
    role: 'Yazılım mühendisi', location: 'İstanbul, Türkiye', firstLine: 'Hep meraklı.', lead: 'Hep ', emphasis: 'üreten.',
    intro: 'Ben Ozan. Yazılım geliştirmeyi, yeni problemleri çözmeyi ve bir fikri çalışan bir ürüne dönüştürmek için gereken her şeyi öğrenmeyi seviyorum.',
    work: 'Projelerime göz at', collageLabel: 'Çalışma masamdan birkaç örnek', noteFirst: 'Çalışma masamdan', noteSecond: 'birkaç örnek.',
    automation: 'Bir iş problemine çözüm.', find: 'Bul', connect: 'İletişim kur', track: 'Takip et', outreach: 'İçerik üreticilerine otomatik ulaş',
    worldAlt: 'Maintenance Protocol’ün çok oyunculu endüstriyel dünyası', world: 'Birlikte kurulacak bir dünya', idea: 'Bir fikrin şekil alması.', curve: 'Bézier Yol Editörü',
    footnote: 'Farklı problemler. Aynı çözme isteği.', github: 'Kodlar GitHub’da',
  },
  work: {
    kicker: '01 / Projeler', count: 'proje ve devamı gelecek', firstLine: 'Yaptıklarımdan', lead: '', emphasis: 'birkaçı.',
    introFirst: 'İşe yarayan araçlar, ortak dünyalar, küçük denemeler.', introSecond: 'Her biri, çözmek istediğim bir problemle başladı.',
    more: 'Kodların arkasında daha fazlası var', details: 'Kod ve detaylar', gameplay: 'Oynanış', story: 'Projenin hikâyesi',
    technologies: '{title} için kullanılan teknolojiler', githubLabel: '{title} GitHub deposu', videoLabel: '{title} oynanışını izle', storyLabel: '{title} projesinin hikâyesini oku',
  },
  about: {
    kicker: '02 / Biraz kendimden', firstLine: 'Her şeyin yerine', lead: '', emphasis: 'oturduğu o an.',
    intro: 'Yeni bir problem, yeni bir şey öğrenmek için iyi bir sebep.',
    firstParagraph: 'İstanbul’da yaşayan bir yazılım mühendisiyim. İşlerin nasıl yürüdüğünü anlamayı, doğru soruları sormayı ve ortaya somut bir sonuç çıkana kadar problemin peşini bırakmamayı seviyorum.',
    secondParagraph: 'Bazen bir işletme sahibi için sıfırdan bir araç geliştiriyorum. Bazen de bir ekibin sistemlerini iyileştiriyorum. İhtiyacı anlamaya, doğru araçları seçmeye ve başladığım işi tamamlamaya önem veriyorum.',
    degree: 'Bilgisayar Mühendisliği Lisans Derecesi', university: 'MEF Üniversitesi · 2021–2025', honors: 'Onur derecesi · GNO 3,22 / 4,00',
    experience: 'Katkıda bulunduğum yerlerden birkaçı', linkedin: 'Hikâyenin devamı LinkedIn’de',
    jobs: [
      { company: 'PEILABS', date: 'Yarı zamanlı · Kas 2024–Eki 2025', text: 'Üniversitenin son yılında C# ve Unity ile çok oyunculu sistemler geliştirdim. Sürekli sorgulama yerine olay güdümlü bir mimari kullanarak yapay zekâ sisteminin performansını %30 artırdım.' },
      { company: 'Omni Factors', date: 'Staj · Ağu–Eyl 2024', text: 'Node.js ve Zendesk API’leriyle uygulamanın hem arayüzünde hem sunucu tarafında çalıştım ve CRM otomasyonları geliştirdim. Sistemin kararlılığını etkileyen bir API istek sınırı sorununu çözdüm.' },
      { company: 'Microsoft', date: 'Staj · Tem–Ağu 2024', text: 'Python ve PyTorch ile zaman serisi modelleri üzerinde çalıştım. Veri hazırlama, LSTM ve GRU modellerini eğitme ve sonuçları değerlendirme süreçlerinde yer aldım.' },
    ],
  },
  contact: {
    kicker: '03 / Sırada ne var?', note: 'İşe yarayan bir şey geliştirelim.', firstLine: 'Aklında', emphasis: 'bir fikir mi var?',
    intro: 'Çözülecek bir problem, denemek istediğin bir fikir ya da birlikte çalışacak bir ekip. Dinlemek isterim.', talk: 'Konuşalım',
    copyLabel: 'E-posta adresini kopyala', copy: 'E-postayı kopyala', copied: 'Kopyalandı', success: 'E-posta adresi kopyalandı.',
    failure: 'Kopyalamak için e-posta adresini seçebilir veya e-posta uygulamanı açmak için adrese tıklayabilirsin.',
  },
  footer: { top: 'Başa dön' },
  artwork: {
    commerce: { alt: 'Mimari çizimi: API, kuyruk, arka plan servisi, veritabanı ve önbellek', label: 'BİR SİPARİŞ. BİRDEN FAZLA BİLEŞEN.', caption: 'Mimarinin küçük bir haritası ↗' },
    outreach: { alt: 'İş akışı çizimi: içerik üreticilerini bul, tekrarları ayıkla, iletişim kur ve takip et', label: 'TEKRAR EDEN İŞLERDEN OTOMATİK BİR AKIŞA', caption: 'YouTube → Apps Script → Google Sheets' },
    spline: { alt: 'Kontrol noktaları ve oluşturulan yol ağıyla iki Bézier eğrisinin çizimi', label: 'BİRAZ MATEMATİK. HER YERE UZANAN BİR YOL.', caption: 'Kontrol noktaları → eğriler → geometri' },
    valet: { alt: 'ValetOps’ta çalışanlar, biletler, araçlar ve otoparklar arasındaki ilişkilerin çizimi', label: 'İŞLEYİŞİ DÜZENE KOYMAK', caption: 'Tek operasyon. Birbirine bağlı veriler.' },
    workshop: { alt: 'Ortak bir atölyeye bağlanan dört oyuncunun çizimi', label: 'DÖRT OYUNCU. ORTAK BİR ATÖLYE.', caption: 'Ortak siparişler / ortak durum / ortak bütçe' },
    compression: { alt: 'Tekrarlayan verilerin LZW ile sözlük kodlarına dönüştürülmesini anlatan çizim', label: 'AYNI BİLGİ. DAHA AZ YER.', caption: 'Metin ve bitmap sıkıştırma / LZW' },
    assembly: { alt: 'Ayarlanabilir MIPS oyununu anlatan beşe beşlik XOX tahtası', label: '3 × 3’ÜN ÖTESİNDE DÜŞÜN.', caption: 'Tanıdık bir oyun, donanıma biraz daha yakın.' },
    circles: { alt: 'Birbirleriyle çakışmadan yerleştirilmiş dairelerin çizimi', label: 'HER DAİREYE BİR YER.', caption: 'Geometri ve kısıtlar üzerine bir deneme.' },
    arcade: { alt: 'Mobil idle arcade prototipi için çizim; oyunun kendisi oynanış videosunda görülebilir', label: 'KÜÇÜK BİR PROTOTİP. HAREKET HÂLİNDE GÖR.', caption: 'Unity / mobil prototip / oynanış ↗' },
    queue: 'KUYRUK', worker: 'SERVİS', email: 'E-posta', discover: 'Keşfet', connect: 'İletişim kur', follow: 'Takibini yap.',
    staff: 'Çalışanlar', cars: 'Araçlar', tickets: 'Biletler', parking: 'Otopark', workshopSteps: 'Üret. Boya. Teslim et.',
  },
};

export const messages = { en, tr };
