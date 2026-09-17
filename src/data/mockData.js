// AURELIA Haute Joaillerie - Comprehensive Mock Data & Catalogue

export const INITIAL_COLLECTIONS = [
  {
    id: "gold",
    title: "Gold Jewellery",
    tagline: "Timeless Pure 22KT Masterpieces",
    description: "Handcrafted in certified 22KT gold with intricate filigree, nakshi motifs, and lustrous mirror finish for enduring prestige.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&auto=format&fit=crop&q=80",
    itemCount: "42 Designs",
    featured: true,
    active: true,
    order: 1
  },
  {
    id: "diamond",
    title: "Diamond Jewellery",
    tagline: "Rare Solitaires & Fine Pavé",
    description: "Featuring EF-colored, VVS clarity ethically sourced natural diamonds set in 18KT gold and platinum with extraordinary brilliance.",
    image: "/images/collection-diamond.webp",
    itemCount: "38 Designs",
    featured: true,
    active: true,
    order: 2
  },
  {
    id: "bridal",
    title: "Bridal Jewellery",
    tagline: "Grand Trousseau & Heritage Sets",
    description: "Heirloom wedding chokers, layered haars, matha pattis, and jhumkas designed to sanctify your most cherished milestone.",
    image: "/images/design-aur-bc101.jpg",
    itemCount: "50 Designs",
    featured: true,
    active: true,
    order: 3
  },
  {
    id: "silver",
    title: "Silver Jewellery",
    tagline: "925 Sterling Everyday Luxury",
    description: "Contemporary 925 sterling silver finished with 24K gold vermeil, zircon accents, and rhodium protection for modern living.",
    image: "/images/design-aur-sl401.jpg",
    itemCount: "28 Designs",
    featured: true,
    active: true,
    order: 4
  },
  {
    id: "traditional",
    title: "Traditional Temple Jewellery",
    tagline: "Sacred Nakshi & Polki Heritage",
    description: "Deeply symbolic motifs of Lakshmi, peacock, and floral medallions sculpted by master goldsmiths using age-old repoussé techniques.",
    image: "/images/design-aur-tr310.jpg",
    itemCount: "32 Designs",
    featured: false,
    active: true,
    order: 5
  },
  {
    id: "contemporary",
    title: "Contemporary Jewellery",
    tagline: "Architectural & Geometric Minimalism",
    description: "Clean silhouettes, stackable bands, and floating diamond pendants created for effortless elegance from day to night.",
    image: "/images/design-aur-cj512.jpg",
    itemCount: "25 Designs",
    featured: false,
    active: true,
    order: 6
  },
  {
    id: "men",
    title: "Men's Fine Jewellery",
    tagline: "Distinguished Cufflinks, Chains & Kadas",
    description: "Bold 18KT gold signet rings, textured platinum kadas, and diamond lapel pins crafted for the discerning modern gentleman.",
    image: "/images/design-aur-mj701.jpg",
    itemCount: "19 Designs",
    featured: false,
    active: true,
    order: 7
  },
  {
    id: "kids",
    title: "Kids Fine Jewellery",
    tagline: "Gentle Nazariyas & Precious Trinkets",
    description: "Hypoallergenic, skin-safe 22KT gold baby bangles, black bead nazariyas, and delicate charm pendants made with utmost love.",
    image: "/images/design-aur-kd601.jpg",
    itemCount: "14 Designs",
    featured: false,
    active: true,
    order: 8
  }
];

