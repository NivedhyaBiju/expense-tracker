import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Row } from 'react-bootstrap';
import { addExpense } from '../../services/allApis';


function Add() {

    const [inputs, setInputs] = useState({
        date: "",
        title: "",
        description: "",
        amount: ""
    })

    const setDatas = (e) => {
        let { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    console.log(inputs);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const addData = async()=>{
        const {date,title,description,amount} = inputs
        if(date=="" || title=="" || description=="" || amount==""){
            alert("please fill all details")
          }
          else{
            const out= await addExpense(inputs)
            console.log(out);
            if(out.status>=200 && out.status<300){
              alert("Data added successfully")
              handleClose()
            }
            else{
              alert("Data adding failed")
            }
          }
        }

    return (
        <div>
            <div className="container">
                <h1>EXPENSE TRACKER</h1>
                <button onClick={handleShow}>Add New +</button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className='p-3'>
                        <Form.Control
                            name='date'
                            onChange={(e) => setDatas(e)}
                            type="text"
                            placeholder="Date"
                            className='p-2'
                        />
                    </Row>
                    <Row className='p-3'>
                        <Form.Control
                            name='title'
                            onChange={(e) => setDatas(e)}
                            type="text"
                            placeholder="Title"
                            className='p-2'
                        />
                    </Row>
                    <Row className='p-3'>
                        <Form.Control
                            name='description'
                            onChange={(e) => setDatas(e)}
                            type="text"
                            placeholder="Description"
                            className='p-2'
                        />
                    </Row>
                    <Row className='p-3'>
                        <Form.Control
                            name='amount'
                            onChange={(e) => setDatas(e)}
                            type="text"
                            placeholder="Amount"
                            className='p-2'
                        />
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addData}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Add
