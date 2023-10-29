import '@/app/ui/global.css'
import { fontInter } from './ui/font';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${fontInter.className} antialiased`}>{children}</body>
    </html>
  );
}
