import React from 'react'

const Story = (props) => {
    return (
        <>
            <div className='text-center'>
                <h1 className='h1'>Introduce your project</h1>
                <p className=' text-muted'>Tell people why they should be excited about your project. Get specific but be clear and be brief.</p>
            </div>
            <hr />
            <div className='container'>
                <h4>Project description</h4>
                <p style={{ width: "20rem" }} className=' text-muted'>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are. Your description should tell backers everything they need to know. If possible, include images to show them what your project is all about and what rewards look like. </p>
                <textarea value={props.basicState.story} onChange={(e)=>{props.handleChanges(e.target.value,e.target.name)}} name="story" className=' text-center' id="" cols="150" rows="15" placeholder='Write about your project like you are explaining to your friend.'></textarea>
            </div>
            <hr />
            <div className=' container d-flex justify-content-between'>
                <div className=''>
                    <h4>Risks and challenges</h4>
                    <p style={{ width: "20rem" }} className=' text-muted'>Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it.</p>
                </div>

                <div className=''>
                    <textarea value={props.basicState.risks} onChange={(e)=>{props.handleChanges(e.target.value,e.target.name)}} name="risks" id="" cols="70" rows="8"></textarea>
                </div>
            </div>
        </>
    )
}

export default Story