import maintenanceImage from '@/assets/projects/Maintenance_Protocol_Image.webp';
import survivorImage from '@/assets/projects/2nd_Place_—_HorizonAI_Global_Hackathon_2025_Image.webp';
import shooterImage from '@/assets/projects/Third-Person_Shooter_Game_Image.webp';
import cubeImage from '@/assets/projects/CubeMatchGame_Image.webp';
import stockImage from '@/assets/projects/Stock-Price-Prediction-Image.webp';
import tankImage from '@/assets/projects/Tank_Game_Prototype_Image.webp';
import deadCenterImage from '@/assets/projects/Dead_Center_Image.webp';
import spaceshipImage from '@/assets/projects/Space_Ship_Invader_Image.webp';
import taskImage from '@/assets/projects/task-tracker.webp';
import stackImage from '@/assets/projects/stack-attack.webp';

export type ProjectVisual = 'commerce' | 'outreach' | 'spline' | 'valet' | 'workshop' | 'arcade' | 'compression' | 'assembly' | 'circles';

export interface ProjectCopy {
  title: string;
  context: string;
  description: string;
  tech: string[];
  imageAlt?: string;
  award?: string;
}

export interface Project extends ProjectCopy {
  id: string;
  tr: ProjectCopy;
  github?: string;
  video?: string;
  website?: string;
  image?: string;
  imageFit?: 'contain';
  visual?: ProjectVisual;
}

