import React, { useState } from 'react'
import logo1 from '../mockImage/profile.png'
import project from '../mockImage/project1.jpg'



const Preview = (props) => {

  const [index1, setindex1] = useState(0)
  const [index2, setindex2] = useState(0)

  return (
    <>
      <br />
      <div className=' text-center'>
        <h3 className=' font-weight-normal'>{props.basicState.title}</h3>
        <h5 className=' text-muted font-weight-normal'>{props.basicState.subTitle}</h5>
      </div>


      <br />


      <div className=' d-flex justify-content-around'>
        <div style={{ height: "25rem" }} className=' w-75  container '>
          <img style={{ height: "400px" }} src={props.test} className=" img-fluid w-75" />
        </div>
        <div className=' container  w-50 '>
          <br />
          <div style={{ height: "2%" }} className="progress rounded-0">
            <div className="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

          <h1> 1 <svg fill='black' width="30" height="40" viewBox="5 0 20 30" role="img" xmlns="http://www.w3.org/2000/svg"><title>Ethereum icon</title><path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" /></svg>
          </h1>
          <h6 className='text-muted'>pledged of {props.basicState.fundingGoals}</h6>

          <h1>0</h1>
          <h6 className='text-muted'>backers</h6>

          <h1>0</h1>
          <h6 className='text-muted'>Milestone reached of 4  </h6>

          <br />
          <br />
          <button className='col-12 btn btn-success rounded-0'>Back this project</button>
        </div>
      </div>

      {/* <div>
        <svg className=' container' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tag-fill" viewBox="0 0 16 16">
          <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1H2zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
        </svg>
        <span className='p-1 text-muted'>{props.basicState.catagory}</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tags" viewBox="0 0 16 16">
          <path d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z" />
          <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z" />
        </svg>
        <span className='p-1 text-muted'>{props.basicState.subCatagory}</span>
      </div> */}

      <br /><br /><br /><br />

      <div className=' d-flex justify-content-around'>
        <div className=' w-50 container font-italic'>
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



          <h5 className=' text-center'>Milestones</h5>
          <div className="card border-0" style={{ width: "21rem" }}>

            {props.addMiles.map((items, index) => <>{index === index1 ? <div className=' border-0' style={{ backgroundColor: "#F9F9F9" }}>
              <div className="card border-0" style={{ backgroundColor: "#F9F9F9" }}>
                <br />
                <div className=' d-flex justify-content-around'>
                  <h4 className=' text-monospace '>{items.title}</h4>
                </div>

                <div style={{ height: 10 }} className="progress rounde-0 ">
                  <div className="progress-bar rounded-0 " role="progressbar" style={{ width: items.amount + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{items.amount} %</div>
                </div>

                <div className="card-body">
                  <div className=' text-secondary text-center'>{items.desc}</div>

                </div>
              </div>

              <div>

              </div>
              <div className=' d-flex justify-content-between '>
                <button className=' border-0 btn bg-transparent rounded-0 btn-primary' onClick={() => { index1 == 0 ? setindex1(index1) : setindex1(index1 - 1) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="Blue" className="bi bi-arrow-left-short" viewBox="0 0 20 16">
                    <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                  </svg>
                </button>
                <button className='border-0 btn bg-transparent rounded-0 btn-primary btn btn-primary' onClick={() => { index1 === props.addMiles.length - 1 ? setindex1(index1) : setindex1(index1 + 1) }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="30" fill="Blue" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </button>
              </div>
              <br />
            </div> : null}
            </>)}

          </div>
        </div>
      </div>

      <br /><br />
    </>
  )
}

export default Preview