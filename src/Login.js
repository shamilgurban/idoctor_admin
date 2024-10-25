import React from 'react'

function Login() {
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
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                      <a href="Main" className="btn btn-lg btn-primary">
                        Sign in
                      </a>
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