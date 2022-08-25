import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container-fluid ">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand mt-2 mt-lg-0 text-white header" to="/">
            <i class="fas fa-wind"></i>  Blog App
          </Link>

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link text-white header" to="/create">Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white header" to="/blogs">Blogs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white header" to="/about">About</Link>
            </li>
          </ul>

        </div>

        <div className="d-flex align-items-center">
          <div className="dropdown">
            <a
              className="btn dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              type="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu "
            >
              <li>
                <a className="dropdown-item" href="#">My profile</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Settings</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Header

