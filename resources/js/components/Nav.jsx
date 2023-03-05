import React from "react";
import { usePage } from "@inertiajs/react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "@inertiajs/react";

function NavBar() {
    // Se obtiene la autenticación del usuario de las props de la página
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
                        <Nav.Link 
                            href="/search" 
                         className="mx-2 bi bi-search">
                            Buscar
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="/publish"
                            className="mx-2 bi bi-car-front"
                        >
                            Publica un viaje
                        </Nav.Link>
                    </Nav.Item>
                    {/* Si el usuario no ha iniciado sesión, se muestra el botón de inicio de sesión y el de registro */}
                    {auth.user == null ? (
                        <>
                            <Nav.Item>
                                <Nav.Link
                                    href="/login"
                                    className="mx-2 bi bi-door-open"
                                >
                                    Inicio de sesión
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link
                                    href="/register"
                                    className="mx-2 bi bi-check-circle"
                                >
                                    Registrarme
                                </Nav.Link>
                            </Nav.Item>
                        </>
                    ) : null}
                     {/* Si el usuario ha iniciado sesión, se muestra el menú desplegable con opciones */}
                    {auth.user != null && (
                        <NavDropdown
                            title={auth.user.name}
                            id="navbarDropdownMenuLink"
                            className="mx-2"
                            align="end"
                        >
                            <NavDropdown.Item>
                                <Link
                                    href="/usertravels"
                                    as='button'
                                    className="bi bi-car-front"
                                >
                                    Mis viajes
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#" className="bi bi-chat">
                                Mensajes
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                href="#"
                                as='button'
                                className="bi bi-credit-card"
                            >
                                Pagos
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link
                                href="/profile"
                                as='button'                          
                                className="bi bi-person-circle"
                            >
                                Perfil
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link
                                    href="/logout"
                                    as='button'
                                    method="post"
                                    className="bi bi-door-closed"
                                >
                                    Cerrar sesión
                                </Link>
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
