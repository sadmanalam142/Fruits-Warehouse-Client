import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignout = () => {
        signOut(auth);
    }
    return (
        <Navbar style={{ backgroundColor: 'tomato' }} collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#collection">Fruits</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            user &&
                            <Nav.Link as={Link} to="/manage">
                                Manage Items
                            </Nav.Link>
                        }
                        {
                            user &&
                            <Nav.Link as={Link} to="/addItems">
                                Add Items
                            </Nav.Link>
                        }
                        {
                            user ?
                                <Nav.Link onClick={handleSignout} as={Link} to="/">
                                    Signout
                                </Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;