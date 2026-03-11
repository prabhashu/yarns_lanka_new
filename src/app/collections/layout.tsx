import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collections',
  description: 'Explore our premium KNIGHTS bedding collections. Available in Standard, Classic and Signature grades of 100% Egyptian Cotton.',
  openGraph: {
    title: 'Collections | Yarns Lanka',
    description: 'Explore our premium KNIGHTS bedding collections. Available in Standard, Classic and Signature grades of 100% Egyptian Cotton.',
    url: 'https://yarnslanka.com/collections',
    siteName: 'Yarns Lanka',
    type: 'website',
  },
};

export default function CollectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
