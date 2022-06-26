import React from "react";

const NavBar = () => {

    return(
        <div className="navBar">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-color">
          <div className="container-fluid">
           <a className="navbar-brand" href="/">Speed-O-Type</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item nav-pages">
                <a className="nav-link active nav-links" aria-current="page" href="/">Typing</a>
              </li>
              <li className="nav-item nav-pages">
                <a className="nav-link active nav-links" href="/">Ranking</a>
              </li>
              <li className="nav-item nav-pages">
               <a className="nav-link active nav-links" aria-current="page" href="/">About</a>
              </li>
              <li className="nav-item nav-pages">
                <a className="nav-link active nav-links" aria-current="page" href="/">Login</a>
              </li>
              <li className="nav-item nav-pages register-page">
                <button type="button" className="btn btn-warning register-btn"><a className="nav-link active" aria-current="page" href="/">Register</a></button>
              </li>
            </ul>
       </div>
    </div>
</nav>

        </div>
    )
}

export default NavBar;