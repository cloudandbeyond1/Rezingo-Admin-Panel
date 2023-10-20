import React from "react";

import { Card, Row, Col } from "react-bootstrap";

// components
import PageTitle from "../../../../components/PageTitle";

import Statistics from "./Statistics";
import SalesChart from "./SalesChart";
import RevenueDetails from "./RevenueDetails";
import Transactions from "./Transactions";
import ProductsDetails from "./ProductsDetails";

// dummy data
import { transactions, products } from "./data";

const Dashboard = () => {
  return (
    <>
      <PageTitle
        breadCrumbItems={[
          { label: "Ecommerce", path: "/apps/ecommerce/dashboard" },
          {
            label: "Dashboard",
            path: "/apps/ecommerce/dashboard",
            active: true,
          },
        ]}
        title={"Dashboard"}
      />


      <div className="row">
        <div className="col-lg-12">
        <div className="card">
                                                <div className="card-body">
                                                    <div className="media align-items-center d-flex justify-content-between">
                                                        
                                                        <div>
                                                            <h6>Total Programs</h6>
                                                            <p className="numsize">134
                                                            </p>
                                                            
                                                           <a href="shop.html"><span className="fs-12">2 mins ago
                                                            </span></a> 
                                                        </div>
                                                        <div dir="ltr">
                                                            
                                                            <i className="fas fa-list fa-3x faicon"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

        </div>
      </div>

      <Row>
        <Col md={6} xl={3}>
        <Card className="widget-rounded-circle">
        <Card.Body>
        <Row>
            <Col>
              
            </Col>
            <Col>
              <div className="text-end">
                <h3 className="text-dark mt-1">
                  <span>
                    232
                  </span>
                </h3>
                <p className="text-muted mb-1 text-truncate">fdddd</p>
              </div>
            </Col>
          </Row>
        </Card.Body></Card>
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            variant="success"
            icon="dripicons-basket"
            stats="1845"
            description="Orders"
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            variant="info"
            icon="dripicons-store"
            stats="825"
            description="Stores"
          />
        </Col>
        <Col md={6} xl={3}>
          <Statistics
            variant="warning"
            icon="dripicons-user-group"
            stats="2430"
            description="Sellers"
          />
        </Col>
      </Row>

      <Row>
        <Col xl={8}>
          <SalesChart />
        </Col>
        <Col xl={4}>
          <RevenueDetails />
        </Col>
      </Row>

      <Row>
        <Col xl={6}>
          <Transactions transactions={transactions} />
        </Col>
        <Col xl={6}>
          <ProductsDetails products={products} />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
