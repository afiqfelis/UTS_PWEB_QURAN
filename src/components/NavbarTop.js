import { Container, Navbar, Nav } from "react-bootstrap";
import { FiBookOpen } from "react-icons/fi";
import { Link } from "react-router-dom";
import './NavbarTop.css';

function NavbarTop() {
    return (
        <>
            <Navbar className="nav-bg" variant="dark" fixed="top">
                <Container>
                <Navbar.Brand className="nav-brand"><Link to="/"><FiBookOpen />&nbsp;&nbsp;Qur'an Web</Link></Navbar.Brand>
                    <Nav className="nav-list ms-auto">
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarTop;