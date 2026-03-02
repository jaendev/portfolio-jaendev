import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: 'Jaendev',
  description: 'Full Stack Developer Portfolio showcasing projects and skills',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
