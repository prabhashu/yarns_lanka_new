import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Yarns Lanka for inquiries regarding our KNIGHTS premium bedding collection, manufacturing, or wholesale opportunities.',
  openGraph: {
    title: 'Contact Us | Yarns Lanka',
    description: 'Get in touch with Yarns Lanka for wholesale inquiries, partnerships, or customer support.',
    url: 'https://yarnslanka.com/contact',
    siteName: 'Yarns Lanka',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
