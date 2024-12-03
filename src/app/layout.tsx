import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merckel.dev Portfolio",
  description: "My portfolio features web design and branding projects, demonstrating my ability to enhance online presence and visual identity for various clients.",
  keywords: ["Portfolio", "Web Design", "Web Development", "Client Work"],
  openGraph: {
    title: "Merckel.dev Portfolio",
    description: "My portfolio features web design and branding projects, demonstrating my ability to enhance online presence and visual identity for various clients.",
    type: "website",
    url: "https://merckel.dev"
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main className="w-full h-full mt-8">
          {children}
        </main>
      </body>
    </html>
  );
}
