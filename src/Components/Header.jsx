import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../index.css"
import { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'
import axios from 'axios'


const Header = () => {
  const { loggedIn } = useContext(AuthContext)
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  const logOutHandler = () => {
    axios.get("http://localhost:8000/logout")
      .then(() => {
        window.location.reload(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  return (
    <div className=''>
      <nav style={{ backgroundColor: "black" }} className=" navbar d-flex justify-content-between navbar-dark ">

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

        {loggedIn === undefined ?
          <div>
            <Link to="LoginRegister" className="btn text-white" type="submit">Login/Sign up
            
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="23" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
              </svg>
            </Link>
          </div>
          :
          <div onClick={() => { setToggle(!toggle) }} class="dropdown show">
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </svg>
            <div class=" text-white border-0 rounded-0  btn text-monospace  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

              {loggedIn}
            </div>
          </div>
        }
      </nav>



      {toggle ?
        <div className=' d-flex justify-content-end'>

          <div style={{ height: "150px", width: "270px", position: "absolute" }} className=' border   rounded container bg-dark'>

            <div className=' pt-1 pb-3 text-white font-weight-light text-center'> vaibhavkaushik@gmail.com</div>

            <Link to="/requests" className=' btn mb-2  btn-primary col-12' > Requests</Link>

            <button onClick={() => logOutHandler()} className=' btn  btn-danger col-12' > log out</button>
          </div>

        </div>
        : null}



    </div>
  )
}

export default Header