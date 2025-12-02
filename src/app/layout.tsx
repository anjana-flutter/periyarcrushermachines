import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Periyar Crusher Machines — Premium Crushers & Crushing Equipment",
  description: "Leading manufacturer of high-quality crushing equipment for mining, construction, and aggregate industries. Specializing in jaw crushers, cone crushers, impact crushers, and mobile crushing plants since 1998.",
  keywords: ["crusher machines", "jaw crusher", "cone crusher", "impact crusher", "VSI crusher", "mobile crusher", "crushing equipment", "mining equipment", "construction machinery"],
  authors: [{ name: "Periyar Crusher Machines" }],
  openGraph: {
    title: "Periyar Crusher Machines — Premium Crushers & Crushing Equipment",
    description: "Leading manufacturer of high-quality crushing equipment for mining, construction, and aggregate industries.",
    type: "website",
    locale: "en_IN",
    siteName: "Periyar Crusher Machines",
  },
  twitter: {
    card: "summary_large_image",
    title: "Periyar Crusher Machines — Premium Crushers & Crushing Equipment",
    description: "Leading manufacturer of high-quality crushing equipment for mining, construction, and aggregate industries.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-background text-text min-h-screen" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
