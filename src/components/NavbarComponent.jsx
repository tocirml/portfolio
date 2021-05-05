import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';

const NavbarComponent = ({ location }) => {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      variant="dark"
      className="justify-content-end"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="mb-3" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="ml-auto text-right"
          variant="pills"
          activeKey={location.pathname}
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/education">Education</Nav.Link>
          <Nav.Link href="/experience">Experience</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavbarComponent.propTypes = {
  location: PropTypes.string.isRequired,
};

export default NavbarComponent;
