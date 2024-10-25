import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <main className="d-flex w-100">
    <div className="container d-flex flex-column">
      <div className="row vh-100">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto d-table h-100">
          <div className="d-table-cell align-middle">
            <div className="text-center mt-4">
              <h1 className="h2">Xoş gəldin !</h1>
              <p className="lead">Davam etmək üçün hesabına giriş et</p>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="m-sm-3">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        className="form-control form-control-lg"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <button onClick={async (e) => {
                        e.preventDefault();

                        const response = await fetch('http://localhost:8080/api/Auth/Login', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({ email, password }),
                        });

                        if (!response.ok) {
                          alert('Login failed');
                          return;
                        }

                        const result = await response.json()
                        localStorage.setItem('token', result.token)

                        navigate('Panel')
                      }} className="btn btn-lg btn-primary">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  )
}

export default Login