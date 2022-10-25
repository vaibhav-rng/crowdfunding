import { React, useState} from 'react'


const Basic = (props) => {

    const catagory = [{
        label: "gaming",
        value: "gaming",
    },
    {
        label: "Apple",
        value: "apple",
    }]

    const subcatagory = [{
        label: "action",
        value: "action",
    },
    {
        label: "Apple",
        value: "apple",
    },
    ]

    const [milestoneState, milestoneSetstate] = useState([{
        title: "sss",
        description: "sss"
    }]);



    const onChangeHandle = (e, index) => {
        const { name, value } = e.target
        const list = [...milestoneState]
        list[index][name] = value

        milestoneSetstate(list)
    }


    const handleInput = (e) => {
        e.preventDefault();
        milestoneSetstate([...milestoneState, { title: "", description: "" }])
    }

    const handleDelete = (e, index) => {
            
        const list1 = [...milestoneState]
        list1.splice(index, 1)
        milestoneSetstate(list1)
    }


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
                            <textarea value={props.basicState.subTitle} name="subTitle" onChange={(e) => props.handleChanges(e.target.value,e.target.name)}  className='col-8 form-control' placeholder='Enter the short description' id="decription" type="text" />
                        </div>
                        <div className='form-group row'>
                            <label className='col-4' htmlFor=""></label>
                            <select value={props.basicState.catagory} onChange={(e) => props.handleChanges(e.target.value,e.target.name)}  name="catagory" className="col-4 form-control">
                                {catagory.map((sub1,index) => (<option key={index} value={sub1.value}>{sub1.label}</option>))}
                            </select>
                            <select value={props.basicState.subCatagory} onChange={(e) => props.handleChanges(e.target.value,e.target.name)}  name="subCatagory" className="col-4 form-control">
                                {subcatagory.map((sub,index) => (<option key={index} value={sub.value}>{sub.label}</option>))}
                            </select>
                        </div>
                    </div>

                </div>

                <hr />

                <div className='d-flex justify-content-around'>
                    <div className=' container'>
                        <h4 className=''>Project image</h4>
                        <p className='text-muted col-9'>Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.</p>
                    </div>
                    <div className="container input-group">
                        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" />
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
                                <option value="">btc</option>
                                <option value="">etc</option>
                                <option value="">doge</option>
                                <option value="">enu-shiba</option>
                            </select>
                            <input value={props.basicState.fundingGoals} onChange={(e) => props.handleChanges(e.target.value,e.target.name)}  name="fundingGoals" type="number" className="form-control col-9" />
                        </div>
                    </div>
                </div>
                <hr />
{/* 
                <div className='d-flex justify-content-around'>
                    <div className='container'>
                        <h4>Milestones</h4>
                        <p className='text-muted col-9'>Set an achievable goal that covers what you need to complete your project.

                            Funding is all-or-nothing. If you don’t meet your goal, you won’t receive any money.</p>
                    </div>
                    <div className='container'>
                        {milestoneState.map((item, index) => {
                            return (
                                <div key={index} > <br />
                                    <div className="input-group ">
                                        <input onChange={(e) => onChangeHandle(e, index)} name="title" value={item.title} type="text" className="form-control" />
                                        {index !== 0 ? <button onClick={(e) => handleDelete(e, index)} className=' btn btn-danger'>Remove Milestone</button> : null}
                                    </div>
                                    <textarea onChange={(e) => onChangeHandle(e, index)} name="description" value={item.description} className='form-control' placeholder='Enter the Discription' id="decription" type="text" />
                                    {index === milestoneState.length - 1 ? <button onClick={handleInput} className=' col-12 btn btn-primary'>Add Milestone</button> : null}

                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr />
                {milestoneState.title} */}

            </form>
        </>
    )
}

export default Basic