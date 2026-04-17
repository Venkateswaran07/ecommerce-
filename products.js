const products = [
  {
    id: 1,
    name: "Aura Smartwatch Pro",
    category: "wearables",
    price: "₹12,499",
    rating: 4.9,
    reviews: 128,
    description: "Advanced health tracking with predictive analytics.",
    image: "https://images.unsplash.com/photo-1544117518-30dd5f7a942a?q=80&w=400&auto=format&fit=crop",
    badge: "Top AI Pick",
    keywords: ["watch", "wearable", "health", "smartwatch"]
  },
  {
    id: 2,
    name: "Sonic Silence Q7",
    category: "audio",
    price: "₹24,990",
    rating: 4.7,
    reviews: 84,
    description: "Adaptive noise cancellation that learns your environment.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop",
    keywords: ["headphones", "audio", "music", "noise cancellation", "sound"]
  },
  {
    id: 3,
    name: "Echo Buds V2",
    category: "audio",
    price: "₹8,999",
    rating: 4.5,
    reviews: 210,
    description: "Compact design with AI-enhanced voice isolation.",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=400&auto=format&fit=crop",
    keywords: ["earbuds", "audio", "earphones", "wireless"]
  },
  {
    id: 4,
    name: "Resonance 360",
    category: "audio",
    price: "₹15,200",
    rating: 4.8,
    reviews: 56,
    description: "Spatial audio speaker that maps the room for perfect sound.",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=400&auto=format&fit=crop",
    badge: "New Arrival",
    keywords: ["speaker", "audio", "spatial", "sound"]
  },
  {
    id: 5,
    name: "Nebula Phone Alpha",
    category: "phones",
    price: "₹54,999",
    rating: 4.9,
    reviews: 432,
    description: "The first AI-first smartphone with neural processing.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop",
    badge: "AI Elite",
    keywords: ["phone", "smartphone", "mobile", "nebula"]
  },
  {
    id: 6,
    name: "Titan Phone Z",
    category: "phones",
    price: "₹32,000",
    rating: 4.6,
    reviews: 156,
    description: "Unmatched performance for heavy gaming and AI tasks.",
    image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=400&auto=format&fit=crop",
    keywords: ["phone", "smartphone", "mobile", "gaming"]
  },
  {
    id: 7,
    name: "Vertex Display 27",
    category: "displays",
    price: "₹45,000",
    rating: 4.8,
    reviews: 92,
    description: "4K Color-accurate display with smart calibration.",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=400&auto=format&fit=crop",
    keywords: ["monitor", "display", "screen", "4k"]
  }
];

// Exporting to global scope for easy access in listing.html
window.shopProducts = products;
