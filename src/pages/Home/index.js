export default function index() {
  return (
    <>
      <div className="main-wrapper overflow-hidden">
    <div className="auth-layout">
        <header id="header">
            <div className="container-content">
                <ul className="main-menu">
                    <li>
                        <a href="index.html" className="active">Track & Receive</a>
                    </li>
                    <li>
                        <a href="#">Send</a>
                    </li>
                    <li>
                        <a href="#">Help</a>
                    </li>
                    <li className="menu-item  menu-item-has-children">
                        <a href="#">More</a>
                        <ul className="sub-menu">
                            <li className="menu-item">
                                <a href="#">National Address</a>
                            </li>
                            <li className="menu-item">
                                <a href="#">Services</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="bg-layer"></div>
                <div className="hamburger hamburger--spin unactive">
                    <div className="hamburger-box">
                        <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
        </header>
        <div className="overlay-menu"></div>
        <div className="container-fluid">
            <div className="row align-items-stretch">
                <div className="col-xl-5">
                    <div className="logo-section">
                       
                    </div>
                </div>
                <div className="col-xl-7">
                    <div className="info-section position-relative">
                        <div className="auth-className=m">
                            <div className="w-100">
                                <h2>Welcome to <span>SPL</span>! </h2>
                                <h3>Sign In to Continue</h3>
                                <p>Don’t have an account? <a href="./sign-up.html">Create One Now</a>
                                    It takes less than a minute</p>
                                <div id="login-form">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        
                                        <div className="invalid-feedback">
                                            User Name field is required
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        
                                        <div className="invalid-feedback">
                                            Password field is required
                                        </div>
                                    </div>
                                    <a className="note" href="forget-password.html">Forgot Password?</a>
                                    <div className="text-center">
                                        <button className="btn btn-primary" onclick="loginUser()">Sign in</button>
                                    </div>
                                    <p id="error-message" className="text-center error-message" style={{display: "none"}}></p>
                                </div>
                                <ul className="list-unstyled d-flex align-items-center justify-content-center gap-5">
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="footer">
    <div className="container-content footer-container">
    </div>
</div>
    </>
  );
}
