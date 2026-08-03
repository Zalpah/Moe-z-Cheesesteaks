import type { Metadata } from "next";
import { Anton, Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrderNowPopup } from "@/components/OrderNowPopup";
import { business } from "@/lib/business";
import { googleReviewSummary } from "@/lib/reviews";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | Ann Arbor, MI`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [
    "cheesesteaks",
    "Philly cheesesteak",
    "Ann Arbor restaurant",
    "halal food Ann Arbor",
    "burgers",
    "wraps",
    "Moe'z",
  ],
  openGraph: {
    title: `${business.name} | Ann Arbor, MI`,
    description: business.description,
    url: business.siteUrl,
    siteName: business.name,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | Ann Arbor, MI`,
    description: business.description,
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: business.name,
    image: `${business.siteUrl}/images/og-image.jpg`,
    url: business.siteUrl,
    telephone: business.phone,
    email: business.email,
    servesCuisine: ["American", "Sandwiches", "Burgers", "Halal"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleReviewSummary.rating,
      reviewCount: googleReviewSummary.count,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: business.hours
      .filter((h) => h.open && h.close)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: to24Hour(h.open as string),
        closes: to24Hour(h.close as string),
      })),
    menu: `${business.siteUrl}/menu`,
    hasMenu: `${business.siteUrl}/menu`,
    acceptsReservations: false,
    sameAs: [business.social.instagram, business.social.tiktok],
    potentialAction: {
      "@type": "OrderAction",
      target: business.links.order,
      deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModePickUp", "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"],
    },
  };

  return (
    <html
      lang="en"
      className={`${anton.variable} ${barlowCondensed.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-red focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <OrderNowPopup />
      </body>
    </html>
  );
}

function to24Hour(time: string): string {
  const [t, meridiem] = time.split(" ");
  const [hoursStr, minutes] = t.split(":");
  let hours = parseInt(hoursStr, 10);
  if (meridiem === "PM" && hours !== 12) hours += 12;
  if (meridiem === "AM" && hours === 12) hours = 0;
  return `${String(hours).padStart(2, "0")}:${minutes}`;
}
