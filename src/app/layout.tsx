import './globals.css';
import { Inter } from 'next/font/google';
import { ToastProvider } from '@/shared/providers';

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
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
