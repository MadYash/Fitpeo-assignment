import React from "react";
import { Chart } from "./Chart";
import { PieChart } from "react-minimal-pie-chart";

const Profile = () => {
  return (
    <>
      <main id="main" className="main">
        <div className="pagetitle row">
          <div className="col-md-6">
            <h1>Dashboard</h1>
            <nav>
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </nav>
          </div>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-xxl-3 col-md-3">
                  <div className="card info-card sales-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Articles <span>| Today</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-cart"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{"169"}</h6>
                          <span className="text-success small pt-1 fw-bold">
                            12%
                          </span>
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-md-3">
                  <div className="card info-card revenue-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Category <span>| This Month</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{"179"}</h6>
                          <span className="text-success small pt-1 fw-bold">
                            8%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            increase
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-md-3">
                  <div className="card info-card customers-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Tags <span>| This Year</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          <h6>{"112"}</h6>
                          <span className="text-danger small pt-1 fw-bold">
                            12%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            decrease
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xxl-3 col-md-3">
                  <div className="card info-card customers-card">
                    <div className="card-body">
                      <h5 className="card-title">
                        Our Authors <span>| This Year</span>
                      </h5>

                      <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                          <i className="bi bi-people"></i>
                        </div>
                        <div className="ps-3">
                          <h6>0</h6>
                          <span className="text-danger small pt-1 fw-bold">
                            12%
                          </span>{" "}
                          <span className="text-muted small pt-2 ps-1">
                            decrease
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Chart />
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="card recent-sales overflow-auto">
                    <div className="card-body">
                      <h5 className="card-title">
                        Recent News <span>| Today</span>
                      </h5>

                      <table className="table table-borderless datatable">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">
                              <a href="/">/2457</a>
                            </th>
                            <td>Brandon Jacob</td>
                            <td>
                              <a href="/" className="text-primary">
                                At praesentium minu
                              </a>
                            </td>
                            <td>$64</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">/2147</a>
                            </th>
                            <td>Bridie Kessler</td>
                            <td>
                              <a href="/" className="text-primary">
                                Blanditiis dolor omnis similique
                              </a>
                            </td>
                            <td>$47</td>
                            <td>
                              <span className="badge bg-warning">Pending</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">/2049</a>
                            </th>
                            <td>Ashleigh Langosh</td>
                            <td>
                              <a href="/" className="text-primary">
                                At recusandae consectetur
                              </a>
                            </td>
                            <td>$147</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">/2644</a>
                            </th>
                            <td>Angus Grady</td>
                            <td>
                              <a href="/" className="text-primar">
                                Ut voluptatem id earum et
                              </a>
                            </td>
                            <td>$67</td>
                            <td>
                              <span className="badge bg-danger">Rejected</span>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <a href="/">/2644</a>
                            </th>
                            <td>Raheem Lehner</td>
                            <td>
                              <a href="/" className="text-primary">
                                Sunt similique distinctio
                              </a>
                            </td>
                            <td>$165</td>
                            <td>
                              <span className="badge bg-success">Approved</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">

            <PieChart
                data={[
                  { title: "One", value: 10, color: "#E38627" },
                  { title: "Two", value: 15, color: "#C13C37" },
                  { title: "Three", value: 20, color: "#6A2135" },
                ]}
                />
                </div>
              
            <div className="col-lg-4">
              
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    Recent Activity <span>| Today</span>
                  </h5>

                  <div className="activity">
                    <div className="activity-item d-flex">
                      <div className="activite-label">32 min</div>
                      <i className="bi bi-circle-fill activity-badge text-success align-self-start"></i>
                      <div className="activity-content">
                        Quia quae rerum{" "}
                        <a href="/" className="fw-bold text-dark">
                          explicabo officiis
                        </a>{" "}
                        beatae
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">56 min</div>
                      <i className="bi bi-circle-fill activity-badge text-danger align-self-start"></i>
                      <div className="activity-content">
                        Voluptatem blanditiis blanditiis eveniet
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 hrs</div>
                      <i className="bi bi-circle-fill activity-badge text-primary align-self-start"></i>
                      <div className="activity-content">
                        Voluptates corrupti molestias voluptatem
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">1 day</div>
                      <i className="bi bi-circle-fill activity-badge text-info align-self-start"></i>
                      <div className="activity-content">
                        Tempore autem saepe{" "}
                        <a href="/" className="fw-bold text-dark">
                          occaecati voluptatem
                        </a>{" "}
                        tempore
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">2 days</div>
                      <i className="bi bi-circle-fill activity-badge text-warning align-self-start"></i>
                      <div className="activity-content">
                        Est sit eum reiciendis exercitationem
                      </div>
                    </div>

                    <div className="activity-item d-flex">
                      <div className="activite-label">4 weeks</div>
                      <i className="bi bi-circle-fill activity-badge text-muted align-self-start"></i>
                      <div className="activity-content">
                        Dicta dolorem harum nulla eius. Ut quidem quidem sit
                        quas
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
