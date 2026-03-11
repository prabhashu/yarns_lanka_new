import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy and Terms of Service for Yarns Lanka and the KNIGHTS bedding brand.',
  openGraph: {
    title: 'Privacy Policy | Yarns Lanka',
    description: 'Privacy Policy and Terms of Service for Yarns Lanka and the KNIGHTS bedding brand.',
    url: 'https://yarnslanka.com/privacy',
    siteName: 'Yarns Lanka',
    type: 'website',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
