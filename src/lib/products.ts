export interface ProductSize {
    name: string;
    dimensions: string;
}

export interface Product {
    id: string;
    slug: string;
    name: string;
    shortName: string;
    description: string;
    image: string;
    sizes: ProductSize[];
    colorImages?: Record<string, string>;
}

export const features = [
    "100% Organic Egyptian Cotton",
    "Made with Long-Staple Fibers for superior softness",
    "Available in 300, 400, and 600 thread counts",
    "Expert craftsmanship with Sateen Weave",
    "Breathable and temperature-regulating",
    "Light and airy for a feathery softness",
    "Allergy- and eco-friendly",
    "Manufactured in an ISO 9001:2015 certified facility"
];

export const careInstructions = [
    "Wash separately before first use",
    "Cold machine wash",
    "Gentle Cycles",
    "Wash with like colors",
    "Medium tumble dry",
    "Iron low heat",
    "Do not bleach",
    "Do not dry clean"
];

export const colors = [
    { name: "White", hex: "#FFFFFF" },
    { name: "Blue", hex: "#A8B8C8" },
    { name: "Grey", hex: "#8A8A8A" },
    { name: "Peach", hex: "#FADBAF" },
    { name: "Bronze", hex: "#C08552" },
    { name: "Cream", hex: "#F5F0EB" },
];

