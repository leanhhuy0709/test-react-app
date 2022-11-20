
import {Container, Table} from 'react-bootstrap';
import React, {useState} from 'react';

function User() {
  const [data, setData] = useState(null);
    React.useEffect(() => {
    fetch("/user")
      .then((res) => res.json())
      .then((data) => {setData(data.find((e) => e['username'] === localStorage.getItem('usr')))});
    }, []);
  function getJob()
  {
    if(data.analyst)
      return 'Analyst';
    if(data.manager)
      return 'Manager';
    if(data.designer)
      return 'Designer';
    if(data.worker)
      return 'Worker';
    return 'None';
  }
  if (localStorage.getItem('usr') == null)
    return (<div>Please login to visit this page</div>)
  return (
    <Container className = 'border border-dark rounded yuha-margin'>
        <Table>
            <thead>
              <tr><td>User Infomation</td><td></td></tr>
            </thead>
            <tbody>
              <tr><td>Name</td><td> {data?show(data.fname) + ' ' + show(data.mname) + ' ' + show(data.lname):'None'} </td></tr>
              <tr><td>ID</td><td> {data ? data.id : 'None'}</td></tr>
              <tr><td>SSN</td><td> {data ? data.ssn : 'None'}</td></tr>
              <tr><td>MID</td><td> {data ? data.mid : 'None'}</td></tr>
              <tr><td>Job</td><td> {data ? getJob() : 'None'}</td></tr>
              <tr><td>Date of birth</td><td> {data ? data.bdate.substring(0, 10) : 'None'}</td></tr>
              <tr><td>Address</td><td> {data ? data.address : 'None'}</td></tr>
              <tr><td>BioID</td><td> {data ? data.bioid : 'None'}</td></tr>
              <tr><td>Username</td><td> {data ? data.username : 'None'}</td></tr>
            </tbody>
        </Table>
    </Container>
  );
}



function show(e)
{
  if (e && e !== 'null' && e !== undefined)
    return e;
  return '';
}

export default User;