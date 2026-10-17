
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
      description: "Light, comforting, and savory clear broth.",
    },
    {
      name: "Chicken Soup",
      image: "/images/A2.png",
      description: "Rich and nourishing chicken-flavored broth.",
    },
    {
      name: "Tom Yam Soup",
      image: "/images/A3.png",
      description: "Authentic spicy and sour Thai Tom Yam soup.",
    },
    {
      name: "Tom Yam Soup Extra Spicy",
      image: "/images/A4.png",
      description: "Extra spicy and bold Thai Tom Yam broth.",
    },
    {
      name: "Tomato Soup",
      image: "/images/A5.png",
      description: "Sweet and tangy rich tomato broth.",
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
        description: "Fluffy steamed white rice.",
      },
      {
        name: "Instant Noodles",
        image: "/images/A7.PNG",
        description: "Springy instant noodles, perfect for hotpot.",
      },
      {
        name: "Tang Hoon",
        image: "/images/A8.PNG",
        description: "Clear glass vermicelli noodles.",
      },
      {
        name: "Udon",
        image: "/images/A9.png",
        description: "Thick and chewy Japanese udon noodles.",
      },
      {
        name: "Egg",
        image: "/images/A10.png",
        description: "Fresh whole egg.",
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
        description: "Fresh and crunchy iceberg lettuce leaves.",
      },
      {
        name: "Romaine Lettuce",
        image: "/images/V2.png",
        description: "Crisp and fresh romaine lettuce.",
      },
      {
        name: "Coral Lettuce",
        image: "/images/V3.png",
        description: "Fresh green coral lettuce.",
      },
      {
        name: "Broccoli",
        image: "/images/V4.png",
        description: "Fresh green broccoli florets.",
      },
      {
        name: "Enoki Mushroom",
        image: "/images/V5.png",
        description: "Delicate and slender enoki mushrooms.",
      },
      {
        name: "White Crab Mushroom",
        image: "/images/V6.png",
        description: "Fresh white seafood mushrooms.",
      },
      {
        name: "White Shimeji Mushroom",
        image: "/images/V7.png",
        description: "Mild and firm white shimeji mushrooms.",
      },
      {
        name: "Oyster Mushroom",
        image: "/images/V8.png",
        description: "Tender and savory oyster mushrooms.",
      },
      {
        name: "Abalone Mushroom",
        image: "/images/V9.png",
        description: "Fleshy and chewy abalone mushrooms.",
      },
      {
        name: "Shitake Mushroom",
        image: "/images/V10.png",
        description: "Aromatic and earthy shiitake mushrooms.",
      },
      {
        name: "Fresh Mushroom Combo",
        image: "/images/V11.png",
        description: "Assorted selection of fresh mushrooms.",
      },
      {
        name: "Fresh Soy Chip",
        image: "/images/V12.png",
        description: "Soft fresh soy sheets that absorb broth perfectly.",
      },
      {
        name: "Ring Roll",
        image: "/images/V13.png",
        description: "Crispy fried bean curd rolls.",
      },
      {
        name: "Stuffed Tau Pok",
        image: "/images/V14.png",
        description: "Fried tofu pockets stuffed with savory filling.",
      },
      {
        name: "Sotong Paste",
        image: "/images/V15.png",
        description: "Smooth and savory minced squid paste.",
      },
      {
        name: "Prawn Paste",
        image: "/images/V16.png",
        description: "Fresh and bouncy minced prawn paste.",
      },
      {
        name: "Wantan",
        image: "/images/V17.png",
        description: "Delicate dumplings with savory filling.",
      },
      {
        name: "Tofu",
        image: "/images/V18.png",
        description: "Soft and silky fresh bean curd.",
      },
    ],
  },
  {
    slug: "bebola",
    name: "Bebola",
    image: "/images/b.png",
    description: "Assorted premium meatballs, dumplings, and savory bites",
    items: [
      {
        name: "Bebola Combo",
        image: "/images/B1.png",
        description: "Assorted selection of delicious meat and seafood balls.",
      },
      {
        name: "Fish Noodle",
        image: "/images/B2.png",
        description: "Springy fish noodles with a smooth, savory bite.",
      },
      {
        name: "Fish Ball",
        image: "/images/B3.png",
        description: "Classic springy fish balls made from fresh fish paste.",
      },
      {
        name: "Cuttlefish Ball",
        image: "/images/B4.png",
        description: "Chewy cuttlefish balls with a rich, savory seafood flavor.",
      },
      {
        name: "Cheese Tofu",
        image: "/images/B5.png",
        description: "Soft tofu filled with creamy, melted cheese inside.",
      },
      {
        name: "Crab Meat Stick",
        image: "/images/B6.png",
        description: "Tender crab-flavored sticks, sweet and savory.",
      },
      {
        name: "Chicken Sausage",
        image: "/images/B7.png",
        description: "Savory chicken sausages, juicy and flavorful.",
      },
      {
        name: "Mini Fish Cake",
        image: "/images/B8.png",
        description: "Bite-sized fish cakes with a smooth and bouncy texture.",
      },
      {
        name: "Crystal Fish Ball Tobiko",
        image: "/images/B9.png",
        description: "Bouncy fish ball stuffed with crunchy tobiko flying fish roe.",
      },
      {
        name: "Crystal Lava Truffle",
        image: "/images/B10.png",
        description: "Premium fish ball with a savory, aromatic truffle lava inside.",
      },
      {
        name: "Abura Age",
        image: "/images/B11.png",
        description: "Deep-fried tofu pouches, perfect for absorbing hot broth.",
      },
      {
        name: "Fish Tofu",
        image: "/images/B12.png",
        description: "Silky smooth fish tofu with a light, savory taste.",
      },
      {
        name: "Seafood Tofu Curd",
        image: "/images/B13.png",
        description: "Soft tofu curd infused with rich seafood flavor.",
      },
      {
        name: "Snow Crab",
        image: "/images/B14.png",
        description: "Delicate crab meat sticks with a naturally sweet taste.",
      },

    ],
  },
  {
    slug: "Steamboat-ala-carte",
    name: "Steamboat Ala Carte",
    image: "/images/S.png",
    description: "Fresh seafood selection featuring prawns, scallops, and squid.",
    items: [
      {
        name: "Scallop",
        image: "/images/S1.png",
        description: "Plump and tender scallops with a sweet oceanic taste.",
      },
      {
        name: "Half Shell Scallop",
        image: "/images/S2.png",
        description: "Fresh half-shell scallops, perfect for grilling.",
      },
      {
        name: "Flower Prawn",
        image: "/images/S3.png",
        description: "Sweet and juicy flower prawns.",
      },
      {
        name: "Sea Prawn",
        image: "/images/S4.png",
        description: "Fresh, juicy, and naturally sweet sea prawns.",
      },
      {
        name: "Sliced Fish-Fresh",
        image: "/images/S5.png",
        description: "Freshly sliced fish of the day, tender and mild.",
      },
      {
        name: "White Sotong",
        image: "/images/S6.png",
        description: "Tender white squid with a bouncy texture.",
      },
      {
        name: "Boiled Scallop",
        image: "/images/S7.png",
        description: "Succulent boiled scallops with a sweet taste.",
      },
      {
        name: "Abalone",
        image: "/images/S8.png",
        description: "Premium sliced abalone with a tender bite.",
      },
      {
        name: "Green Mussel",
        image: "/images/S9.png",
        description: "Juicy green mussels rich in seafood flavor.",
      },
      {
        name: "Mussel Whole Shell",
        image: "/images/S10.png",
        description: "Fresh whole shell mussels, succulent and savory.",
      },

    ],
  },
  {
    slug: "wagyu-beef",
    name: "Wagyu-Beef",
    image: "/images/w.png",
    description: "Premium marbled Wagyu cuts for an exceptional grilling experience.",
    items: [
      {
        name: "Tomahawk",
        image: "/images/W1.png",
        description: "Massive, premium bone-in ribeye with rich marbling and flavor.",
      },
      {
        name: "Tenderloin",
        image: "/images/W2.png",
        description: "Extremely tender and melt-in-your-mouth lean cuts.",
      },
      {
        name: "Cube Roll",
        image: "/images/W3.png",
        description: "Juicy, well-marbled ribeye cuts perfect for grilling.",
      },
      {
        name: "Striploin",
        image: "/images/W4.png",
        description: "Classic striploin with a rich and robust beef taste.",
      },
      {
        name: "3 in 1 Combo",
        image: "/images/W5.jpeg",
        description: "Combination platter of assorted premium beef cuts.",
      },
      {
        name: "C. Rib Meat",
        image: "/images/W6.png",
        description: "Flavorful and juicy rib meat sections.",
      },
      {
        name: "C. T/Flap",
        image: "/images/W7.png",
        description: "Tender and savory flap meat cuts.",
      },
      {
        name: "Short Rib",
        image: "/images/W8.png",
        description: "Rich, succulent short ribs ideal for the grill.",
      },
      {
        name: "Rib Finger",
        image: "/images/W9.jpg",
        description: "Juicy and chewy rib finger meat with great flavor.",
      },
      {
        name: "Brisket Slice",
        image: "/images/W10.png",
        description: "Thinly sliced brisket with a balance of lean and fat.",
      },
      {
        name: "Slice",
        image: "/images/W11.png",
        description: "Thinly sliced premium beef, great for hotpot or grill.",
      },

    ],
  },
  {
    slug: "australian-beef",
    name: "Australian Beef",
    image: "/images/au.png",
    description: "Juicy, tender cuts of quality Australian beef grilled to perfection.",
    items: [
      {
        name: "Tenderloin YP",
        image: "/images/AU1.png",
        description: "Extremely tender and lean premium tenderloin cuts.",
      },
      {
        name: "Cube Roll YP",
        image: "/images/AU2.png",
        description: "Juicy and well-marbled ribeye/cube roll slices.",
      },
      {
        name: "Striploin YP",
        image: "/images/AU3.png",
        description: "Classic striploin with a rich and robust beef flavor.",
      },
      {
        name: "3 In 1 Combo",
        image: "/images/AU4.png",
        description: "Combination platter of assorted premium beef cuts.",
      },
      {
        name: "Shortloin YP",
        image: "/images/AU5.png",
        description: "Flavorful shortloin cuts perfect for grilling.",
      },
      {
        name: "OP Rib YP",
        image: "/images/AU6.png",
        description: "Juicy bone-in OP rib cuts with rich marbling.",
      },
      {
        name: "Outsile Flat YP",
        image: "/images/AU7.png",
        description: "Lean and savory outside flat beef slices.",
      },
      {
        name: "Aust Beef Roll YP",
        image: "/images/AU8.png",
        description: "Thinly sliced premium beef rolls.",
      },
      {
        name: "Chuck YP",
        image: "/images/AU9.png",
        description: "Flavorful chuck beef slices ideal for hotpot or grill.",
      },
      {
        name: "Aust Beef Steak",
        image: "/images/AU10.png",
        description: "Juicy and tender Australian beef steak.",
      },
      {
        name: "Aust Short Rib BBQ",
        image: "/images/AU11.png",
        description: "Savory Australian short ribs, perfect for grilling.",
      },
      {
        name: "Aust Beef BBQ",
        image: "/images/AU12.png",
        description: "Flavorful Australian beef slices for BBQ.",
      },
      {
        name: "Aust Beef Satay",
        image: "/images/AU13.png",
        description: "Marinated Australian beef skewers.",
      },
      {
        name: "Aust Beef Roll",
        image: "/images/AU14.png",
        description: "Thinly sliced Australian beef rolls.",
      },
      {
        name: "Aust Beef Enoki",
        image: "/images/AU15.png",
        description: "Australian beef rolls wrapped around fresh enoki mushrooms.",
      },

    ],
  },