export const INITIAL_DESIGNS = [
  {
    id: 1,
    name: "The Royal Noor-E-Aurelia Bridal Choker",
    code: "AUR-BC101",
    category: "bridal",
    categoryLabel: "Bridal Jewellery",
    material: "22KT Yellow Gold (BIS 916 Hallmarked)",
    approxWeight: "112.50 gms",
    stoneDetails: "Uncut Syndicate Polki (22.5 cts), Natural Zambian Emerald Beads (48.0 cts), Cultured Basra Pearls",
    shortDescription: "A regal multi-tier polki choker featuring emerald drop fringes and ornate meenakari work on reverse.",
    description: "Handcrafted over 320 artisan hours, this bridal tour-de-force draws inspiration from Mughal royal court regalia. Featuring graded syndicate uncut diamonds lined with hand-strung Colombian and Zambian emerald droplets, with vibrant red-green meenakari enamel work on the interior.",
    specifications: {
      purity: "22K Gold (91.6% Purity)",
      certification: "BIS Hallmark & SGL Polki Diamond Certificate",
      closure: "Hand-braided Pure Silk Zari Dori with Adjustable Tassel",
      dimensions: "Choker Width: 6.8 cm | Drop Length: 14 cm",
      craftsmanship: "Kundan-Jadau & Hand Enamel Meenakari"
    },
    images: [
      "/images/design-aur-bc101.jpg",
      "/images/design-aur-br880.jpg",
      "https://images.unsplash.com/photo-1611087388916-b6c97e01735b?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: 2,
    name: "Imperial Zenith Solitaire Diamond Ring",
    code: "AUR-DR045",
    category: "diamond",
    categoryLabel: "Diamond Jewellery",
    material: "18KT White Gold & 950 Platinum",
    approxWeight: "6.80 gms",
    stoneDetails: "Center Solitaire: 2.20 Carats, D Color, VVS1 Clarity, Excellent Cut (GIA Certified) + 0.45 ct Pavé Diamonds",
    shortDescription: "An exceptional six-prong platinum crown solitaire ring flanked by micro-pavé diamonds.",
    description: "Designed to capture infinite light, the Imperial Zenith ring elevates a rare 2.20-carat GIA-certified diamond on a delicate tapering 18K white gold band adorned with micro-set diamonds along the gallery rail.",
    specifications: {
      purity: "18KT Gold (750) & Platinum PT950",
      certification: "GIA Diamond Dossier & Laser Inscription",
      closure: "Comfort Fit Ring Band (Custom Sizing Available)",
      dimensions: "Center Diamond 8.4mm | Shank Width: 2.1mm",
      craftsmanship: "Micro-pavé Optical Setting"
    },
    images: [
      "/images/design-aur-dr045.jpg",
      "/images/design-aur-dr092.jpg",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: 3,
    name: "Aethelgard Heritage Nakshi Haar",
    code: "AUR-GN102",
    category: "gold",
    categoryLabel: "Gold Jewellery",
    material: "22KT Antique Yellow Gold",
    approxWeight: "84.30 gms",
    stoneDetails: "Natural Untreated Burmese Rubies (4.5 cts) & South Sea Pearls",
    shortDescription: "A glorious long heritage necklace with sculptured Lakshmi medallion and floral repoussé links.",
    description: "Paying homage to ancient South Indian temple goldsmith traditions, this long haar is sculpted with intricate Goddess Lakshmi iconography flanked by twin dancing peacocks and dangling natural seed pearls.",
    specifications: {
      purity: "22KT Pure Gold (916 BIS Hallmarked)",
      certification: "Government Hallmarking Center Certified",
      closure: "Solid Gold Hook with Micro Link Adjustment",
      dimensions: "Necklace Length: 62 cm | Pendant: 7.5 x 5.2 cm",
      craftsmanship: "Nakshi Repoussé & Antique Matte Patina"
    },
    images: [
      "/images/design-aur-gn102.jpg",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: false,
    isFeatured: true
  },
  {
    id: 4,
    name: "Celestial Constellation Diamond Tennis Bracelet",
    code: "AUR-DB204",
    category: "diamond",
    categoryLabel: "Diamond Jewellery",
    material: "18KT Rose Gold (Hallmarked 750)",
    approxWeight: "16.40 gms",
    stoneDetails: "5.80 Carats Total Weight, 42 Round Brilliant Diamonds (EF Color, VVS-VS Clarity)",
    shortDescription: "An unending river of calibrated round brilliant diamonds set in warm rose gold bezels.",
    description: "Crafted for fluidity and supreme comfort, each diamond in this tennis bracelet is hand-selected for exact optical parity. Features a discreet double-safety box clasp designed for effortless everyday wear.",
    specifications: {
      purity: "18KT Rose Gold (750)",
      certification: "IGI Diamond Jewellery Certificate",
      closure: "Concealed Box Clasp with Double Safety Latches",
      dimensions: "Length: 18 cm (Customizable) | Width: 3.8 mm",
      craftsmanship: "Cast & Hand-Finished Bezel Links"
    },
    images: [
      "/images/design-aur-db204.jpg",
      "/images/collection-diamond.webp",
      "https://images.unsplash.com/photo-1667419942023-accb4846ddb4?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: 5,
    name: "Padmavati Jhumka & Kaan-Chain Ensemble",
    code: "AUR-TR310",
    category: "traditional",
    categoryLabel: "Traditional Jewellery",
    material: "22KT Yellow Gold (BIS 916)",
    approxWeight: "46.20 gms",
    stoneDetails: "Cabochon Rubies (3.2 cts), Natural Basra Pearls & Emerald Drops",
    shortDescription: "Tiered bell jhumkas with ornate ear-supported hair chains and handcrafted cluster hangings.",
    description: "Evoking the majesty of regal courts, these chandelier jhumkas feature cascading domes carved with delicate petal fretwork, accented by crimson rubies and luminous South Sea pearl hangings.",
    specifications: {
      purity: "22KT Gold (91.6% BIS Hallmark)",
      certification: "BIS Hallmarked & Authenticity Card",
      closure: "South Indian Screw Back Post + Hair Support Clips",
      dimensions: "Jhumka Length: 9.5 cm | Dome Diameter: 3.4 cm",
      craftsmanship: "Granulation & Die-Stamping Heritage Filigree"
    },
    images: [
      "/images/design-aur-tr310.jpg",
      "/images/design-aur-tr312.jpg",
      "https://images.unsplash.com/photo-1676721492346-90bf798b6c34?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: false,
    isFeatured: true
  },
  {
    id: 6,
    name: "Aria Geometric Open-Cuff Choker",
    code: "AUR-CJ512",
    category: "contemporary",
    categoryLabel: "Contemporary Jewellery",
    material: "18KT Yellow & White Duo Gold",
    approxWeight: "32.10 gms",
    stoneDetails: "Princess Cut & Baguette Natural Diamonds (1.45 Carats, VS Clarity)",
    shortDescription: "A sleek torque-style neck cuff engineered with tension memory and diamond terminal caps.",
    description: "Bold modernism meets luxury goldsmithing. This architectural torque rests gently against the collarbone, tipped with geometric baguette diamond clusters for the contemporary connoisseur.",
    specifications: {
      purity: "18KT Dual-Tone Gold (750)",
      certification: "IGI Jewellery Certification",
      closure: "Flexible Spring-Tension Open Torque Slip-On",
      dimensions: "Internal Diameter: 12.5 cm | Thickness: 4 mm",
      craftsmanship: "Precision CNC & Hand Assembly"
    },
    images: [
      "/images/design-aur-cj512.jpg",
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=1000&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1758631279564-785e98313f8b?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: true,
    isFeatured: false
  },
  {
    id: 7,
    name: "The Sovereign Lionhead 18K Gold Kada",
    code: "AUR-MJ701",
    category: "men",
    categoryLabel: "Men's Jewellery",
    material: "18KT Yellow Gold & Brushed Titanium Inlay",
    approxWeight: "54.80 gms",
    stoneDetails: "Black Diamond Eyes (0.30 ct total) with Matte Satin Finish",
    shortDescription: "A commanding solid gold men's bangle terminating in sculpted lion finials.",
    description: "A symbol of dignity and indomitable courage. Hand-engraved with micro-chiselled mane textures and set with deep black diamonds in the lion eyes. Engineered with a hinge and internal clasp for easy wear.",
    specifications: {
      purity: "18KT Gold (750 Hallmarked)",
      certification: "BIS Hallmark Certification",
      closure: "Concealed Push-Button Spring Hinge Clasp",
      dimensions: "Internal Oval: 65 x 58 mm | Thickness: 8 mm",
      craftsmanship: "Solid Core Casting & Hand Engraving"
    },
    images: [
      "/images/design-aur-mj701.jpg",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1000&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1660860547079-fd4845880af9?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: 8,
    name: "Gauri Traditional Jadau Kada Pair",
    code: "AUR-BR880",
    category: "bridal",
    categoryLabel: "Bridal Jewellery",
    material: "22KT Yellow Gold (BIS 916)",
    approxWeight: "92.40 gms (Pair)",
    stoneDetails: "Uncut Diamonds (8.60 cts), Cabochon Emeralds (14.20 cts) & Red Spinels",
    shortDescription: "A pair of heirloom bridal kadas encrusted with closed-setting polki and floral scrolls.",
    description: "An essential centerpiece for the royal Indian bride. Features twin interlocking gold bangles meticulously inlaid with uncut syndicate diamonds using the ancient 24-carat gold leaf kundan setting.",
    specifications: {
      purity: "22KT Gold Core & 24K Kundan Foil",
      certification: "BIS Hallmark & Authenticity Warranty",
      closure: "Threaded Gold Screw Lock Mechanism",
      dimensions: "Standard Size 2.6 (Customizable 2.4 - 2.8)",
      craftsmanship: "Authentic Jadau & Bikaneri Meena"
    },
    images: [
      "/images/design-aur-br880.jpg",
      "/images/design-aur-bc101.jpg",
      "https://images.unsplash.com/photo-1611087388916-b6c97e01735b?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: false,
    isFeatured: true
  },
  {
    id: 9,
    name: "Seraphina Pear-Cut Solitaire Pendant",
    code: "AUR-DP109",
    category: "diamond",
    categoryLabel: "Diamond Jewellery",
    material: "18KT White Gold with Platinum Chain",
    approxWeight: "5.40 gms",
    stoneDetails: "1.85 Carat Pear-Shape Diamond (F Color, VVS2 Clarity) + Halo Accent Diamonds (0.28 ct)",
    shortDescription: "A breathtaking pear-cut solitaire diamond surrounded by a whisper-thin pavé halo.",
    description: "Sculpted to elongate and illuminate, the Seraphina pendant showcases a teardrop silhouette diamond hung from a delicate platinum wheat chain, catching luminescence from every angle.",
    specifications: {
      purity: "18KT White Gold (750) & PT950",
      certification: "GIA Diamond Report & Laser Inscribed",
      closure: "Lobster Clasp with 2-inch Extension Links",
      dimensions: "Pendant Length: 18 mm | Chain: 45 cm",
      craftsmanship: "Three-Prong Claw Setting & Micro Halo"
    },
    images: [
      "/images/design-aur-dp109.jpg",
      "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1000&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1444487233259-dae9d907a740?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: true,
    isFeatured: false
  },
  {
    id: 10,
    name: "Aurelia Heritage Mayura Chandbali Earrings",
    code: "AUR-TR312",
    category: "traditional",
    categoryLabel: "Traditional Jewellery",
    material: "22KT Pure Gold",
    approxWeight: "38.60 gms",
    stoneDetails: "Polki Diamonds (5.4 cts), Natural Rubies & Hand-Strung Pearls",
    shortDescription: "Crescent moon chandbalis graced with twin peacocks and clustered seed pearl droplets.",
    description: "The quintessential Indian celebration earring. Inspired by the waxing moon, this chandbali features carved peacock finials with delicate ruby eyes, framed by concentric tiers of lustrous micro-pearls.",
    specifications: {
      purity: "22KT Gold (916 BIS Certified)",
      certification: "BIS Hallmark Guarantee",
      closure: "Push Back Post with Security Washer",
      dimensions: "Length: 7.8 cm | Width: 4.5 cm",
      craftsmanship: "Kundan Jadau & Pearl Piroi"
    },
    images: [
      "/images/design-aur-tr312.jpg",
      "/images/design-aur-tr310.jpg",
      "https://images.unsplash.com/photo-1676721492346-90bf798b6c34?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: false,
    isFeatured: false
  },
  {
    id: 11,
    name: "Luna Gilded 925 Silver Filigree Choker",
    code: "AUR-SL401",
    category: "silver",
    categoryLabel: "Silver Jewellery",
    material: "925 Sterling Silver with 24K Gold Vermeil",
    approxWeight: "34.50 gms",
    stoneDetails: "Swiss Moissanite & Natural Spinel Accents",
    shortDescription: "Delicate silver wire filigree collar plated in 2.5-micron pure 24K gold.",
    description: "Intricately spun silver threads formed into ornate geometric lace. Finished with an anti-tarnish coating to guarantee lifelong shine for festive and fusion styling.",
    specifications: {
      purity: "925 Sterling Silver (92.5% Fine Silver)",
      certification: "Silver Hallmark 925 Stamp",
      closure: "Adjustable Silver Lobster Clasp with Extension",
      dimensions: "Length: 36 cm + 8 cm Extension | Width: 2.8 cm",
      craftsmanship: "Cuttack Tarakaasi Filigree"
    },
    images: [
      "/images/design-aur-sl401.jpg",
      "https://images.unsplash.com/photo-1541112324160-e8a425b58dac?w=1000&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1493994807689-406227cceebd?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: true,
    isFeatured: false
  },
  {
    id: 12,
    name: "Little Heirloom 22K Gold Nazariya Bangles",
    code: "AUR-KD601",
    category: "kids",
    categoryLabel: "Kids Jewellery",
    material: "22KT Soft-Polished Yellow Gold",
    approxWeight: "11.20 gms (Pair)",
    stoneDetails: "Auspicious Natural Black Onyx Beads & Smooth Gold Balls",
    shortDescription: "Smooth, adjustable protective nazariya bangles crafted specifically for tender wrists.",
    description: "Created with highest standards of baby safety: rounded smooth contours, nickel-free pure 22K gold, and gentle expandable sliding mechanism that grows with your little blessing.",
    specifications: {
      purity: "22KT Gold (916 BIS Hallmarked)",
      certification: "Child-Safe Hypoallergenic Certified",
      closure: "Expandable Sliding Overlap",
      dimensions: "Adjustable Circumference: 10 cm - 14 cm",
      craftsmanship: "Hand-Strung & Machine-Tested Tension"
    },
    images: [
      "/images/design-aur-kd601.jpg",
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=1000&auto=format&fit=crop&q=85",
      "https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: false,
    isFeatured: false
  },
  {
    id: 13,
    name: "Elysian Emerald-Cut Diamond Ring",
    code: "AUR-DR092",
    category: "diamond",
    categoryLabel: "Diamond Jewellery",
    material: "18KT White Gold & Platinum 950",
    approxWeight: "7.10 gms",
    stoneDetails: "3.10 Carat Emerald-Cut Natural Diamond (E Color, VVS1 Clarity) + Tapered Baguette Side Stones",
    shortDescription: "A classic Art Deco three-stone ring showcasing an exceptional step-cut diamond.",
    description: "Pure architectural symmetry. The elongated emerald-cut diamond reveals mesmerizing hall-of-mirrors reflections, anchored by twin custom-cut tapered baguette diamonds on a mirror-polished platinum shank.",
    specifications: {
      purity: "Platinum PT950 & 18KT Gold",
      certification: "GIA Report with Laser Inscription",
      closure: "Custom Sized Band",
      dimensions: "Center Stone: 9.8 x 7.1 mm",
      craftsmanship: "Corner Claw Mount & Channel Set Shoulders"
    },
    images: [
      "/images/design-aur-dr092.jpg",
      "/images/design-aur-dr045.jpg",
      "https://images.unsplash.com/photo-1530901729437-5372782e53f2?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: 14,
    name: "Devi Kasu Mala Temple Choker",
    code: "AUR-TR340",
    category: "traditional",
    categoryLabel: "Traditional Jewellery",
    material: "22KT Antique Gold",
    approxWeight: "64.80 gms",
    stoneDetails: "High-grade Pigeon Blood Burmese Rubies (6.2 cts)",
    shortDescription: "Traditional coin choker embossed with Mahalakshmi motifs bordered by cabochon rubies.",
    description: "A timeless South Indian talisman of prosperity. Each overlapping gold coin is individually struck with the seated deity, connected by flexible articulated links that contour gracefully along the neckline.",
    specifications: {
      purity: "22KT Gold (916 Hallmarked)",
      certification: "BIS 916 Hallmark Assurance",
      closure: "Traditional Gold Rope Threading Clasp",
      dimensions: "Length: 38 cm | Coin Diameter: 18 mm",
      craftsmanship: "Ancient Coin Stamping & Stone Bezel Setting"
    },
    images: [
      "/images/design-aur-tr340.jpg",
      "/images/design-aur-gn102.jpg",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: false,
    isFeatured: false
  },
  {
    id: 15,
    name: "Aurelia Royale Signet Ring",
    code: "AUR-MR704",
    category: "men",
    categoryLabel: "Men's Jewellery",
    material: "18KT Yellow Gold & Natural Black Onyx",
    approxWeight: "14.20 gms",
    stoneDetails: "Hand-Carved Black Onyx Inlay with 0.15 ct Brilliant Cut Diamond Monogram",
    shortDescription: "A sophisticated heavyweight signet ring balancing deep black onyx with solid 18K gold.",
    description: "An understated statement of authority. Featuring a flush-set black onyx tablet bordered by beveled gold edges, with custom monogram engraving available upon request.",
    specifications: {
      purity: "18KT Gold (750)",
      certification: "BIS Hallmark Certified",
      closure: "Solid Tapered Band",
      dimensions: "Table: 16 x 14 mm",
      craftsmanship: "Lapidary Inlay & Hand Mirror Polish"
    },
    images: [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1000&auto=format&fit=crop&q=85",
      "/images/design-aur-mj701.jpg",
      "https://images.unsplash.com/photo-1660860547079-fd4845880af9?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: false,
    isFeatured: false
  },
  {
    id: 16,
    name: "Varanasi Silk Gold Filigree Bangle Pair",
    code: "AUR-GB118",
    category: "gold",
    categoryLabel: "Gold Jewellery",
    material: "22KT Yellow Gold (BIS 916)",
    approxWeight: "58.40 gms (Pair)",
    stoneDetails: "Pure Gold Without Stones (All Gold Craftsmanship)",
    shortDescription: "Intricate openwork gold bangles reminiscent of the woven brocades of Banaras.",
    description: "Crafted entirely in pure 22-carat gold, this bangle pair showcases micrometer-thin twisted gold wires woven into mesmerizing paisley patterns, finished with diamond-cut highlight edges.",
    specifications: {
      purity: "22KT Gold (91.6% Pure)",
      certification: "Government BIS Hallmark",
      closure: "Solid Slip-On Oval Form",
      dimensions: "Available in Sizes 2.4, 2.6, 2.8",
      craftsmanship: "Hand Filigree Wire Manipulation"
    },
    images: [
      "https://images.unsplash.com/photo-1667419942023-accb4846ddb4?w=1000&auto=format&fit=crop&q=85",
      "/images/design-aur-br880.jpg",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: true,
    isFeatured: true
  },
  {
    id: 17,
    name: "Solstice Radiant-Cut Solitaire Studs",
    code: "AUR-DE215",
    category: "diamond",
    categoryLabel: "Diamond Jewellery",
    material: "18KT White Gold",
    approxWeight: "4.20 gms",
    stoneDetails: "2.00 Carats Total Weight (1.00 ct each), F Color, VVS2 Clarity (IGI Certified)",
    shortDescription: "A dazzling pair of radiant-cut diamond stud earrings in minimal four-prong platinum settings.",
    description: "Combining the brilliance of a round cut with the graceful geometry of an emerald cut, these matched solitaire earrings deliver breathtaking fire and timeless everyday luxury.",
    specifications: {
      purity: "18KT White Gold (750)",
      certification: "Twin IGI Diamond Certificates",
      closure: "Threaded Screw Post with Secure Friction Back",
      dimensions: "Stone Dimensions: 6.2 x 5.8 mm each",
      craftsmanship: "Micro-Wire Platinum Prongs"
    },
    images: [
      "https://images.unsplash.com/photo-1654103206841-6f77d80ee1ca?w=1000&auto=format&fit=crop&q=85",
      "/images/design-aur-dr045.jpg",
      "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: false,
    isFeatured: false
  },
  {
    id: 18,
    name: "Maharani Matha Patti & Maang Tikka",
    code: "AUR-BT108",
    category: "bridal",
    categoryLabel: "Bridal Jewellery",
    material: "22KT Yellow Gold (BIS 916)",
    approxWeight: "42.10 gms",
    stoneDetails: "Syndicate Polki (9.4 cts), Natural Rubies & Pearl Hair Fringes",
    shortDescription: "A regal multi-strand headpiece framing the hairline with polki blossoms and pearl festoons.",
    description: "Designed for grand wedding entry portraits, this head ornament hugs the hair parting with dual tiers of delicate floral kundan motifs, culminating in a striking central pendant crowned with emerald drops.",
    specifications: {
      purity: "22KT Gold & Fine Kundan Foils",
      certification: "BIS Hallmark Certification",
      closure: "Hair Grip Combs & Adjustable Fine Hooks",
      dimensions: "Forehead Span: 28 cm | Center Tikka: 6.2 cm",
      craftsmanship: "Authentic Jadau & Hand Pearl Stringing"
    },
    images: [
      "https://images.unsplash.com/photo-1611087388916-b6c97e01735b?w=1000&auto=format&fit=crop&q=85",
      "/images/design-aur-bc101.jpg",
      "https://images.unsplash.com/photo-1631982686092-e6561a853187?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: true,
    isFeatured: false
  },
  {
    id: 19,
    name: "Iris Modernist Diamond Floating Ring",
    code: "AUR-CR520",
    category: "contemporary",
    categoryLabel: "Contemporary Jewellery",
    material: "18KT Rose Gold",
    approxWeight: "5.60 gms",
    stoneDetails: "Marquise & Round Brilliant Diamonds (0.85 Carat, VS1 Clarity)",
    shortDescription: "An asymmetrical open-ring design featuring floating marquise diamond petals.",
    description: "Defying traditional convention, the Iris ring suspends brilliant-cut diamonds across negative space between the fingers, creating the illusion of floating light upon the hand.",
    specifications: {
      purity: "18KT Rose Gold (750)",
      certification: "IGI Certificate of Authenticity",
      closure: "Open Comfort Band",
      dimensions: "Open Gap: 8 mm | Band Width: 2.2 mm",
      craftsmanship: "Precision Tension Floating Mount"
    },
    images: [
      "https://images.unsplash.com/photo-1758631279564-785e98313f8b?w=1000&auto=format&fit=crop&q=85",
      "/images/design-aur-cj512.jpg",
      "https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?w=1000&auto=format&fit=crop&q=85"
    ],
    isNew: false,
    isFeatured: false
  },
  {
    id: 20,
    name: "Heritage 22K Gold Waist Belt (Kamarbandh)",
    code: "AUR-TR388",
    category: "bridal",
    categoryLabel: "Bridal Jewellery",
    material: "22KT Antique Yellow Gold",
    approxWeight: "148.50 gms",
    stoneDetails: "Natural Unheated Rubies & Emerald Cabochons (18.4 cts)",
    shortDescription: "A monumental bridal waist belt intricately articulated with sculpted peacock panels.",
    description: "An architectural wonder of traditional Indian goldsmithing. Articulated links allow the kamarbandh to rest comfortably around the waist, held by a concealed hook system that accommodates bridal silks.",
    specifications: {
      purity: "22KT Pure Gold (916 BIS Certified)",
      certification: "BIS Government Hallmark",
      closure: "Adjustable Gold Chain Links & Heavy Hook",
      dimensions: "Length: 85 cm - 98 cm Adjustable | Central Plaque: 8 cm",
      craftsmanship: "Repoussé, Chasing & Gem Inlay"
    },
    images: [
      "https://images.unsplash.com/photo-1631982686092-e6561a853187?w=1000&auto=format&fit=crop&q=85",
      "/images/design-aur-gn102.jpg",
      "/images/design-aur-tr310.jpg"
    ],
    isNew: true,
    isFeatured: true
  }
];

export const INITIAL_ENQUIRIES = [
  {
    id: "ENQ-801",
    designName: "The Royal Noor-E-Aurelia Bridal Choker",
    designCode: "AUR-BC101",
    customerName: "Pooja Singhania",
    phone: "+91 98201 44521",
    email: "pooja.singhania@heritage.in",
    message: "Planning for December wedding in Udaipur. Would like to enquire about customizing the emerald drops to Basra pearls and booking a private viewing.",
    date: "2026-09-08",
    status: "New"
  },
  {
    id: "ENQ-802",
    designName: "Imperial Zenith Solitaire Diamond Ring",
    designCode: "AUR-DR045",
    customerName: "Vikramaditya Roy",
    phone: "+91 98110 33890",
    email: "v.roy@advisorygroup.com",
    message: "Interested in the 2.2ct GIA solitaire ring for an engagement next month. Can this be viewed at your Mumbai lounge this Saturday?",
    date: "2026-09-07",
    status: "Contacted"
  },
  {
    id: "ENQ-803",
    designName: "Aethelgard Heritage Nakshi Haar",
    designCode: "AUR-GN102",
    customerName: "Meenakshi Sundaram",
    phone: "+91 94440 18273",
    email: "meenakshi.sundaram@gmail.com",
    message: "Kindly share the breakup of making charges and whether 24KT pure gold exchange is accepted for this design.",
    date: "2026-09-06",
    status: "Follow-up"
  },
  {
    id: "ENQ-804",
    designName: "Celestial Constellation Diamond Tennis Bracelet",
    designCode: "AUR-DB204",
    customerName: "Sunita Godrej",
    phone: "+91 98210 99412",
    email: "sunita.g@outlook.com",
    message: "Enquiring about custom wrist length (16.5 cm) in 18K yellow gold instead of rose gold.",
    date: "2026-09-05",
    status: "Completed"
  },
  {
    id: "ENQ-805",
    designName: "The Sovereign Lionhead 18K Gold Kada",
    designCode: "AUR-MJ701",
    customerName: "Karanbir Singh Bedi",
    phone: "+91 98765 21098",
    email: "karan.bedi@dynasty.co",
    message: "Need exact wrist sizing assistance and express dispatch for a wedding gifting timeline.",
    date: "2026-09-04",
    status: "Contacted"
  },
  {
    id: "ENQ-806",
    designName: "Gauri Traditional Jadau Kada Pair",
    designCode: "AUR-BR880",
    customerName: "Dr. Ananya Mathur",
    phone: "+91 99100 87654",
    email: "dr.ananya@fortiscare.org",
    message: "Would love to see more video angles of the interior meenakari detailing before booking an appointment.",
    date: "2026-09-03",
    status: "New"
  },
  {
    id: "ENQ-807",
    designName: "Elysian Emerald-Cut Diamond Ring",
    designCode: "AUR-DR092",
    customerName: "Rohan Varma",
    phone: "+91 98450 76543",
    email: "rohan.varma@techventures.io",
    message: "Requesting a quote with a 3.5 carat D-Flawless center stone upgrade.",
    date: "2026-09-02",
    status: "Follow-up"
  },
  {
    id: "ENQ-808",
    designName: "Padmavati Jhumka & Kaan-Chain Ensemble",
    designCode: "AUR-TR310",
    customerName: "Gayatri Devi Sharma",
    phone: "+91 97112 34567",
    email: "gayatri.sharma@heritagetrust.org",
    message: "Checking availability in your New Delhi boutique for immediate viewing.",
    date: "2026-09-01",
    status: "Completed"
  }
];

export const INITIAL_APPOINTMENTS = [
  {
    id: "APT-501",
    customerName: "Rajeshwari & Siddharth Malhotra",
    phone: "+91 98200 12345",
    email: "siddharth.m@malhotragroup.in",
    date: "2026-09-15",
    time: "11:30 AM",
    purpose: "Bridal Trousseau Private Salon Consultation",
    status: "Confirmed",
    notes: "VIP lounge setup required. Requesting champagne and preview of full heritage polki catalogue."
  },
  {
    id: "APT-502",
    customerName: "Dr. Kavita Nambiar",
    phone: "+91 94470 56789",
    email: "kavita.n@aiims.edu",
    date: "2026-09-16",
    time: "03:00 PM",
    purpose: "Bespoke Solitaire Engagement Ring Commission",
    status: "New",
    notes: "Client looking for 2.5ct GIA Oval cut diamond in platinum."
  },
  {
    id: "APT-503",
    customerName: "Arjun Oberoi",
    phone: "+91 98101 67890",
    email: "arjun@oberoicapital.com",
    date: "2026-09-17",
    time: "05:00 PM",
    purpose: "Anniversary Diamond Jewellery Selection",
    status: "Confirmed",
    notes: "Shortlist diamond necklaces and tennis bracelets."
  },
  {
    id: "APT-504",
    customerName: "Sunaina Bajaj",
    phone: "+91 98230 45678",
    email: "sunaina.bajaj@bajajholdings.com",
    date: "2026-09-12",
    time: "02:30 PM",
    purpose: "Family Heirloom Gold Restoration & Valuation",
    status: "Completed",
    notes: "3 antique necklaces appraised and cleaned."
  },
  {
    id: "APT-505",
    customerName: "Manish & Preeti Kothari",
    phone: "+91 98920 65432",
    email: "preeti.kothari@gmail.com",
    date: "2026-09-18",
    time: "12:00 PM",
    purpose: "Wedding Jewellery Exchange Consultation",
    status: "New",
    notes: "Client bringing 120 grams of 22K ancestral gold for conversion to contemporary bridal set."
  },
  {
    id: "APT-506",
    customerName: "Alia Merchant",
    phone: "+91 99300 11223",
    email: "alia.m@merchantcorp.com",
    date: "2026-09-14",
    time: "04:30 PM",
    purpose: "Private High-Jewellery Exhibition Viewing",
    status: "Cancelled",
    notes: "Rescheduled by client due to international travel."
  }
];

export const INITIAL_CUSTOM_REQUESTS = [
  {
    id: "CST-201",
    customerName: "Tanya Chawla",
    phone: "+91 98118 77665",
    email: "tanya.chawla@luxurystudio.in",
    jewelleryType: "Bridal Set",
    designRequirement: "Heritage Rajputana Meenakari Polki Choker with matching Chandbalis",
    budgetRange: "₹3,00,000+",
    description: "Looking for a museum-grade bridal choker inspired by 17th-century Jaipur royal court designs, with pigeon-blood rubies and natural south sea pearls.",
    referenceImage: "/images/design-aur-bc101.jpg",
    date: "2026-09-08",
    status: "Under Review"
  },
  {
    id: "CST-202",
    customerName: "Aditya Shroff",
    phone: "+91 98205 44332",
    email: "aditya.shroff@equitypartners.com",
    jewelleryType: "Ring",
    designRequirement: "Bespoke Hidden Halo Cushion Cut Solitaire in PT950",
    budgetRange: "₹1,00,000 – ₹3,00,000",
    description: "Custom engagement ring with a 2.0ct cushion modified brilliant stone, secret pink sapphire embedded inside the inner band.",
    referenceImage: "/images/design-aur-dr045.jpg",
    date: "2026-09-07",
    status: "Quote Sent"
  },
  {
    id: "CST-203",
    customerName: "Deepika Raghunathan",
    phone: "+91 94441 99887",
    email: "deepika.r@raghuarts.org",
    jewelleryType: "Necklace",
    designRequirement: "Contemporary Geometric Floating Emerald Necklace",
    budgetRange: "₹1,00,000 – ₹3,00,000",
    description: "Asymmetrical open collar necklace combining 18K yellow gold with Colombian hexagon emeralds.",
    referenceImage: "/images/design-aur-cj512.jpg",
    date: "2026-09-06",
    status: "New"
  },
  {
    id: "CST-204",
    customerName: "Sameer Deshmukh",
    phone: "+91 98220 55443",
    email: "sameer.d@deshmukhagro.in",
    jewelleryType: "Bracelet",
    designRequirement: "Heavy 22K Solid Gold Chunar Kada with Lion Motif",
    budgetRange: "₹3,00,000+",
    description: "Substantial 75 gram solid 22K gold kada with hand-carved lion heads and ruby eyes.",
    referenceImage: "/images/design-aur-mj701.jpg",
    date: "2026-09-04",
    status: "Under Review"
  },
  {
    id: "CST-205",
    customerName: "Natasha Kapoor",
    phone: "+91 98103 22110",
    email: "natasha.k@vervemedia.com",
    jewelleryType: "Earrings",
    designRequirement: "Art Deco Step-Cut Solitaire Diamond Drop Earrings",
    budgetRange: "₹50,000 – ₹1,00,000",
    description: "Lightweight, sleek chandelier drops for red-carpet and cocktail galas in 18K white gold.",
    referenceImage: "/images/design-aur-tr310.jpg",
    date: "2026-09-02",
    status: "Completed"
  },
  {
    id: "CST-206",
    customerName: "Raghavendra Hegde",
    phone: "+91 98451 33221",
    email: "r.hegde@hegdeholding.com",
    jewelleryType: "Pendant",
    designRequirement: "Sacred Ganesha Navratna Talisman",
    budgetRange: "₹50,000 – ₹1,00,000",
    description: "Traditional astrological nine-gem pendant set strictly in certified 22K yellow gold with natural unheated gemstones.",
    referenceImage: "/images/design-aur-gn102.jpg",
    date: "2026-08-30",
    status: "Quote Sent"
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Ananya Singhania",
    location: "Mumbai",
    rating: 5,
    title: "An Unforgettable Bridal Journey",
    review: "The bridal collection exceeded all our dreams. Master goldsmiths customized our Noor-E-Aurelia choker with our ancestral rubies. The private salon experience made our entire wedding family feel like royalty.",
    date: "August 2026",
    piece: "Noor-E-Aurelia Bridal Choker"
  },
  {
    id: 2,
    name: "Dr. Radhika Mehra",
    location: "New Delhi",
    rating: 5,
    title: "Masterful Gem Selection & Complete Trust",
    review: "As someone particular about diamond clarity, AURELIA's GIA certification and optical brilliance surpassed international houses in Mayfair. Truly certified luxury without compromise.",
    date: "July 2026",
    piece: "Imperial Zenith Solitaire Ring"
  },
  {
    id: 3,
    name: "Natasha Shroff",
    location: "Bengaluru",
    rating: 5,
    title: "Heirloom Craftsmanship of the Highest Order",
    review: "We commissioned a bespoke heritage temple haar. Every single Lakshmi motif was sculpted with divine devotion. The weight, balance, and warm gold patina are simply sublime.",
    date: "September 2026",
    piece: "Aethelgard Heritage Nakshi Haar"
  },
  {
    id: 4,
    name: "Vikram & Shireen Sethi",
    location: "Kolkata",
    rating: 5,
    title: "The Solitaire Conclave Experience",
    review: "Attending AURELIA's private solitaire exhibition was exquisite. The gemologists walked us through every facet under microscope. My wife's tennis bracelet is now her signature piece.",
    date: "June 2026",
    piece: "Celestial Tennis Bracelet"
  },
  {
    id: 5,
    name: "Maharani Sanghamitra Rao",
    location: "Hyderabad",
    rating: 5,
    title: "Authentic Jadau & Respect for Heritage",
    review: "Finding authentic uncut polki paired with genuine Bikaneri meenakari is exceedingly rare today. AURELIA preserves the sanctity of genuine royal Indian jewellery.",
    date: "May 2026",
    piece: "Gauri Jadau Kada Pair"
  },
  {
    id: 6,
    name: "Harshwardhan Mittal",
    location: "Ahmedabad",
    rating: 5,
    title: "Distinguished Men's Collection",
    review: "The Sovereign Lionhead Kada in 18K gold and black diamonds is a masterwork. Robust, beautifully weighted, and impeccably engineered. Their concierge service is unmatched.",
    date: "August 2026",
    piece: "Sovereign Lionhead Kada"
  }
];

export const SERVICES = [
  {
    id: "bespoke",
    icon: "Sparkles",
    title: "Bespoke Jewellery Commission",
    tagline: "Your Vision Sculpted by Master Artisans",
    description: "From initial gouache sketches and 3D wax renders to gemstone selection and final gold hand-forging, create an intimate heirloom born uniquely of your story.",
    turnaround: "4 - 6 Weeks",
    image: "/images/royal-heritage-story.jpg"
  },
  {
    id: "restoration",
    icon: "ShieldCheck",
    title: "Heirloom Jewellery Restoration",
    tagline: "Breathing Life Back Into Ancestral Treasures",
    description: "Our conservators gently restore antique temple jewellery, re-string fragile Basra pearls, repair loose kundan prongs, and revive faded meenakari enamel without compromising heritage integrity.",
    turnaround: "2 - 3 Weeks",
    image: "/images/design-aur-gn102.jpg"
  },
  {
    id: "cleaning",
    icon: "Gem",
    title: "Ultrasonic Spa & Steam Care",
    tagline: "Restoring Prismatic Luminescence",
    description: "A complimentary ritual for all AURELIA clients. Deep ultrasonic micro-cavitation and pressurized ionized steam remove daily residue, revealing the original fire of your diamonds and gems.",
    turnaround: "30 Minutes In-Lounge",
    image: "/images/collection-diamond.webp"
  },
  {
    id: "polishing",
    icon: "Flame",
    title: "Master Polishing & Rhodium Re-plating",
    tagline: "High-Mirror Finish & Anti-Tarnish Shields",
    description: "Multi-stage diamond paste polishing removes hairline micro-scratches from gold and platinum, followed by electro-deposited bright rhodium plating for lasting mirror brilliance.",
    turnaround: "2 - 4 Days",
    image: "/images/design-aur-sl401.jpg"
  },
  {
    id: "exchange",
    icon: "RefreshCw",
    title: "Gold Exchange & Karatage Upgrade",
    tagline: "100% Purity Value Guarantee",
    description: "Bring in your old 22K or 18K gold jewellery. Following precise XRF non-destructive spectrometer purity assaying, receive 100% market gold value credited towards fresh bespoke creations.",
    turnaround: "Instant Assay & Valuation",
    image: "/images/design-aur-mj701.jpg"
  },
  {
    id: "valuation",
    icon: "Award",
    title: "Gemological Valuation & Insurance Appraisal",
    tagline: "Certified Sovereign Documentation",
    description: "Comprehensive appraisal dossiers compiled by GIA and IGI certified gemologists detailing 4Cs diamond breakdown, metal purity assays, and replacement valuation for family trusts and insurance.",
    turnaround: "3 - 5 Business Days",
    image: "/images/design-aur-dr092.jpg"
  }
];

export const EVENTS = [
  {
    id: "ev-1",
    title: "The Grand Aurelia Royal Bridal Gala 2026",
    type: "Bridal Exhibition",
    date: "October 18 – 22, 2026",
    location: "The Grand Ballroom, AURELIA Maison Flagship",
    description: "An exclusive 5-day exhibition unveiling over 150 one-of-a-kind bridal trousseau suites, uncut polki suites, and heritage kundan sets. Includes private consultations with bridal couturiers.",
    badge: "By Invitation Only",
    image: "/images/design-aur-bc101.jpg"
  },
  {
    id: "ev-2",
    title: "Solitaire & Natural Diamond Conclave",
    type: "Gemological Showcase",
    date: "November 5 – 8, 2026",
    location: "AURELIA Diamond Penthouse Salon",
    description: "Discover the world's most coveted natural diamonds. Rare D-Flawless solitaires ranging from 2.0 to 12.0 carats, along with fancy vivid yellow and pink diamonds on private preview.",
    badge: "Limited Slots",
    image: "/images/design-aur-dr045.jpg"
  },
  {
    id: "ev-3",
    title: "Jaipur & Chettinad Heritage Masterworks",
    type: "Artisan Exhibition",
    date: "December 10 – 14, 2026",
    location: "The Heritage Pavilion, Mumbai",
    description: "Meet fourth-generation master goldsmiths and witness live demonstration of 24K Kundan jadau foil setting and intricate Banaras filigree weaving.",
    badge: "Live Masterclass",
    image: "/images/design-aur-br880.jpg"
  },
  {
    id: "ev-4",
    title: "Contemporary Minimalist Fine Jewellery Soirée",
    type: "Cocktail Showcase",
    date: "January 23, 2027",
    location: "AURELIA Modern Atrium",
    description: "An evening of champagne and sleek architectural diamonds designed for everyday elevated power dressing. Special privilege access for registered guests.",
    badge: "Evening Gala",
    image: "/images/design-aur-cj512.jpg"
  },
  {
    id: "ev-5",
    title: "Akshaya Tritiya Auspicious Privileges",
    type: "Festive Showcase",
    date: "April 29 – May 2, 2027",
    location: "All AURELIA Showroom Salons",
    description: "Celebrate everlasting prosperity with zero making charges on select 22K gold temple harams and coin sets, plus complimentary gold coins on bookings above ₹2,50,000.",
    badge: "Festive Privileges",
    image: "/images/design-aur-gn102.jpg"
  },
  {
    id: "ev-6",
    title: "Private High-Jewellery Salon: The Nizam Legacy",
    type: "Private Salon",
    date: "Continuous / By Appointment",
    location: "Private VIP Vault Suite",
    description: "A secure viewing suite showcasing museum-quality natural Colombian emerald ropes, Basra seed pearl necklaces, and Burmese ruby bracelets.",
    badge: "Private Reservation",
    image: "/images/design-aur-tr312.jpg"
  }
];

export const BRAND_STORY = {
  foundedYear: 1984,
  heritageCity: "Jaipur & Mumbai",
  title: "Four Decades of Sovereign Goldsmithing",
  summary: "Founded in 1984 by master goldsmith Harishchandran Varma, AURELIA Haute Joaillerie was born from a singular vow: to resurrect the unhurried majesty of royal Indian court jewellery for the modern discerning family.",
  mission: "We believe fine jewellery is never mere adornment — it is an enduring covenant of love, a family milestone crystallized in eternal gold, and a heritage heirloom passed tenderly across generations.",
  values: [
    {
      title: "Uncompromising 100% Purity",
      desc: "Every ounce of gold bears strict BIS 916 hallmarking. Every natural solitaire is certified by GIA or IGI with zero conflict origins."
    },
    {
      title: "Master Hand-Craftsmanship",
      desc: "We honor 400-year-old traditions of Kundan-Jadau, Nakshi repoussé, and fine meenakari, refusing high-speed mass production."
    },
    {
      title: "Private Client Sanctuary",
      desc: "We cultivate personal relationships over generations. No pressure, no rushed sales — only bespoke artistry in serene salon comfort."
    },
    {
      title: "Lifelong Care & Guarantee",
      desc: "Complimentary spa cleanings, transparent lifetime gold exchange at full market purity, and generational heritage repairs."
    }
  ],
  milestones: [
    {
      year: "1984",
      title: "The Founding Atelier",
      desc: "Master goldsmith Harishchandran establishes our inaugural hand-forging workshop in the historic Johari Bazaar."
    },
    {
      year: "1996",
      title: "Royal Trousseau Commissions",
      desc: "Commissioned to craft authentic heirloom bridal regalia for aristocratic families across Rajasthan and Gujarat."
    },
    {
      year: "2008",
      title: "The Diamond Solitaire Studio",
      desc: "Launched our dedicated High Diamond division, partnering directly with certified De Beers sightholders for rare D-Flawless gems."
    },
    {
      year: "2018",
      title: "The Architectural Contemporary Line",
      desc: "Introduced minimalist 18K gold and floating diamond silhouettes, bridging ancestral soul with modern cosmopolitan ease."
    },
    {
      year: "2026",
      title: "The Sovereign Digital Maison",
      desc: "Unveiling our high-touch digital consultation portal, connecting collectors worldwide to our private salon ateliers."
    }
  ],
  certifications: [
    {
      name: "BIS 916 Hallmark",
      desc: "Government of India certified gold purity guarantee with HUID laser tracking."
    },
    {
      name: "GIA Certified Solitaires",
      desc: "Gemological Institute of America certified natural diamonds with individual dossier verification."
    },
    {
      name: "IGI Certified Jewellery",
      desc: "International Gemological Institute authentication on all diamond-studded masterworks."
    },
    {
      name: "Responsible Jewellery Council",
      desc: "Strict adherence to 100% conflict-free, ethical gold and natural gemstone sourcing."
    }
  ]
};

export const STORE_INFO = {
  brandName: "AURELIA Haute Joaillerie",
  tagline: "Timeless Jewellery. Crafted for Your Moments.",
  phone: "+91 (022) 6890 4400",
  whatsapp: "+91 98201 88000",
  email: "concierge@aureliajewels.com",
  showroomAddress: "The AURELIA Maison, 14 Heritage Boulevard, Colaba, Mumbai 400 001, India",
  operatingHours: {
    weekdays: "Monday – Saturday: 10:30 AM – 08:30 PM",
    sunday: "Sunday: 11:30 AM – 07:00 PM (By Appointment)"
  }
};

export const DEFAULT_SETTINGS = {
  brandName: "Lax360 Haute Joaillerie",
  tagline: "Timeless Fine Jewellery & Sovereign Diamonds",
  phone: "+91 (022) 6890 4400",
  whatsapp: "+91 98201 88000",
  email: "concierge@lax360jewels.com",
  showroomAddress: "The Lax360 Maison, 14 Heritage Boulevard, Colaba, Mumbai 400 001, India",
  operatingHours: {
    weekdays: "Monday – Saturday: 10:30 AM – 08:30 PM",
    sunday: "Sunday: 11:30 AM – 07:00 PM (By Appointment)"
  },
  goldRates: {
    gold24k: 7350,
    gold22k: 6740,
    gold18k: 5515,
    silver1kg: 89500,
    platinum1g: 3120,
    lastUpdated: "Today, 10:00 AM IST"
  },
  taxRate: 3,
  currencySymbol: "₹",
  makingChargeDiscount: 15
};

