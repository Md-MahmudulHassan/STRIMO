export type Content = {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  genre: string;
  year: number;
  rating: string;
  duration: string;
  cast: string[];
  type: 'movie' | 'tv-show';
  imageUrl: string;
  imageAlt: string;
  imageHint: string;
  subtitles?: {
    src: string;
    srclang: string;
    label: string;
    default?: boolean;
  }[];
};

export const contentData: Content[] = [
  {
    id: '1',
    title: 'Cosmic Odyssey',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    genre: 'Sci-Fi',
    year: 2023,
    rating: 'PG-13',
    duration: '2h 49m',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    type: 'movie',
    imageUrl: 'https://picsum.photos/seed/101/1280/720',
    imageAlt: 'Cosmic Odyssey Poster',
    imageHint: 'movie scene',
    subtitles: [
      { 
        src: 'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-subtitles.vtt', 
        srclang: 'en', 
        label: 'English', 
        default: true 
      },
      { 
        src: 'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-subtitles.vtt', 
        srclang: 'es', 
        label: 'Spanish',
      },
    ],
  },
  {
    id: '2',
    title: 'The Last Stand',
    description: 'A former LAPD officer is tasked with stopping a dangerous drug lord from escaping to Mexico.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    genre: 'Action',
    year: 2013,
    rating: 'R',
    duration: '1h 47m',
    cast: ['Arnold Schwarzenegger', 'Forest Whitaker', 'Johnny Knoxville'],
    type: 'movie',
    imageUrl: 'https://picsum.photos/seed/102/1280/720',
    imageAlt: 'The Last Stand Poster',
    imageHint: 'action movie',
    subtitles: [
      { 
        src: 'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/simple-subtitles.vtt', 
        srclang: 'en', 
        label: 'English', 
        default: true 
      },
    ],
  },
  {
    id: '3',
    title: 'Echoes of the Past',
    description: 'A historian discovers a secret that changes her understanding of the past, putting her life in danger.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    genre: 'Drama',
    year: 2021,
    rating: 'PG-13',
    duration: '2h 5m',
    cast: ['Emily Blunt', 'John Krasinski', 'Cillian Murphy'],
    type: 'tv-show',
    imageUrl: 'https://picsum.photos/seed/103/1280/720',
    imageAlt: 'Echoes of the Past Poster',
    imageHint: 'drama film',
  },
  {
    id: '4',
    title: 'Galactic Heist',
    description: 'A group of misfits plans to steal a powerful artifact from an evil intergalactic emperor.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    genre: 'Sci-Fi',
    year: 2019,
    rating: 'PG-13',
    duration: '2h 1m',
    cast: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista'],
    type: 'movie',
    imageUrl: 'https://picsum.photos/seed/104/1280/720',
    imageAlt: 'Galactic Heist Poster',
    imageHint: 'sci-fi space',
  },
  {
    id: '5',
    title: 'The Comedian\'s Act',
    description: 'A struggling stand-up comedian finds his life spiraling out of control as he chases fame.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    genre: 'Comedy',
    year: 2020,
    rating: 'R',
    duration: '2h 2m',
    cast: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
    type: 'movie',
    imageUrl: 'https://picsum.photos/seed/105/1280/720',
    imageAlt: 'The Comedian\'s Act Poster',
    imageHint: 'comedy stage',
  },
  {
    id: '6',
    title: 'Midnight Shadow',
    description: 'A detective hunts a mysterious killer who strikes only in the dead of night.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    genre: 'Thriller',
    year: 2022,
    rating: 'R',
    duration: '2h 15m',
    cast: ['Ben Affleck', 'Rosamund Pike', 'Neil Patrick Harris'],
    type: 'tv-show',
    imageUrl: 'https://picsum.photos/seed/106/1280/720',
    imageAlt: 'Midnight Shadow Poster',
    imageHint: 'thriller night',
  },
  {
    id: '7',
    title: 'Mountain\'s Peak',
    description: 'A thrilling story of survival as a group of climbers face a deadly storm on K2.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    genre: 'Action',
    year: 2018,
    rating: 'PG-13',
    duration: '1h 58m',
    cast: ['Jason Clarke', 'Jake Gyllenhaal', 'Josh Brolin'],
    type: 'movie',
    imageUrl: 'https://picsum.photos/seed/107/1280/720',
    imageAlt: 'Mountain\'s Peak Poster',
    imageHint: 'mountain climb',
  },
  {
    id: '8',
    title: 'The Silent House',
    description: 'A family is terrorized by a malevolent presence in their new home.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    genre: 'Horror',
    year: 2016,
    rating: 'R',
    duration: '1h 35m',
    cast: ['Vera Farmiga', 'Patrick Wilson', 'Lili Taylor'],
    type: 'tv-show',
    imageUrl: 'https://picsum.photos/seed/108/1280/720',
    imageAlt: 'The Silent House Poster',
    imageHint: 'haunted house',
  },
  {
    id: '9',
    title: 'Laugh Riot',
    description: 'Two clumsy best friends accidentally get involved with a crime syndicate, leading to hilarious consequences.',
    videoUrl: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    genre: 'Comedy',
    year: 2023,
    rating: 'PG-13',
    duration: '1h 42m',
    cast: ['Will Ferrell', 'John C. Reilly', 'Sacha Baron Cohen'],
    type: 'tv-show',
    imageUrl: 'https://picsum.photos/seed/109/1280/720',
    imageAlt: 'Laugh Riot Poster',
    imageHint: 'funny faces',
  }
];

export const genres = ['Trending Now', 'Sci-Fi', 'Action', 'Drama', 'Comedy', 'Thriller', 'Horror'];
