import React, { useState } from 'react'

const Nextheader = (props) => {

  const [buttonTrigger, setButtonTrigger] = useState(true);

  return (
    <div className=' sticky-top'>
      <nav className="navbar position-sticky d-flex justify-content-between navbar-dark bg-white ">

        <div>
          <a className="navbar-brand text-black-50" href="#">CrowdFunding</a>
        </div>

      <div>
        <button  onClick={props.onClickhandler} className=' btn btn-success px-5' >Save</button>
          {buttonTrigger === true ? <button onClick={() =>{ props.setnavBarCol({ curr: "7",prev:props.navBarCol.prev });setButtonTrigger(false)}} className="btn  btn-outline-success mx-3 px-5" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className=" bi bi-eye" viewBox="0 1 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" /></svg>
            <span className=' px-1'>Preview</span>
          </button> :
            <button onClick={() =>{ props.setnavBarCol({ curr: props.navBarCol.prev,prev:props.navBarCol.prev });setButtonTrigger(true)}} className="btn  btn-outline-success mx-3 px-5" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className=" bi bi-eye" viewBox="0 1 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" /></svg>
              <span className=' px-1'>Exit Preview</span>
            </button>
   

          }
        </div>
      </nav>
    </div>
  )
}

export default Nextheader