import React from 'react'

function Milestones() {
    return (
        <>
            <div className=' text-center'>
                <h2>Set your project's Milestones</h2>
                <p className=' text-muted'>Milestones are tools used in project management to mark specific points along a project timeline.</p>
                <p className=' text-muted'>It will help your project investers to have some control over the funds they invested.</p>
            </div>
            <hr />
            <div className=' text-center'>
                <div class="progress bg-danger" style={{ height: "30px" }}>
                    <div class="progress-bar" style={{ width: "25%" }} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    {/* <div class="progress-bar bg-success" style={{width:"25%"}} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div> */}
                </div>
                <hr />
            </div>
            <div >
                <div className=' d-flex justify-content-center'>
                    <div className='form-group'>
                        <label className='col-4' htmlFor="titleMilestone">Title</label>
                        <input style={{ width: "30rem" }} className=' form-control' placeholder='Enter the title of Milestone' id="titleMilestone" type="text" />
                    </div>
                </div>

                <hr />

                <div className=' d-flex justify-content-center'>
                    <div className='form-group'>
                        <label className='col-4' htmlFor="titleMilestone">Description</label>
                        <textarea style={{ width: "30rem" }} className=' form-control' placeholder='Enter the title of Milestone Description' id="titleMilestone" type="text" />
                    </div>
                </div>
                <hr />
                <div className='d-flex justify-content-around'>
                    <div className=' container'>
                        <h4>Milestone Amount</h4>
                        <p className='text-muted col-9'>Set the amount of fund you need to complete this milestone.</p>
                        <p className=' text-danger'>Milestone cannot exceed total amount of funds.</p>

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
                <div className='d-flex justify-content-around'>
                    <div className=' container'>
                        <h4>Time</h4>
                        <p className='text-muted col-9'>Set time to complete this milestone. It's better to deliver to backers ahead of schedule than behind.</p>
                    </div>
                    <div className=' container'>
                        <div className="input-group ">

                            <input type="datetime-local" className="form-control col-9 text-center" />
                        </div>
                    </div>
                </div>

                <br />

                <div className=' d-flex justify-content-center'>
                    <div>
                        <button style={{ width: "30rem" }} className=' btn btn-success'>ADD</button>
                    </div>
                </div>
                <br />
            </div>

        </>
    )
}

export default Milestones