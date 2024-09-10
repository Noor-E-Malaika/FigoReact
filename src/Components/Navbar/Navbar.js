import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.png';
import icons from '../../assets/icons.jpeg';
import './Navbar.css';

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Collapse >
          <Nav className="nav-links">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">Menu</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#signin">Sign In</Nav.Link>
            <img src={icons} alt="Icons" className="nav-icons" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
