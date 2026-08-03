// Central business configuration. Edit values here to update the whole site.

export const business = {
  name: "Moe'z Famous Cheesesteaks",
  shortName: "Moe'z",
  tagline: "Bringing the Taste of Philly to Michigan",
  description:
    "Famous Philly-inspired cheesesteaks, burgers, wraps, wings, and more. Halal-certified comfort food in Ann Arbor, Michigan since 2020.",
  founded: 2020,

  address: {
    street: "3891 Platt Road",
    city: "Ann Arbor",
    state: "MI",
    zip: "48108",
    full: "3891 Platt Road, Ann Arbor, MI 48108",
  },

  phone: "(734) 263-2144",
  phoneHref: "tel:+17342632144",
  email: "eatmoez@gmail.com",

  hours: [
    { day: "Monday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Tuesday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Wednesday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Thursday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Friday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Saturday", open: "11:00 AM", close: "9:00 PM" },
    { day: "Sunday", open: null, close: null }, // Closed
  ],

  hoursSummary: [
    { label: "Mon – Sat", value: "11:00 AM – 9:00 PM" },
    { label: "Sunday", value: "Closed" },
  ],

  social: {
    instagram: "https://www.instagram.com/eatmoez/",
    instagramHandle: "@eatmoez",
    tiktok: "https://www.tiktok.com/@moezfamouscheesesteaks",
  },

  links: {
    order:
      "https://order.online/store/moe'z-famous-cheesesteaks-ann-arbor-1029851/?delivery=true&hideModal=true",
    catering: "https://www.ezcater.com/catering/moez-famous-cheesesteaks-and-burgers-3",
    directions: "https://share.google/zC6Hqop296KaUuCgN",
  },

  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://eatmoez.com",
} as const;

export type BusinessInfo = typeof business;
