import { getProductBySlug, products } from "@/lib/products";
import { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";

// Generate static params for all known products at build time
export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate dynamic metadata for each product
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}): Promise<Metadata> {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);
  
  if (!product) {
    return {
      title: "Product Not Found",
    };
  }
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Yarns Lanka`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

// Server Component Wrapper
export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return (
      <div className="container" style={{ padding: '20vh 0', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '1rem' }}>Product Not Found</h1>
        <p>The product you are looking for does not exist.</p>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}
