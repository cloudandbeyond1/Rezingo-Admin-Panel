import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

// dummy data
import { products, ProductsItemTypes } from "./data1";

/* order column render */
const ProductIdColumn = ({ row }: { row: any }) => {
  return (
    <>
    {row.original.product_id}{" "}
      {/* <Link to="/apps/ecommerce/order/details" className="text-body fw-bold">
        #BM{row.original.product_id}
      </Link> */}
    </>
  );
};

/* product column render */
const ProductsImgColumn = ({ row }: { row: any }) => {
  return (
    <>
      {(row.original.product_img || []).map((img: string, index: number) => {
        return (
          <Link to="/apps/ecommerce/product-details" key={index}>
            <img src={img} alt="" height="32" />
          </Link>
        );
      })}
    </>
  );
};

/* product category column render */
const ProductCategory = ({ row }: { row: any }) => {
  return (
    <>
      {row.original.category}{" "}
      
    </>
  );
};

/* product price column render */

const ProductPriceColumn = ({ row }: { row: any }) => {
  return (
    <>
      {row.original.price}{" "}
      
    </>
  );
};


const ProductNameColumn = ({ row }: { row: any }) => {
  return (
    <>
      {row.original.Product_name}{" "}
      <small className="text-muted">{row.original.product_name}</small>
    </>
  );
};



// get all columns
const columns = [
  {
    Header: "Product ID",
    accessor: "order_id",
    Cell: ProductIdColumn,
  },
  {
    Header: "Product Image",
    accessor: "product_img",
    Cell: ProductsImgColumn,
  },
  {
    Header: "Product Name",
    accessor: "Product_name",
    Cell:ProductNameColumn
  },
  {
    Header: "Category",
    accessor: "payment_method",
    Cell: ProductCategory
    },

  {
    Header: "Price",
    accessor: "total",
    Cell:ProductPriceColumn
  },
  
];

// get pagelist to display
const sizePerPageList = [
  {
    text: "10",
    value: 10,
  },
  {
    text: "20",
    value: 20,
  },
  {
    text: "50",
    value: 50,
  },
];

// main component
const ProductsList = () => {
  const [orderList, setOrderList] = useState<ProductsItemTypes[]>(products);

  // change order status group
//   const changeOrderStatusGroup = (OrderStatusGroup: string) => {
//     let updatedData = [...products];
//     //  filter
//     updatedData =
//       OrderStatusGroup === "All"
//         ? products
//         : [...products].filter((o) =>
//             o.payment_status?.includes(OrderStatusGroup)
//           );
//     setOrderList(updatedData);
//   };

  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Ecommerce", path: "/apps/ecommerce/orders" },
          { label: "Orders", path: "/apps/ecommerce/orders", active: true },
        ]}
        title={"Product List"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                {/* <Col lg={8}>
                  <form className="row gy-2 gx-2 align-items-center justify-content-lg-start justify-content-between">
                    <div className="col-auto">
                      <div className="d-flex align-items-center w-auto">
                        <label htmlFor="status-select" className="me-2">
                          Status
                        </label>
                        <select
                          className="form-select"
                          id="status-select"
                          onChange={(e: any) =>
                            changeOrderStatusGroup(e.target.value)
                          }
                        >
                          <option value="All">All</option>
                          <option value="Paid">Paid</option>
                          <option value="Authorization">
                            Awaiting Authorization
                          </option>
                          <option value="Failed">Payment failed</option>
                          <option value="Unpaid">Unpaid</option>
                        </select>
                      </div>
                    </div>
                  </form>
                </Col> */}
{/* 
                <Col lg={4}>
                  <div className="text-lg-end mt-xl-0 mt-2">
                    <Button className="btn btn-danger mb-2 me-2">
                      <i className="mdi mdi-basket me-1"></i> Add New Order
                    </Button>
                    <Button className="btn btn-light mb-2">Export</Button>
                  </div>
                </Col> */}
              </Row>

              <Table
                columns={columns}
                data={orderList}
                // isSearchable={true}
                pageSize={10}
                sizePerPageList={sizePerPageList}
                isSortable={true}
                pagination={true}
                isSelectable={true}
                theadClass="table-light"
                searchBoxClass="mb-2"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductsList;
