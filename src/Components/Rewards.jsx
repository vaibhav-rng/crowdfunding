import React from 'react'

function Rewards() {
  return (
    <>
      <div className=' text-center'>
        <h2>Add a reward</h2>
        <p className=' text-muted'>Offer tangible or intangible things that bring backers closer to your project.</p>
      </div>


      <div >
        <div className=' d-flex justify-content-center'>
          <div className='form-group'>
            <label className='col-4' htmlFor="reward">Title</label>
            <input style={{ width: "30rem" }} className=' form-control' placeholder='Enter the title of reward' id="reward" type="text" />
          </div>
        </div>

        <hr />

        <div className=' d-flex justify-content-center'>
          <div className='form-group'>
            <label className='col-4' htmlFor="rewardDes">Description</label>
            <textarea style={{ width: "30rem" }} className=' form-control' placeholder='Enter the title of reward Description' id="rewardDes" type="text" />
          </div>
        </div>
        <hr />
        <div className='d-flex justify-content-around'>
          <div className=' container'>
            <h4>Reward Amount</h4>

          </div>
          <div className=' container'>
            <div className="input-group ">
              <select className=" col-3 form-select" id="inputGroup-sizing-sm">
                <option value="">btc</option>
                <option value="">etc</option>
              </select>
              <input type="text" className="form-control col-9" />
            </div>
          </div>
        </div>
        <hr />

        <div className=' d-flex justify-content-center'>
          <div>
            <h4 className=' text-center'>Shipping</h4>
            <div>
              <input style={{ display: "none" }} type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked />
              <label style={{ width: "1000px" }} class="btn btn-outline-success" for="success-outlined">Ships to anywhere in the world</label>
            </div>
            <div>
              <input style={{ display: "none" }} type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" />
              <label style={{ width: "1000px" }} class="btn btn-outline-success" for="danger-outlined">Local pickup, event, or service (no shipping)  </label>
            </div>
            <div>
              <input style={{ display: "none", width: "100px" }} type="radio" class="btn-check" name="options-outlined" id="danger-outlined" autocomplete="off" />
              <label style={{ width: "1000px" }} class="btn btn-outline-success" for="danger-outlined">Digital reward (no shipping)</label>
            </div>
          </div>
        </div>

        <hr />

        <div className='d-flex justify-content-around'>
          <div className=' container'>
            <h4>Voting right</h4>

          </div>
          <div className=' container'>
            <div className="input-group ">
              <select className=" col-3 form-select" id="inputGroup-sizing-sm">
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
              <input type="number" className="form-control col-9" />
            </div>
          </div>
        </div>

        <br />
        <br />


        <div className=' d-flex justify-content-center'>
          <div>
            <button style={{ width: "30rem" }} className=' btn btn-success'>Add Reward</button>
          </div>
        </div>
        <br />
      </div>
    </>
  )
}

export default Rewards