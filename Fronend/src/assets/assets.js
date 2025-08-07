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
];
