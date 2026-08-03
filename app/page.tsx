import { Hero } from "@/components/home/Hero";
import { FeaturedFavorites } from "@/components/home/FeaturedFavorites";
import { MenuCategories } from "@/components/home/MenuCategories";
import { WhyMoez } from "@/components/home/WhyMoez";
import { GoogleReviews } from "@/components/home/GoogleReviews";
import { CateringCta } from "@/components/home/CateringCta";
import { InstagramGrid } from "@/components/home/InstagramGrid";
import { LocationHours } from "@/components/home/LocationHours";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedFavorites />
      <MenuCategories />
      <WhyMoez />
      <GoogleReviews />
      <CateringCta />
      <InstagramGrid />
      <LocationHours />
    </>
  );
}
