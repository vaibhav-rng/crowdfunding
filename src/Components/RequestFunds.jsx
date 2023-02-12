import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useParams } from "react-router";
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




const RequestFunds = () => {

    const [open, setOpen] = useState(false)
    const [milestone, setMilestone] = useState([])
    const [reqData, setReqData] = useState({ request: "", myFile: "", comment: "" })

    let { id } = useParams();

    const postInvestor = () => {
        axios.put(`http://localhost:8000/request/${id}`, {
            comment: reqData.comment,
            request: reqData.request,
            myFile: reqData.myFile,
            status: 2
        })
            .then((response) => {
                window.location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }


    const fileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }

    const imageHandle = async (value) => {
        const base64 = await fileToBase64(value)
        setReqData({ ...reqData, myFile: base64 })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/projects/${id}`)
            .then((response) => {
                if (parseInt(response.data.rget.fundingGoals) <= response.data.rget.total) {
                    setMilestone(response.data.rget.milestones)
                }
                else {
                    setMilestone(false)
                }
            })
            .catch((err) => {
                console.log(err)
            })

    }, []);

    return (
        <div>
            <h2 className=' text-center font-weight-light'>Milestones</h2>
            <br />
            {milestone === false ? <h2 className=' text-center text-monospace'>Funding goals are not met :( </h2> :
                milestone.map((items, key) =>
                    <div className=' d-flex justify-content-center'>
                        <button style={{ backgroundColor: "#E8E8E8", width: 1000, height: 60 }} className='rounded-0  border-0 mb-3 text-monospace  btn' onClick={() => { setOpen(true); setReqData({ ...reqData, request: key }) }}>{items.title}</button>
                        {items.status == 2 ?
                            <button className=' col-2 mb-3 btn btn-warning rounded-0' >Pending</button>
                            : null}
                        {items.status == 3 ?
                            <button className=' col-2 mb-3 btn btn-danger rounded-0' >Failed</button>
                            : null}
                        {items.status == 1 ?
                            <button className=' col-2 mb-3 btn btn-success rounded-0' >Passed</button>
                            : null}

                        {items.status == undefined || items.status == 0 ?
                            <button className=' col-2 mb-3 btn btn-dark rounded-0' >Not Requested</button>
                            : null}

                    </div>

                )}
            <div>
                <Modal
                    open={open}
                    onClose={() => { setOpen(false); }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <input onChange={(e) => imageHandle(e.target.files[0])} type="file" className='  rounded-0 col-12 btn btn-success' />
                        <textarea value={reqData.comment} onChange={(e) => setReqData({ ...reqData, comment: e.target.value })} className=' form-control' placeholder='Add a comment' type="text" />
                        <br />
                        <button onClick={() => { setOpen(false); postInvestor() }} className=' col-4 btn btn-danger'>Done</button>
                    </Box>
                </Modal>
            </div>


        </div>
    )
}

export default RequestFunds