{
    slug: "lamb-chicken",
    name: "Lamb Chicken",
    image: "/images/lc.png",
    description: "Flavorful marinated chicken and tender lamb cuts for the ultimate grill.",
    items: [
      {
        name: "Lamb Rack",
        image: "/images/L1.png",
        description: "Juicy and tender premium lamb rack cuts.",
      },
      {
        name: "Midloin",
        image: "/images/L2.png",
        description: "Flavorful lamb midloin slices, perfect for the grill.",
      },
      {
        name: "Shoulder",
        image: "/images/L3.png",
        description: "Tender and flavorful lamb shoulder slices.",
      },
      {
        name: "Lamb BBQ",
        image: "/images/L4.png",
        description: "Juicy lamb slices seasoned for the grill.",
      },
      {
        name: "Lamb Black Papper",
        image: "/images/L5.png",
        description: "Tender lamb slices marinated in rich black pepper sauce.",
      },
      {
        name: "Lamb Satay",
        image: "/images/L6.png",
        description: "Marinated lamb skewers, rich and savory.",
      },
      {
        name: "Lamb Roll",
        image: "/images/L7.png",
        description: "Thinly sliced lamb rolls for grilling.",
      },
      {
        name: "Boneless Whole Leg BBQ",
        image: "/images/C1.png",
        description: "Seasoned boneless chicken leg, perfect for BBQ.",
      },
      {
        name: "Boneless Whole Leg Ori",
        image: "/images/C2.png",
        description: "Fresh and juicy original boneless chicken leg.",
      },
      {
        name: "Chicken Teriyaki",
        image: "/images/C3.png",
        description: "Chicken pieces glazed in sweet and savory teriyaki sauce.",
      },
      {
        name: "Chicken Black pepper",
        image: "/images/C4.png",
        description: "Tender chicken marinated in spicy black pepper sauce.",
      },
      {
        name: "Chicken BBQ",
        image: "/images/C5.png",
        description: "Flavorful marinated chicken pieces for grilling.",
      },
      {
        name: "Chicken Satay",
        image: "/images/C6.png",
        description: "Classic marinated chicken skewers.",
      },

    ],
  },

  {
    slug: "grill-combo-set",
    name: "Grill Combo Set",
    image: "/images/g.png",
    description: "Perfect combo platters featuring Wagyu, Australian Beef, Lamb, and Chicken.",
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
        description: "Crispy platter of squid, fish slice, prawn, and crabstick.",
      },
      {
        name: "Fried Fish Slice",
        image: "/images/F2.png",
        description: "Crispy golden-fried fish slices.",
      },
      {
        name: "Crispy Prawn",
        image: "/images/F3.png",
        description: "Crunchy deep-fried prawns.",
      },
      {
        name: "Fried Sotong",
        image: "/images/F4.png",
        description: "Crispy fried squid rings with a tender bite.",
      },
      {
        name: "Cheese Finger",
        image: "/images/F5.png",
        description: "Crispy breaded cheese sticks with gooey melted filling.",
      },
      {
        name: "Chicken Popcorn",
        image: "/images/F6.png",
        description: "Bite-sized crispy fried chicken pieces.",
      },
      {
        name: "Fried Enoki",
        image: "/images/F7.png",
        description: "Crispy deep-fried enoki mushrooms.",
      },
      {
        name: "Fried Wantan",
        image: "/images/F8.png",
        description: "Crispy golden wontons with savory filling.",
      },
      {
        name: "Fried Crabstick",
        image: "/images/F9.png",
        description: "Crunchy deep-fried crab sticks.",
      },
      {
        name: "Shrimps Chip",
        image: "/images/F10.png",
        description: "Light and crispy prawn crackers.",
      },
      {
        name: "Fried Wantan",
        image: "/images/F11.png",
        description: "Crispy golden wontons with savory filling.",
      },
      {
        name: "Fries",
        image: "/images/F12.png",
        description: "Classic golden crispy French fries.",
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
      description: "Light and refreshing classic broth.",
    },
    {
      name: "Chicken Soup",
      image: "/images/A2.png",
      description: "Savory and comforting chicken broth.",
    },
    {
      name: "Tom Yam Soup",
      image: "/images/A3.png",
      description: "Fresh, tangy, and mildly spicy Thai soup.",
    },
    {
      name: "Tom Yam Soup Extra Spicy",
      image: "/images/A4.png",
      description: "Spicy and bold Thai soup with an extra kick.",
    },
    {
      name: "Tomato Soup",
      image: "/images/A5.png",
      description: "Fresh and tangy tomato-based soup.",
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
        description: "Warm steamed white rice.",
      },
      {
        name: "Instant Noodles",
        image: "/images/A7.PNG",
        description: "Classic chewy instant noodles.",
      },
      {
        name: "Tang Hoon",
        image: "/images/A8.PNG",
        description: "Smooth glass noodles for soup.",
      },
      {
        name: "Udon",
        image: "/images/A9.png",
        description: "Thick and chewy Japanese noodles.",
      },
      {
        name: "Egg",
        image: "/images/A10.png",
        description: "Fresh egg for grill or soup",
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
        description: "Crisp and fresh iceberg lettuce.",
      },
      {
        name: "Romaine Lettuce",
        image: "/images/V2.png",
        description: "Fresh and slightly bitter romaine lettuce.",
      },
      {
        name: "Coral Lettuce",
        image: "/images/V3.png",
        description: "Sweet and tender coral lettuce."
      },
      {
        name: "Broccoli",
        image: "/images/V4.png",
        description: "Fresh green broccoli florets.",
      },
      {
        name: "Enoki Mushroom",
        image: "/images/V5.png",
        description: "Slender and chewy enoki mushrooms.",
      },
      {
        name: "White Crab Mushroom",
        image: "/images/V6.png",
        description: "Fresh and savory white crab mushrooms.",
      },
      {
        name: "White Shimeji Mushroom",
        image: "/images/V7.png",
        description: "Tender white shimeji mushrooms.",
      },
      {
        name: "Oyster Mushroom",
        image: "/images/V8.png",
        description: "Fresh and meaty oyster mushrooms.",
      },
      {
        name: "Abalone Mushroom",
        image: "/images/V9.png",
        description: "Thick and savory abalone mushrooms.",
      },
      {
        name: "Shitake Mushroom",
        image: "/images/V10.png",
        description: "Classic aromatic shiitake mushrooms.",
      },
      {
        name: "Fresh Soy Chip",
        image: "/images/V12.png",
        description: "Fresh bean curd sheets, soft and high in protein.",
      },
      {
        name: "Ring Roll",
        image: "/images/V13.png",
        description: "Crispy fried bean curd rolls.",
      },
      {
        name: "Stuffed Tau Pok",
        image: "/images/V14.png",
        description: "Fried tofu pockets stuffed with savory filling.",
      },
      {
        name: "Sotong Paste",
        image: "/images/V15.png",
        description: "Fresh handmade squid paste.",
      },
      {
        name: "Prawn Paste",
        image: "/images/V16.png",
        description: "Fresh handmade shrimp paste.",
      },
      {
        name: "Wantan",
        image: "/images/V17.png",
        description: "Savory filled wonton dumplings",
      },
      {
        name: "Tofu",
        image: "/images/V18.png",
        description: "Soft and smooth fresh tofu.",
      },
    ],
  },
  {
    slug: "bebola",
    name: "Bebola",
    image: "/images/b_B.png",
    description: "Assorted premium meatballs, dumplings, and savory bites.",
    items: [
      {
      name: "Fish Noodle",
      image: "/images/B2.png",
      description: "Springy fish noodles with a smooth, savory bite.",
      },
      {
        name: "Fish Ball",
        image: "/images/B3.png",
        description: "Classic springy fish balls made from fresh fish paste.",
      },
      {
        name: "Cuttlefish Ball",
        image: "/images/B4.png",
        description: "Chewy cuttlefish balls with a rich, savory seafood flavor.",
      },
      {
        name: "Cheese Tofu",
        image: "/images/B5.png",
        description: "Soft tofu filled with creamy, melted cheese inside.",
      },
      {
        name: "Crab Meat Stick",
        image: "/images/B6.png",
        description: "Tender crab-flavored sticks, sweet and savory.",
      },
      {
        name: "Chicken Sausage",
        image: "/images/B7.png",
        description: "Savory chicken sausages, juicy and flavorful.",
      },
      {
        name: "Mini Fish Cake",
        image: "/images/B8.png",
        description: "Bite-sized fish cakes with a smooth and bouncy texture.",
      },
      {
        name: "Crystal Fish Ball Tobiko",
        image: "/images/B9.png",
        description: "Bouncy fish ball stuffed with crunchy tobiko flying fish roe.",
      },
      {
        name: "Crystal Lava Truffle",
        image: "/images/B10.png",
        description: "Premium fish ball with a savory, aromatic truffle lava inside.",
      },
      {
        name: "Abura Age",
        image: "/images/B11.png",
        description: "Deep-fried tofu pouches, perfect for absorbing hot broth.",
      },
      {
        name: "Fish Tofu",
        image: "/images/B12.png",
        description: "Silky smooth fish tofu with a light, savory taste.",
      },
      {
        name: "Seafood Tofu Curd",
        image: "/images/B13.png",
        description: "Soft tofu curd infused with rich seafood flavor.",
      },
      {
        name: "Snow Crab",
        image: "/images/B14.png",
        description: "Delicate crab meat sticks with a naturally sweet taste.",
      },

    ],
  },
  {
    slug: "Steamboat-ala-carte",
    name: "Steamboat Ala Carte",
    image: "/images/s_B.png",
    description: "Fresh seafood selection featuring prawns, scallops, and squid.",
    items: [
      {
        name: "Sea Prawn",
        image: "/images/S4.png",
        description: "Fresh, juicy, and naturally sweet sea prawns.",
      },
      {
        name: "Sliced Fish-Fresh",
        image: "/images/S5.png",
        description: "Freshly sliced fish of the day, tender and mild.",
      },
      {
        name: "White Sotong",
        image: "/images/S6.png",
        description: "Tender white squid with a bouncy texture.",
      },
      {
        name: "Boiled Scallop",
        image: "/images/S7.png",
        description: "Succulent scallops with a sweet oceanic taste.",
      },
      {
        name: "Abalone",
        image: "/images/S8.png",
        description: "Premium sliced abalone with a tender bite.",
      },
      {
        name: "Green Mussel",
        image: "/images/S9.png",
        description: "Juicy green mussels rich in seafood flavor.",
      },
      {
        name: "Mussel Whole Shell",
        image: "/images/S10.png",
        description: "Fresh whole shell mussels, succulent and savory.",
      },
    ],
  },
  {
    slug: "australian-beef",
    name: "Australian Beef",
    image: "/images/au_B.png",
    description: "Juicy, tender cuts of quality Australian beef grilled to perfection.",
    items: [
      {
        name: "Aust Beef Steak",
        image: "/images/AU10.png",
        description: "Juicy and tender Australian beef steak.",
      },
      {
        name: "Aust Short Rib BBQ",
        image: "/images/AU11.png",
        description: "Savory Australian short ribs, perfect for grilling.",
      },
      {
        name: "Aust Beef BBQ",
        image: "/images/AU12.png",
        description: "Flavorful Australian beef slices for BBQ.",
      },
      {
        name: "Aust Beef Satay",
        image: "/images/AU13.png",
        description: "Marinated Australian beef skewers.",
      },
      {
        name: "Aust Beef Roll",
        image: "/images/AU14.png",
        description: "Thinly sliced Australian beef rolls.",
      },
      {
        name: "Aust Beef Enoki",
        image: "/images/AU15.png",
        description: "Australian beef rolls wrapped around fresh enoki mushrooms.",
      },

    ],
  },

