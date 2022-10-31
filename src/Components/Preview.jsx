import React from 'react'

const preview = (props) => {

  // title: "", description: "", amount: "", time: ""
  return (
    <>

      <br />

      <div className=' text-center'>
        <div>{props.basicState.title}</div>
        <div>{props.basicState.subTitle}</div>
      </div>

      <br />
      <br />


      <div className=' d-flex justify-content-around'>
        <div style={{ height: "25rem" }} className=' w-75  container border'>

        </div>
        <div className=' container  w-50 '>
          <br />
          <div style={{ height: "2%" }} className="progress rounded-0">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <h1>$0</h1>
          <h6 className='text-muted'>pledged of {props.basicState.fundingGoals}</h6>

          <h1>0</h1>
          <h6 className='text-muted'>backers</h6>

          <h1>0</h1>
          <h6 className='text-muted'>Milestone reached of 10</h6>

          <br />
          <br />
          <button className='col-12 btn btn-success rounded-0'>Back this project</button>
        </div>
      </div>

      <div>
        <svg className=' container' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag-fill" viewBox="0 0 16 16">
          <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
        <span className='p-1 text-muted'>{props.basicState.catagory}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
          <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
          <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
        </svg>
        <span className='p-1 text-muted'>{props.basicState.subCatagory}</span>
      </div>

      <br /><br /><br /><br />

      <div className=' d-flex justify-content-around'>
        <div className=' w-50 container'>
          <div >
            <h4>Story</h4>
            <h6>{props.basicState.story}</h6>
          </div>
          <div>
            <h4>Risks and challenges</h4>
            <h6>{props.basicState.risks}</h6>
          </div>
        </div>
        <div className='w-25 container'>
          <div className="card" style={{ width: "21rem" }}>
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5>name</h5>
              <h6>4 create · 10 backed</h6>
            </div>
          </div>
          <br /><br /> <br />
          <h5>Support</h5>
          <div className="card" style={{ width: "21rem" }}>
            <br />
            <h5 className=' text-center'>Make any pledge without reward</h5>
            <div className="card-body">
              <div className="input-group ">
                <select className=" col-4 form-select" id="inputGroup-sizing-sm">
                  <option value="">btc</option>
                  <option value="">etc</option>
                  <option value="">doge</option>
                  <option value="">enu-shiba</option>
                </select>
                <input type="text" className="form-control col-8" />
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "21rem" }}>
            <h5 className=' text-center'>pledge above 1 btc </h5>
            <div className="card-body">
              <h5 className=' text-center'>Rewards rewards</h5>
              <h5 className=' text-center'>Rewards rewards</h5>
              <h5 className=' text-center'>Rewards rewards</h5>
              <h5 className=' text-center'>Rewards rewards</h5>
            </div>
          </div>
          {/* {props.addMiles.map((item,index)=><div>{item.title} {index}{item.description} {item.amount}</div>)} */}

          <br />
          <h5>Milestones</h5>

          <div className="card" style={{ width: "21rem" }}>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
        

      
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <br /><br />
    </>
  )
}

export default preview