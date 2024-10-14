import React, { PropsWithChildren, useState } from "react";
import { Button, Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Layout({ children }: PropsWithChildren) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar style={{ backgroundColor: "var(--red)" }} fixed="bottom">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav className="justify-content-center">
          <Nav.Item>Home</Nav.Item>

          <Nav.Item>Glossar</Nav.Item>

          <Nav.Item>
            <img onClick={handleShow} src="/3-Punkte-NavBar.svg"></img>
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                  Einstellungen
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>Mach ich nachher :D</Offcanvas.Body>
            </Offcanvas>
          </Nav.Item>
        </Nav>
      </Navbar>
      {children}
    </>
  );
}
