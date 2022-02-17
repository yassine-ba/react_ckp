import logo from './logo.svg';
import './App.css';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img from './imageInSrc.jpg'
function App() {
  return (
    <div className="App">
      <>
  <Form.Label style={{color:'red' , backgroundColor:'yellowgreen'}} htmlFor="inputPassword5">Password</Form.Label>
  <Form.Control
    type="password"
    id="inputPassword5"
    aria-describedby="passwordHelpBlock"
  />
  <Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text>
</>
<div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 class="title red">Your name here</h1>

<br />

<img src={img} />

<br />

<img src="imageInPublic.jpg" />

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
