import product1 from "../../assets/images/attached-files/ProductImg/orderimg1.jpg";
import product2 from "../../assets/images/attached-files/ProductImg/orderimg2.jpg";
import product3 from "../../assets/images/attached-files/ProductImg/orderimg3.jpg";
import product4 from "../../assets/images/attached-files/ProductImg/orderimg4.jpg";
import product5 from "../../assets/images/attached-files/ProductImg/orderimg5.jpg";
import product6 from "../../assets/images/attached-files/ProductImg/orderimg6.jpg";
import product7 from "../../assets/images/attached-files/ProductImg/orderimg1.jpg";
import product8 from "../../assets/images/attached-files/ProductImg/orderimg2.jpg";


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

const orders: OrdersItemTypes[] = [
  {
    id: 1,
    product_img: [product1, product2],
    order_id: "031",
    order_date: "23-May-2019",
    order_time: "1:45 PM",
    payment_status: "Payment Failed",
    total: "$8361.93",
    payment_method: "Visa",
    order_status: "Processing",
  },
  {
    id: 2,
    product_img: [product3, product4, product5],
    order_id: "060",
    order_date: "01-Feb-2019",
    order_time: "12:10 PM",
    payment_status: "Unpaid",
    total: "$6219.67",
    payment_method: "Credit Card",
    order_status: "Shipped",
  },
  {
    id: 3,
    product_img: [product5],
    order_id: "061",
    order_date: "13-Mar-2019",
    order_time: "2:53 AM",
    payment_status: "Payment Failed",
    total: "$6695.83",
    payment_method: "Paypal",
    order_status: "Shipped",
  },
  {
    id: 4,
    product_img: [product3, product8],
    order_id: "059",
    order_date: "02-Feb-2019",
    order_time: "2:53 AM",
    payment_status: "Paid",
    total: "$8616.73",
    payment_method: "Visa",
    order_status: "Delivered",
  },
  {
    id: 5,
    product_img: [product5, product7],
    order_id: "093",
    order_date: "15-May-2019",
    order_time: "1:52 PM",
    payment_status: "Awaiting Authorization",
    total: "$1808.61",
    payment_method: "Paypal",
    order_status: "Shipped",
  },
  {
    id: 6,
    product_img: [product2],
    order_id: "064",
    order_date: "22-Feb-2019",
    order_time: "3:59 AM",
    payment_status: "Paid",
    total: "$9813.57",
    payment_method: "Paypal",
    order_status: "Delivered",
  },
  {
    id: 7,
    product_img: [product4, product6],
    order_id: "010",
    order_date: "16-Jan-2019",
    order_time: "7:29 AM",
    payment_status: "Awaiting Authorization",
    total: "$9457.23",
    payment_method: "Mastercard",
    order_status: "Delivered",
  },
  {
    id: 8,
    product_img: [product6, product8, product3],
    order_id: "060",
    order_date: "06-Feb-2019",
    order_time: "5:14 AM",
    payment_status: "Unpaid",
    total: "$1054.76",
    payment_method: "Payoneer",
    order_status: "Processing",
  },
  
];


export {orders};
