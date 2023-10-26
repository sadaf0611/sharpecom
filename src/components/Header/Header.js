import React from 'react'
import './Header.module.css'

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
            <a style={{color:'white'}} className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active bg-cl" style={{color:'white'}} aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                <a style={{color:'white'}} className="nav-link" href="#">Link</a>
                </li>      
            </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
