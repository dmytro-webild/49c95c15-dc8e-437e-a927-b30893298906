import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Urji Hotel Shashemene | Luxury Ethiopian Hospitality',
  description: 'Experience premium, modern, and affordable hotel stays at Urji Hotel in Shashemene, Ethiopia. Book rooms, explore facilities, and enjoy authentic Ethiopian hospitality.',
  keywords: ["Urji Hotel, Shashemene, Ethiopia, hotel booking, luxury hotel, affordable hotel, Ethiopian hospitality, hotel rooms, hotel facilities, Shashemene attractions"],
  openGraph: {
    "title": "Urji Hotel Shashemene | Luxury Ethiopian Hospitality",
    "description": "Experience premium, modern, and affordable hotel stays at Urji Hotel in Shashemene, Ethiopia. Book rooms, explore facilities, and enjoy authentic Ethiopian hospitality.",
    "url": "https://urjihotel.com",
    "siteName": "Urji Hotel",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/young-woman-new-york-city-daytime_23-2149488519.jpg",
        "alt": "Urji Hotel exterior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Urji Hotel Shashemene | Luxury Ethiopian Hospitality",
    "description": "Experience premium, modern, and affordable hotel stays at Urji Hotel in Shashemene, Ethiopia. Book rooms, explore facilities, and enjoy authentic Ethiopian hospitality.",
    "images": [
      "http://img.b2bpic.net/free-photo/young-woman-new-york-city-daytime_23-2149488519.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
