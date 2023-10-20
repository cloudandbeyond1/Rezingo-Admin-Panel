import React from "react";
import { Card, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface UsersBalancesProps {
  balances: {
    id: number;
    avatar: string;
    name: string;
    currency: string;
    balance: number;
    orders: string;
    orders1: string;
  }[];
}

const UsersBalances = ({ balances }: UsersBalancesProps) => {
  return (
    <>
      <Card>
        <Card.Body>
          <Dropdown className="float-end" align="end">
            <Dropdown.Toggle as="a" className="card-drop cursor-pointer">
              <i className="mdi mdi-dots-vertical"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Edit Report</Dropdown.Item>
              <Dropdown.Item>Export Report</Dropdown.Item>
              <Dropdown.Item>Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <h4 className="header-title mb-3">Top 5 Practitioners</h4>
          <div className="table-responsive">
            <table className="table table-borderless table-hover table-nowrap table-centered m-0">
              <thead className="table-light">
                <tr>
                  <th colSpan={2}>Profile</th>
                  <th>Practitioner Rating</th>
                  <th>Latest Programs</th>
                  <th>Active Programs</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {(balances || []).map((item, i) => {
                  return (
                    <tr key={i}>
                      <td style={{ width: "36px" }}>
                        <img
                          src={item.avatar}
                          alt="contact-img"
                          title="contact-img"
                          className="rounded-circle avatar-sm"
                        />
                      </td>

                      <td>
                        <h5 className="m-0 fw-normal">{item.name}</h5>
                        <p className="mb-0 text-muted">
                        </p>
                      </td>

                      <td>
                        <i
                          className={classNames("mdi", "text-primary", {
                            "mdi-currency-btc": item.currency === "BTC",
                            "mdi-currency-eth": item.currency === "ETH",
                            "mdi-currency-eur": item.currency === "EUR",
                            "mdi-currency-cny": item.currency === "CNY",
                          })}
                        ></i>{" "}
                        {item.currency}<small> </small><small>★★★★★</small>
                      </td>

                      <td>{item.balance} </td>

                      <td>{item.orders1}</td>

                      <td>
                        <Link to="#" className="btn btn-xs btn-light">
                          <i className="mdi mdi-plus"></i>
                        </Link>
                        <Link to="#" className="btn btn-xs btn-danger">
                          <i className="mdi mdi-minus"></i>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default UsersBalances;
