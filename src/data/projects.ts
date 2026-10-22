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

export interface Project {
  id: string;
  title: string;
  context: string;
  description: string;
  tech: string[];
  github?: string;
  video?: string;
  website?: string;
  image?: string;
  imageAlt?: string;
  imageFit?: 'contain';
  visual?: ProjectVisual;
  award?: string;
}

// One collection, interleaving different problems. Sources: docs/content-sources.md.
export const projects: Project[] = [
  {
    id: 'ecommerce', title: 'E-Commerce System', context: 'Personal project',
    description: 'An order is more than an API call. I built the authentication, catalog, cart, and payment flows, with queued email processing and Redis caching across a Docker Compose environment.',
    tech: ['C# / ASP.NET Core', 'RabbitMQ / Redis', 'PostgreSQL'],
    github: 'https://github.com/OzanT1/ECommerce-Backend-System', visual: 'commerce',
  },
  {
    id: 'maintenance-protocol', title: 'Maintenance Protocol', context: 'Independent project',
    description: 'An online multiplayer game built around server-authoritative interactions, replicated gameplay, and latency-aware state synchronization. A hands-on exploration of making a shared world behave consistently.',
    tech: ['C++', 'Unreal Engine 5', 'Networking'],
    video: 'https://www.youtube.com/watch?v=PClBa2uX1Bw', image: maintenanceImage,
    imageAlt: 'A first-person view inside the industrial science-fiction environment of Maintenance Protocol.',
  },
  {
    id: 'creator-outreach', title: 'Creator Outreach Automation', context: 'Client project · Sole developer',
    description: 'A business owner needed a better way to find customers. I built a configurable workflow for discovering creators, deduplicating leads, sending personalized outreach, and tracking follow-ups in Google Sheets.',
    tech: ['JavaScript', 'Google Apps Script', 'YouTube Data API'],
    github: 'https://github.com/OzanT1/youtube-outreach-automation', visual: 'outreach',
  },
  {
    id: 'survivor-ai', title: 'Survivor AI', context: 'Team project · Hackathon',
    description: 'Co-built an offline health-information assistant for devices with limited resources. A Flutter interface connects to a Python API using embeddings and similarity search, without relying on an internet connection.',
    tech: ['Python / FastAPI', 'Flutter', 'Embeddings'],
    website: 'https://devpost.com/software/survivor-ai', image: survivorImage, imageFit: 'contain',
    imageAlt: 'Survivor AI project emblem with its hackathon winner ribbon.',
    award: 'Shared 2nd place · Horizon AI 2025',
  },
  {
    id: 'bezier-editor', title: 'Bézier Road Editor', context: 'Developer tool',
    description: 'A road-building tool that works directly in the Unity editor. Shape two independent splines, distribute nodes by count or distance, and generate a road mesh from the resulting geometry.',
    tech: ['C#', 'Unity Editor', 'Bézier Mathematics'],
    github: 'https://github.com/OzanT1/BezierSplineEditorTool', visual: 'spline',
  },
  {
    id: 'valetops', title: 'ValetOps', context: 'Team project · My work: database & API',
    description: 'I designed the relational database and built the API for a valet operations app: cars, tickets, staff, parking, and payment histories, with role-based access and push notifications. Teammates built the mobile app and vision models.',
    tech: ['Python / FastAPI', 'MySQL', 'Firebase'],
    github: 'https://github.com/OzanT1/ValetOps', visual: 'valet',
  },
  {
    id: 'carpenter-simulator', title: 'Carpenter Simulator', context: 'Technical case study',
    description: 'A cooperative workshop for up to four players. Shared orders, carrying, painting, delivery validation, and a common budget all stay in sync through server-authoritative interactions and replicated state.',
    tech: ['Unreal Engine 5', 'Blueprints', 'Replication'],
    github: 'https://github.com/OzanT1/Carpenter-Simulator', visual: 'workshop',
  },
  {
    id: 'tasktracker', title: 'TaskTracker', context: 'Personal project',
    description: 'A complete path from a React form to a database record. Create, edit, complete, and delete tasks, with due-date sorting and persistence through an ASP.NET Core Minimal API.',
    tech: ['React', 'ASP.NET Core', 'EF Core / PostgreSQL'],
    github: 'https://github.com/OzanT1/TaskTracker', image: taskImage,
    imageAlt: 'The actual TaskTracker application showing its task form and list.', imageFit: 'contain',
  },
  {
    id: 'stock-prediction', title: 'Stock Price Prediction', context: 'Modeling experiment',
    description: 'Built and compared LSTM and GRU time-series models in PyTorch. The project covers data preparation, GPU-assisted training, and visual comparisons of predictions and training versus validation loss.',
    tech: ['Python', 'PyTorch', 'LSTM / GRU'],
    github: 'https://github.com/OzanT1/Stock-Price-Prediction', image: stockImage,
    imageAlt: 'Actual model output comparing historical stock prices and predictions.', imageFit: 'contain',
  },
  {
    id: 'third-person-shooter', title: 'Third-Person Shooter', context: 'Playable prototype',
    description: 'A playable C++ shooter with combat, movement animation, and enemies driven by Behavior Trees. Clear the level to win.',
    tech: ['C++', 'Unreal Engine 5', 'Behavior Trees'],
    github: 'https://github.com/OzanT1/THIRD-PERSON-SHOOTER-GAME-USING-UNREAL-ENGINE-5',
    video: 'https://youtu.be/Ue5N5nWG_yQ', image: shooterImage,
    imageAlt: 'Third-person shooter gameplay showing the player character in an industrial level.',
  },
  {
    id: 'stack-attack', title: 'Stack Attack Clone', context: 'Technical case study',
    description: 'A mobile arcade prototype with levels defined through ScriptableObjects. Enemy movement, health, and spawning are driven by configuration, so new levels can be added without writing more code.',
    tech: ['C#', 'Unity 6', 'ScriptableObjects'],
    github: 'https://github.com/OzanT1/Stack-Attack-Clone', video: 'https://youtu.be/IYW_yFrhExA',
    image: stackImage, imageFit: 'contain', imageAlt: 'Stack Attack Clone gameplay with colorful stacks and a player-controlled shooter.',
  },
  {
    id: 'cube-match', title: 'Cube Match', context: 'Mobile puzzle prototype',
    description: 'A configurable puzzle board with adjacent-cube matching, collection goals, move limits, and audiovisual feedback. Grid logic and level rules are kept modular.',
    tech: ['C#', 'Unity', 'Grid Algorithms'],
    github: 'https://github.com/OzanT1/Cube-Match-Game', image: cubeImage, imageFit: 'contain',
    imageAlt: 'Cube Match mobile gameplay with a colorful tile grid and collection goals.',
  },
  {
    id: 'idle-arcade', title: 'Idle Arcade Prototype', context: 'Technical case study',
    description: 'A mobile idle arcade prototype built in Unity. The repository includes a gameplay recording to see the result in motion.',
    tech: ['C#', 'Unity'], github: 'https://github.com/OzanT1/NokoGamesCase',
    video: 'https://youtu.be/yfK1muoPiS0', visual: 'arcade',
  },
  {
    id: 'file-compression', title: 'File Compression', context: 'Earlier experiment · Archived repository',
    description: 'Implemented LZW compression and decompression for text and bitmap images, with a Tkinter interface and image processing using PIL and NumPy.',
    tech: ['Python', 'LZW', 'Tkinter'],
    github: 'https://github.com/OzanT1/File-Compression-Application-Using-Python', visual: 'compression',
  },
  {
    id: 'dead-center', title: 'Dead Center', context: 'Independent project',
    description: 'An endless survival shooter with arena combat, continuous enemy spawning, pursuing AI, and an in-game interface.',
    tech: ['Unreal Engine 4', 'Blueprints'], video: 'https://www.youtube.com/watch?v=VdiY_CpLYj8',
    image: deadCenterImage, imageAlt: 'Dead Center gameplay in an outdoor arena with enemies approaching the player.',
  },
  {
    id: 'mips-tic-tac-toe', title: 'Tic-Tac-Toe, in Assembly', context: 'Earlier experiment',
    description: 'The familiar game, with a variable-size board and all of its logic written in MIPS assembly. Runs in a MIPS simulator.',
    tech: ['MIPS Assembly', 'Algorithms'],
    github: 'https://github.com/OzanT1/RESIZIBLE-TIC-TAC-TOE-GAME-USING-ASSEMBLY-MIPS', visual: 'assembly',
  },
  {
    id: 'spaceship-invader', title: 'Spaceship Invader', context: 'Independent project',
    description: 'A 2D mobile side-scroller inspired by Jetpack Joyride, built around an endless flight through obstacles.',
    tech: ['C#', 'Unity', 'Mobile'], video: 'https://www.youtube.com/watch?v=nDdieIL9Ahg',
    image: spaceshipImage, imageAlt: 'Spaceship Invader running in landscape orientation on a mobile device.', imageFit: 'contain',
  },
  {
    id: 'toon-tanks', title: 'Toon Tanks', context: 'Course-based learning project',
    description: 'A tank combat prototype made while learning Unreal Engine C++ through GameDev.tv: movement, aiming, shooting, health, and basic enemy behavior.',
    tech: ['C++', 'Unreal Engine 5'], github: 'https://github.com/OzanT1/ToonTanks--A-Tank-Game-Prototype',
    video: 'https://youtu.be/BJRpwM2Hugs', image: tankImage, imageAlt: 'Toon Tanks prototype with a player tank and enemy turrets on a test map.',
  },
  {
    id: 'non-overlapping-circles', title: 'Non-Overlapping Circles', context: 'Earlier experiment · Archived repository',
    description: 'A small geometry exercise: generate circles of different sizes while keeping every circle separate. Built in Java and drawn with StdDraw.',
    tech: ['Java', 'Geometry', 'StdDraw'], github: 'https://github.com/OzanT1/Non-Overlapping-Circles', visual: 'circles',
  },
];
