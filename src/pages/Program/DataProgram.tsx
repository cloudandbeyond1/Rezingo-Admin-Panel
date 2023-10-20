import product11 from "../../assets/images/attached-files/programs/program1.png";
import product12 from "../../assets/images/attached-files/programs/program2.png";
import product13 from "../../assets/images/attached-files/programs/program3.png";
import product14 from "../../assets/images/attached-files/programs/programa.jpg";
import product15 from "../../assets/images/attached-files/programs/program1.png";
import product16 from "../../assets/images/attached-files/programs/program5.jpg";
import product17 from "../../assets/images/attached-files/programs/program6.jpg";
import product18 from "../../assets/images/attached-files/programs/program2.png";

export interface ProductItemTypes {
  id: number;
  name: string;
  image: string;
  rating: number;
  price: number;
  quantity: number;
  status: boolean;
}

export interface OrdersItemTypes {
  id: number;
  product_img: Array<string>;
  order_id: string;
  order_date: string;
  order_time: string;
  payment_status: string;
  total: string;
  payment_method: string;
  order_status: string;
}

interface CustomersItemTypes {
  id: number;
  name: string;
  phone: string;
  balance: string;
  orders: number;
  last_order: {
    date: string;
    time: string;
  };
  avatar: string;
  status: string;
}

interface SellersItemTypes {
  id: number;
  name: string;
  store: string;
  ratings: number;
  products: number;
  balance: string;
  created_on: string;
  revenue: string;
  image: string;
}

export interface CartItemTypes {
  id: number;
  image: string;
  name: string;
  size: string;
  color: string;
  price: number;
  qty: number;
  total: number;
}


const orders: OrdersItemTypes[] = [
  {
    id: 1,
    product_img: [product11, product12],
    order_id: "031",
    order_date: "12",
    order_time: "1:45 PM",
    payment_status: "Hard",
    total: "$8361.93",
    payment_method: "Fitness Classes",
    order_status: "Physical",
  },
  {
    id: 2,
    product_img: [product13, product14],
    order_id: "060",
    order_date: "3",
    order_time: "12:10 PM",
    payment_status: "Moderate",
    total: "$6219.67",
    payment_method: "Sports Leagues and Tournaments",
    order_status: "Social",
  },
  {
    id: 3,
    product_img: [product15, product15],
    order_id: "061",
    order_date: "2",
    order_time: "2:53 AM",
    payment_status: "Hard",
    total: "$6695.83",
    payment_method: "Meditation and Mindfulness",
    order_status: "Financial",
  },
  {
    id: 4,
    product_img: [product13, product18],
    order_id: "059",
    order_date: "4",
    order_time: "2:53 AM",
    payment_status: "Easy",
    total: "$8616.73",
    payment_method: "Build Resilience",
    order_status: "Environmental",
  },
  {
    id: 5,
    product_img: [product15, product17],
    order_id: "093",
    order_date: "5",
    order_time: "1:52 PM",
    payment_status: "Moderate",
    total: "$1808.61",
    payment_method: "Rearrange & feel good",
    order_status: "Intellectual",
  },
  {
    id: 6,
    product_img: [product12, product15],
    order_id: "064",
    order_date: "9",
    order_time: "3:59 AM",
    payment_status: "Easy",
    total: "$9813.57",
    payment_method: "Service Trips & Volunteer Opportunities",
    order_status: "Occupational",
  },
  
  
];

export {orders };
