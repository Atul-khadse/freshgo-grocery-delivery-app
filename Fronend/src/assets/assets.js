import fruits from './fruits.jpg';
import vegetables from './vegetables.jpg';
import organicProduce from './organic_produce.jpg';
import cool_drinks from './cool_drink.jpg';

import instantFood from './instant_food.jpg';
import dairyProducts from './dairy_products.jpg';
import bakery from './bakery.jpg';
import grains from './grains.jpg';


import { FaTruck, FaLeaf, FaCoins, FaHeart } from "react-icons/fa";


import potatoImg1 from './potato_1.jpg';
import potatoImg2 from './potato_2.jpg';
import potatoImg3 from './potato_3.jpg';

import tomatoImg1 from './tomato_1.jpg';
import tomatoImg2 from './tomato_2.jpg';
import tomatoImg3 from './tomato_3.jpg';
import carrot from "./carrot.jpg";
import spinach_500g from './spinach_500g.png';
import onion_500g from './onion_500g.jpg';
import apple_1kg from './apple_1kg.jpg';
import orange_1kg from './orange_1kg.jpg';
import banana from './banana.jpg';
import mango_1kg from './mango_1kg.jpg'
import grapes_500g from './grapes_500g.jpg'




import milkImg1 from './milk_1.jpg';
import milkImg2 from './milk_2.jpg';
import milkImg3 from './milk_3.jpg';






export const categories = [
  {
    text: "Fruits",
    path: "fruits",
    image: fruits,
    bgColor: "#FEE0E0"
  },
  {
    text: "Vegetables",
    path: "vegetables",
    image: vegetables,
    bgColor: "#E0F4D8"
  },
  {
    text: "Organic Produce",
    path: "organic-produce",
    image: organicProduce,
    bgColor: "#FFF3CD"
  },
   {
    text: "Cool Drinks",
    path: "cool-drinks",
    image: cool_drinks,
    bgColor: "#FFF3CD"
  },
   {
    text: "Instant Food",
    path: "instant-food",
    image: instantFood,
    bgColor: "#FFF0E0"
  },
  {
    text: "Dairy Products",
    path: "dairy-products",
    image: dairyProducts,
    bgColor: "#E0F7FA"
  },
  {
    text: "Bakery & Breads",
    path: "bakery-breads",
    image: bakery,
    bgColor: "#FBE9E7"
  },
  {
    text: "Grains & Cereals",
    path: "grains-cereals",
    image: grains,
    bgColor: "#F1F8E9"
  }
];





export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { text: "Home", url: "#" },
      { text: "Best Sellers", url: "#" },
      { text: "Offers & Deals", url: "#" },
      { text: "Contact Us", url: "#" },
      { text: "FAQs", url: "#" },
    ],
  },
  {
    title: "Need Help?",
    links: [
      { text: "Delivery Information", url: "#" },
      { text: "Return & Refund Policy", url: "#" },
      { text: "Payment Methods", url: "#" },
      { text: "Track your Order", url: "#" },
      { text: "Contact Us", url: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { text: "Instagram", url: "#" },
      { text: "Twitter", url: "#" },
      { text: "Facebook", url: "#" },
      { text: "YouTube", url: "#" },
    ],
  },
];





export const features = [
  {
    icon: FaTruck,
    title: "Fastest Delivery",
    description: "Groceries delivered in under 30 minutes.",
  },
  {
    icon: FaLeaf,
    title: "Freshness Guaranteed",
    description: "Fresh products straight from the source.",
  },
  {
    icon: FaCoins,
    title: "Affordable Prices",
    description: "Quality groceries at unbeatable prices.",
  },
  {
    icon: FaHeart,
    title: "Trusted by Thousands",
    description: "Loved by 10,000+ happy customers.",
  },
];




