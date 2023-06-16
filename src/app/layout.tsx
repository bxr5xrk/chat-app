import './globals.css';
import { Inter } from 'next/font/google';
import { QueryProvider, ToastProvider } from '@/shared/providers';

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
        <ToastProvider>
          <QueryProvider>{children}</QueryProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
