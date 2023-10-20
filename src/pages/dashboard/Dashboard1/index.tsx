import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { withSwal } from "react-sweetalert2";

// components
import HyperDatepicker from "../../../components/Datepicker";

import Statistics from "./Statistics";
import RevenueChart from "./RevenueChart";
import SalesAnalyticsChart from "./SalesAnalyticsChart";
import UsersBalances from "./UsersBalances";
import RevenueHistory from "./RevenueHistory";

import { balances, revenueHistory } from "./data";

const Dashboard1 = withSwal((props: any) => {
  const { swal } = props;
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  /*
   * handle date change
   */
  const onDateChange = (date: Date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  // const lightbox_open =()=>{
  //   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  //   window.scrollTo(0, 0);
  //   document.getElementById('light').style.display = 'block';
  //   document.getElementById('fade').style.display = 'block';
  //   lightBoxVideo.play();
  // }

  // const lightbox_close =()=>{
  //   var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  //    document.getElementById('light').style.display = 'none';
  //    document.getElementById('fade').style.display = 'none';
  //    lightBoxVideo.pause();
  //     }
  
  return (
    <>
      {/* <Row>
        <Col>
          <div className="page-title-box">
            <div className="page-title-right">
              <form className="d-flex align-items-center mb-3">
                <div className="input-group input-group-sm">
                  <HyperDatepicker
                    value={selectedDate}
                    inputClass="border"
                    onChange={(date) => {
                      onDateChange(date);
                    }}
                  />
                </div>
                <button className="btn btn-blue btn-sm ms-2">
                  <i className="mdi mdi-autorenew"></i>
                </button>
                <button className="btn btn-blue btn-sm ms-1">
                  <i className="mdi mdi-filter-variant"></i>
                </button>
              </form>
            </div>
            
          </div>
        </Col>
      </Row> */}

      

                                    <div className="card mt-4">
                                        <div className="card-body py-2">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h3 className="text-bold">Welcome to Rezingo</h3>
                                                    <h6 className="text-muted">Let's get this week going!</h6>
                                                    
                                                   
                                                </div>

                                                {/* <div className="col-5 ml-auto">
                                                    <div>
                                                        <img src="assets/images/widget-img.png" alt="" className="img-fluid"/>
                                                        <div data-test-id="weeklyStreak" aria-label="Weekly Streak" className="sc-fZfSlU kvsuZZ justify-content-end"><div className="sc-fickUT flZQCy"><div data-test-id="currentDayNoWorkoutStreak" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" aria-label="Monday did not work out" className="sc-ityVrI bsSzZm">M</p></div><div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" className="sc-ityVrI dprcku">T</p></div><div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" className="sc-lnIvbd iNVSgV"></div><p data-test-id="dayStreakLetter" className="sc-ityVrI dprcku">W</p></div><div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" className="sc-ityVrI dprcku">T</p></div><div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" className="sc-ityVrI dprcku">F</p></div><div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" className="sc-ityVrI dprcku">S</p></div><div className="sc-fickUT flZQCy"><div data-test-id="upcommingDayStreak" className="sc-jDUjvq hgCRwk"></div><p data-test-id="dayStreakLetter" className="sc-ityVrI dprcku">S</p></div></div>
                                                        
                                                    </div>
                                                    
                                                </div> */}
                                            </div>
                                            
                                        </div>
                                    </div>
                                   
                                    <section>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="media align-items-center d-flex justify-content-between">
                                                            
                                                            <div>
                                                                <h5>Total Programs</h5>
                                                                <p className="numsize">134
                                                                </p>
                                                                
                                                            <a href="#"><span className="fs-12">2 mins ago
                                                                </span></a> 
                                                            </div>
                                                            <div dir="ltr">
                                                                {/* <img src="https://res.cloudinary.com/peloton-cycle/image/fetch/dpr_1.0,f_auto,q_auto,w_48/https://browse-categories-images-prod.s3.amazonaws.com/66e394fb42fd6fcec0c446ca45b740ad.png" alt=""/> */}
                                                                <i className="fas fa-list fa-3x faicon"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div className="col-md-3">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="media align-items-center d-flex justify-content-between">
                                                            
                                                            <div>
                                                                <h5>Ordered Products
                                                                </h5>
                                                                <p className="numsize">13
                                                                </p>
                                                                <a href="#"><span className="fs-12">6 Hours ago
                                                                </span></a> 
                                                            </div>
                                                            <div dir="ltr">
                                                                <i className="fas fa-warehouse fa-3x faicon"></i>
                                                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="media align-items-center d-flex justify-content-between">
                                                            
                                                            <div>
                                                                <h5>Latest Programs
                                                                </h5>
                                                                <p className="numsize">31
                                                                </p>
                                                                <a href="#"><span className="fs-12">10 mins ago
                                                                </span></a> 
                                                            </div>
                                                            <div dir="ltr" className="ml-2">
                                                                <i className="fas fa-th-list
                                                                fa-3x faicon"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="media align-items-center d-flex justify-content-between">
                                                            
                                                            <div>
                                                                <h5>Practitioners
                                                                </h5>
                                                                <p className="numsize">3
                                                                </p>
                                                                <a href="#"><span className="fs-12">8 Hours ago
                                                                </span></a> 
                                                            </div>
                                                            <div dir="ltr" className="ml-2">
                                                                <i className="fas fa-medal fa-3x faicon"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                        
                                        </div>
                                    </section>
                                    <h5 className="page-title">Enrolled Programs</h5>

                                    <div className="row mt-3">
                                        <div className="col-xl-3 p-2">

                                            <div className="product-wrap peletonWrap">
                                                <div className="row mx-auto mt-3 mb-1">                                            
                                            <h4>        Fitness Classes</h4>
                                            </div>
                                                <div className="product-img"><a href="#">

                                                    <img className="img-fluid" src="http://member.rezingo.com/assets/images/programlist/2.jpg" alt=""/>

                                                </a></div><div className="product-content"><h3>
                                                    <span className="me-1 badge bg-primary badge bg-primary">Physical Wellness</span>
                                                    <span className="me-1 badge bg-success badge bg-primary">6 Weeks</span>
                                                    <a href="#" className="view pt-1">View More</a>
                                                    

                                                    </h3></div>

                                                </div>

                                            </div>
                                        <div className="col-xl-3 p-2">

                                            <div className="product-wrap peletonWrap mb-25">
                                                <div className="row mx-auto mt-3 mb-1">
                                                    <h4>    Declutters your mind</h4>
                                                  
                                                </div>
                                                <div className="product-img"><a href="#">

                                                    <img className="img-fluid" src="http://member.rezingo.com/assets/images/programlist/14.jpg" alt=""/>

                                                </a></div><div className="product-content"><h3>
                                                    <span className="me-1 badge bg-danger badge bg-primary">Occupational Wellness</span>
                                                    <span className="me-1 badge bg-success badge bg-primary">7 Weeks</span>
                                                    <a href="#" className="view pt-1">View More</a>
                                                

                                                    </h3></div>

                                                </div>

                                            </div>                                          
                                            <div className="col-xl-3 p-2">
                                                    <div className="product-wrap peletonWrap mb-25">
                                                        <div className="row mx-auto mt-3 mb-1">
                                                            <h4>    Meditation and Mindfulness</h4>
                                                           
                                                        </div>
                                                        <div className="product-img"><a href="#">
        
                                                            <img className="img-fluid" src="http://member.rezingo.com/assets/images/programlist/9.jpg" alt=""/>
        
                                                        </a></div><div className="product-content"><h3>
                                                            <span className="me-1 badge bg-info badge bg-primary">Spiritual Wellness</span>
                                                            <span className="me-1 badge bg-success badge bg-primary">4 Weeks</span>
                                                            <a href="#" className="view pt-1">View More</a>
                                                          
        
                                                            </h3></div>
        
                                                        </div>
        
                                                    </div>
                                                    
                                                    <div className="col-xl-3 p-2">
                                                        <div className="card pb-2">
                                                            <div className="card-body">
                                                                <div className="float-right ml-2">
                                                                    <a href="#">View all</a>
                                                                </div>
                                                                <h4 className="header-title mb-2">Latest Transaction</h4>
                    
                                                                <div className="table-responsive">
                                                                    <table className="table table-centered table-hover mb-0">
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">Transaction ID</th>
                                                                                <th scope="col">Name</th>
                                                                                <th scope="col">Date</th>
                                                                                <th scope="col">status</th>
                                                                                <th scope="col">Amount</th>
                                                                                <th scope="col">Action</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    <a href="#"># XO1345</a>
                                                                                </th>
                                                                                <td>Danny Johnson</td>
                                                                                <td>26 Jan</td>
                                                                                <td>
                                                                                    <div className="badge badge-soft-primary">Confirm</div>
                                                                                </td>
                                                                                <td>$124</td>
                                                                                <td>
                                                                                    <div className="btn-group" role="group">
                                                                                        <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="tooltip" data-placement="top" title="" data-original-title="View">
                                                                                            <i className="mdi mdi-eye"></i>
                                                                                        </button>
                                                                                        <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit">
                                                                                            <i className="mdi mdi-pencil"></i>
                                                                                        </button>
                                                                                        <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete">
                                                                                            <i className="mdi mdi-trash-can"></i>
                                                                                        </button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                           
                                                                            <tr>
                                                                                <th scope="row">
                                                                                    <a href="#"># XO1347</a>
                                                                                </th>
                                                                                <td>Bennie Perez</td>
                                                                                <td>15 Jan</td>
                                                                                <td>
                                                                                    <div className="badge badge-soft-primary">Confirm</div>
                                                                                </td>
                                                                                <td>$106</td>
                                                                                <td>
                                                                                    <div className="btn-group" role="group">
                                                                                        <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="tooltip" data-placement="top" title="" data-original-title="View">
                                                                                            <i className="mdi mdi-eye"></i>
                                                                                        </button>
                                                                                        <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit">
                                                                                            <i className="mdi mdi-pencil"></i>
                                                                                        </button>
                                                                                        <button type="button" className="btn btn-outline-secondary btn-sm" data-toggle="tooltip" data-placement="top" title="" data-original-title="Delete">
                                                                                            <i className="mdi mdi-trash-can"></i>
                                                                                        </button>
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                           
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                    
                                                                
                                                            </div>
                                                        </div>
                                                    </div>
                                                       


                                    </div>

                                    <h5 className="page-title">Enrolled Program Videos</h5>
                                    <p>A selection of our best classes, available free for a limited time</p>

                                    <div className="row">
                                                 <div className="col-md-3 ">
                                                    <div className="card">
                                                       
                                                       <img className="card-img-top" src="http://member.rezingo.com/assets/images/programlist/yoga.jpg" alt="Card image cap"/>
                                                       <button data-test-id="playIcon" aria-label="Play Class" className="sc-koaXiP ghcUGy mr-4" onClick={() =>
                                                          swal.fire({
                                                            html: '<video id="VisaChipCardVideo" width="600" controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/></video>',
                                                            showCloseButton: true,showConfirmButton:false, width: 700,
                                                            padding: 10,
                                                          })
                                                        }>
                                                        <svg viewBox="0 0 28 28" width="18" height="18"><g stroke="none" stroke-width="1" fill-rule="evenodd">
                                                            <path d="M23.3870324,12.1022967 C25.1944355,13.1466985 25.1944355,14.8547015 23.3870324,15.8977033 L8.04720582,24.7541186 C6.23840269,25.7985204 4.76000013,24.9445189 4.76000013,22.8571153 L4.76000013,5.14288467 C4.76000013,3.05548105 6.23840269,2.20147957 8.04720582,3.24588138 L23.3870324,12.1022967 Z" fill="#ffffff"></path></g></svg>
                                                        </button>
                                                          <div className="card-body">
                                                          <p className="card-text font-weight-bold">10 Min yoga program</p>
                                                       </div>
                                                    </div>
                                                 </div>
                                                 <div className="col-md-3">
                                                    <div className="card">
                                                        <img className="card-img-top" src="http://member.rezingo.com/assets/images/programlist/weightstrength.jpg" alt="Card image cap"/>
                                                        <button data-test-id="playIcon" aria-label="Play Class" className="sc-koaXiP ghcUGy mr-4" onClick={() =>
                                                          swal.fire({
                                                            html: '<video id="VisaChipCardVideo" width="600" controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/></video>',
                                                            showCloseButton: true,showConfirmButton:false, width: 700,
                                                            padding: 10,
                                                          })
                                                        }>
                                                        <svg viewBox="0 0 28 28" width="18" height="18"><g stroke="none" stroke-width="1" fill-rule="evenodd">
                                                            <path d="M23.3870324,12.1022967 C25.1944355,13.1466985 25.1944355,14.8547015 23.3870324,15.8977033 L8.04720582,24.7541186 C6.23840269,25.7985204 4.76000013,24.9445189 4.76000013,22.8571153 L4.76000013,5.14288467 C4.76000013,3.05548105 6.23840269,2.20147957 8.04720582,3.24588138 L23.3870324,12.1022967 Z" fill="#ffffff"></path></g></svg>
                                                        </button>
                                                       <div className="card-body">
                                                          <p className="card-text font-weight-bold">10 Min Body Weight Strength</p>
                                                       </div>
                                                    </div>
                                                 </div>
                                                 <div className="col-md-3">
                                                    <div className="card">
                                                        <img className="card-img-top" src="http://member.rezingo.com/assets/images/programlist/leg.jpg" alt="Card image cap"/>
                                                        <button data-test-id="playIcon" aria-label="Play Class" className="sc-koaXiP ghcUGy mr-4" onClick={() =>
                                                          swal.fire({
                                                            html: '<video id="VisaChipCardVideo" width="600" controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/></video>',
                                                            showCloseButton: true,showConfirmButton:false, width: 700,
                                                            padding: 10,
                                                          })
                                                        }>
                                                        <svg viewBox="0 0 28 28" width="18" height="18"><g stroke="none" stroke-width="1" fill-rule="evenodd">
                                                            <path d="M23.3870324,12.1022967 C25.1944355,13.1466985 25.1944355,14.8547015 23.3870324,15.8977033 L8.04720582,24.7541186 C6.23840269,25.7985204 4.76000013,24.9445189 4.76000013,22.8571153 L4.76000013,5.14288467 C4.76000013,3.05548105 6.23840269,2.20147957 8.04720582,3.24588138 L23.3870324,12.1022967 Z" fill="#ffffff"></path></g></svg>
                                                        </button>
                                                       <div className="card-body">
                                                          <p className="card-text font-weight-bold">10 Min glutes and legs strength</p>
                                                       </div>
                                                    </div>
                                                 </div>
                                                 <div className="col-md-3">
                                                    <div className="card">
                                                        <img className="card-img-top" src="http://member.rezingo.com/assets/images/programlist/Spinel.jpg" alt="Card image cap"/>
                                                        <button data-test-id="playIcon" aria-label="Play Class" className="sc-koaXiP ghcUGy mr-4" onClick={() =>
                                                          swal.fire({
                                                            html: '<video id="VisaChipCardVideo" width="600" controls><source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/></video>',
                                                            showCloseButton: true,showConfirmButton:false, width: 700,
                                                            padding: 10,
                                                          })
                                                        }>
                                                        <svg viewBox="0 0 28 28" width="18" height="18"><g stroke="none" stroke-width="1" fill-rule="evenodd">
                                                            <path d="M23.3870324,12.1022967 C25.1944355,13.1466985 25.1944355,14.8547015 23.3870324,15.8977033 L8.04720582,24.7541186 C6.23840269,25.7985204 4.76000013,24.9445189 4.76000013,22.8571153 L4.76000013,5.14288467 C4.76000013,3.05548105 6.23840269,2.20147957 8.04720582,3.24588138 L23.3870324,12.1022967 Z" fill="#ffffff"></path></g></svg>
                                                        </button>
                                                       <div className="card-body">
                                                          <p className="card-text font-weight-bold">10 Min Spinal mobility</p>
                                                       </div>
                                                    </div>
                                                 </div>
                                              </div>



                                              {/* <div id="light">
                        <a className="boxclose" id="boxclose" onClick={lightbox_close}></a>
                        <video id="VisaChipCardVideo" width="600" controls>
                            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                           
                          </video>
                      </div>
                      
                      <div id="fade" onClick={lightbox_close}></div> */}

       {/* <Row>
        <Col lg={4}>
          <RevenueChart />
        </Col>
        <Col lg={8}>
          <SalesAnalyticsChart />
        </Col>
      </Row> */}

      <Row>
        <Col xl={6}>
          <UsersBalances balances={balances} />
        </Col>
        <Col xl={6}>
          <RevenueHistory balances={balances} />
        </Col>
      </Row>
    </>
  );
});

export default Dashboard1;


