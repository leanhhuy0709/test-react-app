import {Container, Dropdown, Button} from 'react-bootstrap';
import React, { useState } from 'react';

function Group() {
  const [data, setData] = useState([]);
    React.useEffect(() => {
    fetch("/group")
      .then((res) => res.json())
      .then((data) => {setData(data.filter((e) => e.PID === localStorage.getItem('project_id')))});
    }, []);
  console.log(localStorage.getItem('project_id'));
  var tmp;
  var List = [];
  if (localStorage.getItem('usr') == null)
    return (<div>Please login to visit this page</div>);
  for (let i = 0; i < data.length; i++)
  {
    tmp = (
      <div className='yuha-big-box'>
        <Container className = 'yuha-box border border-dark rounded yuha-center'>
            <p>Project {data ? data[i].name:'None'}</p>
            <p>Group: {data ? data[i].fname + ' ' + data[i].mname + ' ' + data[i].lname:'None'}</p>
            <p>Description: {data ? data[i].description : 'None'}</p>
            <p>Cost: {data ? data[i].cost:'None'}</p>
            <p>Cost Efficiency: {data ? data[i].cost_efficiency:'None'}</p>
            <Button variant="info" className = 'yuha-margin-left-right'>View</Button>
            <Button variant="info" className = 'yuha-margin-left-right'>Remove</Button>
        </Container>
      </div>);
    List.push(tmp);
  }
  return React.createElement('div', null, List);
}

export default Group;
