
import {Container, Button, Modal, Form} from 'react-bootstrap';
import React, {useState} from 'react';

function Activity() {
  var tmp;
  const [data, setData] = useState(null);
    React.useEffect(() => {
    fetch("/activity")
      .then((res) => res.json())
      .then((data) => {setData(data)});
    }, []);
  

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  var List = [];
  if (localStorage.getItem('usr') == null)
    return (<div>Please login to visit this page</div>)
  if (data)
  for (let i = 0; i < data.length; i++)
  {
    tmp = (
      <Container className = 'yuha-box border border-dark rounded yuha-center'>
        <p>Project {data ? data[i].name:'None'}</p>
        <p>Project ID {data ? data[i].pid:'None'}</p>
        <p>Group {data ? data[i].gnumber : 'None'}</p>
        <p>Date: {data ? data[i].date.substr(0, 10) : 'None'}</p>
        <p>Hour: {data ? data[i].hour : 'None'}</p>
      </Container>);
    List.push(tmp);
  }
  return React.createElement('div', null,
    (<div className='yuha-center yuha-margin-top-bottom'><Button onClick={handleShow}>Add Activity</Button></div>), 
    (<Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form method = 'post'>
        <Form.Group className="mb-3" controlId="activity_pid">
          <Form.Label>Project PID</Form.Label>
          <Form.Control name="activity_pid" type="text" placeholder="Enter PID" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="activity_group_number">
          <Form.Label>Group Number</Form.Label>
          <Form.Control name="activity_group_number" type="text" placeholder="Enter Group Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="activity_aid">
          <Form.Label>AID</Form.Label>
          <Form.Control name="activity_aid" type="text" placeholder="Enter AID" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="activity_date">
          <Form.Label>Date</Form.Label>
          <Form.Control name="activity_date" type="text" placeholder="Enter Date (yyyymmdd)" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="activity_hour">
          <Form.Label>Hour</Form.Label>
          <Form.Control name="activity_hour" type="text" placeholder="Enter Hour" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Modal.Body>
    </Modal>),
    List);
}

export default Activity;