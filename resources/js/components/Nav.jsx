import React from "react";
import { usePage } from "@inertiajs/react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
    const { auth } = usePage().props;

    return (
      
        <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
            <Navbar.Brand href="/">MoviFP Sostenible</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNavDropdown" />
            <Navbar.Collapse id="navbarNavDropdown">
                <Nav className="ms-auto">
                    <Nav.Item>
                        <Nav.Link href="/" className="mx-2 active bi bi-house">
                            Inicio
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#" className="mx-2 bi bi-search">
                            Buscar
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#" className="mx-2 bi bi-car-front">
                            Publica un viaje
                        </Nav.Link>
                    </Nav.Item>
                    {auth.user == null && (
                        <>
                            <Nav.Item>
                                <Nav.Link
                                    href="login"
                                    className="mx-2 bi bi-door-open">
                                    Inicio de sesión
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href="register"
                                    className="mx-2 bi bi-check-circle">
                                    Registrarme
                                </Nav.Link>
                            </Nav.Item>
                        </>
                    )}
                    {auth.user != null && (
                        <NavDropdown
                            title={auth.user.name}
                            id="navbarDropdownMenuLink"
                            className="mx-2 bi bi-person-circle">
                            <NavDropdown.Item
                                href="#"
                                className="bi bi-car-front">
                                Mis viajes
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" className="bi bi-chat">
                                Mensajes
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#"
                                className="bi bi-credit-card">
                                Pagos
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#"
                                className="bi bi-person-circle">
                                Perfil
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                href="logout"
                                className="bi bi-door-closed">
                                Cerrar sesión
                            </NavDropdown.Item>
                        </NavDropdown>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;

if (document.getElementById("nav")) {
    const Index = ReactDOM.createRoot(document.getElementById("nav"));

    Index.render(
        <React.StrictMode>
            <Nav />
        </React.StrictMode>
    );
}
