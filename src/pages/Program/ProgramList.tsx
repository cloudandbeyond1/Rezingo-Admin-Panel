import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button } from "react-bootstrap";
import classNames from "classnames";

// components
import PageTitle from "../../components/PageTitle";
import Table from "../../components/Table";

// dummy data
import { orders, OrdersItemTypes } from "./DataProgram";


/* order column render */
const OrderColumn = ({ row }: { row: any }) => {
  return (
    <>
      <Link to="/apps/ecommerce/order/details" className="text-body fw-bold">
        #RZPRG{row.original.order_id}
      </Link>
    </>
  );
};


/* product column render */
const ProductsColumn = ({ row }: { row: any }) => {
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


/* orderdate column render */
const OrderDateColumn = ({ row }: { row: any }) => {
  return (
    <>
      {row.original.order_date}{" "}
      
    </>
  );
};

/* payment column render */
const PaymentStatusColumn = ({ row }: { row: any }) => {
  return (
    <>
      <h5>
        <span
          className={classNames("badge", {
            "bg-soft-success text-success":
              row.original.payment_status === "Easy",
            "bg-soft-danger text-danger":
              row.original.payment_status === "Hard",
            "bg-soft-info text-info": row.original.payment_status === "Unpaid",
            "bg-soft-warning text-warning":
              row.original.payment_status === "Moderate",
          })}
        >
          {row.original.payment_status === "Easy"}
          {row.original.payment_status === "Hard"}
          
          {row.original.payment_status === "Moderate"}
          {row.original.payment_status}
        </span>
      </h5>
    </>
  );
};

/* status column render */
const StatusColumn = ({ row }: { row: any }) => {
  return (
    <>
      <h5>
        
          {row.original.order_status}
        
      </h5>
    </>
  );
};

/* action column render */
const ActionColumn = () => {
  return (
    <>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-eye"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-square-edit-outline"></i>
      </Link>
      <Link to="#" className="action-icon">
        {" "}
        <i className="mdi mdi-delete"></i>
      </Link>
    </>
  );
};

// get all columns
const columns = [
  {
    Header: "Program ID",
    accessor: "order_id",
    Cell: OrderColumn,
  },
  {
    Header: "Name",
    accessor: "payment_method",
  },
  {
    Header: "Images",
    accessor: "product_img",
    Cell: ProductsColumn,
  },
  {
    Header: "Week",
    accessor: "order_date",
    Cell: OrderDateColumn,
  },
  {
    Header: "Level",
    accessor: "payment_status",
    Cell: PaymentStatusColumn,
  },
  
  
  {
    Header: "Categories",
    accessor: "order_status",
    Cell: StatusColumn,
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
const Orders = () => {
  const [orderList, setOrderList] = useState<OrdersItemTypes[]>(orders);

  // change order status group
  const changeOrderStatusGroup = (OrderStatusGroup: string) => {
    let updatedData = [...orders];
    //  filter


    updatedData =
      OrderStatusGroup === "All"
        ? orders
        : [...orders].filter((o) =>
            o.order_status?.includes(OrderStatusGroup)
          );
    setOrderList(updatedData);
  };


  return (
    <>
      <PageTitle
      
      
        breadCrumbItems={[
          { label: "Ecommerce", path: "/apps/ecommerce/orders" },
          { label: "Orders", path: "/apps/ecommerce/orders", active: true },
        ]}
        title={"Programs"}
      />

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Row className="align-items-center">
                <Col lg={8}>
                  <form className="row gy-2 mb-3 gx-2 align-items-center justify-content-lg-start justify-content-between">
                    <div className="col-auto">
                      <div className="d-flex align-items-center w-auto">
                        <label htmlFor="status-select" className="me-2">
                          Categories
                        </label>
                        <select
                          className="form-select"
                          id="status-select"
                          onChange={(e: any) =>
                            changeOrderStatusGroup(e.target.value)
                          }
                        >
                          
                          <option value="All">All</option>
                          <option value="Occupational">Occupational</option>
                          <option value="Intellectual">
                          Intellectual
                          </option>
                          <option value="Environmental">Environmental</option>
                          <option value="Financial">Financial</option>
                          <option value="Social">Social</option>
                          <option value="Physical">Physical</option>
                        </select>
                        </div>
                      </div>
                    
                  </form>
                </Col>

                {/* <Col lg={4}>
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
                isSearchable={true}
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

export default Orders;
