
import {Form, Button} from 'react-bootstrap';

function Login() {
  function handleLogin()
  {
    localStorage.clear();
    localStorage.setItem('usr', document.getElementById('usr').value);
  }
  console.log(localStorage.getItem('usr'))
  return (
    <Form className = 'yuha-form' method = 'post' onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicusername">
        <Form.Label>Username</Form.Label>
        <Form.Control id = 'usr' name="usr" type="username" placeholder="Enter username" />
        <Form.Text className="text-muted">
          We'll never share your username with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="psw" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check name = 'check' type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
