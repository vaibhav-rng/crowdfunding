import React, { useState, useEffect } from 'react'
import Header from './Header'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import axios from 'axios';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
}




const Requests = () => {

    const [open, setOpen] = useState(false)
    const [projectData, setProjectData] = useState([])
    const [model, setModel] = useState({ photo: "", comment: "", vote: "", id: "" })


    const onclickHandler = (value) => {
        axios.put("http://localhost:8000/acceptRequests",
            {
                value: value,
                id: model.id
            }).then(() => {
                window.location.reload()
            }).catch(() => {
                alert("NOPE :(")
            })
    }


    useEffect(() => {
        axios.get(`http://localhost:8000/acceptRequests`)
            .then((response) => {
                setProjectData(response.data)

            }).then(console.log(projectData)
            )
            .catch((err) => {
                console.log(err)

            })
    }, []);

    return (
        <>

            <Header />
            <h2 className=' text-center font-weight-light mb-4'>Milestones</h2>

            <div className=' d-flex justify-content-between'>
                <div style={{ backgroundColor: "#E8E8E8", width: 1500, height: 35 }} className='rounded-0  d-flex justify-content-between border-0 mb-3 text-monospace  btn' >
                    <div className='ml-5'>Campaign name</div>
                    <div className=' ml-5'> Milestone </div>
                    <div className=' ml-5'>  Details</div>
                    <div className=' mr-5' > Request</div>

                </div>
            </div>
            <br />
            {projectData.map((item, key) =>
                <div>
                    <div className=' d-flex justify-content-center'>
                        <div style={{ backgroundColor: "#E8E8E8", width: 1000, height: 60 }} className='rounded-0 d-flex justify-content-between  border-0 mb-3 text-monospace  btn' onClick={() => { setOpen(true); }}>
                            <div className=' ml-5'>{item.title}</div>
                            <div className=' ml-5'>{item.milestone.title}</div>
                            <div></div>
                        </div>

                        <button className=' col-2 mb-3 btn btn-primary rounded-0' >view</button>
                        <button onClick={() => { setModel({ comment: item.req.comment, myFile: item.req.myFile, id: item.id }); setOpen(true) }} className=' col-2 mb-3 btn btn-dark rounded-0' >
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                            </svg>
                        </button>

                    </div>






                    <Modal
                        open={open}
                        onClose={() => { setOpen(false); }}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <img type="file" style={{ width: 350, height: 250 }} src={model.myFile} className='  rounded-0 col-12  mb-2' />
                            <p style={{ height: 200, width: 350 }} className='rounded-0 form-control text-center'>{model.comment}
                            </p>
                            <br />
                            <button onClick={() => { onclickHandler(1); setOpen(false); }} className=' col-4 btn btn-danger ml-2 mr-5'>Accept </button>
                            <button onClick={() => { onclickHandler(2); setOpen(false); }} className=' col-4 btn ml-5 btn-success'>Decline</button>
                        </Box>
                    </Modal>


                </div>
            )}

        </>
    )
}

export default Requests