
export type MenuItem = {
  name: string;
  image?: string;
  description: string;
  price?: string;
};

export type MenuCategory = {
  slug: string;
  name: string;
  image?: string;
  description: string;
  backgrounds?: string[];
  items: MenuItem[];
};

export const alacarteCategories: MenuCategory[] = [
  {
  slug: "soup-base",
  name: "Soup Base",
  image: "/images/soup.png",
  description: "Discover our premium soup selection.",

  backgrounds: [
    "/images/2soup1.png",
    "/images/2soup2.png",
    "/images/2soup2.png",
  ],

  items: [
    {
      name: "Clear Soup",
      image: "/images/A1.jpg",
      description: "Premium tomahawk steak with rich marbling.",
    },
    {
      name: "Chicken Soup",
      image: "/images/A2.png",
      description: "A delicious premium Wagyu selection.",
    },
    {
      name: "Tom Yam Soup",
      image: "/images/A3.png",
      description: "Rich and flavorful Wagyu beef.",
    },
    {
      name: "Tom Yam Soup Extra Spicy",
      image: "/images/A4.png",
      description: "Premium beef for your grill.",
    },
    {
      name: "Tomato Soup",
      image: "/images/A5.png",
      description: "Tenderloin, Striploin, and Cube Roll.",
    },
  ],
},
  {
    slug: "rice-noodles-egg",
    name: "Rice, Noodles & Egg",
    image: "/images/A.png",
    description: "Selected Australian beef cuts.",
    items: [
      {
        name: "Plain Rice",
        image: "/images/A6.png",
        description: "Selected Australian beef.",
      },
      {
        name: "Instant Noodles",
        image: "/images/A7.PNG",
        description: "Premium beef with rich flavor.",
      },
      {
        name: "Tang Hoon",
        image: "/images/A8.PNG",
        description: "A delicious beef selection.",
      },
      {
        name: "Udon",
        image: "/images/A9.png",
        description: "Three Australian beef selections.",
      },
      {
        name: "Egg",
        image: "/images/A10.png",
        description: "Perfect for sharing.",
      },
    ],
  },
  {
    slug: "veggie-and-mushroom",
    name: "Veggies & Mushrooms",
    image: "/images/V.png",
    description: "Fresh vegetables and mushrooms.",
    items: [
      {
        name: "Iceberg Lettuce",
        image: "/images/V1.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Romaine Lettuce",
        image: "/images/V2.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Coral Lettuce",
        image: "/images/V3.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Broccoli",
        image: "/images/V4.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Enoki Mushroom",
        image: "/images/V5.png",
        description: "Add your veggie description here.",
      },
      {
        name: "White Crab Mushroom",
        image: "/images/V6.png",
        description: "Add your veggie description here.",
      },
      {
        name: "White Shimeji Mushroom",
        image: "/images/V7.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Oyster Mushroom",
        image: "/images/V8.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Abalone Mushroom",
        image: "/images/V9.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Shitake Mushroom",
        image: "/images/V10.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Fresh Mushroom Combo",
        image: "/images/V11.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Fresh Soy Chip",
        image: "/images/V12.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Ring Roll",
        image: "/images/V13.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Stuffed Tau Pok",
        image: "/images/V14.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Sotong Paste",
        image: "/images/V15.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Prawn Paste",
        image: "/images/V16.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Wantan",
        image: "/images/V17.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Tofu",
        image: "/images/V18.png",
        description: "Add your veggie description here.",
      },
    ],
  },
  {
    slug: "bebola",
    name: "Bebola",
    image: "/images/b.png",
    description: "Explore our grill selection.",
    items: [
      {
        name: "Bebola Combo",
        image: "/images/B1.png",
        description: "Add your grill description here.",
      },
      {
        name: "Fish Noodle",
        image: "/images/B2.png",
        description: "Add your grill description here.",
      },
      {
        name: "Fish Ball",
        image: "/images/B3.png",
        description: "Add your grill description here.",
      },
      {
        name: "Cuttlefish Ball",
        image: "/images/B4.png",
        description: "Add your grill description here.",
      },
      {
        name: "Cheese Tofu",
        image: "/images/B5.png",
        description: "Add your grill description here.",
      },
      {
        name: "Crab Meat Stick",
        image: "/images/B6.png",
        description: "Add your grill description here.",
      },
      {
        name: "Chicken Sausage",
        image: "/images/B7.png",
        description: "Add your grill description here.",
      },
      {
        name: "Mini Fish Cake",
        image: "/images/B8.png",
        description: "Add your grill description here.",
      },
      {
        name: "Crystal Fish Ball Tobiko",
        image: "/images/B9.png",
        description: "Add your grill description here.",
      },
      {
        name: "Crystal Lava Truffle",
        image: "/images/B10.png",
        description: "Add your grill description here.",
      },
      {
        name: "Abura Age",
        image: "/images/B11.png",
        description: "Add your grill description here.",
      },
      {
        name: "Fish Tofu",
        image: "/images/B12.png",
        description: "Add your grill description here.",
      },
      {
        name: "Seafood Tofu Curd",
        image: "/images/B13.png",
        description: "Add your grill description here.",
      },
      {
        name: "Snow Crab",
        image: "/images/B14.png",
        description: "Add your grill description here.",
      },

    ],
  },
  {
    slug: "Steamboat-ala-carte",
    name: "Steamboat Ala Carte",
    image: "/images/S.png",
    description: "Explore our grill selection.",
    items: [
      {
        name: "Scallop",
        image: "/images/S1.png",
        description: "Add your grill description here.",
      },
      {
        name: "Half Shell Scallop",
        image: "/images/S2.png",
        description: "Add your grill description here.",
      },
      {
        name: "Flower Prawn",
        image: "/images/S3.png",
        description: "Add your grill description here.",
      },
      {
        name: "Sea Prawn",
        image: "/images/S4.png",
        description: "Add your grill description here.",
      },
      {
        name: "Sliced Fish-Fresh",
        image: "/images/S5.png",
        description: "Fish of The Day: Snapper/Grouper.",
      },
      {
        name: "White Sotong",
        image: "/images/S6.png",
        description: "Add your grill description here.",
      },
      {
        name: "Boiled Scallop",
        image: "/images/S7.png",
        description: "Add your grill description here.",
      },
      {
        name: "Abalone",
        image: "/images/S8.png",
        description: "Add your grill description here.",
      },
      {
        name: "Green Mussel",
        image: "/images/S9.png",
        description: "Add your grill description here.",
      },
      {
        name: "Mussel Whole Shell",
        image: "/images/S10.png",
        description: "Add your grill description here.",
      },

    ],
  },
  {
    slug: "wagyu-beef",
    name: "Wagyu-Beef",
    image: "/images/w.png",
    description: "Explore our grill selection.",
    items: [
      {
        name: "Tomahawk",
        image: "/images/W1.png",
        description: "Add your grill description here.",
      },
      {
        name: "Tenderloin",
        image: "/images/W2.png",
        description: "Add your grill description here.",
      },
      {
        name: "Cube Roll",
        image: "/images/W3.png",
        description: "Add your grill description here.",
      },
      {
        name: "Striploin",
        image: "/images/W4.png",
        description: "Add your grill description here.",
      },
      {
        name: "3 in 1 Combo",
        image: "/images/W5.jpeg",
        description: "Add your grill description here.",
      },
      {
        name: "C. Rib Meat",
        image: "/images/W6.png",
        description: "Add your grill description here.",
      },
      {
        name: "C. T/Flap",
        image: "/images/W7.png",
        description: "Add your grill description here.",
      },
      {
        name: "Short Rib",
        image: "/images/W8.png",
        description: "Add your grill description here.",
      },
      {
        name: "Rib Finger",
        image: "/images/W9.jpg",
        description: "Add your grill description here.",
      },
      {
        name: "Brisket Slice",
        image: "/images/W10.png",
        description: "Add your grill description here.",
      },
      {
        name: "Slice",
        image: "/images/W11.png",
        description: "Add your grill description here.",
      },

    ],
  },
  {
    slug: "australian-beef",
    name: "Australian Beef",
    image: "/images/au.png",
    description: "Explore our grill selection.",
    items: [
      {
        name: "Tenderloin YP",
        image: "/images/AU1.png",
        description: "Add your grill description here.",
      },
      {
        name: "Cube Roll YP",
        image: "/images/AU2.png",
        description: "Add your grill description here.",
      },
      {
        name: "Striploin YP",
        image: "/images/AU3.png",
        description: "Add your grill description here.",
      },
      {
        name: "3 In 1 Combo",
        image: "/images/AU4.png",
        description: "Add your grill description here.",
      },
      {
        name: "Shortloin YP",
        image: "/images/AU5.png",
        description: "Add your grill description here.",
      },
      {
        name: "OP Rib YP",
        image: "/images/AU6.png",
        description: "Add your grill description here.",
      },
      {
        name: "Outsile Flat YP",
        image: "/images/AU7.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef Roll YP",
        image: "/images/AU8.png",
        description: "Add your grill description here.",
      },
      {
        name: "Chuck YP",
        image: "/images/AU9.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef Steak",
        image: "/images/AU10.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Short Rib BBQ",
        image: "/images/AU11.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef BBQ",
        image: "/images/AU12.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef Satay",
        image: "/images/AU13.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef Roll",
        image: "/images/AU14.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef Enoki",
        image: "/images/AU15.png",
        description: "Add your grill description here.",
      },

    ],
  },

{
    slug: "lamb-chicken",
    name: "Lamb Chicken",
    image: "/images/lc.png",
    description: "Explore our grill selection.",
    items: [
      {
        name: "Lamb Rack",
        image: "/images/L1.png",
        description: "Add your grill description here.",
      },
      {
        name: "Midloin",
        image: "/images/L2.png",
        description: "Add your grill description here.",
      },
      {
        name: "Shoulder",
        image: "/images/L3.png",
        description: "Add your grill description here.",
      },
      {
        name: "Lamb BBQ",
        image: "/images/L4.png",
        description: "Add your grill description here.",
      },
      {
        name: "Lamb Black Papper",
        image: "/images/L5.png",
        description: "Add your grill description here.",
      },
      {
        name: "Lamb Satay",
        image: "/images/L6.png",
        description: "Add your grill description here.",
      },
      {
        name: "Lamb Roll",
        image: "/images/L7.png",
        description: "Add your grill description here.",
      },
      {
        name: "Boneless Whole Leg BBQ",
        image: "/images/C1.png",
        description: "Add your grill description here.",
      },
      {
        name: "Boneless Whole Leg Ori",
        image: "/images/C2.png",
        description: "Add your grill description here.",
      },
      {
        name: "Chicken Teriyaki",
        image: "/images/C3.png",
        description: "Add your grill description here.",
      },
      {
        name: "Chicken Black pepper",
        image: "/images/C4.png",
        description: "Add your grill description here.",
      },
      {
        name: "Chicken BBQ",
        image: "/images/C5.png",
        description: "Add your grill description here.",
      },
      {
        name: "Chicken Satay",
        image: "/images/C6.png",
        description: "Add your grill description here.",
      },

    ],
  },

  {
    slug: "grill-combo-set",
    name: "Grill Combo Set",
    image: "/images/g.png",
    description: "Explore our grill selection.",
    items: [
      {
        name: "Wagyu Combo",
        image: "/images/G1.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef Combo",
        image: "/images/G2.png",
        description: "Add your grill description here.",
      },
      {
        name: "Lamb Combo",
        image: "/images/G3.png",
        description: "Add your grill description here.",
      },
      {
        name: "Grill Combo",
        image: "/images/G4.png",
        description: "Add your grill description here.",
      },

    ],
  },

  {
    slug: "stir-fry",
    name: "Stir Fry",
    image: "/images/SF.png",
    description: "Explore our stir fry selection.",
    items: [
      {
        name: "Teriyaki Wagyu",
        image: "/images/SF1w.png",
        description: "Tender wagyu beef glazed with our signature teriyaki sauce.",
      },
      {
        name: "Teriyaki Aust Beef",
        image: "/images/SF2a.png",
        description: "Tender wagyu beef glazed with our signature teriyaki sauce.",
      },
      {
        name: "Teriyaki Lamb",
        image: "/images/SF3l.png",
        description: "Tender wagyu beef glazed with our signature teriyaki sauce.",
      },
      {
        name: "Teriyaki Chicken",
        image: "/images/SF4c.png",
        description: "Tender wagyu beef glazed with our signature teriyaki sauce.",
      },
      {
        name: "Barbeque Wagyu",
        image: "/images/SF5w.png",
        description: "Tender wagyu beef glazed with our signature teriyaki sauce.",
      },
      {
        name: "Barbeque Aust Beef",
        image: "/images/SF5a.png",
        description: "Tender wagyu beef glazed with our signature teriyaki sauce.",
      },
      {
        name: "Barbeque Lamb",
        image: "/images/SF7l.png",
        description: "Tender wagyu beef glazed with our signature teriyaki sauce.",
      },
      {
        name: "Barbeque Chicken",
        image: "/images/SF8c.png",
        description: "Tender wagyu beef glazed with our signature teriyaki sauce.",
      },
    ],
    },

    {
    slug: "steamboat-combo-set",
    name: "Steamboat Combo Set",
    image: "/images/e.png",
    description: "Explore our steamboat combo options.",
    items: [
      {
        name: "Wagyu Beef Set",
        image: "/images/E1.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Aust Beef Set",
        image: "/images/E2.jpg",
        description: "Add your beverage description here.",
      },
      {
        name: "Lamb Set",
        image: "/images/E3.jpg",
        description: "Add your beverage description here.",
      },
      {
        name: "Chicken Set",
        image: "/images/E4.jpg",
        description: "Add your beverage description here.",
      },
      {
        name: "Seafood Set",
        image: "/images/E5.jpg",
        description: "Add your beverage description here.",
      },
      {
        name: "Mussel Set",
        image: "/images/E6.png",
        description: "Add your beverage description here.",
      },
      
    ],
  },
  {
    slug: "fried-food",
    name: "Fried Food",
    image: "/images/f.png",
    description: "Crispy and delicious fried dishes.",
    items: [
      {
        name: "Fried Seafood Combo",
        image: "/images/F1.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Fried Fish Slice",
        image: "/images/F2.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Crispy Prawn",
        image: "/images/F3.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Fried Sotong",
        image: "/images/F4.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Cheese Finger",
        image: "/images/F5.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Chicken Popcorn",
        image: "/images/F6.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Fried Enoki",
        image: "/images/F7.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Fried Wantan",
        image: "/images/F8.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Fried Crabstick",
        image: "/images/F9.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Shrimps Chip",
        image: "/images/F10.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Fried Wantan",
        image: "/images/F11.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Fries",
        image: "/images/F12.png",
        description: "Add your beverage description here.",
      },
    ],
  },
  {
    slug: "beverages",
    name: "Drinks",
    image: "/images/D.png",
    description: "Refreshing drinks for every occasion.",
    items: [
      {
        name: "Beverage 01",
        image: "/images/D1.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D2.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D3.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D4.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D5.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D6.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D7.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D8.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D9.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D10.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D11.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D12.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D13.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D14.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D15.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D16.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D17.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D18.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D19.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D21.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D22.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D23.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D24.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D25.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D26.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D27.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D28.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D29.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D30.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D31.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D32.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D33.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D34.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D35.png ",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D36.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D37.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D38.png",
        description: "Add your beverage description here.",
      },
      {
        name: "Beverage 01",
        image: "/images/D39.png",
        description: "Add your beverage description here.",
      },
    ],
  },
];

