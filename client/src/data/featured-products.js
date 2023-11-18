import image1 from "../assets/img/pictures/products/featured/image1.svg";
import image2 from "../assets/img/pictures/products/featured/image2.svg";


export const featured_products = [
  {
    id: 1,
    img: image1,
    title: "Redish 500g",
    raitingBy5: 4,
    seller: "Mr Fooder",
    hasDiscount: true,
    beforePrice: 12.99, 
    currentPrice: 7.33,
  },
  {
    id: 2,
    img: image2,
    title: "Potatos 1kg",
    raitingBy5: 3,
    seller: "Mr Jabbar",
    hasDiscount: false,
    beforePrice: 0,
    currentPrice: 8.45,
  },
  {
    id: 3,
    img: image1,
    title: "Kelems 2Tpm",
    raitingBy5: 5,
    seller: "Mr Yaqub",
    hasDiscount: true,
    beforePrice: 12,
    currentPrice: 11.95,
  }
];
