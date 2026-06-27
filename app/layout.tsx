import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'U | AI Engineer & Backend Developer',
  description: 'Premium developer portfolio for an AI Engineer and Backend Developer with polished projects, skills, and contact details.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'U | AI Engineer & Backend Developer',
    description: 'Premium developer portfolio with elegant design, professional projects, and modern UX.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
