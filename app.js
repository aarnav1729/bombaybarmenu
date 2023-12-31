const menu = [
  {
    id: 1,
    title: "paneer 65",
    category: "veg",
    price: 240,
    img: "./item-1.jpeg",
    desc: `Spicy and crispy paneer (cottage cheese) dish, flavored with aromatic spices and served as an appetizer. (Small- 160)`,
  },
  {
    id: 2,
    title: "chilly paneer",
    category: "veg",
    price: 160,
    img: "./item-2.jpeg",
    desc: `Indo-Chinese dish made with paneer (cottage cheese), bell peppers, and onions, tossed in a spicy and tangy sauce.`,
  },
  {
    id: 3,
    title: "veg 65",
    category: "veg",
    price: 160,
    img: "./item-3.jpeg",
    desc: `Spicy and crispy vegetarian dish inspired by the famous Chicken 65, made with a flavorful blend of spices. (Small- 170)`,
  },
  {
    id: 4,
    title: "gobi machuria",
    category: "veg",
    price: 240,
    img: "./item-4.jpeg",
    desc: `Crispy and tangy cauliflower dish, with a perfect balance of sweet, spicy, and sour flavors. (Small- 190)`,
  },
  {
    id: 5,
    title: "gobi 65",
    category: "veg",
    price: 240,
    img: "./item-5.jpeg",
    desc: `Spicy and crispy cauliflower dish, marinated with flavorful spices and deep-fried to perfection. (Small- 170)`,
  },
  {
    id: 6,
    title: "aloo 65",
    category: "veg",
    price: 240,
    img: "./item-6.jpeg",
    desc: `Spicy and crispy potato dish, similar to the popular Chicken 65, but made with potatoes. (Small- 170)`,
  },
  {
    id: 7,
    title: "paneer manchuria",
    category: "veg",
    price: 260,
    img: "./item-7.jpeg",
    desc: `Indo-Chinese dish made with paneer (cottage cheese) cooked in a tangy and flavorful sauce. (Small- 190)`,
  },
  {
    id: 8,
    title: "veg manchuria",
    category: "veg",
    price: 240,
    img: "./item-8.jpeg",
    desc: `Indo-Chinese dish made with mixed vegetables cooked in a spicy and tangy sauce. (Small- 170)`,
  },
  {
    id: 9,
    title: "veg spring roll",
    category: "veg",
    price: 260,
    img: "./item-9.jpeg",
    desc: `Crispy and flavorful appetizer made with a filling of mixed vegetables wrapped in a thin spring roll pastry. (Small- 190)`,
  },
  {
    id: 10,
    title: "paneer spring roll",
    category: "veg",
    price: 260,
    img: "./item-10.jpeg",
    desc: `Delicious appetizer made with a filling of paneer (cottage cheese) and mixed vegetables wrapped in a spring roll pastry. (Small- 190)`,
  },
  {
    id: 11,
    title: "crispy veg",
    category: "veg",
    price: 200,
    img: "./item-11.jpeg",
    desc: `Crispy and flavorful vegetarian dish made with a variety of vegetables, coated in a light batter and deep-fried. (Small- 150)`,
  },
  {
    id: 12,
    title: "veg bullet",
    category: "veg",
    price: 200,
    img: "./item-12.jpeg",
    desc: `A popular vegetarian snack made with a mixture of mashed potatoes, spices, and breadcrumbs, shaped into bullet-like rolls and deep-fried until golden and crispy. (Small- 150)`,
  },
  {
    id: 13,
    title: "onion pakoda",
    category: "veg",
    price: 200,
    img: "./item-13.jpeg",
    desc: `Crispy and flavorful fritters made with sliced onions, gram flour, and spices, perfect as a tea-time snack. (Small- 150)`,
  },
  {
    id: 14,
    title: "veg pakoda",
    category: "veg",
    price: 180,
    img: "./item-14.jpeg",
    desc: `Assorted mixed vegetable fritters, made with a batter of gram flour and spices, served hot and crispy. (Small- 130)`,
  },
  {
    id: 15,
    title: "green peas",
    category: "veg",
    price: 160,
    img: "./item-15.jpeg",
    desc: `Delicious and comforting dish made with green peas cooked in a spiced tomato-based gravy.`,
  },
  {
    id: 16,
    title: "special green peas",
    category: "veg",
    price: 170,
    img: "./item-16.jpeg",
    desc: `Exquisite preparation of green peas cooked with special spices, herbs, and a creamy sauce.`,
  },
  {
    id: 17,
    title: "finger chips",
    category: "veg",
    price: 160,
    img: "./item-17.jpeg",
    desc: `Classic dish of crispy and golden french fries, perfect as a snack or side dish.`,
  },
  {
    id: 18,
    title: "veg cutlet",
    category: "veg",
    price: 180,
    img: "./item-18.jpeg",
    desc: `Tasty and crispy cutlets made with a mix of mashed vegetables, spices, and breadcrumbs, served hot. (Small- 130)`,
  },
  {
    id: 19,
    title: "corn fry",
    category: "veg",
    price: 160,
    img: "./item-19.jpeg",
    desc: `Delicious and flavorful dish made with fried corn kernels, seasoned with spices and herbs.`,
  },
  {
    id: 20,
    title: "crispy corn",
    category: "veg",
    price: 190,
    img: "./item-20.jpeg",
    desc: `Crispy and crunchy corn dish, coated with a flavorful seasoning and fried until golden brown.`,
  },
  {
    id: 21,
    title: "masala papad",
    category: "veg",
    price: 30,
    img: "./item-21.jpeg",
    desc: `Crispy papad topped with a tangy and spicy mixture of onions, tomatoes, and spices, served as an appetizer.`,
  },
  {
    id: 22,
    title: "roast papad",
    category: "veg",
    price: 25,
    img: "./item-22.jpeg",
    desc: `Roasted papad served as a crunchy and savory accompaniment to meals, perfect for adding a touch of crispiness.`,
  },
  {
    id: 23,
    title: "green salad",
    category: "veg",
    price: 50,
    img: "./item-23.jpeg",
    desc: `A refreshing and nutritious salad made with a variety of fresh green vegetables, perfect for a healthy meal.`,
  },
  {
    id: 24,
    title: "chicken masala",
    category: "chicken",
    price: 320,
    img: "./item-24.jpeg",
    desc: `Delicious chicken cooked in a flavorful masala sauce. (Small- 220)`,
  },  
  {
    id: 25,
    title: "chicken palak",
    category: "chicken",
    price: 320,
    img: "./item-25.jpeg",
    desc: `Tender chicken cooked with spinach in a delectable blend of spices. (Small- 220)`,
  },
  {
    id: 26,
    title: "punjabi chicken",
    category: "chicken",
    price: 320,
    img: "./item-26.jpeg",
    desc: `Traditional Punjabi-style chicken curry with rich and aromatic flavors. (Small- 220)`,
  },
  {
    id: 27,
    title: "special chicken",
    category: "chicken",
    price: 340,
    img: "./item-27.jpeg",
    desc: `A special chicken dish prepared with a unique blend of spices. (Small- 230)`,
  },
  {
    id: 28,
    title: "chicken tikka butter masala",
    category: "chicken",
    price: 340,
    img: "./item-28.jpeg",
    desc: `Tender chicken tikka cooked in a creamy and buttery tomato-based sauce. (Small- 230)`,
  },
  {
    id: 29,
    title: "butter chicken boneless",
    category: "chicken",
    price: 340,
    img: "./item-29.jpeg",
    desc: `Boneless chicken cooked in a rich and creamy butter sauce. (Small- 230)`,
  },
  {
    id: 30,
    title: "butter chicken with bones",
    category: "chicken",
    price: 340,
    img: "./item-30.jpeg",
    desc: `Chicken with bones cooked in a luscious and flavorful butter sauce. (Small- 230)`,
  },
  {
    id: 31,
    title: "ginger chicken boneless",
    category: "chicken",
    price: 340,
    img: "./item-31.jpeg",
    desc: `Boneless chicken cooked with ginger and spices for a delicious flavor. (Small- 230)`,
  },
  {
    id: 32,
    title: "ginger chicken with bones",
    category: "chicken",
    price: 340,
    img: "./item-32.jpeg",
    desc: `Chicken with bones cooked with ginger and spices for a delightful taste. (Small- 230)`,
  },
  {
    id: 33,
    title: "chicken gravy",
    category: "chicken",
    price: 120,
    img: "./item-33.jpeg",
    desc: `Tender and succulent chicken cooked in a flavorful and savory gravy.`,
  },
  {
    id: 34,
    title: "mutton punjabi",
    category: "mutton",
    price: 230,
    img: "./item-34.jpeg",
    desc: `Traditional Punjabi-style mutton curry with rich and aromatic flavors. (Small- 230)`,
  },
  {
    id: 35,
    title: "mutton masala",
    category: "mutton",
    price: 340,
    img: "./item-35.jpeg",
    desc: `Tender mutton cooked in a flavorful masala sauce. (Small- 230)`,
  },
  {
    id: 36,
    title: "mutton saag",
    category: "mutton",
    price: 340,
    img: "./item-36.jpeg",
    desc: `Succulent mutton cooked with spinach in a delectable blend of spices. (Small- 230)`,
  },
  {
    id: 37,
    title: "special mutton",
    category: "mutton",
    price: 360,
    img: "./item-37.jpeg",
    desc: `A special mutton dish prepared with a unique blend of spices. (Small- 250)`,
  },
  {
    id: 38,
    title: "ginger mutton",
    category: "mutton",
    price: 360,
    img: "./item-38.jpeg",
    desc: `Mutton cooked with ginger and spices for a delicious flavor. (Small- 250)`,
  },
  {
    id: 39,
    title: "keema mutton",
    category: "mutton",
    price: 360,
    img: "./item-39.jpeg",
    desc: `Minced mutton cooked to perfection with a medley of spices. (Small- 250)`,
  },
  {
    id: 40,
    title: "nargis kofta fry",
    category: "mutton",
    price: 360,
    img: "./item-40.jpeg",
    desc: `Fried mutton kofta balls made with a flavorful stuffing. (Small- 250)`,
  },
  {
    id: 41,
    title: "keema fry",
    category: "mutton",
    price: 300,
    img: "./item-41.jpeg",
    desc: `Spicy and aromatic fried minced mutton dish.`,
  },
  {
    id: 42,
    title: "keema masala fry",
    category: "mutton",
    price: 340,
    img: "./item-42.jpeg",
    desc: `Fried minced mutton cooked in a rich and spicy masala. (Small- 230)`,
  },
  {
    id: 43,
    title: "kidney masala",
    category: "mutton",
    price: 340,
    img: "./item-43.jpeg",
    desc: `Savory and spicy kidney masala made with tender mutton kidneys. (Small- 230)`,
  },
  {
    id: 44,
    title: "kidney roast",
    category: "mutton",
    price: 260,
    img: "./item-44.jpeg",
    desc: `Roasted mutton kidneys with aromatic spices and flavors.`,
  },
  {
    id: 45,
    title: "liver masala",
    category: "mutton",
    price: 320,
    img: "./item-45.jpeg",
    desc: `Spicy and flavorful mutton liver masala. (Small- 210)`,
  },
  {
    id: 46,
    title: "liver fry",
    category: "mutton",
    price: 260,
    img: "./item-46.jpeg",
    desc: `Fried mutton liver with a perfect balance of spices.`,
  },
  {
    id: 47,
    title: "brain fry",
    category: "mutton",
    price: 260,
    img: "./item-47.jpeg",
    desc: `Deliciously spiced and fried mutton brain.`,
  },
  {
    id: 48,
    title: "brain masala",
    category: "mutton",
    price: 280,
    img: "./item-48.jpeg",
    desc: `Mutton brain cooked in a flavorful and spicy masala sauce.`,
  },
  {
    id: 49,
    title: "brain pakoda",
    category: "mutton",
    price: 300,
    img: "./item-49.jpeg",
    desc: `Crispy and tasty pakodas made with mutton brain.`,
  },
  {
    id: 50,
    title: "ginger fish",
    category: "seafood",
    price: 360,
    img: "./item-50.jpeg",
    desc: `Fish cooked with ginger and spices for a delightful flavor. (Small- 250)`,
  },
  {
    id: 51,
    title: "fish curry",
    category: "seafood",
    price: 360,
    img: "./item-51.jpeg",
    desc: `Traditional fish curry made with a blend of aromatic spices. (Small- 250)`,
  },
  {
    id: 52,
    title: "fish tikka masala",
    category: "seafood",
    price: 360,
    img: "./item-52.jpeg",
    desc: `Tender fish tikka cooked in a rich and creamy masala sauce. (Small- 250)`,
  },
  {
    id: 53,
    title: "ginger prawns",
    category: "seafood",
    price: 360,
    img: "./item-53.jpeg",
    desc: `Prawns cooked with ginger and spices for a delicious flavor. (Small- 250)`,
  },
  {
    id: 54,
    title: "prawns curry",
    category: "seafood",
    price: 360,
    img: "./item-54.jpeg",
    desc: `Authentic prawns curry with a perfect blend of spices and flavors. (Small- 250)`,
  },
  {
    id: 55,
    title: "prawns fry",
    category: "seafood",
    price: 360,
    img: "./item-55.jpeg",
    desc: `Crispy and spicy fried prawns that are perfect as an appetizer.`,
  },
  {
    id: 56,
    title: "loose prawns",
    category: "seafood",
    price: 340,
    img: "./item-56.jpeg",
    desc: `Tender and succulent prawns cooked in a delicious sauce. (Small- 230)`,
  },
  {
    id: 57,
    title: "prawns pakoda",
    category: "seafood",
    price: 200,
    img: "./item-57.jpeg",
    desc: `Crunchy and flavorful pakodas made with juicy prawns.`,
  },
  {
    id: 58,
    title: "chilly prawns",
    category: "seafood",
    price: 340,
    img: "./item-58.jpeg",
    desc: `Spicy and tangy prawns stir-fried with peppers and spices. (Small- 230)`,
  },
  {
    id: 59,
    title: "chilli fish",
    category: "seafood",
    price: 340,
    img: "./item-59.jpeg",
    desc: `Fish cooked with peppers and spices for a fiery and flavorful dish. (Small- 230)`,
  },
  {
    id: 60,
    title: "apollo fish",
    category: "seafood",
    price: 340,
    img: "./item-60.jpeg",
    desc: `A popular Andhra-style fish preparation with a unique blend of spices. (Small- 230)`,
  },
  {
    id: 61,
    title: "fish finger",
    category: "seafood",
    price: 340,
    img: "./item-61.jpeg",
    desc: `Crispy and breaded fish fingers that make a perfect snack. (Small- 230)`,
  },
  {
    id: 62,
    title: "fish 65",
    category: "seafood",
    price: 340,
    img: "./item-62.jpeg",
    desc: `Spicy and tangy deep-fried fish, seasoned with aromatic spices. (Small- 230)`,
  },
  {
    id: 63,
    title: "fish fry",
    category: "seafood",
    price: 340,
    img: "./item-63.jpeg",
    desc: `Crispy and flavorful fried fish that is perfect as a main course. (Small- 230)`,
  },
  {
    id: 64,
    title: "tandoori platter",
    category: "tandoori",
    price: 600,
    img: "./item-64.mov",
    desc: `Assortment of tandoori delicacies including chicken, fish, and paneer.`,
  },
  {
    id: 65,
    title: "tandoori chicken",
    category: "tandoori",
    price: 400,
    img: "./item-65.jpeg",
    desc: `Classic tandoori chicken marinated in yogurt and spices, grilled to perfection.`,
  },
  {
    id: 66,
    title: "tandoori chicken 1 pc",
    category: "tandoori",
    price: 220,
    img: "./item-65.jpeg",
    desc: `Single piece of succulent tandoori chicken, marinated and grilled with care.`,
  },
  {
    id: 67,
    title: "tangdi 65",
    category: "tandoori",
    price: 320,
    img: "./item-67.jpeg",
    desc: `Spicy and tangy grilled chicken drumsticks with a flavorful coating. (Small- 180)`,
  },
  {
    id: 68,
    title: "chicken malai tikka",
    category: "tandoori",
    price: 320,
    img: "./item-68.jpeg",
    desc: `Creamy and tender chicken tikka marinated in a rich malai (cream) sauce. (Small- 210)`,
  },
  {
    id: 69,
    title: "garlic kebab",
    category: "tandoori",
    price: 320,
    img: "./item-69.jpeg",
    desc: `Delicious and aromatic kebabs infused with the flavors of garlic. (Small- 210)`,
  },
  {
    id: 70,
    title: "banjara kebab",
    category: "tandoori",
    price: 320,
    img: "./item-70.jpeg",
    desc: `Spicy and succulent kebabs with a smoky flavor, inspired by traditional Banjara cuisine. (Small- 210)`,
  },
  {
    id: 71,
    title: "chicken tikka",
    category: "tandoori",
    price: 320,
    img: "./item-71.jpeg",
    desc: `Tender and flavorful boneless chicken pieces marinated and grilled to perfection. (Small- 210)`,
  },
  {
    id: 72,
    title: "tangdi kebab",
    category: "tandoori",
    price: 320,
    img: "./item-72.jpeg",
    desc: `Grilled chicken drumsticks marinated in a flavorful blend of spices. (Small- 180)`,
  },
  {
    id: 73,
    title: "tangdi kebab 1 pc",
    category: "tandoori",
    price: 110,
    img: "./item-72.jpeg",
    desc: `Individual chicken drumstick kebab, perfectly seasoned and grilled.`,
  },
  {
    id: 74,
    title: "fish tikka",
    category: "tandoori",
    price: 340,
    img: "./item-74.jpeg",
    desc: `Deliciously marinated and grilled fish chunks with aromatic spices. (Small- 230)`,
  },
  {
    id: 75,
    title: "paneer tikka",
    category: "tandoori",
    price: 240,
    img: "./item-75.jpeg",
    desc: `Juicy and marinated paneer (cottage cheese) cubes grilled to perfection. (Small- 170)`,
  },
  {
    id: 76,
    title: "paneer garlic tikka",
    category: "tandoori",
    price: 260,
    img: "./item-76.jpeg",
    desc: `Paneer tikka infused with the flavors of garlic for a delightful twist. (Small- 190)`,
  },
  {
    id: 77,
    title: "paneer ginger tikka",
    category: "tandoori",
    price: 260,
    img: "./item-77.jpeg",
    desc: `Paneer tikka marinated with a zingy blend of ginger and spices. (Small- 190)`,
  },
  {
    id: 78,
    title: "paneer malai tikka",
    category: "tandoori",
    price: 260,
    img: "./item-78.jpeg",
    desc: `Creamy and succulent paneer tikka marinated in a rich malai (cream) sauce. (Small- 190)`,
  },
  {
    id: 79,
    title: "egg spring roll",
    category: "egg",
    price: 230,
    img: "./item-79.jpeg",
    desc: `Crispy spring rolls filled with delicious egg filling. (Small- 160)`,
  },
  {
    id: 80,
    title: "special boiled egg",
    category: "egg",
    price: 20,
    img: "./item-80.jpeg",
    desc: `Perfectly boiled eggs seasoned with special spices and flavors.`,
  },
  {
    id: 81,
    title: "boiled egg",
    category: "egg",
    price: 18,
    img: "./item-81.jpeg",
    desc: `Simple and classic boiled eggs, a nutritious and filling snack.`,
  },
  {
    id: 82,
    title: "egg pakoda",
    category: "egg",
    price: 190,
    img: "./item-82.jpeg",
    desc: `Crispy and spicy fritters made with egg and gram flour batter. (Small- 120)`,
  },
  {
    id: 83,
    title: "egg burjee",
    category: "egg",
    price: 150,
    img: "./item-83.jpeg",
    desc: `Scrambled eggs cooked with onions, tomatoes, and spices.`,
  },
  {
    id: 84,
    title: "omelette",
    category: "egg",
    price: 95,
    img: "./item-84.jpeg",
    desc: `Classic omelette made with beaten eggs and a choice of fillings.`,
  },
  {
    id: 85,
    title: "half fry",
    category: "egg",
    price: 80,
    img: "./item-85.jpeg",
    desc: `Eggs fried with a runny yolk, perfect for dipping with toast.`,
  },
  {
    id: 86,
    title: "egg 65",
    category: "egg",
    price: 210,
    img: "./item-86.jpeg",
    desc: `Spicy and tangy deep-fried eggs, seasoned with aromatic spices. (Small- 160)`,
  },
  {
    id: 87,
    title: "egg manchuria",
    category: "egg",
    price: 210,
    img: "./item-87.jpeg",
    desc: `Indo-Chinese style egg fritters cooked in a tangy and spicy sauce. (Small- 160)`,
  },
  {
    id: 88,
    title: "egg chilly",
    category: "egg",
    price: 210,
    img: "./item-88.jpeg",
    desc: `Eggs cooked with onions, bell peppers, and spices for a flavorful dish. (Small- 160)`,
  },
  {
    id: 89,
    title: "egg curry",
    category: "egg",
    price: 180,
    img: "./item-89.jpeg",
    desc: `Aromatic and rich curry made with boiled eggs in a spiced tomato-based gravy.`,
  },
  {
    id: 90,
    title: "phulka",
    category: "roti",
    price: 30,
    img: "./item-90.jpeg",
    desc: `Thin and soft Indian bread made from whole wheat flour.`,
  },
  {
    id: 91,
    title: "chapati",
    category: "roti",
    price: 30,
    img: "./item-91.jpeg",
    desc: `Thin unleavened bread made from whole wheat flour, a staple in Indian cuisine.`,
  },
  {
    id: 92,
    title: "roti",
    category: "roti",
    price: 30,
    img: "./item-92.jpeg",
    desc: `Round and wholesome bread made from whole wheat flour.`,
  },
  {
    id: 93,
    title: "naan",
    category: "roti",
    price: 35,
    img: "./item-93.jpeg",
    desc: `Soft and fluffy leavened bread, typically cooked in a tandoor (clay oven).`,
  },
  {
    id: 94,
    title: "butter naan",
    category: "roti",
    price: 45,
    img: "./item-94.jpeg",
    desc: `Naan bread topped with melted butter for a rich and flavorful taste.`,
  },
  {
    id: 95,
    title: "tandoor paratha",
    category: "roti",
    price: 45,
    img: "./item-95.jpeg",
    desc: `Flaky and layered bread cooked in a tandoor for a delightful texture.`,
  },
  {
    id: 96,
    title: "ghee roti",
    category: "roti",
    price: 35,
    img: "./item-96.jpeg",
    desc: `Roti made with clarified butter (ghee) for a rich and aromatic flavor.`,
  },
  {
    id: 97,
    title: "ghee chapati",
    category: "roti",
    price: 35,
    img: "./item-97.jpeg",
    desc: `Chapati made with clarified butter (ghee) for a delicious and indulgent taste.`,
  },
  {
    id: 98,
    title: "oil paratha",
    category: "roti",
    price: 30,
    img: "./item-98.jpeg",
    desc: `Paratha made with oil for a softer and flakier texture.`,
  },
  {
    id: 99,
    title: "aloo paratha",
    category: "roti",
    price: 100,
    img: "./item-99.jpeg",
    desc: `Flavorful paratha stuffed with a spiced potato filling.`,
  },
  {
    id: 100,
    title: "gobi paratha",
    category: "roti",
    price: 50,
    img: "./item-100.jpeg",
    desc: `Paratha filled with a delicious spiced cauliflower (gobi) mixture.`,
  },
  {
    id: 101,
    title: "pudina paratha",
    category: "roti",
    price: 50,
    img: "./item-101.jpeg",
    desc: `Paratha flavored with fresh mint leaves for a refreshing taste.`,
  },
  {
    id: 102,
    title: "paneer paratha",
    category: "roti",
    price: 50,
    img: "./item-102.jpeg",
    desc: `Paratha stuffed with a flavorful cottage cheese (paneer) filling.`,
  },
  {
    id: 103,
    title: "kheema naan",
    category: "roti",
    price: 50,
    img: "./item-103.jpeg",
    desc: `Naan bread filled with a delicious minced meat (kheema) mixture.`,
  },
  {
    id: 104,
    title: "paneer butter masala",
    category: "veg",
    price: 200,
    img: "./item-104.jpeg",
    desc: `Soft and creamy paneer (cottage cheese) cooked in a rich and buttery tomato-based gravy.`,
  },
  {
    id: 105,
    title: "palak paneer",
    category: "veg",
    price: 200,
    img: "./item-105.jpeg",
    desc: `Paneer (cottage cheese) cooked with spinach in a flavorful and nutritious gravy.`,
  },
  {
    id: 106,
    title: "paneer tikka masala",
    category: "veg",
    price: 200,
    img: "./item-106.jpeg",
    desc: `Grilled paneer (cottage cheese) cubes cooked in a creamy and spicy tomato-based sauce.`,
  },
  {
    id: 107,
    title: "ginger paneer",
    category: "veg",
    price: 200,
    img: "./item-107.jpeg",
    desc: `Paneer (cottage cheese) cooked with ginger and spices for a delightful flavor.`,
  },
  {
    id: 108,
    title: "kaju paneer",
    category: "veg",
    price: 200,
    img: "./item-108.jpeg",
    desc: `Paneer (cottage cheese) cooked with cashews and a blend of aromatic spices.`,
  },
  {
    id: 109,
    title: "veg malai kofta",
    category: "veg",
    price: 200,
    img: "./item-109.jpeg",
    desc: `Soft and creamy vegetable dumplings served in a rich and creamy gravy.`,
  },
  {
    id: 110,
    title: "mixed veg curry",
    category: "veg",
    price: 200,
    img: "./item-110.jpeg",
    desc: `Assorted vegetables cooked in a flavorful and spiced curry sauce.`,
  },
  {
    id: 111,
    title: "aloo mutter",
    category: "veg",
    price: 200,
    img: "./item-111.jpeg",
    desc: `A classic Indian dish made with potatoes (aloo) and peas (mutter) in a spiced gravy.`,
  },
  {
    id: 112,
    title: "ginger veg",
    category: "veg",
    price: 200,
    img: "./item-112.jpeg",
    desc: `Mixed vegetables cooked with ginger and spices for a flavorful and aromatic dish.`,
  },
  {
    id: 113,
    title: "gobi masala",
    category: "veg",
    price: 200,
    img: "./item-113.jpeg",
    desc: `Cauliflower florets cooked in a spicy and flavorful masala sauce.`,
  },
  {
    id: 114,
    title: "paneer burjee",
    category: "veg",
    price: 200,
    img: "./item-114.jpeg",
    desc: `Scrambled paneer (cottage cheese) cooked with onions, tomatoes, and spices.`,
  },
  {
    id: 115,
    title: "dal makhani",
    category: "veg",
    price: 200,
    img: "./item-115.jpeg",
    desc: `A rich and creamy lentil dish made with black lentils, kidney beans, and aromatic spices.`,
  },
  {
    id: 116,
    title: "dal fry",
    category: "veg",
    price: 200,
    img: "./item-116.jpeg",
    desc: `Tempting and flavorful lentil dish made with lentils, onions, tomatoes, and spices.`,
  },
  {
    id: 117,
    title: "stuffed tomato",
    category: "veg",
    price: 200,
    img: "./item-117.jpeg",
    desc: `Tomato stuffed with a delicious filling of spices, vegetables, and paneer.`,
  },
  {
    id: 118,
    title: "aloo palak",
    category: "veg",
    price: 200,
    img: "./item-118.jpeg",
    desc: `Potatoes (aloo) cooked with spinach (palak) in a flavorful and nutritious gravy.`,
  },
  {
    id: 119,
    title: "plain palak",
    category: "veg",
    price: 200,
    img: "./item-119.jpeg",
    desc: `A simple and nutritious dish made with spinach (palak) cooked with mild spices.`,
  },
  {
    id: 120,
    title: "mixed raita",
    category: "veg",
    price: 200,
    img: "./item-120.jpeg",
    desc: `Refreshing yogurt-based side dish with a mix of diced vegetables and spices.`,
  },
  {
    id: 121,
    title: "curd",
    category: "veg",
    price: 200,
    img: "./item-121.jpeg",
    desc: `Plain yogurt, a cooling and nutritious accompaniment to any meal.`,
  },
  {
    id: 122,
    title: "chicken biryani",
    category: "biryani",
    price: 300,
    img: "./item-122.jpeg",
    desc: `Aromatic and flavorful rice dish cooked with succulent chicken pieces and fragrant spices.`,
  },
  {
    id: 123,
    title: "mutton dum biryani",
    category: "biryani",
    price: 300,
    img: "./item-123.jpeg",
    desc: `Traditional dum-style biryani made with tender mutton, fragrant rice, and aromatic spices.`,
  },
  {
    id: 124,
    title: "special chicken biryani",
    category: "biryani",
    price: 300,
    img: "./item-124.jpeg",
    desc: `Exquisite and flavorful chicken biryani prepared with special spices and premium ingredients.`,
  },
  {
    id: 125,
    title: "chicken tikka biryani",
    category: "biryani",
    price: 300,
    img: "./item-125.jpeg",
    desc: `Delicious biryani made with marinated and grilled chicken tikka, layered with fragrant rice.`,
  },
  {
    id: 126,
    title: "special mutton biryani",
    category: "biryani",
    price: 300,
    img: "./item-126.jpeg",
    desc: `Delectable mutton biryani prepared with special spices, tender meat, and fragrant rice.`,
  },
  {
    id: 127,
    title: "kheema biryani",
    category: "biryani",
    price: 300,
    img: "./item-127.jpeg",
    desc: `Flavorful biryani made with spiced minced meat (kheema) and aromatic rice.`,
  },
  {
    id: 128,
    title: "prawns biryani",
    category: "biryani",
    price: 300,
    img: "./item-128.jpeg",
    desc: `Irresistible biryani prepared with succulent prawns, fragrant rice, and aromatic spices.`,
  },
  {
    id: 129,
    title: "fish biryani",
    category: "biryani",
    price: 300,
    img: "./item-129.jpeg",
    desc: `Delicious biryani made with flavorful fish pieces, fragrant rice, and aromatic spices.`,
  },
  {
    id: 130,
    title: "egg biryani",
    category: "biryani",
    price: 300,
    img: "./item-130.jpeg",
    desc: `Scrumptious biryani made with hard-boiled eggs, fragrant rice, and a blend of spices.`,
  },
  {
    id: 131,
    title: "special fish biryani",
    category: "biryani",
    price: 300,
    img: "./item-131.jpeg",
    desc: `Exquisite biryani made with special fish pieces, fragrant rice, and a flavorful spice mix.`,
  },
  {
    id: 132,
    title: "mixed fried rice",
    category: "biryani",
    price: 300,
    img: "./item-132.jpeg",
    desc: `Assorted vegetables and rice stir-fried with spices for a delicious and satisfying meal.`,
  },
  {
    id: 133,
    title: "chicken fried rice",
    category: "biryani",
    price: 300,
    img: "./item-133.jpeg",
    desc: `Classic fried rice made with tender chicken pieces, mixed vegetables, and aromatic spices.`,
  },
  {
    id: 134,
    title: "paneer tikka biryani",
    category: "biryani",
    price: 300,
    img: "./item-134.jpeg",
    desc: `Flavorful biryani made with marinated paneer tikka, fragrant rice, and a blend of spices.`,
  },
  {
    id: 135,
    title: "veg biryani",
    category: "biryani",
    price: 300,
    img: "./item-135.jpeg",
    desc: `Delicious biryani made with assorted vegetables, fragrant rice, and a blend of aromatic spices.`,
  },
  {
    id: 136,
    title: "veg pulao",
    category: "biryani",
    price: 300,
    img: "./item-136.jpeg",
    desc: `Flavorful rice dish cooked with a mix of vegetables, fragrant spices, and aromatic herbs.`,
  },
  {
    id: 137,
    title: "biryani rice",
    category: "biryani",
    price: 300,
    img: "./item-137.jpeg",
    desc: `Fragrant and long-grain rice used as the base for various biryani dishes.`,
  },
  {
    id: 138,
    title: "jeera rice",
    category: "biryani",
    price: 300,
    img: "./item-138.jpeg",
    desc: `Basmati rice cooked with cumin seeds, giving it a distinct and aromatic flavor.`,
  },
  {
    id: 139,
    title: "palak rice",
    category: "biryani",
    price: 300,
    img: "./item-139.jpeg",
    desc: `Rice cooked with spinach (palak), resulting in a vibrant and nutritious dish.`,
  },
  {
    id: 140,
    title: "dal rice",
    category: "biryani",
    price: 300,
    img: "./item-140.jpeg",
    desc: `Combination of lentils (dal) and rice, a comforting and wholesome meal.`,
  },
  {
    id: 141,
    title: "curd rice",
    category: "biryani",
    price: 300,
    img: "./item-141.jpeg",
    desc: `Rice mixed with yogurt (curd), tempered with spices and often accompanied by pickles.`,
  },
  {
    id: 142,
    title: "steamed rice",
    category: "biryani",
    price: 300,
    img: "./item-142.jpeg",
    desc: `Simple and plain boiled rice, a versatile accompaniment to many dishes.`,
  },
  {
    id: 143,
    title: "veg fried rice",
    category: "biryani",
    price: 300,
    img: "./item-143.jpeg",
    desc: `Flavorful fried rice made with assorted vegetables, aromatic spices, and a touch of soy sauce.`,
  },
  {
    id: 144,
    title: "paneer fried rice",
    category: "biryani",
    price: 300,
    img: "./item-144.jpeg",
    desc: `Delicious fried rice made with paneer (cottage cheese), mixed vegetables, and aromatic spices.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");
const whatsappButton = document.querySelector(".whatsapp-button");

// Selected items
let selectedItems = [];

// Load items 
window.addEventListener("DOMContentLoaded", function() {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function(item) {
    const selected = selectedItems.find((selectedItem) => selectedItem.id === item.id);
    const quantity = selected ? selected.quantity : 0;

    return `<article class="menu-item">
      <img src=${item.img} class="photo" alt=${item.title}>
      <div class="item-info">
        <header>
          <h4>${item.title}</h4>
          <h4 class="price">₹${item.price}</h4>
        </header>
        <p class="item-text">
          ${item.desc}
        </p>
        <div class="quantity">
          <button class="quantity-btn minus" data-id=${item.id}>-</button>
          <span class="quantity-value">${quantity}</span>
          <button class="quantity-btn plus" data-id=${item.id}>+</button>
        </div>
        <button class="add-to-cart-btn" data-id=${item.id}>Add to Cart</button>
      </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;

  const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
  addToCartBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const itemId = parseInt(e.currentTarget.dataset.id);
      const selectedItem = menu.find(function(item) {
        return item.id === itemId;
      });

      if (selectedItem) {
        const existingItem = selectedItems.find((item) => item.id === selectedItem.id);
        if (existingItem) {
          existingItem.quantity++;
        } else {
          selectedItems.push({ ...selectedItem, quantity: 1 });
        }
      }
      updateQuantityDisplay(itemId);
    });
  });

  const quantityMinusBtns = document.querySelectorAll(".quantity-btn.minus");
  quantityMinusBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const itemId = parseInt(e.currentTarget.dataset.id);
      const selectedItem = selectedItems.find(function(item) {
        return item.id === itemId;
      });

      if (selectedItem && selectedItem.quantity > 0) {
        selectedItem.quantity--;
        updateQuantityDisplay(itemId);
      }
    });
  });

  const quantityPlusBtns = document.querySelectorAll(".quantity-btn.plus");
  quantityPlusBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const itemId = parseInt(e.currentTarget.dataset.id);
      const selectedItem = selectedItems.find(function(item) {
        return item.id === itemId;
      });

      if (selectedItem) {
        selectedItem.quantity++;
        updateQuantityDisplay(itemId);
      }
    });
  });
}