{
    slug: "lamb-chicken",
    name: "Lamb Chicken",
    image: "/images/lc_B.png",
    description: "Flavorful marinated chicken and tender lamb cuts for the ultimate grill.",
    items: [
      {
        name: "Shoulder",
        image: "/images/L3.png",
        description: "Tender and flavorful lamb shoulder slices.",
      },
      {
        name: "Lamb BBQ",
        image: "/images/L4.png",
        description: "Juicy lamb slices seasoned for the grill.",
      },
      {
        name: "Lamb Satay",
        image: "/images/L6.png",
        description: "Marinated lamb skewers, rich and savory.",
      },
      {
        name: "Lamb Roll",
        image: "/images/L7.png",
        description: "Thinly sliced lamb rolls for grilling.",
      },
      {
        name: "Boneless Whole Leg BBQ",
        image: "/images/C1.png",
        description: "Seasoned boneless chicken leg, perfect for BBQ.",
      },
      {
        name: "Boneless Whole Leg Ori",
        image: "/images/C2.png",
        description: "Fresh and juicy original boneless chicken leg.",
      },
      {
        name: "Chicken BBQ",
        image: "/images/C5.png",
        description: "Flavorful marinated chicken pieces for grilling.",
      },
      {
        name: "Chicken Satay",
        image: "/images/C6.png",
        description: "Classic marinated chicken skewers.",
      },

    ],
  },
];