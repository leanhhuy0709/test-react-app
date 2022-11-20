import {Container, Button, Modal, Form} from 'react-bootstrap';
import React, { useState } from 'react';



function Project() {
  const [data, setData] = useState(null);
    React.useEffect(() => {
    fetch("/project")
      .then((res) => res.json())
      .then((data) => {setData(data)});
    }, []);
  const [data2, setData2] = useState([]);
  React.useEffect(() => {
  fetch("/user")
    .then((res) => res.json())
    .then((data2) => {setData2(data2.find((e) => e['username'] === localStorage.getItem('usr')))});
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function viewProject(i)
  {
    if(data)
      localStorage.setItem('project_id', data[i].PID);
  }
  var tmp;
  var List = [];
  if (localStorage.getItem('usr') == null)
    return (<div>Please login to visit this page</div>)
  if (data){ //Khong dong bo nen se ra loi neu data chua nhan dc
  for (let i = 0; i < data.length; i++)
  {
    tmp = (
      <div className='yuha-big-box'>
        <Container className = 'yuha-box border border-dark rounded yuha-center'>
            <p>Project {data ? data[i].name:'None'}</p>
            <p>Project ID {data ? data[i].pid:'None'}</p>
            <p>Leader: {data ? data[i].fname + ' ' + data[i].mname + ' ' + data[i].lname:'None'}</p>
            <p>Description: {data ? data[i].description : 'None'}</p>
            <p>Cost: {data ? data[i].cost:'None'}</p>
            <p>Cost Efficiency: {data ? data[i].cost_efficiency:'None'}</p>
            <Button variant="info" className = 'yuha-margin-left-right' onClick = {viewProject(i)}>View</Button>
            <Button variant="info" className = 'yuha-margin-left-right'>Remove</Button>
        </Container>
      </div>);
    List.push(tmp);
  }
  }
  return React.createElement('div', null,
    (<div className='yuha-center yuha-margin-top-bottom'><Button onClick={handleShow}>Add Project</Button></div>),
    (<Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form method = 'post'>
        <Form.Group show = {false} className="mb-3" controlId="employee_id">
          <Form.Label>ID</Form.Label>
          <Form.Control name="employee_id" type="text" placeholder="Enter ID" value = {data2.id}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="project_pid">
          <Form.Label>PID</Form.Label>
          <Form.Control name="project_pid" type="text" placeholder="Enter PID" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="project_name">
          <Form.Label>Name</Form.Label>
          <Form.Control name="project_name" type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="project_description">
          <Form.Label>Description</Form.Label>
          <Form.Control name="project_description" type="text" placeholder="Enter Description" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="project_cost">
          <Form.Label>Cost</Form.Label>
          <Form.Control name="project_cost" type="text" placeholder="Enter Cost" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="project_cost">
          <Form.Label>Cost Efficiency</Form.Label>
          <Form.Control name="project_cost_efficiency" type="text" placeholder="Enter Cost Efficiency" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Modal.Body>
    </Modal>),
    List);
}



export default Project;