function displayMenuButtons() {
  const categories = menu.reduce(function(values, item) {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ['all']
  );
  const categoryBtns = categories.map(function(category) {
    return `<button class="filter-btn" type="button"
      data-id=${category}>
              ${category}
            </button>`
  }).join("");
  container.innerHTML = categoryBtns;

  const filterBtns = container.querySelectorAll(".filter-btn");
  filterBtns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function(menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === "all") {
        displayMenuItems(menu);
      } 
      else {
        displayMenuItems(menuCategory);
      }
    });
  });
}

function updateQuantityDisplay(itemId) {
  const quantityValues = document.querySelectorAll(".quantity-value");
  const selectedItem = selectedItems.find(function(item) {
    return item.id === itemId;
  });

  if (selectedItem) {
    const quantityValue = Array.from(quantityValues).find(function(el) {
      return parseInt(el.parentElement.querySelector(".quantity-btn").dataset.id) === itemId;
    });

    if (quantityValue) {
      quantityValue.textContent = selectedItem.quantity;
    }
  }
}

// Next Step Button
const nextStepButton = document.querySelector(".next-step-button");
nextStepButton.addEventListener("click", function () {
  if (selectedItems.length > 0) {
    // Build the order summary
    let orderSummary = "Order Summary:\n\n";
    let totalPrice = 0;
    selectedItems.forEach(function (item) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
      orderSummary += `${item.title} - ₹${item.price} x ${item.quantity} = ₹${itemPrice}\n`;
    });

    orderSummary += `\nTotal Price: ₹${totalPrice}`;

    // Store the order summary in localStorage
    localStorage.setItem("orderSummary", orderSummary);

    // Redirect to the order page
    window.location.href = "order.html";
  } else {
    alert("Please select items to add to the cart.");
  }
});
