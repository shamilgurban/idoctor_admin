import React, { useEffect, useState } from "react";
import { FaSignOutAlt } from "react-icons/fa"; // Import the logout icon
import fetchWithToken from './fetchWithToken';
import { useNavigate } from 'react-router-dom';

function Panel() {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await fetchWithToken('http://94.20.82.6:8080/api/Doctors/GetUnverifiedDoctors', {
    method: 'GET'
  });

  if (!response.ok) {
    alert('Error occured while fetching unverified doctors');
    return;
  }

  const doctors = await response.json()
  setDoctors(doctors)
}

  const acceptDoctor = async (id) => {
    const response = await fetchWithToken(`http://94.20.82.6:8080/api/Doctors/VerifyDoctor/${id}`, {
      method: 'PUT'
    });

    if (response.ok) {
      fetchData();
      alert('Doctor accepted')
    }
    else {
      alert('Error occured')
    }
  }

  const declineDoctor = async (id) => {
    const response = await fetchWithToken(`http://94.20.82.6:8080/api/Doctors/RejectDoctor/${id}`, {
      method: 'PUT'
    });

    if (response.ok) {
      fetchData();
      alert('Doctor declined')
    }
    else {
      alert('Error occured')
    }
  }
  

  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement logout functionality here
    localStorage.removeItem('token')
    navigate('/')
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
        <div className="navbar-collapse collapse">
          <ul className="navbar-nav navbar-align">
              {/* Admin and Log out button */}
              <li className="nav-item d-flex align-items-center">
                <span className="nav-link d-none d-sm-inline-block text-dark me-2">
                  ADMIN
                </span>
                <button className="btn" onClick={handleLogout} title="Log out">
                  <FaSignOutAlt size={24} className="text-dark" />
                </button>
              </li>
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
                    {doctors.map(doctor => {
                      return (<tr key={doctor.id}>
                      <td>{doctor.name} {doctor.surname}</td>
                      <td className="d-none d-xl-table-cell">{Date.now()}</td>
                      <td className="d-none d-xl-table-cell">
                          <a href={`http://94.20.82.6:8080/${doctor.verificationDocumentPath}`} target="_blank" rel="noopener noreferrer">Verifikasiya sənədi</a>
                      </td>
                      <td>
                        <button onClick={() => acceptDoctor(doctor.id)} className="btn btn-success btn-sm">Accept</button>
                        <button onClick={() => declineDoctor(doctor.id)} style={{ margin: "5px"}} className="btn btn-danger btn-sm">Decline</button>
                      </td>
                    </tr>)
                    })}
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
  </div>

  );
}

export default Panel;