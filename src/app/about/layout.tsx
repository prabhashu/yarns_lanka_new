import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Yarns Lanka, our history, mission, and commitment to delivering the finest Egyptian Cotton bed linen globally.',
  openGraph: {
    title: 'About Us | Yarns Lanka',
    description: 'Learn about Yarns Lanka, our history, mission, and commitment to delivering the finest Egyptian Cotton bed linen globally.',
    url: 'https://yarnslanka.com/about',
    siteName: 'Yarns Lanka',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
