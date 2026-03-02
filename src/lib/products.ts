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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    }
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find(p => p.slug === slug);
}
