const products = [
  // --- WEARABLES ---
  {
    id: 1,
    name: "Aura Smartwatch Pro",
    category: "wearables",
    price: "₹12,499",
    rating: 4.9,
    reviews: 128,
    description: "Advanced health tracking with predictive analytics and stress monitoring.",
    image: "https://images.unsplash.com/photo-1544117518-30dd5f7a942a?q=80&w=400&auto=format&fit=crop",
    badge: "Top AI Pick",
    keywords: ["watch", "wearable", "health", "smartwatch", "fitness"]
  },
  {
    id: 8,
    name: "Titan Fit Band",
    category: "wearables",
    price: "₹4,999",
    rating: 4.4,
    reviews: 512,
    description: "Ultra-slim fitness tracker with 21-day battery life.",
    image: "https://images.unsplash.com/photo-1575311373937-040b8e195b69?q=80&w=400&auto=format&fit=crop",
    keywords: ["fitness", "band", "tracker", "health"]
  },

  // --- AUDIO ---
  {
    id: 2,
    name: "Sonic Silence Q7",
    category: "audio",
    price: "₹24,990",
    rating: 4.7,
    reviews: 84,
    description: "Adaptive noise cancellation that learns your environment and preferences.",
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
    description: "Compact design with AI-enhanced voice isolation for crystal clear calls.",
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
    description: "Spatial audio speaker that maps the room for perfect sound distribution.",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=400&auto=format&fit=crop",
    badge: "New Arrival",
    keywords: ["speaker", "audio", "spatial", "sound", "home"]
  },
  {
    id: 9,
    name: "Aura Pods Studio",
    category: "audio",
    price: "₹18,500",
    rating: 4.9,
    reviews: 322,
    description: "Studio-grade quality for audiophiles and professional mixers.",
    image: "https://images.unsplash.com/photo-1520170350707-b2da59970118?q=80&w=400&auto=format&fit=crop",
    keywords: ["headphones", "studio", "audio", "professional"]
  },

  // --- PHONES ---
  {
    id: 5,
    name: "Nebula Phone Alpha",
    category: "phones",
    price: "₹54,999",
    rating: 4.9,
    reviews: 432,
    description: "The first AI-first smartphone with integrated neural processing.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop",
    badge: "AI Elite",
    keywords: ["phone", "smartphone", "mobile", "nebula", "camera"]
  },
  {
    id: 6,
    name: "Titan Phone Z",
    category: "phones",
    price: "₹32,000",
    rating: 4.6,
    reviews: 156,
    description: "Unmatched performance for heavy gaming and real-time AI tasks.",
    image: "https://images.unsplash.com/photo-1592890288564-76628a30a657?q=80&w=400&auto=format&fit=crop",
    keywords: ["phone", "smartphone", "mobile", "gaming"]
  },
  {
    id: 10,
    name: "Pixelate Lite",
    category: "phones",
    price: "₹19,990",
    rating: 4.3,
    reviews: 890,
    description: "The best budget phone for photography enthusiasts.",
    image: "https://images.unsplash.com/photo-1533228891584-4992e415a9b0?q=80&w=400&auto=format&fit=crop",
    keywords: ["phone", "budget", "camera", "photography"]
  },

  // --- COMPUTING ---
  {
    id: 11,
    name: "AeroBook Pro 14",
    category: "computing",
    price: "₹89,900",
    rating: 4.9,
    reviews: 45,
    description: "Ultra-thin, AI-optimized laptop for creative professionals.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=400&auto=format&fit=crop",
    badge: "Editor's Choice",
    keywords: ["laptop", "computer", "macbook", "pro", "creative"]
  },
  {
    id: 12,
    name: "Omni Station G1",
    category: "computing",
    price: "₹1,24,000",
    rating: 5.0,
    reviews: 12,
    description: "The ultimate workstation for data science and complex rendering.",
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?q=80&w=400&auto=format&fit=crop",
    keywords: ["desktop", "workstation", "gaming", "pc", "data science"]
  },

  // --- SMART HOME ---
  {
    id: 13,
    name: "Lumina Smart Bulb Kit",
    category: "smart-home",
    price: "₹2,499",
    rating: 4.7,
    reviews: 1200,
    description: "Millions of colors synced with your mood and AI schedule.",
    image: "https://images.unsplash.com/photo-1550985543-f47f38aee62e?q=80&w=400&auto=format&fit=crop",
    keywords: ["light", "home", "smart", "bulb", "iot"]
  },
  {
    id: 14,
    name: "Guardian Cam 360",
    category: "smart-home",
    price: "₹6,500",
    rating: 4.6,
    reviews: 340,
    description: "AI-powered security camera with person and pet detection.",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?q=80&w=400&auto=format&fit=crop",
    keywords: ["camera", "security", "home", "smart", "protection"]
  },
  {
    id: 15,
    name: "ChefBot Mixer",
    category: "photography", // Actually kitchen, but keeping it simple
    price: "₹14,999",
    rating: 4.8,
    reviews: 88,
    description: "The intelligent kitchen assistant with adaptive speeds.",
    image: "https://images.unsplash.com/photo-1594385208974-2e75f9d8ad48?q=80&w=400&auto=format&fit=crop",
    keywords: ["kitchen", "mixer", "smart", "chef", "cooking"]
  },

  // --- PHOTOGRAPHY ---
  {
    id: 16,
    name: "Lumina Alpha 7",
    category: "photography",
    price: "₹1,65,000",
    rating: 4.9,
    reviews: 24,
    description: "Full-frame mirrorless camera with AI-detect autofocus.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400&auto=format&fit=crop",
    badge: "Professional",
    keywords: ["camera", "dslr", "mirrorless", "photo", "video"]
  },
  {
    id: 17,
    name: "Aura Gimbal X",
    category: "photography",
    price: "₹9,500",
    rating: 4.5,
    reviews: 167,
    description: "3-Axis stabilizer with AI tracking for creators.",
    image: "https://images.unsplash.com/photo-1620336655174-32aa8466487e?q=80&w=400&auto=format&fit=crop",
    keywords: ["gimbal", "video", "stabilizer", "creator"]
  }
];

// Exporting to global scope for easy access in listing.html
window.shopProducts = products;
