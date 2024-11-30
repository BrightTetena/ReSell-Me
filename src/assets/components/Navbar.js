import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../img/resellmeLogo.png';
import icon from '../img/Navlogo.png';
import img from '../img/toggleicon-removebg-preview (1).png';

function App() {
  const [isTyping, setIsTyping] = useState(false);
  const [expanded, setExpanded] = useState(false); // State for navbar expansion

  const handleInputChange = (e) => {
    setIsTyping(e.target.value.length > 0);
  };

  const handleLinkClick = () => {
    setExpanded(false); // Close navbar when a link is clicked
  };

  return (
    <div>
      <Navbar expand="lg" className={`navbar ${expanded ? 'scrolled' : ''}`} expanded={expanded}>
        <Container>
          <Navbar.Brand href="#logo">
            <img src={logo} alt="ResellMe Logo" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : 'expanded')} // Toggle navbar
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="home" smooth={true} duration={500} offset={-70} className="nav-link" onClick={handleLinkClick}>Dogs</Link>
              <Link to="features" smooth={true} duration={500} offset={-70} className="nav-link" onClick={handleLinkClick}>Blog</Link>
              <Link to="pricing" smooth={true} duration={500} offset={-70} className="nav-link" onClick={handleLinkClick}>About Us</Link>
            </Nav>

            <Nav style={{ marginLeft: '10px' }}>
              <Link to="support" smooth={true} duration={500} offset={-70} className="nav-link" onClick={handleLinkClick}>
                Support
                <img src={icon} alt="Support Icon" style={{ width: '16px', marginLeft: '8px' }} />
              </Link>
              <Link to="portal" smooth={true} duration={500} offset={-70} className="nav-link" onClick={handleLinkClick}>
                Portal
                <img src={icon} alt="Portal Icon" style={{ width: '16px', marginLeft: '8px' }} />
              </Link>
              <Link to="register" smooth={true} duration={500} offset={-70} className="nav-link" onClick={handleLinkClick}>
                Register
                <img src={icon} alt="Register Icon" style={{ width: '16px', marginLeft: '8px' }} />
              </Link>
              <img src={img} alt="Custom Icon" style={{ width: '40px', marginLeft: '10px', marginTop: '5px' }} />
            </Nav>

            <Form className="d-flex position-relative">
              <FaSearch
                className={`search-icon ${isTyping ? 'hide' : ''}`}
                style={{ left: '50px', top: '50%', transform: 'translateY(-50%)', color: '#555', position: 'absolute' }}
              />
              <Form.Control
                type="search"
                placeholder="Search"
                className={`me-2 search-input ${isTyping ? 'hide-placeholder' : ''}`}
                aria-label="Search"
                onChange={handleInputChange}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default App;
