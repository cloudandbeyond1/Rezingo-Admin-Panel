import product1 from "../../assets/images/products/ProductImg/productimg1.jpg";
import product2 from "../../assets/images/products/ProductImg/productimg2.jpg";
import product3 from "../../assets/images/products/ProductImg/productimg3.jpg";
import product4 from "../../assets/images/products/ProductImg/productimg4.jpg";
import product5 from "../../assets/images/products/ProductImg/productimg5.jpg";
import product6 from "../../assets/images/products/product-6.png";
import product7 from "../../assets/images/products/product-7.png";
import product8 from "../../assets/images/products/product-8.png";



export interface ProductsItemTypes {
  Product_id: string;

  product_img: Array<string>;

  product_name: string;

  category: string;

  price: string;
  
}



const products: ProductsItemTypes[] = [

  {

    Product_id: "RZ-P001",

    product_img: [product1, product2],

    product_name: "Rapido Thick Ab roller",

    category: "Fitness Classes",

    price: "$8361.93",

   

  },

  {

    Product_id: "RZ-P002",

    product_img: [product4, product5],

    product_name: "Hand Gripper",

    category: "Sports Leagues and Tournaments",

    price: "$7561.93",

  },

  {

   

    Product_id: "RZ-P003",

    product_img: [product3, product6],

    product_name: "Dumbbells",

    category: "Meditation and Mindfulness",

    price: "$3321.93",

  },

  {

   

    Product_id: "RZ-P004",

    product_img: [product7, product8],

    product_name: "Financial",

    category: "Bench Press",

    price: "$2361.93",

 

  },

  {

 

    Product_id: "RZ-P005",

    product_img: [product5, product1],

    product_name: "Professional Ab Roller",

    category: "Environmental",

    price: "$1051.93",

  },

];

 

export {products};
