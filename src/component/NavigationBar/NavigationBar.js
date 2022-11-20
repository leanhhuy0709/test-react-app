import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState} from 'react'


function NavigationBar() {
    const [data, setData] = useState(null);
      React.useEffect(() => {
      fetch("/user")
        .then((res) => res.json())
        .then((data) => {setData(data.find((e) => e['username'] === localStorage.getItem('usr')))});
      }, []);
    
    return (
    <Navbar bg="primary" expand="lg">
        <Container>
            <Navbar.Brand href="/">Yuha-Web</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/project">Project</Nav.Link>
                <Nav.Link href="/activity">Activity</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link>{data?show(data.fname) + ' ' + show(data.mname) + ' ' + show(data.lname):''}</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/user">User Info</NavDropdown.Item>
                <NavDropdown.Item href="/login" onClick = {()=>(localStorage.removeItem('usr'))}>
                    {localStorage.getItem('usr') == null?'Login' : 'Logout'}
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    );
}
function show(e)
{
  if (e && e !== 'null' && e !== undefined)
    return e;
  return '';
}

export default NavigationBar;