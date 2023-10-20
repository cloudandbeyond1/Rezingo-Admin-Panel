import product1 from "../../assets/images/attached-files/ProductImg/orderimg1.jpg";
import product2 from "../../assets/images/attached-files/ProductImg/orderimg2.jpg";
import product3 from "../../assets/images/attached-files/ProductImg/orderimg3.jpg";
import product4 from "../../assets/images/attached-files/ProductImg/orderimg4.jpg";
import product5 from "../../assets/images/attached-files/ProductImg/orderimg5.jpg";
import product6 from "../../assets/images/attached-files/ProductImg/orderimg6.jpg";
import product7 from "../../assets/images/attached-files/ProductImg/orderimg1.jpg";
import product8 from "../../assets/images/attached-files/ProductImg/orderimg2.jpg";


export interface OrdersItemTypes {
  name: string;
  id: number;
  product_img: Array<string>;
  order_id: string;
  order_date: string;
  user_date: string;
  order_time: string;
  payment_status: string;
  total: string;
  payment_method: string;
  order_status: string;
}

const orders: OrdersItemTypes[] = [
  {
    name:"Paul J. Friend",
    id: 1,
    product_img: [product1, product2],
    order_id: "031",
    order_date: "23-May-2019",
    order_time: "1:45 PM",
    payment_status: "Payment Failed",
    total: "$8361.93",
    user_date:"23-May-2019",
    payment_method: "Sports Leagues and Tournaments",
    order_status: "On Going",
  },
  {
    name: "Bryan J. Luellen",
    id: 2,
    product_img: [product3, product4, product5],
    order_id: "060",
    order_date: "01-Feb-2019",
    user_date:"23-May-2019",
    order_time: "12:10 PM",
    payment_status: "Unpaid",
    total: "$6219.67",
    payment_method: "Meditation and Mindfulness",
    order_status: "Completed",
  },
  {
    name: "Kathryn S. Collier",
    id: 3,
    product_img: [product5],
    order_id: "061",
    order_date: "13-Mar-2019",
    user_date:"23-May-2019",
    order_time: "2:53 AM",
    payment_status: "Payment Failed",
    total: "$6695.83",
    payment_method: "Build Resilience",
    order_status: "Completed",
  },
  {
    name: "Timothy Kauper",
    id: 4,
    product_img: [product3, product8],
    order_id: "059",
    order_date: "02-Feb-2019",
    user_date:"23-May-2019",
    order_time: "2:53 AM",
    payment_status: "Paid",
    total: "$8616.73",
    payment_method: "Rearrange & feel good",
    order_status: "Completed",
  },
  {
    name: "Zara Raws",
    id: 5,
    product_img: [product5, product7],
    order_id: "093",
    order_date: "15-May-2019",
    user_date:"23-May-2019",
    order_time: "1:52 PM",
    payment_status: "Awaiting Authorization",
    total: "$1808.61",
    payment_method: "Service Trips & Volunteer Opportunities",
    order_status: "Completed",
  },
  {
    name: "Annette P. Kelsch",
    id: 6,
    product_img: [product2],
    order_id: "064",
    order_date: "22-Feb-2019",
    user_date:"23-May-2019",
    order_time: "3:59 AM",
    payment_status: "Paid",
    total: "$9813.57",
    payment_method: "Fitness Classes",
    order_status: "Completed",
  },
  {
    id: 7,
    name: "Jenny C. Gero",
    product_img: [product4, product6],
    order_id: "010",
    order_date: "16-Jan-2019",
    user_date:"23-May-2019",
    order_time: "7:29 AM",
    payment_status: "Awaiting Authorization",
    total: "$9457.23",
    payment_method: "Rearrange & feel good",
    order_status: "On Going",
  },
  {
    id: 8,
    name: "Edward Roseby",
    product_img: [product6, product8, product3],
    order_id: "060",
    order_date: "06-Feb-2019",
    user_date:"23-May-2019",
    order_time: "5:14 AM",
    payment_status: "Unpaid",
    total: "$1054.76",
    payment_method: "Build Resilience",
    order_status: "On Going",
  },
  
];


export {orders};
