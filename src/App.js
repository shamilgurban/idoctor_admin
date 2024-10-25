import React, { useState } from "react";
import Modal from "react-modal"; // For displaying PDFs in a modal
import PDFViewer from "./PDFViewer";
import "./App";

Modal.setAppElement("#root"); // Set the root element for accessibility

function App() {
  // State to track the PDF URL and modal visibility
  const [isOpen, setIsOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  // Function to open the PDF viewer
  const openPDF = (url) => {
    setPdfUrl(url);
    setIsOpen(true);
  };

  // Function to close the PDF viewer
  const closePDF = () => {
    setIsOpen(false);
    setPdfUrl("");
  };
  
  return (
    <div className="wrapper">
    <nav id="sidebar" className="sidebar js-sidebar">
      <div className="sidebar-content js-simplebar">
        <a className="sidebar-brand" href="">
          <span className="align-middle">iDoktor</span>
        </a>
        <ul className="sidebar-nav">
          <li className="sidebar-header"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>  Dashboard</li>
        </ul>
      </div>
    </nav>
    <div className="main">
      <nav className="navbar navbar-expand navbar-light navbar-bg">
        <a className="sidebar-toggle js-sidebar-toggle">
          <i className="hamburger align-self-center"></i>
        </a>
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
            <a
              className="nav-link dropdown-toggle d-none d-sm-inline-block"
              href="#"
              data-bs-toggle="dropdown"
            >
              <span className="text-dark">Admin</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="pages-profile.html">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Log out
              </a>
            </div>
          </ul>
        </div>
      </nav>
      <main className="content">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12 col-lg-8 col-xxl-9 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h5 className="card-title mb-0">Son Müraciətlər</h5>
                </div>
                <table className="table table-hover my-0">
                  <thead>
                    <tr>
                      <th>Ad Soyad</th>
                      <th className="d-none d-xl-table-cell">Müraciət tarixi</th>
                      <th className="d-none d-xl-table-cell">Sənəd</th>
                      <th className="d-none d-md-table-cell" />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Nurlan İbrahimov</td>
                      <td className="d-none d-xl-table-cell">24/10/2024</td>
                      <td
                          className="d-none d-xl-table-cell"
                          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                          onClick={() => openPDF("/path-to-your-pdf/Test.pdf")}
                        >
                          Test.pdf
                        </td>
                      <td>
                        <button className="btn btn-success btn-sm">Accept</button>
                        <button className="btn btn-danger btn-sm">Decline</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nurlan İbrahimov</td>
                      <td className="d-none d-xl-table-cell">24/10/2024</td>
                      <td
                          className="d-none d-xl-table-cell"
                          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                          onClick={() => openPDF("/path-to-your-pdf/Test.pdf")}
                        >
                          Test.pdf
                        </td>
                      <td>
                        <button className="btn btn-success btn-sm">Accept</button>
                        <button className="btn btn-danger btn-sm">Decline</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nurlan İbrahimov</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td
                          className="d-none d-xl-table-cell"
                          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                          onClick={() => openPDF("/path-to-your-pdf/Test.pdf")}
                        >
                          Test.pdf
                        </td>
                      <td>
                        <button className="btn btn-success btn-sm">Accept</button>
                        <button className="btn btn-danger btn-sm">Decline</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nurlan İbrahimov</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td
                          className="d-none d-xl-table-cell"
                          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                          onClick={() => openPDF("/path-to-your-pdf/Test.pdf")}
                        >
                          Test.pdf
                        </td>
                      <td>
                        <button className="btn btn-success btn-sm">Accept</button>
                        <button className="btn btn-danger btn-sm">Decline</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nurlan İbrahimov</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td
                          className="d-none d-xl-table-cell"
                          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                          onClick={() => openPDF("/path-to-your-pdf/Test.pdf")}
                        >
                          Test.pdf
                        </td>
                      <td>
                        <button className="btn btn-success btn-sm">Accept</button>
                        <button className="btn btn-danger btn-sm">Decline</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nurlan İbrahimov</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td
                          className="d-none d-xl-table-cell"
                          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                          onClick={() => openPDF("/path-to-your-pdf/Test.pdf")}
                        >
                          Test.pdf
                        </td>
                      <td>
                        <button className="btn btn-success btn-sm">Accept</button>
                        <button className="btn btn-danger btn-sm">Decline</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nurlan İbrahimov</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td
                          className="d-none d-xl-table-cell"
                          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                          onClick={() => openPDF("/path-to-your-pdf/Test.pdf")}
                        >
                          Test.pdf
                        </td>
                      <td>
                        <button className="btn btn-success btn-sm">Accept</button>
                        <button className="btn btn-danger btn-sm">Decline</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Nurlan İbrahimov</td>
                      <td className="d-none d-xl-table-cell">01/01/2023</td>
                      <td
                          className="d-none d-xl-table-cell"
                          style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                          onClick={() => openPDF("/path-to-your-pdf/Test.pdf")}
                        >
                          Test.pdf
                        </td>
                      <td>
                        <button className="btn btn-success btn-sm">Accept</button>
                        <button className="btn btn-danger btn-sm">Decline</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-12 col-lg-4 col-xxl-3 d-flex">
              <div className="card flex-fill w-100">
                <div className="card-header">
                  <h5 className="card-title mb-0">Aylıq Müraciətlər</h5>
                </div>
                <div className="card-body d-flex w-100">
                  <div className="align-self-center chart chart-lg">
                    <canvas id="chartjs-dashboard-bar" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
         {/* Modal to show the PDF */}
         <Modal isOpen={isOpen} onRequestClose={closePDF}>
        <PDFViewer fileUrl={pdfUrl} />
        <button onClick={closePDF}>Close</button>
      </Modal>
  </div>

  );
}

export default App;
