import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"


const Header = () => {

  return (
    <div>
      <nav className="navbar d-flex justify-content-between navbar-dark bg-dark">

        <div>
          <ul className="navbar-nav nav ">
            <li className="nav-item">
              <Link className="nav-link" to="/createproject">Start a Fundraiser</Link>
            </li>
          </ul>
        </div>

        <div>
          <a className="navbar-brand" href="#">CrowdFunding</a>
        </div>
        <div>
          <Link to="LoginRegister" className="btn btn-outline-success" type="submit">Login/Sign up</Link>
        </div>

      </nav>
    </div>
  )
}

export default Header