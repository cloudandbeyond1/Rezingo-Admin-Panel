import React from "react";
import { Table } from "react-bootstrap";
import classNames from "classnames";

interface AboutProps {
  projectDetails: {
    id: number;
    client: string;
    name: string;
    startDate: string;
    dueDate: string;
    status: string;
  }[];
}

const About = ({ projectDetails }: AboutProps) => {
  return (
    <>
      
      <h5 className="mb-3 mt-4 text-uppercase">
        <i className="mdi mdi-cards-variant me-1"></i> Program
      </h5>
      <div className="table-responsive">
        <Table responsive className="table table-borderless mb-0">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Program Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Practitioner name</th>
            </tr>
          </thead>
          <tbody>
            {(projectDetails || []).map((project, index) => {
              return (
                <tr key={index}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.startDate}</td>
                  <td>{project.dueDate}</td>
                  <td>
                    <span
                      className={classNames("badge", {
                        "bg-info": project.status === "Work in Progress",
                        "bg-danger": project.status === "Pending",
                        "bg-success": project.status === "Done",
                    
                      })}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td>{project.client}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default About;