// One collection, interleaving different problems. Sources: docs/content-sources.md.
export const projects: Project[] = [
  {
    id: 'ecommerce', title: 'E-Commerce System', context: 'Personal project',
    description: 'An order is more than an API call. I built the authentication, catalog, cart, and payment flows, with queued email processing and Redis caching across a Docker Compose environment.',
    tech: ['C# / ASP.NET Core', 'RabbitMQ / Redis', 'PostgreSQL'],
    github: 'https://github.com/OzanT1/ECommerce-Backend-System', visual: 'commerce',
    tr: {
      "title": "E-Ticaret Sistemi",
      "context": "Kişisel proje",
      "description": "Bir sipariş, tek bir API çağrısından ibaret değil. Kimlik doğrulama, katalog, sepet ve ödeme akışlarını geliştirdim. E-postalar kuyruk üzerinden işleniyor, Redis önbelleklemesi kullanılıyor ve tüm bileşenler Docker Compose ile çalışıyor.",
      "tech": [
        "C# / ASP.NET Core",
        "RabbitMQ / Redis",
        "PostgreSQL"
      ]
    },
  },
  {
    id: 'maintenance-protocol', title: 'Maintenance Protocol', context: 'Independent project',
    description: 'An online multiplayer game built around server-authoritative interactions, replicated gameplay, and latency-aware state synchronization. A hands-on exploration of making a shared world behave consistently.',
    tech: ['C++', 'Unreal Engine 5', 'Networking'],
    video: 'https://www.youtube.com/watch?v=PClBa2uX1Bw', image: maintenanceImage,
    imageAlt: 'A first-person view inside the industrial science-fiction environment of Maintenance Protocol.',
    tr: {
      "title": "Maintenance Protocol",
      "context": "Bağımsız proje",
      "description": "Etkileşimlerin sunucu tarafından yönetildiği, oyun durumunun oyuncular arasında eşitlendiği çevrimiçi çok oyunculu bir oyun. Gecikmeyi hesaba katarak ortak bir dünyayı tutarlı biçimde çalıştırmak üzerine bir çalışma.",
      "tech": [
        "C++",
        "Unreal Engine 5",
        "Ağ programlama"
      ],
      "imageAlt": "Maintenance Protocol’ün endüstriyel bilim kurgu ortamından birinci şahıs görünümü."
    },
  },
  {
    id: 'creator-outreach', title: 'Creator Outreach Automation', context: 'Client project · Sole developer',
    description: 'A business owner needed a better way to find customers. I built a configurable workflow for discovering creators, deduplicating leads, sending personalized outreach, and tracking follow-ups in Google Sheets.',
    tech: ['JavaScript', 'Google Apps Script', 'YouTube Data API'],
    github: 'https://github.com/OzanT1/youtube-outreach-automation', visual: 'outreach',
    tr: {
      "title": "İçerik Üreticisi İletişim Otomasyonu",
      "context": "Müşteri projesi · Tek geliştirici",
      "description": "Bir işletme sahibinin yeni müşterilere daha kolay ulaşması gerekiyordu. İçerik üreticilerini bulan, mükerrer kayıtları ayıklayan, kişiselleştirilmiş e-postalar gönderen ve takip sürecini Google Sheets’te yöneten, yapılandırılabilir bir iş akışı geliştirdim.",
      "tech": [
        "JavaScript",
        "Google Apps Script",
        "YouTube Data API"
      ]
    },
  },
  {
    id: 'survivor-ai', title: 'Survivor AI', context: 'Team project · Hackathon',
    description: 'Co-built an offline health-information assistant for devices with limited resources. A Flutter interface connects to a Python API using embeddings and similarity search, without relying on an internet connection.',
    tech: ['Python / FastAPI', 'Flutter', 'Embeddings'],
    website: 'https://devpost.com/software/survivor-ai', image: survivorImage, imageFit: 'contain',
    imageAlt: 'Survivor AI project emblem with its hackathon winner ribbon.',
    award: 'Shared 2nd place · Horizon AI 2025',
    tr: {
      "title": "Survivor AI",
      "context": "Takım projesi · Hackathon",
      "description": "Sınırlı kaynaklara sahip cihazlarda internetsiz çalışabilen bir sağlık bilgisi asistanını ekip olarak geliştirdik. Flutter arayüzü, vektör temsilleri ve benzerlik araması kullanan bir Python API’sine bağlanıyor.",
      "tech": [
        "Python / FastAPI",
        "Flutter",
        "Vektör temsilleri"
      ],
      "imageAlt": "Survivor AI proje amblemi ve hackathon kazananı şeridi.",
      "award": "Ortak ikincilik · Horizon AI 2025"
    },
  },
  {
    id: 'bezier-editor', title: 'Bézier Road Editor', context: 'Developer tool',
    description: 'A road-building tool that works directly in the Unity editor. Shape two independent splines, distribute nodes by count or distance, and generate a road mesh from the resulting geometry.',
    tech: ['C#', 'Unity Editor', 'Bézier Mathematics'],
    github: 'https://github.com/OzanT1/BezierSplineEditorTool', visual: 'spline',
    tr: {
      "title": "Bézier Yol Editörü",
      "context": "Geliştirici aracı",
      "description": "Doğrudan Unity editöründe çalışan bir yol oluşturma aracı. İki bağımsız eğriyi şekillendiriyor, noktaları sayılarına veya aralarındaki mesafeye göre yerleştiriyor ve elde edilen geometriden bir yol ağı oluşturuyor.",
      "tech": [
        "C#",
        "Unity Editörü",
        "Bézier matematiği"
      ]
    },
  },
  {
    id: 'valetops', title: 'ValetOps', context: 'Team project · My work: database & API',
    description: 'I designed the relational database and built the API for a valet operations app: cars, tickets, staff, parking, and payment histories, with role-based access and push notifications. Teammates built the mobile app and vision models.',
    tech: ['Python / FastAPI', 'MySQL', 'Firebase'],
    github: 'https://github.com/OzanT1/ValetOps', visual: 'valet',
    tr: {
      "title": "ValetOps",
      "context": "Takım projesi · Veritabanı ve API",
      "description": "Vale operasyonlarını yöneten bir uygulamanın ilişkisel veritabanını tasarladım ve API’sini geliştirdim. Araç, bilet, çalışan, otopark ve ödeme kayıtlarını; rol tabanlı erişimi ve anlık bildirimleri kapsıyor. Mobil uygulamayı ve görüntü işleme modellerini ekip arkadaşlarım geliştirdi.",
      "tech": [
        "Python / FastAPI",
        "MySQL",
        "Firebase"
      ]
    },
  },
  {
    id: 'carpenter-simulator', title: 'Carpenter Simulator', context: 'Technical case study',
    description: 'A cooperative workshop for up to four players. Shared orders, carrying, painting, delivery validation, and a common budget all stay in sync through server-authoritative interactions and replicated state.',
    tech: ['Unreal Engine 5', 'Blueprints', 'Replication'],
    github: 'https://github.com/OzanT1/Carpenter-Simulator', visual: 'workshop',
    tr: {
      "title": "Carpenter Simulator",
      "context": "Teknik vaka çalışması",
      "description": "Dört oyuncuya kadar birlikte çalışılabilen bir marangoz atölyesi. Ortak siparişler, taşıma, boyama, teslimat kontrolü ve bütçe; sunucu tarafından yönetilen etkileşimler ve durum eşitlemesiyle tutarlı kalıyor.",
      "tech": [
        "Unreal Engine 5",
        "Blueprints",
        "Durum eşitleme"
      ]
    },
  },
  {
    id: 'tasktracker', title: 'TaskTracker', context: 'Personal project',
    description: 'A complete path from a React form to a database record. Create, edit, complete, and delete tasks, with due-date sorting and persistence through an ASP.NET Core Minimal API.',
    tech: ['React', 'ASP.NET Core', 'EF Core / PostgreSQL'],
    github: 'https://github.com/OzanT1/TaskTracker', image: taskImage,
    imageAlt: 'The actual TaskTracker application showing its task form and list.', imageFit: 'contain',
    tr: {
      "title": "TaskTracker",
      "context": "Kişisel proje",
      "description": "React formundan veritabanı kaydına uzanan bir görev yönetimi uygulaması. ASP.NET Core Minimal API üzerinden görev ekleme, düzenleme, tamamlama ve silme; son tarihe göre sıralama ve kalıcı veri saklama sunuyor.",
      "tech": [
        "React",
        "ASP.NET Core",
        "EF Core / PostgreSQL"
      ],
      "imageAlt": "TaskTracker uygulamasının görev formu ve listesini gösteren gerçek ekran görüntüsü."
    },
  },
  {
    id: 'stock-prediction', title: 'Stock Price Prediction', context: 'Modeling experiment',
    description: 'Built and compared LSTM and GRU time-series models in PyTorch. The project covers data preparation, GPU-assisted training, and visual comparisons of predictions and training versus validation loss.',
    tech: ['Python', 'PyTorch', 'LSTM / GRU'],
    github: 'https://github.com/OzanT1/Stock-Price-Prediction', image: stockImage,
    imageAlt: 'Actual model output comparing historical stock prices and predictions.', imageFit: 'contain',
    tr: {
      "title": "Hisse Fiyatı Tahmini",
      "context": "Modelleme denemesi",
      "description": "PyTorch ile LSTM ve GRU zaman serisi modelleri geliştirip karşılaştırdım. Veri hazırlama, GPU destekli eğitim, tahminlerin görselleştirilmesi ve eğitim ile doğrulama kayıplarının karşılaştırılmasını kapsıyor.",
      "tech": [
        "Python",
        "PyTorch",
        "LSTM / GRU"
      ],
      "imageAlt": "Geçmiş hisse fiyatları ile model tahminlerini karşılaştıran gerçek program çıktısı."
    },
  },
  {
    id: 'third-person-shooter', title: 'Third-Person Shooter', context: 'Playable prototype',
    description: 'A playable C++ shooter with combat, movement animation, and enemies driven by Behavior Trees. Clear the level to win.',
    tech: ['C++', 'Unreal Engine 5', 'Behavior Trees'],
    github: 'https://github.com/OzanT1/THIRD-PERSON-SHOOTER-GAME-USING-UNREAL-ENGINE-5',
    video: 'https://youtu.be/Ue5N5nWG_yQ', image: shooterImage,
    imageAlt: 'Third-person shooter gameplay showing the player character in an industrial level.',
    tr: {
      "title": "Üçüncü Şahıs Nişancı Oyunu",
      "context": "Oynanabilir prototip",
      "description": "Çatışma mekanikleri, hareket animasyonları ve davranış ağaçlarıyla yönetilen düşmanlar içeren, C++ ile geliştirilmiş oynanabilir bir nişancı oyunu. Kazanmak için bölümdeki tüm düşmanları temizlemek gerekiyor.",
      "tech": [
        "C++",
        "Unreal Engine 5",
        "Davranış ağaçları"
      ],
      "imageAlt": "Endüstriyel bir bölümde oyuncu karakterini gösteren üçüncü şahıs nişancı oyunu görüntüsü."
    },
  },
  {
    id: 'stack-attack', title: 'Stack Attack Clone', context: 'Technical case study',
    description: 'A mobile arcade prototype with levels defined through ScriptableObjects. Enemy movement, health, and spawning are driven by configuration, so new levels can be added without writing more code.',
    tech: ['C#', 'Unity 6', 'ScriptableObjects'],
    github: 'https://github.com/OzanT1/Stack-Attack-Clone', video: 'https://youtu.be/IYW_yFrhExA',
    image: stackImage, imageFit: 'contain', imageAlt: 'Stack Attack Clone gameplay with colorful stacks and a player-controlled shooter.',
    tr: {
      "title": "Stack Attack Klonu",
      "context": "Teknik vaka çalışması",
      "description": "Bölümleri ScriptableObject’ler üzerinden tanımlanan bir mobil arcade prototipi. Düşman hareketleri, can değerleri ve oluşturulma kuralları veriye dayanıyor; böylece yeni kod yazmadan yeni bölümler eklenebiliyor.",
      "tech": [
        "C#",
        "Unity 6",
        "ScriptableObjects"
      ],
      "imageAlt": "Renkli blokları ve oyuncunun yönettiği silahı gösteren Stack Attack Klonu oynanışı."
    },
  },
  {
    id: 'cube-match', title: 'Cube Match', context: 'Mobile puzzle prototype',
    description: 'A configurable puzzle board with adjacent-cube matching, collection goals, move limits, and audiovisual feedback. Grid logic and level rules are kept modular.',
    tech: ['C#', 'Unity', 'Grid Algorithms'],
    github: 'https://github.com/OzanT1/Cube-Match-Game', image: cubeImage, imageFit: 'contain',
    imageAlt: 'Cube Match mobile gameplay with a colorful tile grid and collection goals.',
    tr: {
      "title": "Cube Match",
      "context": "Mobil bulmaca prototipi",
      "description": "Bitişik küpleri eşleştirme, toplama hedefleri, hamle sınırları ve görsel-işitsel geri bildirim içeren, yapılandırılabilir bir bulmaca tahtası. Izgara mantığı ve bölüm kuralları modüler bir yapıda.",
      "tech": [
        "C#",
        "Unity",
        "Izgara algoritmaları"
      ],
      "imageAlt": "Renkli küp ızgarasını ve toplama hedeflerini gösteren Cube Match mobil oyunu."
    },
  },
  {
    id: 'idle-arcade', title: 'Idle Arcade Prototype', context: 'Technical case study',
    description: 'A mobile idle arcade prototype built in Unity. The repository includes a gameplay recording to see the result in motion.',
    tech: ['C#', 'Unity'], github: 'https://github.com/OzanT1/NokoGamesCase',
    video: 'https://youtu.be/yfK1muoPiS0', visual: 'arcade',
    tr: {
      "title": "Idle Arcade Prototipi",
      "context": "Teknik vaka çalışması",
      "description": "Unity ile geliştirilmiş bir mobil idle arcade prototipi. Sonucu hareket hâlinde görmek için deponun içindeki oynanış videosuna göz atabilirsin.",
      "tech": [
        "C#",
        "Unity"
      ]
    },
  },
  {
    id: 'file-compression', title: 'File Compression', context: 'Earlier experiment · Archived repository',
    description: 'Implemented LZW compression and decompression for text and bitmap images, with a Tkinter interface and image processing using PIL and NumPy.',
    tech: ['Python', 'LZW', 'Tkinter'],
    github: 'https://github.com/OzanT1/File-Compression-Application-Using-Python', visual: 'compression',
    tr: {
      "title": "Dosya Sıkıştırma",
      "context": "İlk denemelerimden · Arşivlenmiş depo",
      "description": "Metin ve bitmap görselleri için LZW sıkıştırma ve açma algoritmasını uyguladım. Tkinter arayüzü ve PIL ile NumPy kullanılarak yapılan görüntü işleme çalışmalarını içeriyor.",
      "tech": [
        "Python",
        "LZW",
        "Tkinter"
      ]
    },
  },
  {
    id: 'dead-center', title: 'Dead Center', context: 'Independent project',
    description: 'An endless survival shooter with arena combat, continuous enemy spawning, pursuing AI, and an in-game interface.',
    tech: ['Unreal Engine 4', 'Blueprints'], video: 'https://www.youtube.com/watch?v=VdiY_CpLYj8',
    image: deadCenterImage, imageAlt: 'Dead Center gameplay in an outdoor arena with enemies approaching the player.',
    tr: {
      "title": "Dead Center",
      "context": "Bağımsız proje",
      "description": "Arena çatışmaları, sürekli oluşan düşmanlar, oyuncuyu takip eden yapay zekâ ve oyun içi arayüzü olan, sonu gelmeyen bir hayatta kalma nişancı oyunu.",
      "tech": [
        "Unreal Engine 4",
        "Blueprints"
      ],
      "imageAlt": "Dış mekândaki bir arenada oyuncuya yaklaşan düşmanları gösteren Dead Center oynanışı."
    },
  },
  {
    id: 'mips-tic-tac-toe', title: 'Tic-Tac-Toe, in Assembly', context: 'Earlier experiment',
    description: 'The familiar game, with a variable-size board and all of its logic written in MIPS assembly. Runs in a MIPS simulator.',
    tech: ['MIPS Assembly', 'Algorithms'],
    github: 'https://github.com/OzanT1/RESIZIBLE-TIC-TAC-TOE-GAME-USING-ASSEMBLY-MIPS', visual: 'assembly',
    tr: {
      "title": "Assembly ile XOX",
      "context": "İlk denemelerimden",
      "description": "Tanıdık bir oyun, değiştirilebilir bir tahta boyutu ve tamamen MIPS assembly ile yazılmış oyun mantığı. Bir MIPS simülatöründe çalışıyor.",
      "tech": [
        "MIPS Assembly",
        "Algoritmalar"
      ]
    },
  },
  {
    id: 'spaceship-invader', title: 'Spaceship Invader', context: 'Independent project',
    description: 'A 2D mobile side-scroller inspired by Jetpack Joyride, built around an endless flight through obstacles.',
    tech: ['C#', 'Unity', 'Mobile'], video: 'https://www.youtube.com/watch?v=nDdieIL9Ahg',
    image: spaceshipImage, imageAlt: 'Spaceship Invader running in landscape orientation on a mobile device.', imageFit: 'contain',
    tr: {
      "title": "Spaceship Invader",
      "context": "Bağımsız proje",
      "description": "Jetpack Joyride’dan esinlenen, engeller arasında kesintisiz uçuşa dayalı, mobil cihazlar için geliştirilmiş iki boyutlu bir yan kaydırmalı oyun.",
      "tech": [
        "C#",
        "Unity",
        "Mobil"
      ],
      "imageAlt": "Mobil cihazda yatay ekranda çalışan Spaceship Invader oyunu."
    },
  },
  {
    id: 'toon-tanks', title: 'Toon Tanks', context: 'Course-based learning project',
    description: 'A tank combat prototype made while learning Unreal Engine C++ through GameDev.tv: movement, aiming, shooting, health, and basic enemy behavior.',
    tech: ['C++', 'Unreal Engine 5'], github: 'https://github.com/OzanT1/ToonTanks--A-Tank-Game-Prototype',
    video: 'https://youtu.be/BJRpwM2Hugs', image: tankImage, imageAlt: 'Toon Tanks prototype with a player tank and enemy turrets on a test map.',
    tr: {
      "title": "Toon Tanks",
      "context": "Kurs kapsamında geliştirilen proje",
      "description": "GameDev.tv üzerinden Unreal Engine C++ öğrenirken geliştirdiğim tank çatışması prototipi. Hareket, nişan alma, ateş etme, can sistemi ve temel düşman davranışlarını içeriyor.",
      "tech": [
        "C++",
        "Unreal Engine 5"
      ],
      "imageAlt": "Bir test haritasında oyuncunun tankını ve düşman kulelerini gösteren Toon Tanks prototipi."
    },
  },
  {
    id: 'non-overlapping-circles', title: 'Non-Overlapping Circles', context: 'Earlier experiment · Archived repository',
    description: 'A small geometry exercise: generate circles of different sizes while keeping every circle separate. Built in Java and drawn with StdDraw.',
    tech: ['Java', 'Geometry', 'StdDraw'], github: 'https://github.com/OzanT1/Non-Overlapping-Circles', visual: 'circles',
    tr: {
      "title": "Çakışmayan Daireler",
      "context": "İlk denemelerimden · Arşivlenmiş depo",
      "description": "Küçük bir geometri denemesi: farklı boyutlarda daireler oluşturup hiçbirinin birbiriyle çakışmamasını sağlamak. Java ile geliştirildi, çizimler için StdDraw kullanıldı.",
      "tech": [
        "Java",
        "Geometri",
        "StdDraw"
      ]
    },
  },
];
