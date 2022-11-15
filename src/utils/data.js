import I1 from "../img/i1.png";
import I2 from "../img/f1.png";
import I3 from "../img/c3.png";
import I4 from "../img/fi1.png";
import { GiChickenOven, GiBowlOfRice, GiFruitBowl } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
import { FaIceCream, FaFish } from "react-icons/fa";
import { BiDrink } from "react-icons/bi";

export const homeMenuData = [
  {
    id: 1,
    name: "Icecream",
    decp: "Choco Lava",
    price: "8.43",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Stawberries",
    decp: "Fresh Stawberries",
    price: "22.00",
    imageSrc: I2,
  },
  {
    id: 3,
    name: "Chicken Kebab",
    decp: "Mixed Kebab Plate",
    price: "31.12",
    imageSrc: I3,
  },
  {
    id: 4,
    name: "Fish Kebab",
    decp: "Mixed Fish Kebab",
    price: "12.02",
    imageSrc: I4,
  },
];

export const categories = [
  {
    id: "01e85bd6-2a48-424c-b028-0bd060b1e53e",
    name: "Chicken",
    urlParamName: "chicken",
    icon: GiChickenOven,
  },
  {
    id: "1c23ddc6-005b-4d46-8a96-5b7af5286a43",
    name: "Curry",
    urlParamName: "curry",
    icon: TbSoup,
  },
  {
    id: "54222da7-9af4-46e0-bc3e-2115a4190f3d",
    name: "Rice",
    urlParamName: "rice",
    icon: GiBowlOfRice,
  },
  {
    id: "17529896-27b5-4914-955f-46f2ad36cb89",
    name: "Fish",
    urlParamName: "fish",
    icon: FaFish,
  },
  {
    id: "827a93e7-bf14-466f-b473-43eeddc11c47",
    name: "Fruits",
    urlParamName: "fruits",
    icon: GiFruitBowl,
  },
  {
    id: "18a5dac0-1165-46bb-b14c-d4b107683a92",
    name: "Icecreams",
    urlParamName: "icecreams",
    icon: FaIceCream,
  },
  {
    id: "e2a151a4-ba26-4ecf-aa52-f9e33544a9a8",
    name: "Soft Drinks",
    urlParamName: "drinks",
    icon: BiDrink,
  },
  {
    id: "e2a151a4-ba26-4ecf-aa52-f9e3354sdfd4",
    name: "Noodles",
    urlParamName: "noodles",
    icon: BiDrink,
  },
];
