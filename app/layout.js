import './globals.css';
import { Metadata } from 'next';

export const metadata = {
  title: 'Netizen Waras — Kampanye Anti Cyberbullying',
  description:
    'Kampanye edukasi digital untuk meningkatkan kesadaran tentang cyberbullying, empati digital, dan perilaku online yang bertanggung jawab.',
  keywords: ['cyberbullying', 'netizen waras', 'empati digital', 'kampanye', 'anti bullying', 'Indonesia'],
  authors: [{ name: 'Putra Dharma Prajna Adhitthana Bun', url: 'mailto:s32230161@student.ubm.ac.id' }],
  openGraph: {
    title: 'Netizen Waras — Kampanye Anti Cyberbullying',
    description: 'Jempol cepat boleh. Tapi empati jangan sampai telat.',
    type: 'website',
    locale: 'id_ID',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netizen Waras',
    description: 'Kampanye edukasi digital anti cyberbullying',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0F0A1E" />
      </head>
      <body className="noise-bg antialiased">
        {children}
      </body>
    </html>
  );
}
