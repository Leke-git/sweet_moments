import { SiteConfig, BusinessConfig } from './types';

export const ADMIN_EMAILS = [
  'hello@sweetmoments.com',
  'lekingsononpoint@gmail.com'
];

export const DEFAULT_BUSINESS_CONFIG: BusinessConfig = {
  bakeryName: "Sweet Moments",
  contactEmail: "hello@sweetmoments.com",
  announcement: "Welcome to our new automated bakery experience!",
  isMaintenance: false,
  openingHours: "Mon-Fri: 9am - 5pm, Sat: 10am - 4pm",
  deliveryZones: "London (Zones 1-4), SE Postcodes",
  knowledgeBase: "We specialize in luxury artisan cakes. Our signature flavor is Madagascar Vanilla. We require 7 days notice for all orders. All cakes are nut-free unless specified."
};

export const COLORS = {
  bg: '#fdf8f4',
  primary: '#c8614a',
  accent: '#d4956a',
  dark: '#2c1a0e',
  muted: '#9c8878',
  surface: '#ffffff',
  border: '#ede5dc',
  shadow: 'rgba(44, 26, 14, 0.08)',
};

export const GALLERY_CATEGORIES = [
  {
    id: 'weddings',
    title: 'Weddings',
    category: 'Ethereal Elegance',
    description: 'Bespoke tiered creations designed to be the centerpiece of your forever.',
    images: [
      '/2150797868.jpg',
      '/2150649466.jpg',
      '/43087.jpg',
    ],
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    category: 'Professional Poise',
    description: 'Elevating brand milestones and corporate gatherings with sophisticated, branded designs.',
    images: [
      '/43087.jpg',
      '/7876.jpg',
      '/9934.jpg',
    ],
  },
  {
    id: 'birthdays',
    title: 'Birthdays',
    category: 'Vibrant Celebrations',
    description: 'Transforming personal stories into edible art for every milestone.',
    images: [
      '/9934.jpg',
      '/2715.jpg',
      '/18.jpg',
    ],
  },
  {
    id: 'anniversaries',
    title: 'Anniversaries',
    category: 'Timeless Romance',
    description: 'Celebrating the journey of love with refined, intimate designs.',
    images: [
      '/3122.jpg',
      '/4043.jpg',
      '/265.jpg',
    ],
  },
];

export const REVIEWS = [
  {
    name: "Eleanor Vance",
    cakeImage: "/2150797868.jpg",
    clientImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    comment: "The wedding cake was a masterpiece. Sarah captured our vision perfectly with the hand-pressed florals.",
  },
  {
    name: "Julian Brooks",
    cakeImage: "/9934.jpg",
    clientImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    comment: "Never had a cake that tasted as good as it looked. The Madagascar Vanilla is out of this world.",
  },
  {
    name: "Sienna Miller",
    cakeImage: "/3122.jpg",
    clientImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 5,
    comment: "An anniversary cake that made my wife cry tears of joy. Minimalist but so full of character.",
  },
];

export const SITE_MAP = [
  { name: 'Home', id: 'home', description: 'Hero section with main call to action' },
  { name: 'Gallery', id: 'gallery', description: 'Photos of past cakes (Weddings, Birthdays, etc.)' },
  { name: 'The Kitchen', id: 'kitchen', description: 'Information about our ingredients and process' },
  { name: 'Reviews', id: 'reviews', description: 'Customer testimonials' },
  { name: 'About', id: 'about', description: 'Story of the bakery and the baker' },
  { name: 'Contact', id: 'contact', description: 'Contact form and location info' },
  { name: 'Order Wizard', id: 'order-now', description: 'The interactive tool to customize and price a cake' },
];

export const DEFAULT_CONFIG: SiteConfig = {
  cake_types: [
    {
      id: 'classic',
      name: 'Classic Round',
      base_price: 65,
      emoji: '🎂',
      photo: '/9934.jpg',
      description: 'The timeless choice for any celebration. Available in single or double layers.',
    },
    {
      id: 'tiered',
      name: 'Tiered Celebration',
      base_price: 180,
      emoji: '🏰',
      photo: '/2150797868.jpg',
      description: 'Grand, architectural designs for weddings and major milestones.',
    },
    {
      id: 'heart',
      name: 'Heart Shaped',
      base_price: 75,
      emoji: '❤️',
      photo: '/18.jpg',
      description: 'Vintage-inspired lambeth style hearts. Perfect for romance.',
    },
    {
      id: 'cupcakes',
      name: 'Artisan Cupcakes (x12)',
      base_price: 48,
      emoji: '🧁',
      photo: '/265.jpg',
      description: 'Bite-sized masterpieces. Sold in dozens with custom decorations.',
    },
  ],
  sizes: [
    { id: 'small', label: 'Small', servings: 10, multiplier: 1 },
    { id: 'medium', label: 'Medium', servings: 25, multiplier: 1.8 },
    { id: 'large', label: 'Large', servings: 50, multiplier: 3.2 },
  ],
  cake_flavours: ['Madagascar Vanilla', 'Valrhona Chocolate', 'Zesty Lemon', 'Red Velvet', 'Pistachio & Rose'],
  fillings: ['Vanilla Bean Buttercream', 'Dark Chocolate Ganache', 'Raspberry Coulis', 'Salted Caramel', 'Lemon Curd'],
  frosting_types: ['Swiss Meringue Buttercream', 'Ganache', 'Fondant', 'Cream Cheese Frosting'],
  colour_options: ['Natural White', 'Blush Pink', 'Sage Green', 'Dusty Blue', 'Terracotta'],
  dietary_options: ['Gluten Free', 'Vegan', 'Nut Free', 'Dairy Free'],
  surcharges: {
    delivery_fee: 25,
    dietary_per_item: 10,
    fondant_premium: 35,
  },
  delivery_enabled: true,
  min_days_notice: 7,
};