export const products: Product[] = [
    {
        id: "flat-sheet",
        slug: "flat-sheet",
        name: "Knights Egyptian Cotton Flat Sheet",
        shortName: "Flat Sheet",
        description: "Discover our best-selling Knights Egyptian cotton flat sheet, where luxury and comfort converge. Classic, long-wearing and wonderfully soft with a subtle sateen sheen.",
        image: "https://i.pinimg.com/1200x/66/d8/84/66d884e46b302834ff565f00a4fdc3e5.jpg",
        sizes: [
            { name: "Single", dimensions: "195×260 cm" },
            { name: "Double", dimensions: "240×260 cm" },
            { name: "Queen", dimensions: "255×260 cm" },
            { name: "King", dimensions: "285×260 cm" },
            { name: "Super King", dimensions: "330×300 cm" }
        ],
        colorImages: {
            "White": "https://i.pinimg.com/1200x/66/d8/84/66d884e46b302834ff565f00a4fdc3e5.jpg",
            "Blue": "https://i.pinimg.com/1200x/cd/66/03/cd6603a1154c3757bf5cabd1d06bdebd.jpg",
            "Grey": "https://i.pinimg.com/1200x/5a/a8/9e/5aa89e92ffbb47c87c2fb2faac6c459c.jpg",
            "Peach": "https://i.pinimg.com/1200x/8c/fb/8e/8cfb8e05a5b2ab5be1a70ffaa9d99723.jpg",
            "Bronze": "https://i.pinimg.com/1200x/72/7e/65/727e65161fe0df4fcc02f232ce3de2db.jpg",
            "Cream": "https://i.pinimg.com/1200x/ef/e0/ab/efe0abac012da7df783cb0d0b0b8c6bb.jpg"
        }
    },
    {
        id: "fitted-sheet",
        slug: "fitted-sheet",
        name: "Knights Egyptian Cotton Fitted Sheet",
        shortName: "Fitted Sheet",
        description: "Discover our best-selling Knights Egyptian cotton fitted sheet, where luxury and comfort converge. Features deep pockets (50cm) to perfectly hug your mattress.",
        image: "https://i.pinimg.com/1200x/1d/db/0c/1ddb0c1ea71758eff3324a9a48355a83.jpg",
        sizes: [
            { name: "Single", dimensions: "91×193×50 cm" },
            { name: "Double", dimensions: "137×190×50 cm" },
            { name: "Queen", dimensions: "152×203×50 cm" },
            { name: "King", dimensions: "108×203×50 cm" }, // Note: User spec had 108, likely a typo for 180, but keeping verbatim
            { name: "Super King", dimensions: "203×203×50 cm" }
        ],
        colorImages: {
            "White": "https://i.pinimg.com/1200x/1d/db/0c/1ddb0c1ea71758eff3324a9a48355a83.jpg",
            "Blue": "https://i.pinimg.com/1200x/19/d1/b2/19d1b24bf482ecca92842ddcd23c91fb.jpg",
            "Grey": "https://i.pinimg.com/1200x/d8/4a/c3/d84ac3d1a8e10acc2a15c327fbc3adfa.jpg"
        }
    },
    {
        id: "duvet-cover",
        slug: "duvet-cover",
        name: "Knights Egyptian Cotton Duvet Cover",
        shortName: "Duvet Cover",
        description: "Discover our best-selling Knights Egyptian cotton duvet cover, where luxury and comfort converge. Features thoughtful closures and interior ties for a perfect drape.",
        image: "https://i.pinimg.com/1200x/95/1a/fc/951afcb2fac31496409378eb653e0f82.jpg",
        sizes: [
            { name: "Single", dimensions: "140×210 cm" },
            { name: "Double", dimensions: "180×210 cm" },
            { name: "Queen", dimensions: "210×210 cm" },
            { name: "King", dimensions: "240×210 cm" },
            { name: "Super King", dimensions: "270×240 cm" }
        ],
        colorImages: {
            "White": "https://i.pinimg.com/1200x/95/1a/fc/951afcb2fac31496409378eb653e0f82.jpg",
            "Blue": "https://i.pinimg.com/1200x/51/69/8b/51698b671a5c68ffbb598ba9668bd86c.jpg",
            "Grey": "https://i.pinimg.com/1200x/c9/a1/3e/c9a13ea42004245781a8b98e1be79baf.jpg"
        }
    },
    {
        id: "pillow-cases",
        slug: "pillow-cases",
        name: "Knights Egyptian Cotton Pillow Cases",
        shortName: "Pillow Cases",
        description: "Discover our best-selling Knights Egyptian cotton pillow cases (Set of 2), where luxury and comfort converge. Crafted for optimal skin and hair health during sleep.",
        image: "https://i.pinimg.com/1200x/3b/65/8d/3b658d18c9ef4c733ea6015bf76a4629.jpg",
        sizes: [
            { name: "Standard", dimensions: "48×74 cm" },
            { name: "Standard", dimensions: "48×74 cm" },
            { name: "Standard", dimensions: "48×74 cm" },
            { name: "Standard", dimensions: "48×74 cm" },
            { name: "Standard", dimensions: "48×74 cm" }
        ],
        colorImages: {
            "White": "https://i.pinimg.com/1200x/3b/65/8d/3b658d18c9ef4c733ea6015bf76a4629.jpg",
            "Blue": "https://i.pinimg.com/1200x/2d/34/eb/2d34eb5a2105151ee6610ddb2024bda6.jpg",
            "Grey": "https://i.pinimg.com/1200x/56/a0/fc/56a0fcf6ec9fb9c08ba8dfc4d924197e.jpg"
        }
    },
    {
        id: "bed-linen-set",
        slug: "bed-linen-set",
        name: "Knights Complete Bed Linen Set",
        shortName: "Bed Linen Set",
        description: "The complete KNIGHTS collection. Includes 1 Fitted Sheet, 1 Flat Sheet, 1 Duvet Cover, and 2 Standard Pillowcases. The ultimate luxury bedding upgrade.",
        image: "https://i.pinimg.com/1200x/17/26/38/1726386c8a511ee0423b5a3cffd4706b.jpg",
        sizes: [
            { name: "Single", dimensions: "Complete Set" },
            { name: "Double", dimensions: "Complete Set" },
            { name: "Queen", dimensions: "Complete Set" },
            { name: "King", dimensions: "Complete Set" },
            { name: "Super King", dimensions: "Complete Set" }
        ],
        colorImages: {
            "White": "https://i.pinimg.com/1200x/17/26/38/1726386c8a511ee0423b5a3cffd4706b.jpg",
            "Blue": "https://i.pinimg.com/1200x/be/93/29/be932997190caabc76cd9ea400f8626f.jpg",
            "Grey": "https://i.pinimg.com/1200x/07/8a/cc/078acc18fb483be2179836173a005ee5.jpg",
            "Peach": "https://i.pinimg.com/1200x/ff/f2/87/fff2878d655fbf80e4b8efab0c17fd74.jpg",
            "Bronze": "https://i.pinimg.com/1200x/5f/88/ab/5f88abd4d1a6d91fbd9a4897f2cd6fbb.jpg",
            "Cream": "https://i.pinimg.com/1200x/a6/50/ce/a650cefb9c7717d3a0ab3604f329975f.jpg"
        }
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}