export const buffetCategories: MenuCategory[] = [
  {
  slug: "soup-base",
  name: "Soup Base",
  image: "/images/soup.png",
  description: "Discover our premium soup selection.",
  items: [
    {
      name: "Clear Soup",
      image: "/images/A1.jpg",
      description: "Premium tomahawk steak with rich marbling.",
    },
    {
      name: "Chicken Soup",
      image: "/images/A2.png",
      description: "A delicious premium Wagyu selection.",
    },
    {
      name: "Tom Yam Soup",
      image: "/images/A3.png",
      description: "Rich and flavorful Wagyu beef.",
    },
    {
      name: "Tom Yam Soup Extra Spicy",
      image: "/images/A4.png",
      description: "Premium beef for your grill.",
    },
    {
      name: "Tomato Soup",
      image: "/images/A5.png",
      description: "Tenderloin, Striploin, and Cube Roll.",
    },
  ],
},
  {
    slug: "rice-noodles-egg",
    name: "Rice, Noodles & Egg",
    image: "/images/A.png",
    description: "Selected Australian beef cuts.",
    items: [
      {
        name: "Plain Rice",
        image: "/images/A6.png",
        description: "Selected Australian beef.",
      },
      {
        name: "Instant Noodles",
        image: "/images/A7.PNG",
        description: "Premium beef with rich flavor.",
      },
      {
        name: "Tang Hoon",
        image: "/images/A8.PNG",
        description: "A delicious beef selection.",
      },
      {
        name: "Udon",
        image: "/images/A9.png",
        description: "Three Australian beef selections.",
      },
      {
        name: "Egg",
        image: "/images/A10.png",
        description: "Perfect for sharing.",
      },
    ],
  },
  {
    slug: "veggie-and-mushroom",
    name: "Veggies & Mushrooms",
    image: "/images/V.png",
    description: "Fresh vegetables and mushrooms.",
    items: [
      {
        name: "Iceberg Lettuce",
        image: "/images/V1.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Romaine Lettuce",
        image: "/images/V2.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Coral Lettuce",
        image: "/images/V3.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Broccoli",
        image: "/images/V4.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Enoki Mushroom",
        image: "/images/V5.png",
        description: "Add your veggie description here.",
      },
      {
        name: "White Crab Mushroom",
        image: "/images/V6.png",
        description: "Add your veggie description here.",
      },
      {
        name: "White Shimeji Mushroom",
        image: "/images/V7.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Oyster Mushroom",
        image: "/images/V8.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Abalone Mushroom",
        image: "/images/V9.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Shitake Mushroom",
        image: "/images/V10.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Fresh Soy Chip",
        image: "/images/V12.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Ring Roll",
        image: "/images/V13.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Stuffed Tau Pok",
        image: "/images/V14.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Sotong Paste",
        image: "/images/V15.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Prawn Paste",
        image: "/images/V16.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Wantan",
        image: "/images/V17.png",
        description: "Add your veggie description here.",
      },
      {
        name: "Tofu",
        image: "/images/V18.png",
        description: "Add your veggie description here.",
      },
    ],
  },
  {
    slug: "bebola",
    name: "Bebola",
    image: "/images/b_B.png",
    description: "Explore our grill selection.",
    items: [
      {
        name: "Fish Noodle",
        image: "/images/B2.png",
        description: "Add your grill description here.",
      },
      {
        name: "Fish Ball",
        image: "/images/B3.png",
        description: "Add your grill description here.",
      },
      {
        name: "Cuttlefish Ball",
        image: "/images/B4.png",
        description: "Add your grill description here.",
      },
      {
        name: "Cheese Tofu",
        image: "/images/B5.png",
        description: "Add your grill description here.",
      },
      {
        name: "Crab Meat Stick",
        image: "/images/B6.png",
        description: "Add your grill description here.",
      },
      {
        name: "Chicken Sausage",
        image: "/images/B7.png",
        description: "Add your grill description here.",
      },
      {
        name: "Mini Fish Cake",
        image: "/images/B8.png",
        description: "Add your grill description here.",
      },
      {
        name: "Crystal Fish Ball Tobiko",
        image: "/images/B9.png",
        description: "Add your grill description here.",
      },
      {
        name: "Crystal Lava Truffle",
        image: "/images/B10.png",
        description: "Add your grill description here.",
      },
      {
        name: "Abura Age",
        image: "/images/B11.png",
        description: "Add your grill description here.",
      },
      {
        name: "Fish Tofu",
        image: "/images/B12.png",
        description: "Add your grill description here.",
      },
      {
        name: "Seafood Tofu Curd",
        image: "/images/B13.png",
        description: "Add your grill description here.",
      },
      {
        name: "Snow Crab",
        image: "/images/B14.png",
        description: "Add your grill description here.",
      },

    ],
  },
  {
    slug: "Steamboat-ala-carte",
    name: "Steamboat Ala Carte",
    image: "/images/s_B.png",
    description: "Explore our grill selection.",
    items: [
      {
        name: "Sea Prawn",
        image: "/images/S4.png",
        description: "Add your grill description here.",
      },
      {
        name: "Sliced Fish-Fresh",
        image: "/images/S5.png",
        description: "Fish of The Day: Snapper/Grouper.",
      },
      {
        name: "White Sotong",
        image: "/images/S6.png",
        description: "Add your grill description here.",
      },
      {
        name: "Boiled Scallop",
        image: "/images/S7.png",
        description: "Add your grill description here.",
      },
      {
        name: "Abalone",
        image: "/images/S8.png",
        description: "Add your grill description here.",
      },
      {
        name: "Green Mussel",
        image: "/images/S9.png",
        description: "Add your grill description here.",
      },
      {
        name: "Mussel Whole Shell",
        image: "/images/S10.png",
        description: "Add your grill description here.",
      },

    ],
  },
  {
    slug: "australian-beef",
    name: "Australian Beef",
    image: "/images/au_B.png",
    description: "Explore our grill selection.",
    items: [
      {
        name: "Aust Beef Steak",
        image: "/images/AU10.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Short Rib BBQ",
        image: "/images/AU11.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef BBQ",
        image: "/images/AU12.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef Satay",
        image: "/images/AU13.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef Roll",
        image: "/images/AU14.png",
        description: "Add your grill description here.",
      },
      {
        name: "Aust Beef Enoki",
        image: "/images/AU15.png",
        description: "Add your grill description here.",
      },

    ],
  },

{
    slug: "lamb-chicken",
    name: "Lamb Chicken",
    image: "/images/lc_B.png",
    description: "Explore our grill selection.",
    items: [
      {
        name: "Shoulder",
        image: "/images/L3.png",
        description: "Add your grill description here.",
      },
      {
        name: "Lamb BBQ",
        image: "/images/L4.png",
        description: "Add your grill description here.",
      },
      {
        name: "Lamb Satay",
        image: "/images/L6.png",
        description: "Add your grill description here.",
      },
      {
        name: "Lamb Roll",
        image: "/images/L7.png",
        description: "Add your grill description here.",
      },
      {
        name: "Boneless Whole Leg BBQ",
        image: "/images/C1.png",
        description: "Add your grill description here.",
      },
      {
        name: "Boneless Whole Leg Ori",
        image: "/images/C2.png",
        description: "Add your grill description here.",
      },
      {
        name: "Chicken BBQ",
        image: "/images/C5.png",
        description: "Add your grill description here.",
      },
      {
        name: "Chicken Satay",
        image: "/images/C6.png",
        description: "Add your grill description here.",
      },

    ],
  },
];