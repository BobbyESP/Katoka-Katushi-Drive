import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"


export default function NavbarComponent() {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="">
        Katushi & Katoka Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Perfil
        </Nav.Link>
        <Nav.Link as={Link}>
        <a href="https://console.firebase.google.com/u/0/project/drive-personal-865ae/overview">
          Consola Firebase (Desarrollo)
        </a>
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
