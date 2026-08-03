// Structured menu data transcribed directly from Moe'z official menu graphics
// (public/images/menu/menu-1.jpg, menu-2.jpg, menu-3.jpg). Verify prices and
// descriptions against the source images before publishing changes.
// Prices and availability may change — see the disclaimer on the Menu page.

// Update this any time menu.ts is edited, so the "prices as of" disclaimer
// on the Menu page stays accurate.
export const menuLastUpdated = "August 2026";

export type MenuItem = {
  slug: string;
  name: string;
  description?: string;
  price?: string;
  variants?: { label: string; price: string }[];
  image?: string;
  vegetarian?: boolean;
  note?: string;
};

export type MenuCategory = {
  slug: string;
  name: string;
  shortName: string;
  description?: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    slug: "phillyz",
    name: "Phillyz",
    shortName: "Phillyz",
    description: "Choice of Bread: Hero Roll (Sub), Rye Bread, or Tortilla Wrap.",
    note: "Extra protein +$3.29",
    items: [
      {
        slug: "original-philly",
        name: "Original Philly",
        description:
          "Choice of Steak or Chicken, sautéed onions, sautéed mushrooms, sautéed green peppers, American Swiss cheese, mayo.",
        price: "$11.99",
        image: "/images/food/original-philly.jpg",
      },
      {
        slug: "texas-philly",
        name: "Texas Philly",
        description:
          "Choice of Steak or Chicken, turkey bacon, onion rings, sautéed jalapeños, pepper jack cheese, mayo, sweet BBQ sauce.",
        price: "$12.99",
        image: "/images/food/texas-philly.jpg",
      },
      {
        slug: "detroit-cheesesteak",
        name: "Detroit Cheesesteak",
        description:
          "Choice of Steak or Chicken, lettuce, tomatoes, sautéed onions, sautéed mushrooms, sautéed green peppers, sautéed jalapeños, pepper jack cheese, jalapeño ranch.",
        price: "$12.99",
        image: "/images/food/detroit-cheesesteak.jpg",
      },
      {
        slug: "chopped-cheese",
        name: "Chopped Cheese",
        description: "Beef, lettuce, tomatoes, sautéed onions, American cheese, mayo, ketchup.",
        price: "$11.49",
        image: "/images/food/chopped-cheese.jpg",
      },
    ],
  },
  {
    slug: "burgerz",
    name: "Burgerz",
    shortName: "Burgerz",
    description: "Served on a brioche bun or rye bread.",
    note: "Extra patty +$3.29",
    items: [
      {
        slug: "original-burger",
        name: "Original Burger",
        description: "Beef patty, lettuce, tomatoes, American cheese, Moe'z sauce.",
        price: "$6.99",
        image: "/images/food/original-burger.jpg",
      },
      {
        slug: "philly-burger",
        name: "Philly Burger",
        description:
          "Beef patty, Philly steak, lettuce, tomatoes, sautéed onions, sautéed mushrooms, sautéed green peppers, American Swiss cheese, mayo.",
        price: "$9.29",
        image: "/images/food/philly-burger.jpg",
      },
      {
        slug: "texas-burger",
        name: "Texas Burger",
        description:
          "Beef patty, turkey bacon, onion ring, coleslaw, jalapeños, pepper jack cheese, mayo, sweet BBQ sauce.",
        price: "$8.99",
        image: "/images/food/texas-burger.jpg",
      },
      {
        slug: "yard-house-burger",
        name: "Yard House Burger",
        description:
          "Beef patty, hand battered crispy chicken, coleslaw, pickles, pepper jack cheese, jalapeño ranch.",
        price: "$10.99",
        image: "/images/food/yard-house-burger.jpg",
      },
      {
        slug: "mushroom-swiss-burger",
        name: "Mushroom Swiss Burger",
        description: "Beef patty, lettuce, tomatoes, sautéed mushrooms, American Swiss cheese, mayo.",
        price: "$8.99",
        image: "/images/food/mushroom-swiss-burger.jpg",
      },
      {
        slug: "bacon-egg-cheese-burger",
        name: "Bacon Egg N' Cheese Burger",
        description: "Beef patty, turkey bacon, egg, lettuce, tomatoes, American cheese, mayo.",
        price: "$8.99",
        image: "/images/food/bacon-egg-cheese-burger.jpg",
      },
      {
        slug: "chipotle-black-bean-burger",
        name: "Chipotle Black Bean Burger",
        description: "Chipotle black bean patty, coleslaw, jalapeños, pepper jack cheese, jalapeño ranch.",
        price: "$8.99",
        image: "/images/food/chipotle-black-bean-burger.jpg",
        vegetarian: true,
      },
    ],
  },
  {
    slug: "slider-comboz",
    name: "Slider Comboz",
    shortName: "Sliderz",
    description: "Includes a side of fries and a drink.",
    items: [
      {
        slug: "original-burger-sliderz",
        name: "Original Burger Sliderz",
        description: "2 beef sliders, lettuce, tomatoes, American cheese, Moe'z sauce.",
        price: "$9.99",
        image: "/images/food/original-burger-sliderz.jpg",
      },
      {
        slug: "mushroom-swiss-sliderz",
        name: "Mushroom Swiss Sliderz",
        description: "2 beef sliders, lettuce, tomatoes, sautéed onions, sautéed mushrooms, American Swiss cheese, mayo.",
        price: "$10.99",
        image: "/images/food/mushroom-swiss-sliderz.jpg",
      },
      {
        slug: "original-philly-sliderz",
        name: "Original Philly Sliderz",
        description:
          "2 sliders, choice of steak or chicken, sautéed onions, sautéed mushrooms, sautéed green peppers, American Swiss cheese, mayo.",
        price: "$10.99",
        image: "/images/food/original-philly-sliderz.jpg",
      },
      {
        slug: "cluckin-sliderz",
        name: "Cluckin' Sliderz",
        description: "2 hand battered crispy chicken sliders, coleslaw, pickles, American cheese, Moe'z sauce.",
        price: "$9.99",
        image: "/images/food/cluckin-sliderz.jpg",
      },
    ],
  },
  {
    slug: "loaded-friez",
    name: "Loaded Friez",
    shortName: "Loaded Friez",
    items: [
      {
        slug: "original-philly-friez",
        name: "Original Philly Friez",
        description:
          "Choice of Steak or Chicken, sautéed onions, sautéed mushrooms, sautéed green peppers, nacho cheese, Moe'z sauce.",
        price: "$12.99",
        image: "/images/food/original-philly-friez.jpg",
      },
      {
        slug: "cluckin-friez",
        name: "Cluckin' Friez",
        description: "Hand battered crispy chicken or grilled chicken, coleslaw, nacho cheese, Moe'z sauce.",
        price: "$12.99",
        image: "/images/food/cluckin-friez.jpg",
      },
    ],
  },
  {
    slug: "signaturez",
    name: "Signaturez",
    shortName: "Signaturez",
    items: [
      {
        slug: "the-reuben",
        name: "The Reuben",
        description:
          "Choice of rye bread, hero (sub), or tortilla wrap, 8 oz corned beef, sauerkraut, American Swiss cheese, Thousand Island dressing.",
        price: "$12.99",
        image: "/images/food/the-reuben.jpg",
      },
      {
        slug: "the-quesadilla-pizza",
        name: "The Quesadilla Pizza",
        description:
          "Steak or chicken, sautéed onions, sautéed green peppers, sautéed banana peppers, pepper jack cheese, Moe'z sauce.",
        price: "$15.99",
        note: "Serves 2",
        image: "/images/food/quesadilla-pizza.jpg",
      },
    ],
  },
  {
    slug: "chicken-coop",
    name: "The Chicken Coop",
    shortName: "Chicken Coop",
    items: [
      {
        slug: "grilled-chicken-wrap",
        name: "The Grilled Chicken Wrap",
        description: "Grilled chicken, lettuce, tomatoes, American cheese, ranch.",
        price: "$10.99",
      },
      {
        slug: "crispy-chicken-wrap",
        name: "The Crispy Chicken Wrap",
        description: "Hand battered crispy chicken, coleslaw, pickles, American cheese, jalapeño ranch.",
        price: "$10.99",
        image: "/images/food/crispy-chicken-wrap.jpg",
      },
      {
        slug: "crispy-chicken-sandwich",
        name: "The Crispy Chicken Sandwich",
        description: "Hand battered crispy chicken, coleslaw, pickles, American cheese, Moe'z sauce.",
        price: "$7.99",
      },
      {
        slug: "grilled-chicken-sandwich",
        name: "The Grilled Chicken Sandwich",
        description: "Grilled chicken, lettuce, tomatoes, American cheese, Moe'z sauce.",
        price: "$7.99",
        image: "/images/food/grilled-chicken-sandwich.jpg",
      },
    ],
  },
  {
    slug: "wingz-tenderz",
    name: "Wingz & Tenderz",
    shortName: "Wingz",
    note: "Any flavor combo +$3.99. Flavors: Lemon Pepper Dry Rub, Cajun Dry Rub, Sweet BBQ, Sweet Lemon BBQ, Honey Hot, Buffalo, Sweet Red Chilli, Garlic Parmesan, Mango Habanero.",
    items: [
      {
        slug: "traditional-wings",
        name: "Traditional Wings",
        image: "/images/food/traditional-wings.jpg",
        variants: [
          { label: "6 pc", price: "$8.99" },
          { label: "12 pc", price: "$16.99" },
          { label: "24 pc", price: "$29.99" },
        ],
      },
      {
        slug: "boneless-wings",
        name: "Boneless Wings",
        image: "/images/food/boneless-wings.jpg",
        variants: [
          { label: "6 pc", price: "$7.99" },
          { label: "12 pc", price: "$14.99" },
          { label: "24 pc", price: "$26.99" },
        ],
      },
      {
        slug: "tenders",
        name: "Tenders",
        image: "/images/food/chicken-tenders.jpg",
        variants: [
          { label: "4 pc", price: "$8.99" },
          { label: "6 pc", price: "$12.99" },
          { label: "8 pc", price: "$15.99" },
        ],
      },
    ],
  },
  {
    slug: "sidez",
    name: "Sidez",
    shortName: "Sidez",
    items: [
      {
        slug: "fries",
        name: "Fries",
        description: "Regular, Cajun, or lemon pepper.",
        image: "/images/food/fries.jpg",
        variants: [
          { label: "Small", price: "$2.99" },
          { label: "Medium", price: "$4.99" },
          { label: "Large", price: "$6.99" },
        ],
      },
      {
        slug: "cheese-fries",
        name: "Cheese Fries",
        image: "/images/food/cheese-fries.jpg",
        variants: [
          { label: "Small", price: "$3.99" },
          { label: "Medium", price: "$5.99" },
          { label: "Large", price: "$7.99" },
        ],
      },
      {
        slug: "bacon-cheese-fries",
        name: "Bacon Cheese Fries",
        image: "/images/food/bacon-cheese-fries.jpg",
        variants: [
          { label: "Small", price: "$4.99" },
          { label: "Medium", price: "$6.99" },
          { label: "Large", price: "$8.99" },
        ],
      },
      {
        slug: "waffle-fries",
        name: "Waffle Fries",
        image: "/images/food/waffle-fries.jpg",
        variants: [
          { label: "Small", price: "$3.79" },
          { label: "Medium", price: "$5.79" },
          { label: "Large", price: "$7.79" },
        ],
      },
      {
        slug: "onion-rings",
        name: "Onion Rings",
        image: "/images/food/onion-rings.jpg",
        variants: [
          { label: "Small", price: "$3.79" },
          { label: "Medium", price: "$5.79" },
          { label: "Large", price: "$7.79" },
        ],
      },
      {
        slug: "fried-okra",
        name: "Fried Okra",
        image: "/images/food/fried-okra.jpg",
        variants: [
          { label: "Small", price: "$3.79" },
          { label: "Medium", price: "$5.79" },
          { label: "Large", price: "$7.79" },
        ],
      },
      {
        slug: "mozzarella-sticks",
        name: "Mozzarella Sticks",
        image: "/images/food/mozzarella-sticks.jpg",
        variants: [
          { label: "6 pc", price: "$4.99" },
          { label: "12 pc", price: "$9.49" },
        ],
      },
    ],
  },
  {
    slug: "milkshakes",
    name: "Milkshakes",
    shortName: "Milkshakes",
    items: [
      {
        slug: "vanilla-milkshake",
        name: "Vanilla",
        price: "$5.29",
        image: "/images/food/vanilla-milkshake.jpg",
      },
      {
        slug: "chocolate-milkshake",
        name: "Chocolate",
        price: "$5.29",
        image: "/images/food/chocolate-milkshake.jpg",
      },
      {
        slug: "strawberry-milkshake",
        name: "Strawberry",
        price: "$5.29",
        image: "/images/food/strawberry-milkshake.jpg",
      },
      {
        slug: "oreo-milkshake",
        name: "Oreo",
        price: "$5.79",
        image: "/images/food/oreo-milkshake.jpg",
      },
    ],
  },
];

export function getAllMenuItems() {
  return menu.flatMap((category) =>
    category.items.map((item) => ({ ...item, category: category.name, categorySlug: category.slug }))
  );
}
