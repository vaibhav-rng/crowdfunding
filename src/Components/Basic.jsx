import { React, useState} from 'react'
import Web3 from 'web3'

const Basic = (props) => {

    const catagory = [{
        label: "web",
        value: "web",
    },
    {
        label: "Ai",
        value: "Ai",
    }]

    const subcatagory = [{
        label: "backend",
        value: "backend",
    },
    {
        label: "Data mining",
        value: "Data mining",
    },
    ]





    return (
        <>
            <form>
                {/* <button onClick={(e) => { props.setBasicState({ name: "vaibhav" }); e.preventDefault() }}>vaibhav</button> */}
                <div className='d-flex justify-content-around' >
                    <div className=' container'>
                        <h4>Enter the Basic Information</h4>
                        <p className='text-muted col-9'>Write a clear, brief title and subtitle to help people quickly understand your project.
                            Both will appear on your project and pre-launch pages.

                            Potential backers will also see them if your project appears on category pages, search results, or in emails we send to our community.</p>
                    </div>
                    <div className='container '>
                        <div className='form-group row'>
                            <label className='col-4' htmlFor="title" >Title</label>
                            <input value={props.basicState.title} name="title" onChange={(e) => props.handleChanges(e.target.value,e.target.name)} className=' col-8 form-control' placeholder='Enter the title' type="text" id="title" />
                        </div>
                        
                    
                        <div className='form-group row'>
                            <label className='col-4' htmlFor="decription">Subtitle</label>
                            <textarea rows={3} value={props.basicState.subTitle} name="subTitle" onChange={(e) => props.handleChanges(e.target.value,e.target.name)}  className='col-8 form-control' placeholder='Enter the short description' id="decription" type="text" />
                        </div>
                        {/* <div className='form-group row'>
                            <label className='col-4' htmlFor=""></label>
                            <select value={props.basicState.catagory} onChange={(e) => props.handleChanges(e.target.value,e.target.name)}  name="catagory" className="col-4 form-control">
                                {catagory.map((sub1,index) => (<option key={index} value={sub1.value}>{sub1.label}</option>))}
                            </select>
                            <select value={props.basicState.subCatagory} onChange={(e) => props.handleChanges(e.target.value,e.target.name)}  name="subCatagory" className="col-4 form-control">
                                {subcatagory.map((sub,index) => (<option key={index} value={sub.value}>{sub.label}</option>))}
                            </select>
                        </div> */}
                    </div>

                </div>

                <hr />

                <div className='d-flex justify-content-around'>
                    <div className=' container'>
                        <h4 className=''>Project image</h4>
                        <p className='text-muted col-9'>Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.</p>
                    </div>
                    <div className="container input-group">
                        <input type="file"  onChange={(e) => props.imageHandle(e.target.files[0])} name="test" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
                    </div>
                </div>

                <hr />

                <div className='d-flex justify-content-around'>
                    <div className=' container'>
                        <h4>Funding goals</h4>
                        <p className='text-muted col-9'>Set an achievable goal that covers what you need to complete your project.

                            Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.</p>
                    </div>
                    <div className=' container'>
                        <div className="input-group ">
                            <select className=" col-3 form-select" id="inputGroup-sizing-sm">
                                <option value="">etc</option>
                            </select>
                            <input value={props.basicState.fundingGoals} onChange={(e) => props.handleChanges(e.target.value,e.target.name)}  name="fundingGoals" type="number" className="form-control col-9" />
                        </div>
                    </div>
                </div>
                <hr />
            </form>
        </>
    )
}

export default Basic