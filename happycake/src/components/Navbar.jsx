import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAddressBook,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="bg-red" data-bs-theme="dark">
      <Container>
        <Nav>
          <Link
            className="text-white ms-3 text-decoration-none star-line"
            to="/home"
          >
            <FontAwesomeIcon icon={faHome} className="mr-2 icon" />
            <h6 className="m-0 align-self-center">Home</h6>
          </Link>
          <Link
            className="text-white ms-3 text-decoration-none star-line"
            to="/contacto"
          >
            <FontAwesomeIcon icon={faAddressBook} className="mr-2 icon" />
            <h6 className="m-0 align-self-center">Contacto</h6>
          </Link>
        </Nav>
        <Navbar.Brand to="#home" className="endLogo">
          <h3>
            <FontAwesomeIcon icon={faShop} className="mr-2 iconLog" />
          </h3>
          <h3>Happy Cake </h3>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
