import './globals.css';
import { Inter } from 'next/font/google';
import { Toast } from '@/shared/ui';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chat app',
  description: 'Chat app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Toast>{children}</Toast>
      </body>
    </html>
  );
}
