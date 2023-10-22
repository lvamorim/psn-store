export interface Game {
  name: string;
  image: string;
  tags: string[];
  price: number;
}

export class Games {
  games: Game[] = [
    {
      name: 'Marvel\'s Spider-Man 2',
      image: 'marvels-spiderman-2.avif',
      tags: [
        'PS5',
        'Standard'
      ],
      price: 349.90
    },
    {
      name: 'EA SPORTS FC™ 24',
      image: 'ea-sports-fc-24.avif',
      tags: [
        'PS4',
        'PS5',
        'Standard'
      ],
      price: 358.90
    },
    {
      name: 'Roblox',
      image: 'roblox.avif',
      tags: [
        'PS4'
      ],
      price: 0
    },
    {
      name: 'Lords of the Fallen',
      image: 'lords-of-the-fallen.avif',
      tags: [
        'PS5',
        'Deluxe'
      ],
      price: 399.50
    },
    {
      name: 'Assassin\'s Creed® Mirage',
      image: 'assassins-creed-mirage.webp',
      tags: [
        'PS4',
        'PS5',
        'Standard'
      ],
      price: 239.90
    },
    {
      name: 'SONIC SUPERSTARS',
      image: 'sonic-superstars.avif',
      tags: [
        'PS5',
        'PS4',
        'Standard',
      ],
      price: 299.90
    },
    {
      name: 'Honkai: Star Rail',
      image: 'honkai-star-rail.avif',
      tags: [
        'PS5'
      ],
      price: 0
    },
    {
      name: 'HOT WHEELS UNLEASHED™ 2',
      image: 'hot-wheels-unleashed-2.avif',
      tags: [
        'PS4',
        'PS5',
        'Standard'
      ],
      price: 249.50
    },
    {
      name: 'Train Sim World® 4',
      image: 'train-sim-world-4.avif',
      tags: [
        'PS4',
        'PS5',
        'Standard'
      ],
      price: 249.50
    },
    {
      name: 'Hellboy Web of Wyrd',
      image: 'hellboy-web-of-wyrd.avif',
      tags: [
        'PS5'
      ],
      price: 133.90
    },{
      name: 'ENDLESS™ Dungeon',
      image: 'endless-dungeon.avif',
      tags: [
        'PS4',
        'PS5',
        'Standard'
      ],
      price: 149.50
    }
  ];
}