export const dummyProducts = [
  {
    _id: "gd46g23h",
    name: "Potato 500g",
    category: "vegetables",
    price: 25,
    offerPrice: 20,
    image: [potatoImg1, potatoImg2, potatoImg3],
    description: [
      "Fresh and organic",
      "Rich in carbohydrates",
      "Ideal for curries and fries",
    ],
    createdAt: "2025-08-25T07:17:46.018Z",
    updatedAt: "2025-08-25T07:18:13.103Z",
    inStock: true,
  },
  {
    _id: "tg12t34k",
    name: "Tomato 500g",
    category: "vegetables",
    price: 30,
    offerPrice: 25,
    image: [tomatoImg1, tomatoImg2, tomatoImg3],
    description: [
      "Juicy and ripe",
      "Perfect for sauces and salads",
      "Vitamin C rich",
    ],
    createdAt: "2025-08-25T07:20:10.123Z",
    updatedAt: "2025-08-25T07:21:44.876Z",
    inStock: true,
  },
  {
    _id: "mlk384hjs",
    name: "Fresh Cow Milk 1L",
    category: "dairy-products",
    price: 55,
    offerPrice: 50,
    image: [milkImg1, milkImg2, milkImg3],
    description: [
      "Pure and fresh",
      "No added preservatives",
      "Good source of calcium",
    ],
    createdAt: "2025-08-25T07:23:00.500Z",
    updatedAt: "2025-08-25T07:24:32.199Z",
    inStock: true,
  },
   {
    _id: "tomato01",
    name: "Tomato 1kg",
    category: "vegetables",
    price: 40,
    offerPrice: 35,
    image: [tomatoImg1, tomatoImg2, tomatoImg3],
    description: [
      "Farm fresh tomatoes",
      "Rich in antioxidants",
      "Juicy and flavorful"
    ],
    createdAt: "2025-08-07T08:00:00.000Z",
    updatedAt: "2025-08-07T08:00:00.000Z",
    inStock: true,
  },
  {
    _id: "carrot01",
    name: "Carrot 500g",
    category: "vegetables",
    price: 25,
    offerPrice: 22,
    image: [carrot],
    description: [
      "Crunchy and sweet",
      "Great for eyesight",
      "No added chemicals"
    ],
    createdAt: "2025-08-07T08:05:00.000Z",
    updatedAt: "2025-08-07T08:05:00.000Z",
    inStock: true,
  },
  {
    _id: "spinach01",
    name: "Spinach 500g",
    category: "vegetables",
    price: 20,
    offerPrice: 18,
    image: [spinach_500g],
    description: [
      "Rich in iron",
      "Freshly harvested",
      "Boosts immunity"
    ],
    createdAt: "2025-08-07T08:10:00.000Z",
    updatedAt: "2025-08-07T08:10:00.000Z",
    inStock: true,
  },
  {
    _id: "onion01",
    name: "Onion 500g",
    category: "vegetables",
    price: 30,
    offerPrice: 27,
    image: [onion_500g],
    description: [
      "Essential cooking ingredient",
      "Naturally grown",
      "Great flavor"
    ],
    createdAt: "2025-08-07T08:15:00.000Z",
    updatedAt: "2025-08-07T08:15:00.000Z",
    inStock: true,
  },
  {
    _id: "apple01",
    name: "Apple 1kg",
    category: "fruits",
    price: 150,
    offerPrice: 135,
    image: [apple_1kg],
    description: [
      "Crisp and juicy",
      "Excellent source of fiber",
      "Imported quality"
    ],
    createdAt: "2025-08-07T08:20:00.000Z",
    updatedAt: "2025-08-07T08:20:00.000Z",
    inStock: true,
  },
  {
    _id: "orange01",
    name: "Orange 1kg",
    category: "fruits",
    price: 80,
    offerPrice: 72,
    image: [orange_1kg],
    description: [
      "Rich in Vitamin C",
      "Fresh and juicy",
      "Boosts immunity"
    ],
    createdAt: "2025-08-07T08:25:00.000Z",
    updatedAt: "2025-08-07T08:25:00.000Z",
    inStock: true,
  },
  {
    _id: "banana01",
    name: "Banana 1kg",
    category: "fruits",
    price: 50,
    offerPrice: 45,
    image: [banana],
    description: [
      "Naturally sweet",
      "High in potassium",
      "Energy booster"
    ],
    createdAt: "2025-08-07T08:30:00.000Z",
    updatedAt: "2025-08-07T08:30:00.000Z",
    inStock: true,
  },
  {
    _id: "mango01",
    name: "Mango 1kg",
    category: "fruits",
    price: 120,
    offerPrice: 100,
    image: [mango_1kg],
    description: [
      "Seasonal favorite",
      "Rich flavor and sweetness",
      "Premium quality"
    ],
    createdAt: "2025-08-07T08:35:00.000Z",
    updatedAt: "2025-08-07T08:35:00.000Z",
    inStock: true,
  },
  {
    _id: "grapes01",
    name: "Grapes 500g",
    category: "fruits",
    price: 60,
    offerPrice: 55,
    image: [grapes_500g],
    description: [
      "Seedless and sweet",
      "Rich in antioxidants",
      "Perfect snack"
    ],
    createdAt: "2025-08-07T08:40:00.000Z",
    updatedAt: "2025-08-07T08:40:00.000Z",
    inStock: true,
  }
];
