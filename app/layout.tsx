import type { Metadata } from "next";
import "./globals.css";
import ConvexClerkProvider from "./providers/ConvexProviderWithClerk";

export const metadata: Metadata = {
  title: "Podcast App",
  description: "Generate your podcasts using AI",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ConvexClerkProvider Children={children} />
      </body>
    </html>
  );
}
