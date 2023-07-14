import React from "react";
import Navigation from "./Navigation.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import './AddTask.css';
  
function AddTask({onAdd,data,updateId}){
  const [name,setName] = useState('')
  const [phNum, setPhNum] = useState('')
  const [ table, setTable] = useState('')
  const [ date, setDate ] = useState('')
  const [peopleCount, setCapacity] = useState('')

  const onSubmit = (e)=>{
      e.preventDefault()
      

      onAdd({name,phNum,table,peopleCount,date})
      updateId(table)
      alert('Booked Successfully...')
      setName('')
      setPhNum('')
      setTable('')
      setDate('')
      setCapacity('')
   }
  function checkAvailability(availability, id) {
      if (availability === true) {
          return (
            <Form.Check inline id={id} value={id} name="table" type="radio" label={`Table ${id}`} onChange={(e)=>setTable(e.target.value)}/>
          )
      }
      else{
          return(
            <Form.Check inline disabled type="radio" id={id} label={`Table ${id}`}/>
          )
      }
  } 

  return(
      <div class="wholediv">
        <Navigation/>
        <Container>
        <Container id='cl' fluid style={{border:"1px grey",borderRadius:"10px",width:"30rem"}}>
        <h1 id='cl2' style={{textAlign:"center",paddingTop:"10%",color:"black"}}>Book Table</h1>
          <Card style={{ border:'1px solid grey',margin:"10%",borderRadius:"10px",padding:"20px"}}>

          <Form onSubmit={onSubmit}>
    <Row className="mb-3">
      <Form.Group as={Row} >
          <Form.Label htmlFor="">Name</Form.Label>
          <Form.Control required type="text"  placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)}/>
      </Form.Group>

      <Form.Group as={Row} >
          <Form.Label htmlFor="">Phone Number</Form.Label>
          <Form.Control required type="text" placeholder="Enter Phone Number" value={phNum} onChange={(e)=> setPhNum(e.target.value)}/>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Row}>
        <Form.Label>No. of peoples:</Form.Label>
        <Form.Control required type="text" placeholder="Enter people count" value={peopleCount} onChange={(e)=> setCapacity(e.target.value)}/>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label>Select Date:</Form.Label>
        <Form.Control required type="date"  value={date} onChange={(e)=> setDate(e.target.value)}/>
      </Form.Group>

      
      <Form.Label>Select Table</Form.Label>
        <Form.Group>
        {
           data.map((data) =>  checkAvailability(data.availablity,data.id))
        }
      </Form.Group>

    </Row>

    <Form.Group id="btn">
    <Button variant="outline-secondary" type='submit'  id="btn3">
      Book
    </Button>
    </Form.Group>
  </Form>
  </Card>
  </Container>
  </Container>
      </div>
  )
  }

export default AddTask;
