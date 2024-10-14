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

        <Nav className="w-100" fill variant="pills" justify>
          <Nav.Item>
            <Nav.Link as="div" className="d-flex justify-content-center align-items-center">
              <img
                onClick={handleShow}
                src="Home-NavBar.svg"
                alt="Glossar"
                style={{ cursor: "pointer", width: "20px" }}
              />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as="div" className="d-flex justify-content-center align-items-center">
              <img
                onClick={handleShow}
                src="Woerterbuch-NavBar.svg"
                alt="Glossar"
                style={{ cursor: "pointer", width: "20px" }}
              />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as="div" className="d-flex justify-content-center align-items-center">
              <img
                onClick={handleShow}
                src="3-Punkte-NavBar.svg"
                alt="Menu"
                style={{ cursor: "pointer", width: "20px" }}
              />
            </Nav.Link>
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
      <div style={{ position: "fixed", display: "block", content: "", overflow: "hide", top: "0px", left: "0px", height: "calc(100vh - 51px)", width: "100vh", margin: "0", padding: "0" }}>
        {children}
      </div>
    </>
  );
}
