// Real customer reviews transcribed from Moe'z Google Business Profile.
// Overall rating and review count pulled directly from Google Maps.
// This data is static — see README.md "Keeping reviews up to date" for how
// to refresh it, or wire up the Google Places API for live updates.

export const googleReviewSummary = {
  rating: 4.8,
  count: 542,
  url: "https://www.google.com/maps/search/Moe%27z+Famous+Cheesesteaks+%26+Burgers+Ann+Arbor",
};

export type Review = {
  author: string;
  meta: string;
  timeAgo: string;
  rating: number;
  text: string;
  ownerResponse?: string;
};

export const googleReviews: Review[] = [
  {
    author: "Chloe Allan",
    meta: "Local Guide · 98 reviews",
    timeAgo: "4 months ago",
    rating: 5,
    text:
      "Excellent made-to-order food and friendly staff, but gas station atmosphere 😆 food and prices more than made up for the gas station atmosphere though! 🤩 Original Philly was giant!",
    ownerResponse: "Thanks for the review Chloe! Glad you enjoyed the food and hope to welcome you back soon.",
  },
  {
    author: "Cheyanne Vinton",
    meta: "4 reviews · 1 photo",
    timeAgo: "Jul 15, 2025",
    rating: 5,
    text:
      "Stopped by on a road trip, best food I've had in a while! The burger was impeccable and I've never had better mozzarella sticks! The cheese pull was immaculate! If I could rate 10 stars, I'd rate 11!",
  },
  {
    author: "Macey Willis",
    meta: "Local Guide · 18 reviews",
    timeAgo: "34 weeks ago",
    rating: 5,
    text: "THIS PLACE IS THE BEST!!!! Oh my gosh it's delicious and never disappoints! The people are also so kind and nail the orders every time.",
    ownerResponse: "Thanks for the review!",
  },
];
