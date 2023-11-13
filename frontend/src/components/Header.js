import React from 'react'
import logo from '../assets/logoDark.png'
import cart from '../assets/cart.png'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light p-0 bg-131921">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src={logo} />
    </a>
    <div className='text-white d-flex align-items-center'>
        <i className="bi bi-geo-alt text-white me-2"></i>
        <section>
            <p className='m-0 text-sm text-gray'>Hello</p>
            <p className='m-0 text-md'>Location</p>
        </section>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className='search-box text-white mx-auto'>
            <div className="left">All</div>
            <input placeholder='Search' />
            <section className='right'>
          <i className="bi bi-search"></i>
            </section>
        </div>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Return & Order</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <div className='position-relative'>
                <span className='cart-text'>0</span>
                <img src={cart} width="25" />
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header